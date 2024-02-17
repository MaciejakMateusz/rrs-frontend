import React from 'react';
import '../index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {PrivateRoutes} from "./PrivateRoutes";
import {LoginForm} from "../LoginForm";
import {RegisterForm} from "../RegisterForm";
import {Restaurant} from "../app/app/restaurant/Restaurant";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={"/login"}/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/register' element={<RegisterForm/>}/>
                <Route element={<PrivateRoutes />}>
                    <Route path='/restaurant' element={<Restaurant/>}/>
                    <Route path='/cms' element={<Restaurant/>}/>
                    <Route path='/admin' element={<Restaurant/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}