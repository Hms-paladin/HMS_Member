import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components path
import HeaderLayout from "./component/Header/header.js";
import Dashboard from "./component/Dashboard/dashboard.js";
import PregnantWomen_Profile from './component/Pregnant_Women/PregnantWomen_Profile'
import './App.css';
import PregnantMotherProfile from "./component/Pregnant_Mother/PregnantMother_profile.js";
import Medication from "./component/Pregnant_Women/Medication";
import MotherProfile from './component/Mother/MotherProfile';
import MotherDevice from "./component/Mother/MotherDevices";
import NextVaccinationMother from "./component/Mother/NextVaccination"
import MotherMedication from './component/Mother/MotherMedication';
import PrescriptionModal from "./component/Pregnant_Mother/PrescriptionModal.js";
var hashHistory = require('react-router-redux')
function App() {

  return (
    <Router history={hashHistory} basename="Hms/?/">
        <HeaderLayout>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/pregnantmotherprofile" component={PregnantMotherProfile} exact/>
        <Route path="/pregnantwomen_profile" component={PregnantWomen_Profile} exact/>
        <Route path="/prescription" component={PrescriptionModal} exact/>
        <Route path="/medication" component={Medication} exact />
        <Route path="/mother" component={MotherProfile} exact />
        <Route path="/motherdevice" component={MotherDevice} exact />
        <Route path="/vaccination_mother" component={NextVaccinationMother} exact/>
        <Route path="/mother_medication" component={MotherMedication} exact/>
      </Switch>
      </HeaderLayout>
    </Router>
  );
}

export default App;
