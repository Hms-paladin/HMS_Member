import React, { useState } from 'react'
import './login.scss'
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import VerifyOTP from './VerifyOTP'
import SignUpForm from './SignupForm'
import {Input} from 'antd'
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import {notification} from 'antd'
import axios from 'axios'
import {apiurl} from '../../utils/baseUrl'
import { useAuth } from "../../context/auth";
export default function Login(props){
      // login modal open function
      const [open, setOpen] = React.useState(false);
      const [visible,setvisible]=React.useState(false)
      const [signup, setsignup] = React.useState(false);
      const [logindata,setlogindata]=useState({
           datepicker:""
      })
      const handleClickOpen = () => {
       
      };
     const ClickJoinHere=()=>{
      setOpen(false);
      setsignup(true)
      setvisible(true)

     }
      const handleClose = () => {
        setOpen(false);
        setsignup(false)
        setvisible(false)
      };
     const [phone,setphone]=useState('')
     const handleOnChange = (value,data) => {
            setphone(value)
            setError(false)
    };
    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const [Error,setError]=useState(false)
    const { setAuthTokens } = useAuth();
    const Login=(event)=>{
      if(phone===""){
        setError(true)
      }
      // var value=phone
      var ms = 298999;
     var d = new Date(1000*Math.round(ms/1000)); // round to nearest second
    function pad(i) { return ('0'+i).slice(-2); }
    var str = d.getUTCHours() + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds());
    console.log(str); // 0:04:59
     
        axios.post(apiurl+"Patient/patientLogin", {
          "ccode": "91",   
          "patientMobileNumber": phone,
          "requestTime":ms 
          }).then(res => {
            if (res.data.status === 1) {
              alert("true")
              setAuthTokens(res.data)
              setLoggedIn(true)
        console.log("response",isLoggedIn)
             
            }
          }).catch(e => {
            notification.error({
                message: 'something wrong',
              });
          });
          if(Error===false){
          setOpen(true);
          setsignup(false)
          setvisible(true)
        }

        // setLoggedIn(())
    }
    return(
      <>
        {/* <div className={`login_parent ${open ?'d':signup?"d":""}`}> */}
        <div className="login_parent">
            <CloseIcon className="l_closeicon" onClick={()=>props.handleClose(false)}/>
            <div className="login_head">Log In</div>
            {/* <TextField id="standard-basic" label="Enter your phone number" className="text_field"/> */}
            <div className="enetr_mobile">Enter your phone number</div>
            <ReactPhoneInput 
               
                country={'in'}
                
                value={phone}
                onChange={handleOnChange}
             />
             <div className="error_msg">{Error?"Please enter your mobile number":""}</div>
            <Button className="send_otp" onClick={Login}>Send OTP</Button>
            <div className="join_member_text">Not a member yet?</div>
            <Button className="join_btn" onClick={ClickJoinHere}>Join here</Button>
            <div className="logging_ins_text">By logging in you agree to THE ONE MOMENT <span>Privacy policy</span> And <span>Terms and conditions</span></div>
           {!Error&& <Dialog
        open={visible}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
        className={open?"verify_modal":"signup_modal"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {open?<VerifyOTP handleClose={handleClose} phoneno={phone}/>:
        signup?<SignUpForm handleClose={handleClose}/>:null}
        </Dialog>}
        </div>
        </>
    )
}