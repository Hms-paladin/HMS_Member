import React from "react";
import { Layout, Menu } from 'antd';
import Logo from "../../images/Logo.png";
import search from "../../images/loupe.png";
import Calendar from '../../images/calendar_b.svg'
import { Dropdown } from 'react-bootstrap'
import { Input } from 'antd';
import "./header.scss";
import Button from '@material-ui/core/Button'

import { push } from 'connected-react-router';
import Dashboard from "../Dashboard/dashboard.js";
import { BrowserRouter as Router, Switch, Route,useHistory,Link,NavLink,Redirect} from "react-router-dom";


// pharmacy
import PrescriptionHistory from "../Pharmacy/PrescriptionHistory/prescriptionhistory.js";
import OrderTable from '../Pharmacy/OrderDetails/orderdetails'
import PaymentReceived from '../Pharmacy/PaymentReceived/PaymentReceived'
import PaymentMethod from '../Pharmacy/PaymentMethod/PaymentMethod'
import OrderPacking from '../Pharmacy/OrderDetailsPacked/OrderDetails-Packed'
// nurse
import Nursehistory from '../Nurse/NurseHistory/nursehistory'
import NurseDetails from '../Nurse/NurseDetails/NurseDetails'
import BookingConfirmation from '../Nurse/NurseDetails/BookingConfirmation'
import Bookings from '../Nurse/Bookings/Bookings'
import BookingHistory from '../Nurse/Bookings/BookingHistory'
import RescheduleBookings from '../Nurse/RescheduleBooking/RescheduleBooking'
import MySchedule from '../Nurse/MySchedule/Calendar'

import PregnantWomen_Profile from '../Pregnant_Women/PregnantWomen_Profile'
import PregnantMotherProfile from "../Pregnant_Mother/PregnantMother_profile.js";
// Doctor
import Searchresult from "../Doctor_Appointment/Searchresult/searchresult";
import Myprofile from "../Doctor_Appointment/Myprofile/myprofile";
import Editprofile from "../Doctor_Appointment/Myprofile/editprofile";
import Feed from '../Doctor_Appointment/Feed/feed';
import Doctorbooking from "../Doctor_Appointment/Doctorbooking/doctorbooking"

// Book a Room
import HospitalList from "../BookAroom/HospitalList/HospitalList";
// import BookingHospital from "../BookAroom/BookroomBooking/BookingHospital";
import BookingDetails from "../BookAroom/BookroomBooking/BookingDetails";
import BookroomHistory from "../BookAroom/BookroomHistory/BookroomHistory";
import BookingReschedule from "../BookAroom/BookroomBooking/BookingReschedule";
import PaymentReceived_Book from "../BookAroom/PaymentReceived/PaymentReceived";
import ConfirmBooking from "../BookAroom/HospitalList/ConfirmBooking";
import PaymentMethodBook from "../BookAroom/HospitalList/PaymentMethodBook";
import ProceedScreen from "../BookAroom/HospitalList/proceedScreen/ProceedScreen";
import ConfirmPage from "../BookAroom/BookroomBooking/ConfirmPage";
import ProceedReschedule from "../BookAroom/BookroomBooking/proceedReschedule/ProceedReschedule";

// Trainer
import TrainerList from "../Trainer/TrainerList/TainerList";

var hashHistory = require('react-router-redux')

const { Search } = Input;



const { Header, Content } = Layout;
const onSearch = value => console.log(value);


function HeaderLayout (props) {

  let history = useHistory();

    const HistoryPush=(url)=>{
      history.push(url);
      window.location.reload()
      }
      
     
     
       
     
    return(
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 2, width: '100%',display:"flex",borderBottom: "1px solid #f0f0f0" }}>
            {/* <div className="logo" > */}
                <img onClick={()=>HistoryPush("/")} className="HMSlogo" src={Logo} />
            {/* </div> */}
            <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ zIndex: 1, width: '100%', left: "10%" }}>
                <Menu.Item key="1" onClick={()=>HistoryPush("/")} ><div>Home</div></Menu.Item>
                <Menu.Item key="2">Shopping</Menu.Item>
                {/* <Menu.Item key="3">One Watch</Menu.Item> */}
                {/* <Menu.Item key="3">One Watch</Menu.Item> */}
                <Menu.Item key="3">
                </Menu.Item>
            </Menu>
            <Dropdown className="search_dropdown">
  <Dropdown.Toggle  id="dropdown-basic">
  <Search
      placeholder="Doctor or Speciality,Clinic"
      allowClear
      onSearch={onSearch}
      style={{ width: 300, margin: '0 10px' }}
    /> 
                <img className="searchico"src={search} />


     </Dropdown.Toggle>

  <Dropdown.Menu >
    {/* <Dropdown.Item onClick={()=>HistoryPush("/feed")} ><Button className="categorybtn">Doctor</Button></Dropdown.Item> */}
    <Dropdown.Item style={{display:"flex",justifyContent:"center"}} onClick={()=>HistoryPush("/feed")}><Button className="categorybtn">Speciality</Button></Dropdown.Item>
    

  </Dropdown.Menu>
</Dropdown>

<img src={Calendar} style={{width:"20px",cursor:"pointer"}} onClick={()=>HistoryPush("/bookings")}/>


            <Dropdown className="avatar_cont">
  <Dropdown.Toggle  id="dropdown-basic">
      <img src={Logo}/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>HistoryPush("/profile")} >Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-2">My Appointments</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
            </Header>

            <Content className="site-layout" style={{ marginTop: 64 }}>
            <div className="site-layout-background" style={{  minHeight: 380 }}>
                {/* {props.children} */}
                {/* <Searchresult/> */}
                {/* <Myprofile/> */}
                {/* <Editprofile/> */}

                <Router history={hashHistory} basename="HmsMember/?/">
                        
                    <Switch>
                        {/* <Route to="/dashboard" component={Dashboard} exact />
                        <Route path="/" component={Dashboard} exact/> */}
                        {/* Pharmacy */}
                        <Route path="/" component={Dashboard} exact />


                        <Route path="/prescriptionhistory" component={PrescriptionHistory} exact/> 
                        <Route path="/orderdetails" component={OrderTable} exact/> 
                        <Route path="/paymentreceive" component={PaymentReceived} exact/>
                        <Route path="/paymentmethod" component={PaymentMethod} exact/>
                        <Route path="/orderpacking" component={OrderPacking} exact/>
                        {/* Nurse */}
                        <Route path="/nursehistory" component={Nursehistory} exact/>
                        <Route path="/nursedetails" component={NurseDetails} exact/>
                        <Route path="/bookingconfirmation" component={BookingConfirmation} exact/>
                        <Route path="/bookings" component={Bookings}/>
                        <Route path="/bookinghistory" component={BookingHistory}/>
                        <Route path="/reschedulebookings" component={RescheduleBookings}/>
                        <Route path="/myschedule" component={MySchedule}/>

                        <Route path="/pregnantmotherprofile" component={PregnantMotherProfile} exact/>
                        <Route path="/pregnantwomen_profile" component={PregnantWomen_Profile} exact/>
                        {/* Doctor */}
                        <Route path="/profile" component={Myprofile} exact/>
                        <Route path="/doctorEdit" component={Editprofile} exact/>
                        <Route path="/doctorappointment" component={Searchresult} exact/>
                        <Route path="/feed" component={Feed} exact/>
                        <Route path="/doctorbooking" component={Doctorbooking} exact/>


                        {/* Book a Room */}
                        <Route path ="/hospitallist" component={HospitalList}/> 
                        {/* <Route path ="/bookinghospital" component={BookingHospital}/> */}
                        <Route path ="/bookingdetails" component={BookingDetails}/>
                        <Route path="/bookroomhistory" component={BookroomHistory}/>
                        <Route path="/reschedulepage" component={BookingReschedule}/>
                        <Route path="/confirmhospital" component={ConfirmBooking}/>
                        <Route path = "/paymentmethodbook" component={PaymentMethodBook}/>
                        <Route path="/paymentreceived" component={PaymentReceived_Book}/>
                        <Route path = "/proceedpage" component = {ProceedScreen}/>
                        <Route path = "/confirmpage" component = {ConfirmPage} />
                        <Route path="/resheduleproceed" component = {ProceedReschedule}/>

             {/*  */}
                        <Route path = "/tainerlist" component={TrainerList}/>


                    </Switch>
                 </Router>

            </div>
            </Content>
        </Layout>
    )
}

export default HeaderLayout;