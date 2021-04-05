import React, { useState, useEffect } from "react";
import { Layout, Menu } from 'antd';
import Logo from "../../images/Logo.png";
import search from "../../images/loupe.png";
import calendar from '../../images/calendar_b.svg'
import { Dropdown } from 'react-bootstrap'
import { Input } from 'antd';
import PersonIcon from '@material-ui/icons/Person';
import "./header.scss";
import Profile from '../../images/nurse.png'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import VideocamIcon from '@material-ui/icons/Videocam';
import Notification from './Notification'
import { BrowserRouter as Router, Switch, Route, useHistory, useRouteMatch, withRouter, useLocation } from "react-router-dom";
// login
import Login from '../Login/login'
import SignUpForm from '../Login/SignupForm'

var hashHistory = require('react-router-redux')

const { Search } = Input;


const { Header, Content } = Layout;
const onSearch = value => console.log(value);


function HeaderLayout(props) {
  let location = useLocation();
  const [login_disble, setlogin_disble] = useState(false)
  const [login_enable, setlogin_enable] = useState(true)
  const [b_hide, setb_hide] = useState(false)
  const [b_enable, setb_enable] = useState(false)
  let history = useHistory();
  useEffect(() => {
    let path_name = location.pathname

    if (location.pathname != "/") {
      setlogin_disble(true)
      setlogin_enable(false)
    }
    else if (location.pathname == "/") {
      setlogin_disble(false)
      setlogin_enable(true)
    }
    if (location.pathname === "/feed" ||location.pathname === "/appointment"||location.pathname === "/history"  ||  location.pathname === "/doctorbooking" || location.pathname === "/profile" || location.pathname === "/doctorbookingreschedule" || location.pathname === "/doctorEdit"|| location.pathname === "/advertisement"|| location.pathname === "/reports"|| location.pathname === "/prescriptionhistory"|| location.pathname === "/orderdetails"|| location.pathname === "/orderpacking"|| location.pathname === "/physiotheraphy_ad"|| location.pathname === "/Advertisement_diet"|| location.pathname === "/Advertisement_diet") {
      setb_hide(false)
      // setb_enable(true)
    } else {
      setb_hide(true)
    }

  }, [login_disble, login_enable, location])
  const Change_Bookings = (data) => {
    let path_name = location.pathname
    // localStorage.setItem({path_name})
    console.log(path_name, "pathname")
    if (path_name === "/nursehistory" || path_name === "/nursedetails" || path_name === "/bookingconfirmation" || path_name === "/nursebookings") {
      history.push("/nursebookings")

    }


    else if (path_name === "/labhistory" || path_name === "/clinicallab") {
      history.push("/LabBookings")

    }
    else if (path_name === "/Diet_history" || path_name === "/goalweight") {
      history.push("/DietBookings")
    }
    else if (path_name === "/feed" || path_name === "/doctorbooking" || path_name === "/profile" || path_name === "/doctorbookingreschedule" || path_name === "/doctorEdit") {
      history.push("/appointment")
    }
    else if (path_name === "/hospitallist" || path_name==="/proceedpage" || path_name==="/confirmhospital") {
      history.push("/bookingdetails")
    }
    else if (path_name === "/tc_history") {
      history.push("/tc_Bookings")
    }
    else if (path_name === "/physiotheraphyfeed" || path_name === "/physiotherapistbooking") {
      history.push("/phy_appointment")
    }

  }
  const CategoryPush = (url) => {
    let path_name = location.pathname
    if (path_name === "/physiotheraphyfeed") {
      history.push("/physiotheraphy")
    }
    else if (path_name === "/feed") {
      history.push("/doctorappointment")
    }
  }
  const HistoryPush = (url) => {
    history.push(url);
  }
  // login modal open function
  const [open, setOpen] = useState(false);
  const [signup, setsignup] = useState(false);
  const [visible, setvisible] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
    setsignup(false)
    setvisible(true)
  };
  const ClickSignUp = () => {
    setOpen(false);
    setsignup(true)
    setvisible(true)

  }
  const handleClose = () => {
    setOpen(false);
    setvisible(false)
    setsignup(false)
  };

  const [noti_open, setnoti_open] = useState(false)
  const Open = () => {
    setnoti_open(!noti_open)
  }

  return (
    <Layout className="layot_header temp">
      <Header style={{ position: 'fixed', zIndex: 10, width: '100%', display: "flex", borderBottom: "1px solid #f0f0f0" }}>
        {/* <div className="logo" > */}
        <img onClick={() => HistoryPush("/")} className="HMSlogo" src={Logo} />

        {/* </div> */}
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ zIndex: 1, width: '100%', left: "10%" }}>
          <Menu.Item key="1" onClick={() => HistoryPush("/")} ><div>Home</div></Menu.Item>
          <Menu.Item key="2">Shopping</Menu.Item>
          {/* <Menu.Item key="3">One Watch</Menu.Item> */}
          {/* <Menu.Item key="3">One Watch</Menu.Item> */}
          <Menu.Item key="3">
          </Menu.Item>
        </Menu>
        <Dropdown className="search_dropdown">
          <Dropdown.Toggle id="dropdown-basic">
            <Search
              placeholder="Doctor or Speciality,Clinic"
              allowClear
              onSearch={onSearch}
              style={{ width: 300, margin: '0 10px' }}
            />
            <img className="searchico" src={search} />
          </Dropdown.Toggle>

          <Dropdown.Menu >
            {/* <Dropdown.Item onClick={()=>HistoryPush("/feed")} ><Button className="categorybtn">Doctor</Button></Dropdown.Item>  */}
            <Dropdown.Item style={{ display: "flex", justifyContent: "center" }} onClick={CategoryPush}><Button className="categorybtn">Speciality</Button></Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>

        {login_disble ?
          <div style={{ display: "flex" }}>
            {console.log(b_hide,"b_hide")}
            <img src={calendar} className={!b_hide ? "change_cal_icon" : "cal_icon"} onClick={Change_Bookings} />
            {/* <div className="notif_icon" onClick={Open}>
    <NotificationsIcon/><div></div>
  </div>
  {noti_open?<div className="noti_open">
  <Notification/>
  </div>:""} */}
            <Dropdown className="noti_cont">
              <Dropdown.Toggle id="dropdown-basic">
                <div className="notif_icon">
                  <NotificationsIcon /><div></div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="notifi_div">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="profile_img_div"><img src={Profile} /></div>
                    <div>
                      <div style={{ fontWeight: "600" }}>Dr.Farah</div>
                      <div style={{ fontWeight: "600" }}>Appointment today 09:00 AM</div>
                      <div style={{ fontWeight: "600" }}>Consulting</div>
                      <div style={{ color: "#ccc" }}>Online Consulting</div>
                    </div>
                  </div>
                  <div>
                    <p>10.30 AM</p>
                    <VideocamIcon className="vd_icon" />
                    <p style={{ color: "#ccc", fontSize: "10px" }}>Start Session</p>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>


            <Dropdown className="avatar_cont">
              <Dropdown.Toggle id="dropdown-basic">
                <PersonIcon style={{ fontSize: "2rem" }} className="profile" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => HistoryPush("/profile")} >Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => HistoryPush("/appointment")}>My Appointments</Dropdown.Item>
                <Dropdown.Item onClick={() => HistoryPush("/")}>Logout</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
          </div>
          : ""}
        {login_enable ? <div className="login_btndiv"><Button className="login_btn" onClick={handleClickOpen}>Login</Button><Button className="signup_btn" onClick={ClickSignUp}>Sign Up</Button></div> : ""}
        <Dialog
          open={visible}
          onClose={handleClose}
          maxWidth={"xs"}
          fullWidth={true}
          className={signup && "signup_modal"}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {open ? <Login handleClose={handleClose} /> :
            signup ? <SignUpForm handleClose={handleClose} /> : null}
        </Dialog>
      </Header>

      <Content className="site-layout" style={{ marginTop: 64 }}>
        <div className="site-layout-background" style={{ minHeight: 380 }}>
          {/* <Toolbar/> */}
          {props.children}

        </div>
      </Content>

    </Layout>
  )
}

export default HeaderLayout;