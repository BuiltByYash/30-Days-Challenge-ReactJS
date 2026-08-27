import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const data = localStorage.getItem("userRole");

    const isLogged = data ? JSON.parse(data) : null;

    return isLogged ? <Outlet /> : <Navigate to="/login" />


}

export default ProtectedRoute
