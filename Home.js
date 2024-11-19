import React from 'react'

import {useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate=useNavigate();

    const userName = JSON.parse(localStorage.getItem("user"));
    
    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    }
   
   
    return (
    <div>
    <h1>Welcome {userName.name}To Our Hom Page!</h1>
    
        <br/>
    <button type="submit" onClick={handleLogout}>Logout</button>
</div>
    
  )
}

export default Home