import React from "react";
import { IngredientTable } from "./IngredientTable";
import { Grid } from "@mui/material";
import { IngredientCategory } from "./IngredientCategory";

export const Ingredients = () =>{
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <IngredientTable/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <IngredientCategory/>
                </Grid>
            </Grid>
            
        </div>
    )
}