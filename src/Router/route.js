import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// common ad..
import Advertisement from '../component/Doctor_Appointment/Advertisement/Advertisement'
// components path
import HeaderLayout from "../component/Header/header";
// login
import Login from '../component/Login/login'
import SignUpForm from '../component/Login/SignupForm'
// reports
import Reports from '../component/Reports/Reports'
import download from '../component/Reports/download'
// pharmacy
import PrescriptionHistory from "../component/Pharmacy/PrescriptionHistory/prescriptionhistory.js";
import OrderTable from '../component/Pharmacy/OrderDetails/orderdetails'
import OrderPacking from '../component/Pharmacy/OrderDetailsPacked/OrderDetails-Packed'
// payment screens
import PaymentReceived from '../component/Payment/PaymentReceived/PaymentReceived'
import PaymentMethod from '../component/Payment/PaymentMethod/PaymentMethod'
// nurse
import Nursehistory from '../component/Nurse/NurseHistory/nursehistory'
import NurseDetails from '../component/Nurse/NurseDetails/NurseDetails'
import BookingConfirmation from '../component/Nurse/NurseDetails/BookingConfirmation'
import Bookings from '../component/Nurse/Bookings/Bookings'
import BookingHistory from '../component/Nurse/Bookings/BookingHistory'
import RescheduleBookings from '../component/Nurse/RescheduleBooking/RescheduleBooking'
import MySchedule from '../component/Nurse/MySchedule/Calendar'
// lab
import Lab_History from '../component/Lab/LabHistory/Lab_History'
import Clinical_lab from '../component/Lab/ClinicalLab/ClinicalLab'
import Lab_Bookings from '../component/Lab/Lab_Bookings/Lab_Bookings'
import Lab_BookingHistory from '../component/Lab/Lab_Bookings/Lab_BookingHistory'
// Diet
import AdvertisementDiet from '../component/Diet/Advertisement_Diet/AdDiet'
import Diet_History from '../component/Diet/Diet_History/Diet_history'
import Diet_Bookings from '../component/Diet/Diet_Bookings/Diet_Bookings'
import Diet_BookingHistory from '../component/Diet/Diet_Bookings/Diet_BookingHistory'
import GoalWeight from '../component/Diet/GoalWeight/GoalWeight'
import DietDetails from '../component/Diet/Diet_History/DietDetails'
// PregnantWomen
import PregnantWomen_Profile from '../component/Pregnant_Women/PregnantWomen_Profile'
import PregnantMotherProfile from "../component/Pregnant_Mother/PregnantMother_profile.js";
// Doctor
import Searchresult from "../component/Doctor_Appointment/Searchresult/searchresult";
import Myprofile from "../component/Doctor_Appointment/Myprofile/myprofile";
import Editprofile from "../component/Doctor_Appointment/Myprofile/editprofile";
import Feed from '../component/Doctor_Appointment/Feed/feed'
import Myappointment from '../component/Doctor_Appointment/Myappointments/myappointments'
import History from "../component/Doctor_Appointment/Myappointments/history";
// import Feed from '../Doctor_Appointment/Feed/feed';
import Doctorbooking from "../component/Doctor_Appointment/Doctorbooking/doctorbooking"

// Book a Room
import HospitalList from "../component/BookAroom/HospitalList/HospitalList";
import BookaRoom_ad from '../component/BookAroom/advertisement'
// import BookingHospital from "../BookAroom/BookroomBooking/BookingHospital";
import BookingDetails from "../component/BookAroom/BookroomBooking/BookingDetails";
import BookroomHistory from "../component/BookAroom/BookroomHistory/BookroomHistory";
import BookingReschedule from "../component/BookAroom/BookroomBooking/BookingReschedule";
// import PaymentReceived_Book from "../component/BookAroom/PaymentReceived/PaymentReceived";
import ConfirmBooking from "../component/BookAroom/HospitalList/ConfirmBooking";
// import PaymentMethodBook from "../component/BookAroom/HospitalList/PaymentMethodBook";
import ProceedScreen from "../component/BookAroom/HospitalList/proceedScreen/ProceedScreen";
import ConfirmPage from "../component/BookAroom/BookroomBooking/ConfirmPage";
import ProceedReschedule from "../component/BookAroom/BookroomBooking/proceedReschedule/ProceedReschedule";
// Training Center
import TrainingCategory from '../component/TrainingCenter/TrainingCategory/TrainingCategory'
import Training_History from '../component/TrainingCenter/TrainingCenterHistory/History'
import Training_Details from '../component/TrainingCenter/TrainingDetails/TrainingDetails'
// import Calendar from '../'
import BookingShedule from '../component/TrainingCenter/AddMember/BookingShedule'
import Tra_Bookings from '../component/TrainingCenter/Training_Bookings/Tra_Bookings'
import Tra_BookingHistory from '../component/TrainingCenter/Training_Bookings/Tra_BookingHistory'
import Tc_BookingReShedule from '../component/TrainingCenter/BookingsCalender/Tc_Reschedule_bookings'
import Doctorbookingreschedule from "../component/Doctor_Appointment/Doctorbooking Rechedule/doctorbookingreschedule";
import Tc_Myschedule from '../component/TrainingCenter/BookingsCalender/Tc_Myschedule'
// Trainer
import TrainerList from "../component/Trainer/TrainerList/TainerList";
import TrainerDetails from '../component/Trainer/TrainerDetails/TrainerDetails'
import ChatWindow from '../component/Trainer/ChatWindow/chatwindow'
import TrainerBooking from '../component/Trainer/Calendar_Bookings/Booking'
import GoalWeight_Trainer from '../component/Trainer/GoalWeight/GoalWeight'
import TrainerBookings from '../component/Trainer/Trainer_Bookings/Trainer_Bookings'
import Trainer_BookingHistory from '../component/Trainer/Trainer_Bookings/Trainer_BookingHistory'
import Trainer_Myschedule from '../component/Trainer/Calendar_Bookings/Trainer_Myschedule'
import BookingReSchedule from '../component/Trainer/Calendar_Bookings/RescheduleBooking'
// physiotheraphy
import Physiotheraphymain from "../component/Physiotheraphy/PhysiotheraphyMain/physiotheraphymain";
import Physiotheraphyfeed from "../component/Physiotheraphy/PhysiotheraphyMain/physiotheraphyfeed";
import Physiotherapistbooking from "../component/Physiotheraphy/PhysiotheraphyMain/physiotherapistbooking";
import Phy_Myappointment from '../component/Physiotheraphy/Myappointments/myappointments'
import Ad_Physiotherphy from '../component/Physiotheraphy/PhysiotheraphyMain/advertisement'
import Dashboard from '../component/Dashboard/dashboard'
import Phy_History from '../component/Physiotheraphy/Myappointments/history'
import { Switch, useParams } from "react-router-dom";


import MedicationFilter from '../component/Pregnant_Women/Medication'
import PrescriptionView from '../component/Pregnant_Mother/PrescriptionModal'
import MotherMedication from '../component/Mother/MotherMedication'
import PerscriptionHistory from '../component/Pregnant_Mother/PrescriptionModal'
var hashHistory = require('react-router-redux')
function Routes(props) {
    return (
        <Router history={hashHistory} basename="/HmsMember/?/">

            <HeaderLayout>

                {/* Pharmacy */}
                <Switch location={props.location}>
                    <Route path="/" component={Dashboard} exact />

                    <Route path="/prescriptionhistory" component={PrescriptionHistory} exact />
                    <Route path="/orderdetails/:rowId" component={OrderTable} exact />
                    <Route path="/paymentreceive" component={PaymentReceived} exact />
                    <Route path="/paymentmethod" component={PaymentMethod} exact />
                    <Route path="/OrderDetails-Packed" component={OrderPacking} exact />

                    {/* reports */}
                    <Route path="/reports" component={Reports} />
                    <Route path="/download" component={download} />
                    {/* Nurse */}
                    <Route path="/nursehistory" component={Nursehistory} exact />
                    {/* <Route path='/nursehistory/:Id' component={() => <Nursehistory Id={props.params.Id}/>} /> */}
                    <Route path="/nursedetails/:nurseId" component={NurseDetails} exact />
                    <Route path="/bookingconfirmation" component={BookingConfirmation} exact />
                    <Route path="/nursebookings" component={Bookings} />
                    <Route path="/bookinghistory" component={BookingHistory} />
                    <Route path="/reschedulebookings" component={RescheduleBookings} />
                    <Route path="/myschedule" component={MySchedule} />
                    {/* Lab */}
                    <Route path="/labhistory" component={Lab_History} />
                    <Route path="/clinicallab" component={Clinical_lab} />
                    <Route path="/LabBookings" component={Lab_Bookings} />
                    <Route path="/Lab_bookinghistory" component={Lab_BookingHistory} />
                    {/* Diet */}
                    <Route path="/Advertisement_diet" component={AdvertisementDiet} />
                    <Route path="/Diet_history" component={Diet_History} />
                    <Route path="/DietBookings" component={Diet_Bookings} />
                    <Route path="/diet_bookinghistory" component={Diet_BookingHistory} />
                    <Route path="/goalweight" component={GoalWeight} />
                    <Route path="/DietDetails" component={DietDetails}/>
                    {/* Pregnant Women */}
                    <Route path="/pregnantmotherprofile" component={PregnantMotherProfile} exact />
                    <Route path="/pregnantwomen_profile" component={PregnantWomen_Profile} exact />
                    {/* Doctor */}
                    <Route path="/profile" component={Myprofile} exact />
                    <Route path="/doctorEdit" component={Editprofile} exact />
                    <Route path="/doctorappointment" component={Searchresult} exact />
                    <Route path="/feed" component={Feed} exact />
                    <Route path="/doctorbooking" component={Doctorbooking} exact />
                    <Route path="/appointment" component={Myappointment} exact />
                    <Route path="/history" component={History} exact />
                    <Route path="/paymentreceive" component={PaymentReceived} exact />
                    <Route path="/paymentmethod" component={PaymentMethod} exact />
                    <Route path="/doctorbookingreschedule" component={Doctorbookingreschedule} exact />
                    {/* Physiotheraphy */}
                    <Route path="/physiotheraphy" component={Physiotheraphymain} exact />
                    <Route path="/physiotheraphyfeed" component={Physiotheraphyfeed} exact />
                    <Route path="/phy_appointment" component={Phy_Myappointment} exact />
                    <Route path="/physiotherapistbooking" component={Physiotherapistbooking} exact />
                    <Route path="/phy_history" component={Phy_History} />

                    {/* Book a Room */}
                    <Route path="/hospitallist" component={HospitalList} />
                    <Route path="/bookaroom_ad" component={BookaRoom_ad} />
                    {/* <Route path ="/bookinghospital" component={BookingHospital}/> */}
                    <Route path="/bookingdetails" component={BookingDetails} />
                    <Route path="/bookroomhistory" component={BookroomHistory} />
                    <Route path="/reschedulepage" component={BookingReschedule} />
                    <Route path="/confirmhospital" component={ConfirmBooking} />
                    {/* <Route path = "/paymentmethodbook" component={PaymentMethodBook}/> */}
                    {/* <Route path="/paymentreceived" component={PaymentReceived_Book}/> */}
                    <Route path="/proceedpage" component={ProceedScreen} />
                    <Route path="/confirmpage" component={ConfirmPage} />
                    <Route path="/resheduleproceed" component={ProceedReschedule} />
                    {/* Training Center */}
                    <Route path="/trainingcategory" component={TrainingCategory} />
                    <Route path="/tc_history" component={Training_History} />
                    <Route path="/Trainingdetails" component={Training_Details} />
                    <Route path="/bookingshedule" component={BookingShedule} />
                    <Route path="/tc_Bookings" component={Tra_Bookings} />
                    <Route path="/tc_bookings_history" component={Tra_BookingHistory} />

                    <Route path="/tc_reschedule_bookings" component={Tc_BookingReShedule} />
                    <Route path="/tc_myschedule" component={Tc_Myschedule} />
                    {/* trainer */}
                    <Route path="/tainerlist" component={TrainerList} />
                    <Route path="/trainerdetails" component={TrainerDetails} />
                    <Route path='/ChatWindow' component={ChatWindow} />
                    <Route path='/trainerbooking' component={TrainerBooking} />
                    <Route path="/trainer_goalweight" component={GoalWeight_Trainer} />
                    <Route path="/trainer_booking" component={TrainerBookings} />
                    <Route path="/trainer_bookinghistory" component={Trainer_BookingHistory} />
                    <Route path="/trainer_myschedule" component={Trainer_Myschedule} />
                    <Route path="/trainer_bookigreschedule" component={BookingReSchedule} />
                    <Route path="/Medication" component={MedicationFilter} />
                    <Route path="/MotherMedication" component={MotherMedication} />
                    <Route path="/PrescriptionView" component={PrescriptionView} />
                    <Route path="/PerscriptionHistory" component={PerscriptionHistory} />
                    {/* calendar */}
                    {/* <Route path="/Calendar" component = {Calendar}/> */}
                </Switch>

            </HeaderLayout>
        </Router>
    );
}


export default Routes;