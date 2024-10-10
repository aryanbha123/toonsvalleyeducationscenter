import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import zIndex from '@mui/material/styles/zIndex';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const baseurl = "http://localhost:3000";
    const baseurl = "https://api.tonsvalleyeducationtrust.org";
    const navigate = useNavigate();
    const checkAuth = async () => {
        try {
            const response = await axios.get(`${baseurl}/get/user`,{withCredentials:true});
            setUser(response.data.user);
            
            navigate('/admin')
        } catch (error) {
            console.error('User is not authenticated', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async ({email,password}) => {
        setLoading(true);
        try {
            const response = await axios.post(`${baseurl}/login`, {email,password},{withCredentials:true});
            console.log(response)
            // setUser(response.data.user);
            checkAuth();
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await axios.post(`${baseurl}/logout`,{},{withCredentials:true});
            setUser(null);
        } catch (error) {
            console.error('Logout failed', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };
    const value = {
        baseurl,
        user,
        login,
        logout,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            <>{children}</>
        </AuthContext.Provider>
    );
};
