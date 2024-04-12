import React from "react";
import { AddReaction, ShoppingBag } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { AccountBalanceWallet } from "@mui/icons-material";
import { NotificationsActive } from "@mui/icons-material";
import { Event } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu=[
    {title:"Orders",icon:<ShoppingBag/>},
    {title:"Favorites",icon:<Favorite/>},
    {title:"Address",icon:<AddReaction/>},
    {title:"Payments",icon:<AccountBalanceWallet/>},
    {title:"Notification",icon:<NotificationsActive/>},
    {title:"Events",icon:<Event/>},
    {title:"Logout",icon:<Logout/>},
]
const ProfileNavigation = ({open,handleClose}) =>{
    const isSmallScreen = useMediaQuery("(max-width:900px)")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleNavigate=(item)=>{
        if(item.title === "Logout"){
            dispatch(logout())
            navigate("/")
        }else{
            navigate(`/my-profile/${item.title.toLowerCase()}`)
        }
        
    }
    return (
        <div>
            <Drawer 
            variant={isSmallScreen?"temporary" : "permanent"}
            onClose={handleClose}
            open={isSmallScreen? open : true}
            anchor='left' 
            sx={{zIndex:-1,position:"sticky"}}
            >

                <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col
                justify-center text-xl pt-16 gap-8">
                    {menu.map((item,i)=> (<>
                        <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {i!== menu.length-1 && <Divider/>}
                    </>))}
                </div>
            </Drawer>
        </div>
    )
}

export default ProfileNavigation