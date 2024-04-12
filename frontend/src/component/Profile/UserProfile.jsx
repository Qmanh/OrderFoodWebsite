import { AccountCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const UserProfile =() =>{
    const handleLogout=()=>{}
    return(
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div>
                <AccountCircle sx={{fontSize:"9rem"}}/>
                <h1 className="py-5 text-2xl font-semibold">Food Service</h1>
                <p>Email: foodservice@gmail.com</p>
                <Button variant="contained" onClick={handleLogout} sx={{margin:"2rem 0rem"}}>Logout</Button>
            </div>
        </div>
    )
}
export default UserProfile