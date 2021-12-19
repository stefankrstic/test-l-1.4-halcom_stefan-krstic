import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginPage } from "../pages/LoginPage";

export const Router = () => {
    return (
        <BrowserRouter>
         <Routes>
             <Route path="/" element={<LoginPage />} />
         </Routes>
        </BrowserRouter>
    )
}