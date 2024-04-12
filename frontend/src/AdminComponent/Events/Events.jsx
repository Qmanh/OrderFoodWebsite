import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import React, { useState } from "react";
import { createEvenAction } from "../../component/State/Restaurant/Actions";
import { useDispatch, useSelector } from "react-redux";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const initialValues = {
    image:"",
    location:"",
    name:"",
    startAt:null,
    endAt:null,
}

export const Events = () =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formValues,setFormValues] = useState(initialValues)

    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const {restaurant,ingredients,menu} = useSelector(store=>store)

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createEvenAction({data:formValues,restaurantId:restaurant.usersRestaurant?.id,jwt}))
        setFormValues(initialValues)
        
    }
    const handleFormChange = (e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }
    const handleDateChange = (date,dateType)=>{
        const formatedDate = dayjs(date).format("MMMM DD YYYY hh:mm a")
        setFormValues({...formValues,[dateType]:formatedDate})
    }
    return(
        <div>
           
            <div className="p-5">
                <Button onClick={handleOpen} variant="contained">Create New Event</Button>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                name="image"
                                label="Image URL"
                                variant="outlined"
                                fullWidth
                                value={formValues.image}
                                onChange={handleFormChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="location"
                                label="Location"
                                variant="outlined"
                                fullWidth
                                value={formValues.location}
                                onChange={handleFormChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                name="name"
                                label="Event Name"
                                variant="outlined"
                                fullWidth
                                value={formValues.name}
                                onChange={handleFormChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props}/>}
                                    label="Start Date and Time"
                                    
                                    onChange={(newValue)=>handleDateChange(newValue,"startAt")}
                                    inputFormat = "MM/dd/yyyy hh:mm a"
                                    className="w-full"
                                    sx={{ width:"100%"}}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props}/>}
                                    label="End Date and Time"
                                   
                                    onChange={(newValue)=>handleDateChange(newValue,"endAt")}
                                    inputFormat = "MM/dd/yyyy hh:mm a"
                                    className="w-full"
                                    sx={{ width:"100%"}}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={4}>
                        <Button onClick={handleSubmit} className="mt-3" variant="contained" >
                            Submit
                        </Button>
                    </Grid>

                    </Grid>
                    
                </Box>
                </Modal>
            </div>
            
        </div>
    )
}