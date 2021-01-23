import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components path
import HeaderLayout from "./component/Header/header.js";
import Dashboard from "./component/Dashboard/dashboard.js";
import PregnantWomen_Profile from './component/Pregnant_Women/PregnantWomen_Profile'
import './App.css';
import PregnantMotherProfile from "./component/Pregnant_Mother/PregnantMother_profile.js";
var hashHistory = require('react-router-redux')
function App() {

  return (
    <Router history={hashHistory} basename="Hms/?/">
        <HeaderLayout>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/pregnantmotherprofile" component={PregnantMotherProfile} exact/>
        <Route path="/pregnantwomen_profile" component={PregnantWomen_Profile} exact/>
      </Switch>
      </HeaderLayout>
    </Router>
  );
}

export default App;
