import React from 'react';
import '../index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {PrivateRoutes} from "./PrivateRoutes";
import {RestaurantPage} from "../app/restaurant/RestaurantPage";
import {LoginPage} from "../login/LoginPage";
import {CmsPage} from "../app/cms/CmsPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={"/login"}/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route element={<PrivateRoutes/>}>
                    <Route path='/restaurant' element={<RestaurantPage/>}/>
                    <Route path='/cms' element={<CmsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}