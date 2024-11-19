import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // store in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));

    sessionStorage.setItem("user", JSON.stringify(input));
    
    
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Your Name</label>
      <br />
      <input
        name="name"
        value={input.name}
        onChange={(e) =>
          setInput({
            ...input,
            [e.target.name]: e.target.value,
          })
        }
        type="text"
      />
      <br />

      <label for="email">Your Email</label>
      <br />
      <input
        name="email"
        value={input.email}
        onChange={(e) =>
          setInput({
            ...input,
            [e.target.name]: e.target.value,
          })
        }
        type="email"
      />
      <br />

      <label for="password">Password</label>
      <br />
      <input
        name="password"
        value={input.password}
        onChange={(e) =>
          setInput({
            ...input,
            [e.target.name]: e.target.value,
          })
        }
        type="password"
      />
      <br />

      <button type="submit">Register</button>
      <br />
      <p>I Already Have An Account !</p>
      <br />
      <Link to="/login">
        <u>Login Hear</u>
      </Link>
    </form>
  );
};

export default Register;
