import React, {useState} from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
     <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input value={name} name="name" id="name" placeholder="username" />
        <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log in</button>
     </form>
     <button className="Link-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
     </div>
    )
}