import React, {useState} from "react";
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";

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
