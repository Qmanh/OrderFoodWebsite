import { Delete } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";

export const EventCard = () =>{
    return (
        <div>
            <Card sx={{width:345}}>
                <CardMedia
                    sx={{height:345}} 
                    image=""
                />
                <CardContent>
                    <Typography variant="h5" >
                        VietNamese Fast Food
                    </Typography>
                    <Typography variant="body2" >
                        50% off on your first order
                    </Typography>
                    <div className="py-2 space-y-2 ">
                        <p>{"Ho Chi Minh"}</p>
                        <p className="text-sm text-blue-500">February 14, 2024 12:00 AM</p>
                        <p className="text-sm text-red-500">February 15, 2024 12:00 AM</p>
                    </div>
                </CardContent>

                {false &&
                    <CardActions>
                        <IconButton>
                            <Delete/>
                        </IconButton>
                    </CardActions>
                }
            </Card>
        </div>
    )
}