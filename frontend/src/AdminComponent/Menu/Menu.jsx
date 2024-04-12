import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { MenuTable } from "./MenuTable";

export const Menu = () =>{
    return(
        <div className="px-2">
            <MenuTable/>
        </div>
    )
}