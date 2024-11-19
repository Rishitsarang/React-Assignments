import React from 'react';
import { Navigate, Outlet } from "react-router-dom";



function ProtectedRouts() {
  
    const auth=localStorage.getItem("loggedIn");
    return auth ? <Outlet/> : <Navigate to={"/login"}/>    
}

export default ProtectedRouts;