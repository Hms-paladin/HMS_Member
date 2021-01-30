import React from "react";
import { Layout, Menu } from 'antd';
import Logo from "../../images/Logo.png";
import search from "../../images/loupe.png";
import Calendar from '../../images/calendar_b.svg'
import { Dropdown } from 'react-bootstrap'
import { Input } from 'antd';
import "./header.scss";
import Button from '@material-ui/core/Button'
import Searchresult from "../Searchresult/searchresult";
import Myprofile from "../Myprofile/myprofile";
import Editprofile from "../Myprofile/editprofile";
import { push } from 'connected-react-router';
import Dashboard from "../Dashboard/dashboard.js";
import { BrowserRouter as Router, Switch, Route,useHistory,Link,NavLink} from "react-router-dom";


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
import RescheduleBookings from '../Nurse/RescheduleBooking/RescheduleBooking'

import PregnantWomen_Profile from '../Pregnant_Women/PregnantWomen_Profile'
import PregnantMotherProfile from "../Pregnant_Mother/PregnantMother_profile.js";
var hashHistory = require('react-router-redux')

const { Search } = Input;



const { Header, Content } = Layout;
const onSearch = value => console.log(value);


function HeaderLayout (props) {
    const HistoryPush=()=>{
        props.history.push("/bookings")
      }
    return(
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%',display:"flex",borderBottom: "1px solid #f0f0f0" }}>
            {/* <div className="logo" > */}
                <img className="HMSlogo" src={Logo} />
            {/* </div> */}
            <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ zIndex: 1, width: '100%', left: "10%" }}>
                <Menu.Item key="1"><div>Home</div></Menu.Item>
                <Menu.Item key="2">Shopping</Menu.Item>
                {/* <Menu.Item key="3">One Watch</Menu.Item> */}
                <Menu.Item key="3">One Watch</Menu.Item>
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
                <img src={Calendar} style={{width:"20px"}} onClick={HistoryPush}/>

     </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/search"><Button className="categorybtn">Doctor</Button></Dropdown.Item>
    <Dropdown.Item href="/search"><Button className="categorybtn">Speciality</Button></Dropdown.Item>
    

  </Dropdown.Menu>
</Dropdown>

            <Dropdown className="avatar_cont">
  <Dropdown.Toggle  id="dropdown-basic">
      <img src={Logo}/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile" component={Link} to="/profile">Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-2">My Appointments</Dropdown.Item>
    <Dropdown.Item href="#/action-3">My Bookings</Dropdown.Item>
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

                        <Route path="/pregnantmotherprofile" component={PregnantMotherProfile} exact/>
                        <Route path="/pregnantwomen_profile" component={PregnantWomen_Profile} exact/>
                        <Route path="/profile" component={Myprofile} exact/>
                        <Route path="/doctorEdit" component={Editprofile} exact/>
                        <Route path="/search" component={Searchresult} exact/>

                    </Switch>
                 </Router>

            </div>
            </Content>
        </Layout>
    )
}

export default HeaderLayout;