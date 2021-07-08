
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import Routes from "./Router/route";
import Dashboard from './component/Dashboard/dashboard'
import HeaderLayout from "./component/Header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  
  const existingTokens = JSON.parse(localStorage.getItem("token"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const setTokens = (data) => {
    console.log(data,"ggggg")
    localStorage.setItem("id", JSON.stringify(data.data[0]));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <div>
        <Routes/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;