import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the user login data
    const userData = {
      email: email,
      password: pass,
    };

    try {
      // Send the login data to the server
      const response = await axios.post("/api/auth/login", userData);
      setMessage("Login successful!"); // Success message
      // Save the token in local storage or cookies for future authenticated requests
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      setMessage(error.response.data.message); // Error message from the server
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      {message && <div>{message}</div>}
      <button
        className="Link-button"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
