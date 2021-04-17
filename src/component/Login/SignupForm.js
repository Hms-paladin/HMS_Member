import React,{ forwardRef, createRef, useState}from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Input} from 'antd'
import Button from '@material-ui/core/Button'
import Labelbox from '../../helpers/labelbox/labelbox'
import PhoneInput from 'react-phone-input-2';
import { TextField } from '@material-ui/core';
import ValidationLibrary from '../../helpers/validationfunction'
export default function SignUpForm(props){
    const Btns=[{btn:"Male"},{btn:"Female"}]
    const [logindata,setlogindata]=useState({
      date:{
        value: "",
      validation: [{ "name": "required" }],
      error: null,
      errmsg: null,
      }
    })
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
    const phoneInput = forwardRef((props, ref) => {

        return (
          <TextField
            inputRef={ref}
            id="outlined-basic"
            fullWidth
            label="Phone Number"
            variant="outlined"
            name="phone"
            // onChange={props}
          />
          );
        });
        const ref = createRef();
        const [phone,setphone]=useState('in')
        const handleOnChange = value => {
         //  alert(value)
       setphone(value)
       };
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
              <PhoneInput 
               
               country={'kw'}
               value={phone}
               onChange={handleOnChange}
               placeholder="Enter your phone number"
               ref={ref} inputComponent={phoneInput} 
            />
            <div className="sign_btns_div">
             {Btns.map((data,index)=>
             <Button key={index} className="gender_btns">{data.btn}</Button>
             )}
             </div>
             <Button className="verify_btn" onClick={()=>props.handleClose(false)}>Continue</Button>  
        
        </div>
    )
}