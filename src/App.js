import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components path
import HeaderLayout from "./component/Header/header.js";
import Dashboard from "./component/Dashboard/dashboard.js";
import Searchresult from "./component/Searchresult/searchresult.js";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  return (
    <Router>
        <HeaderLayout>
      <Switch>
        <Route to="/dashboard" component={Dashboard} exact />

      </Switch>
      </HeaderLayout>
    </Router>
  );
}

export default App;
