import { CalendarToday, LocationOn, Place } from "@mui/icons-material";
import { Divider, FormControl, FormControlLabel, Grid,RadioGroup, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantsCategory } from "../State/Restaurant/Actions";
import { getMenuItemsByRestaurantId } from "../State/Menu/Action";


const foodTypes = [
    {label:"All",value:"all"},
    {label:"Vegetarian only",value:"vegetarian"},
    {label:"Non-Vegetarian",value:"non_vegetarian"},
    {label:"Seasonal",value:"seasonal"}
];


const RestaurantDetails =()=>{
    const {auth,restaurant,menu} = useSelector((store) => store)
    const [foodType,setFoodType]= useState("all")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const [selectedCategory,setSelectedCategory] = useState("")
    

    const {id,city} = useParams();

    const handleFilter = (e) =>{
        setFoodType(e.target.value)
        console.log("filll " ,e.target.value,e.target.name)
    }
    console.log("filter ",foodType)

    const handleFilterCategory = (e) =>{
        setSelectedCategory(e.target.value)
        console.log(e.target.value,e.target.name)
    }
    console.log("select ",selectedCategory)
    console.log("restaurant", restaurant)


    useEffect(()=>{
        dispatch(getRestaurantById({jwt,restaurantId:id}))
        dispatch(getRestaurantsCategory({jwt,restaurantId:id}))
    
    },[])

    useEffect(()=>{
        dispatch(
            getMenuItemsByRestaurantId({
                jwt,
                restaurantId:id,
                vegetarian: foodType === "vegetarian",
                nonveg: foodType === "non_vegetarian",
                seasonal: foodType === "seasonal",
                foodCategory: selectedCategory,
            })
        );
    },[selectedCategory,foodType])

    return(
        <div className="px-5 lg:px-20">
            <section>
                <h3 className="text-gray-500 py-2 mt-10">Home/VietNam/ViteName fast food/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>

                            <img className="w-full h-[40vh] object-cover"
                             src={restaurant.restaurant?.images[0]}
                             alt="" />

                        </Grid>

                        <Grid item xs={12} lg={6}>

                            <img className="w-full h-[40vh] object-cover"
                             src={restaurant.restaurant?.images[1]}
                             alt="" />

                        </Grid>

                        <Grid item xs={12} lg={6}>

                            <img className="w-full h-[40vh] object-cover"
                             src={restaurant.restaurant?.images[2]}
                             alt="" />

                        </Grid>
                    </Grid>
                </div>

                <div className="pt-3 pb-5">
                    <h1 className="text-4xl font-semibold">{restaurant.restaurant?.name}</h1>
                    <p className="text-gray-500 mt-1">
                        {restaurant.restaurant?.description}
                    </p>

                    <div className="space-y-3 mt-3">
                    <p className="text-gray-500 flex items-center gap-3">
                        <LocationOn/>
                        <span>
                            {restaurant.restaurant?.address?.city}, {restaurant.restaurant?.address?.country}
                        </span>
                    </p>

                    <p className="text-gray-500 flex items-center gap-3">
                        <CalendarToday/>
                        <span>
                            {restaurant.restaurant?.openingHours}
                        </span>
                    </p>
                    </div>
                </div>
            </section>
            <Divider/>
            <section className="pt-[2rem] lg:flex relative">
                <div className="space-y-10 lg:w-[20%] filter">
                    <div className="box space-y-5 lg:sticky top-28 d">
                        <div>
                            <Typography variant="h5" sx={{paddingBottom:"1trem"}}>
                                Food Type
                            </Typography>

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name="food_type"
                                 value={foodType}>
                                    {foodTypes.map((item)=> <FormControlLabel 
                                    key={item}
                                    value={item.value} 
                                    control={<Radio />} 
                                    label={item.label} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider/>
                        <div>
                           <Typography variant ="h5" sx={{paddingBottom:"1rem"}}>
                                Food Category
                            </Typography> 

                            <FormControl className="py-10 space-y-5" component={"fieldset"}>
                                <RadioGroup 
                                onClick={handleFilterCategory}
                                name="food_category"
                                value={selectedCategory}
                                >
                                    
                    
                                    {restaurant.categories.map((item)=>
                                    ( <FormControlLabel 
                                    key={item}
                                    value={item.name} 
                                    control={<Radio />} 
                                    label={item.name} />))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 lg:w-[80%] lg:pl-10">
                    {menu.menuItems.map((item)=> <MenuCard item={item}/>)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails