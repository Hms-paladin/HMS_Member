import React,{ forwardRef, createRef, useState}from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Input} from 'antd'
import Button from '@material-ui/core/Button'
import Labelbox from '../../helpers/labelbox/labelbox'
import PhoneInput from 'react-phone-input-2';
import { TextField } from '@material-ui/core';
import ValidationLibrary from '../../helpers/validationfunction'
import ReactPhoneInput from 'react-phone-input-2';
import { useAuth } from "../../context/auth";
import {notification} from 'antd'
import axios from 'axios'
import {apiurl} from '../../utils/baseUrl'
import 'react-phone-input-2/lib/style.css'
export default function SignUpForm(props){
    const Btns=[{btn:"Male"},{btn:"Female"}]
    const [Error,setError]=useState(false)
    const { setAuthTokens } = useAuth();
    const [phoneno,setphoneno]=useState("")
    const [logindata,setlogindata]=useState({
      date:{
        value: "",
      validation: [{ "name": "required" }],
      error: null,
      errmsg: null,
      }
    })
    const handleOnChange = (value,data) => {
      setphoneno(value)
      setError(false)
    };
    function checkValidation(data, key) {

      var errorcheck = ValidationLibrary.checkValidation(
          data,
          logindata[key].validation
      );
      let dynObj = {
          value: data,
          error: !errorcheck.state,
          errmsg: errorcheck.msg,
          validation: logindata[key].validation,
      };
    }
    const SignUpDetails=()=>{
      axios.post(apiurl+"Patient/insertPatientDetails", {
        "name":"rani",
        "dob":"1996-04-03",
        "email": "kaveri2ganga@gmail.com", 
        "phone_no":phoneno,
        "gender":"Female",  
        }).then(res => {
          if (res.data.status === 1) {
            setAuthTokens(res.data)
            // setLoggedIn(true)
      console.log("response",res)
           
          }
        }).catch(e => {
          notification.error({
              message: 'something wrong',
            });
        });
       props.handleClose()
    }
    return(
            <div className="login_parent">
            <CloseIcon className="l_closeicon" onClick={()=>props.handleClose(false)}/>
            <div className="login_head">Sign Up</div>
            <Input   placeholder="Name" className="input_field"/>
            <Labelbox type="datepicker"  emptyLabel={"Date of Birth"}
               changeData={(data) =>
                checkValidation(data, "date")
            }
            value={logindata.date.value}
            // error={logindata.date.error}
            // errmsg={logindata.date.errmsg}
            />
   
            {/* <Input   placeholder="Phone number" className="input_field"/> */}
            <Input   placeholder="Enter your email address" className="input_field"/>
            
              <ReactPhoneInput 
               
               country={'in'}
               
               value={phoneno}
               onChange={handleOnChange}
            />
            <div className="error_msg">{Error?"Please enter your mobile number":""}</div>
            <div className="sign_btns_div">
             {Btns.map((data,index)=>
             <Button key={index} className="gender_btns">{data.btn}</Button>
             )}
             </div>
             <Button className="verify_btn" onClick={()=>SignUpDetails()}>Continue</Button>  
        
        </div>
    )
}