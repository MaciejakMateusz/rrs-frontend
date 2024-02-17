import React from 'react';
import '../index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {PrivateRoutes} from "./PrivateRoutes";
import {RestaurantPage} from "../app/restaurant/RestaurantPage";
import {LoginPage} from "../login/LoginPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={"/login"}/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route element={<PrivateRoutes/>}>
                    <Route path='/restaurant' element={<RestaurantPage/>}/>
                    <Route path='/cms' element={<RestaurantPage/>}/>
                    <Route path='/admin' element={<RestaurantPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}