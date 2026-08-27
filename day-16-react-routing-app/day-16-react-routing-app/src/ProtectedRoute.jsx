import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const isLoggedin = localStorage.getItem("isLogin");

    console.log("isLoggedin : ", isLoggedin)

    return (isLoggedin == "yes") ? children : <Navigate to="/login" />

    // return (isLoggedin == "yes") ? <Outlet/> : <Navigate to="/login" />


}

export default ProtectedRoute
