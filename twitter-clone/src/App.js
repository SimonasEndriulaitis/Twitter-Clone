import React, {useState} from "react";
import './App.css';
import {Login} from "./api/auth/Login";
import {Register} from "./api/auth/Register";

function App() {
  const [currentFrom, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentFrom == "login" ?  <Login  onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
     </div>
  );
}

export default App;
