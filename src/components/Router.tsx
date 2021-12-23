import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { TestPage } from '../pages/TestPage';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </BrowserRouter>
    );
};
