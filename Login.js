import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate();

    const[input,setInput]=useState({
        email:"",
        password:"",
    })

    const handleLogin = (e) =>{
        e.preventDefault();
        const loggedUser=JSON.parse(localStorage.getItem("user"));

        if(input.email === loggedUser.email && input.password === loggedUser.password){
            localStorage.setItem("loggedIn",true);
            navigate("/");
        }
        else{
            alert("Email OR Password Not Correct !!!");
        }
    }


    return (

    <form onSubmit={handleLogin}>
    
    <label for="email">Your Email</label>
    <br/>
    <input
     name="email" 
     value={input.email} 
     onChange={(e)=>
     setInput({
        ...input,
        [e.target.name]:e.target.value,
        })
    }
    type="email"
    /><br/>

    <label for="password">Password</label>
    <br/>
    <input
     name="password" 
     value={input.password} 
     onChange={(e)=>
     setInput({
        ...input,
        [e.target.name]:e.target.value,
        })
    }
    type="password"
    />
    <br/>
    
    <button type="submit">Login</button>
    <br/>

    <p>Don't Have An Account !</p>
    <br/>
    <Link to="/register"><u>Register Hear</u></Link>
   </form>


  )
}

export default Login;   