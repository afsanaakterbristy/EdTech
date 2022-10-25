import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoutes = ({ children }) => {
    
    const { user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <button type="button" class="" >
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Loading...
        </button>
    }
    if (!user) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;