import React from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import {notification} from 'antd'
import {apiurl} from '../../utils/baseUrl'
import { useAuth } from "../../context/auth";
export default function VerifyOTP(props){
    const { setAuthTokens } = useAuth();
    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const verifyOtp=(event)=>{
          axios.post(apiurl+"Patient/patientLogin", {
            "ccode": 91,   
            "patientMobileNumber": props.phoneno,  
            "requestTime":1593512864340,
            "otp":"",
            "token":""  
            }).then(res => {
              if (res.status === 1) {
                setAuthTokens(res.data);
                setLoggedIn(true);
              }
            }).catch(e => {
              notification.error({
                  message: 'something wrong',
                });
            });
           props.handleClose()
          // setLoggedIn(())
      }
    return(
        <div className="verify_code_parent">
             <CloseIcon className="l_closeicon" onClick={()=>props.handleClose(false)}/>
            <div>
                <div className="digit_text">Enter the 4-digit code sent to</div>
                <div className="ph_no">{props.phoneno}</div>
            </div>
            <div className="otp_div">
            {[...Array(4)].map((index)=>(
                <div className="otp"></div>
                      ))} 
             </div>     
             <Button className="verify_btn" onClick={verifyOtp}>Verify</Button>  
             <div className="resend_time">Resend code in 0:51</div>  
        </div>
    )
}