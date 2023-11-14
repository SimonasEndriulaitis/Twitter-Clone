import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Switch } from 'react-router-dom';


export const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the user registration data
    const userData = {
      name: name,
      email: email,
      password: pass,
    };

    try {
      // Send the registration data to the server
      const response = await axios.post("/api/auth/register", userData);
      setMessage(response.data.message); // Server response message

      history.push('/Dashboard');
    } catch (error) {
      setMessage(error.response.data.message); // Error message from the server
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="username"
          onChange={handleNameChange} // Add onChange handler
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          onChange={handleEmailChange} // Add onChange handler
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handlePassChange} // Add onChange handler
        />
        <button type="submit">Register</button>
      </form>
      {message && <div>{message}</div>}
      <button className="Link-button" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Log in here.
      </button>
    </div>
  );
};

export default Register;
