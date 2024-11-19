
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./pages/Home";
import ProtectedRouts from "./Services/ProtectedRouts";


const App = () => {
return (

<Router>
<div>
{/* Navigation Menu */}
  {/* <nav>
    <ul>
      
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>    
      
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/help">Help</Link></li>
      
      
    </ul>
  </nav> */}

  {/* Route Definitions */}
  <Routes>
    <Route path="/" element={<ProtectedRouts/>}>
      <Route path="/" element={<Home />} />
    </Route>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

    {/* <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage/>}/>    
    <Route path="/help" element={<HelpPage/>}/> */}

  </Routes>

</div>

</Router>

  );
};

export default App;