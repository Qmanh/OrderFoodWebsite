import { Person, Search, ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () =>{
    const {auth,cart} = useSelector(store => store);
    const navigate = useNavigate();
    const handleAvatarClick=()=>{
        if(auth.user.role === "ROLE_CUSTOMER"){
            navigate("/my-profile")
        }else{
            navigate("/admin/restaurant")
        }
    }
    return(
        <Box
         className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">

            <div className="flex items-center space-x-4">
                <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                    <li onClick={() => navigate("/")} className="logo font-semibold text-gray-300 text-2xl">
                        Food Service
                    </li>
                </div>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-10">
                <div className="">
                    <IconButton >
                        <Search sx={{fontSize:"1.5rem"}}/>
                    </IconButton>
                </div>

                <div className="flex items-center">
                    {auth.user ? (
                        <Avatar onClick={handleAvatarClick} sx={{bgcolor: "white",color:"pink.A400"}}>
                            {auth.user.fullName[0].toUpperCase()}
                        </Avatar>
                    ):(
                        <IconButton onClick={()=>navigate("/account/login")}>
                            <Person/>
                        </IconButton>
                    )}
                </div>

                <div className="">
                    <IconButton onClick={()=>navigate("/cart")}>
                        <Badge color="primary" badgeContent={cart.cart?.items?.length}>
                            <ShoppingCart sx={{fontSize:"1.5rem"}}/>
                        </Badge>
                    </IconButton>
                </div>

            </div>

        </Box>
    )
}