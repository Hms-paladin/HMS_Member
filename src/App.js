// import React from "react";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import HeaderLayout from "./component/Header/header.js";


// function App() {
//   return (
//     <HeaderLayout/>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderLayout from "./component/Header/header.js";
import Dashboard from "./component/Dashboard/dashboard.js";
// pharmacy
import PrescriptionHistory from "./component/Pharmacy/PrescriptionHistory/prescriptionhistory.js";
import OrderTable from './component/Pharmacy/OrderDetails/orderdetails'
import PaymentReceived from './component/Pharmacy/PaymentReceived/PaymentReceived'
import PaymentMethod from './component/Pharmacy/PaymentMethod/PaymentMethod'
import OrderPacking from './component/Pharmacy/OrderDetailsPacked/OrderDetails-Packed'
// nurse
import Nursehistory from './component/Nurse/NurseHistory/nursehistory'
import NurseDetails from './component/Nurse/NurseDetails/NurseDetails'
import Bookings from './component/Nurse/Bookings/Bookings'
import RescheduleBookings from './component/Nurse/RescheduleBooking/RescheduleBooking'
import PregnantWomen_Profile from './component/Pregnant_Women/PregnantWomen_Profile'
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
        <Route path="/" component={Dashboard} exact/>
        {/* Pharmacy */}
         <Route path="/prescriptionhistory" component={PrescriptionHistory}/> 
         <Route path="/orderdetails" component={OrderTable}/> 
        <Route path="/paymentreceive" component={PaymentReceived}/>
        <Route path="/paymentmethod" component={PaymentMethod}/>
        <Route path="/orderpacking" component={OrderPacking}/>
        {/* Nurse */}
        <Route path="/nursehistory" component={Nursehistory}/>
        <Route path="/nursedetails" component={NurseDetails}/>
        <Route path="/bookings" component={Bookings}/>
        <Route path="/reschedulebookings" component={RescheduleBookings}/>
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
