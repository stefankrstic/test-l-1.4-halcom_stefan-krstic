import React from 'react';
import { UserProvider } from '../context/UserContext';
import { Router } from './Router';

export const App = () => {
    return (
        <div>
            <UserProvider>
                <Router />
            </UserProvider>
        </div>
    );
};
