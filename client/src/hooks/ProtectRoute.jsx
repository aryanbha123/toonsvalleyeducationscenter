import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../AuthContext';

export default function ProtectRoute() {
    // const { user } = useAuth();
    // const user = true;

    const { user } = useAuth()

    if (!user) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}
