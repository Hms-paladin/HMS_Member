import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components path
import HeaderLayout from "./component/Header/header.js";
// import Dashboard from "./component/Dashboard/dashboard.js";

import './App.css';
import PregnantMotherProfile from "./component/Pregnant_Mother/PregnantMother_profile.js";

function App() {

  return (
    <Router>
        <HeaderLayout>
      <Switch>
        {/* <Route to="/dashboard" component={Dashboard} exact /> */}
        <Route to="/pregnantmotherprofile" component={PregnantMotherProfile} exact/>
      </Switch>
      </HeaderLayout>
    </Router>
  );
}

export default App;
