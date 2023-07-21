import React, {useState} from "react";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = () => {
        console.log(email);
    }

    return (
        <div className="auth-form-container">
     <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log in</button>
     </form>
     <button className="Link-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
     </div>
    )
}