import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./pages/Home/index"
import { ComLogin } from './pages/Login/ComLogin';


function routes(){
    return (

        <BrowserRouter>
            <Routes>

                <Route exact path="/" component={ Main } />
                <Route exact path="/login" component={ ComLogin } />

            </Routes>

        </BrowserRouter>




    );
};

export default routes;