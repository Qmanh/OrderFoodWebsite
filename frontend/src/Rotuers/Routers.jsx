import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRoute } from "./AdminRoute";
import { CustomerRoute } from "./CustomerRouter";

export const Routers = () =>{
    return(
        <Routes>
            <Route path='/admin/restaurant/*' element={<AdminRoute/>}></Route>
            <Route path='/*' element={<CustomerRoute/>}></Route>
        </Routes>
    )
}