import React, { useEffect } from "react";
import { AdminSideBar } from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import {Dashboard} from "../Dashboard/Dashboard";
import { Orders } from "../Order/Orders";
import {Menu} from "../Menu/Menu";
import { FoodCategory } from "../FoodCategory/FoodCategory";
import {Ingredients} from "../Ingredients/Ingredients";
import { RestaurantDetails } from "./RestaurantDetails";
import { Events } from "../Events/Events";
import { CreateMenuForm } from "../Menu/CreateMenuForm";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantsCategory } from "../../component/State/Restaurant/Actions";
import { getMenuItemsByRestaurantId } from "../../component/State/Menu/Action";
import { getUsersOrders } from "../../component/State/Order/Action";
import { store } from "../../component/State/store";
import { fetchRestaurantsOrder } from "../../component/State/Restaurant Order/Action";
export const Admin = () =>{
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const {restaurant} = useSelector(store => store);

    const handleClose = () =>{

    }
    useEffect(()=>{
        dispatch(getRestaurantsCategory({
            jwt:jwt,
            restaurantId: restaurant.usersRestaurant?.id
    }))
    
        dispatch(fetchRestaurantsOrder({
            jwt:jwt,
            restaurantId: restaurant.usersRestaurant?.id
        }))
    
    },[])
    return(
        <div>
            <div className="lg:flex justify-between">
            <div>
                <AdminSideBar handleClose={handleClose}/>
            </div>
            <div className="lg:w-[80%]">
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/category' element={<FoodCategory/>}/>
                    <Route path='/ingredients' element={<Ingredients/>} />
                    <Route path='/events' element={<Events/>}/>
                    <Route path='/details' element={<RestaurantDetails/>}/>
                    <Route path='/add-menu' element={<CreateMenuForm/>}/>
                </Routes>
            </div>
            </div>
        </div>
    )
}