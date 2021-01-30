import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import RescheduleBooking from './component/Nurse/RescheduleBooking/RescheduleBooking'
import BookingHistory from './component/Nurse/Bookings/BookingHistory'
var hashHistory = require('react-router-redux')
function App() {
  return (
    <Router  basename="Hms/?/">
        {/* <HeaderLayout> */}
         
      {/* <Switch> */}
         <Route path="/" component={HeaderLayout} exact/> 
        {/* Pharmacy */}
         <Route path="/prescriptionhistory" component={PrescriptionHistory}/> 
         <Route path="/orderdetails" component={OrderTable}/> 
        <Route path="/paymentreceive" component={PaymentReceived}/>
        <Route path="/paymentmethod" component={PaymentMethod}/>
        <Route path="/orderpacking" component={OrderPacking}/>
        {/* Nurse */}
        <Route path="/nursehistory" component={Nursehistory}/>
        <Route path="/nursedetails" component={NurseDetails}/>
        <Route path="/bookings" component={Bookings} exact/>
        <Route path="/reschedulebookings" component={RescheduleBooking}/>
        <Route path="/bookinghistory" component={BookingHistory} exact/>
      {/* </Switch> */}
      {/* </HeaderLayout> */}
    </Router>


  );
}

export default App;
