import React, { useState } from "react";
import './App.css';
import { Login } from "./api/auth/Login";
import { Register } from "./api/auth/Register";
import Dashboard from "./Navmydi/Dashboard";
import Home from "./Navmydi/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/Home" component={Home} />
        </Switch>
      </div>
      <div className="App">
        {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
      </div>
    </Router>
  );
}

export default App;
