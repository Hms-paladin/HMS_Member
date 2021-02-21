import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Input} from 'antd'
import Button from '@material-ui/core/Button'
import Labelbox from '../../helpers/labelbox/labelbox'
export default function SignUpForm(props){
    const Btns=[{btn:"Male"},{btn:"Female"}]
    return(
            <div className="login_parent">
            <CloseIcon className="l_closeicon" onClick={()=>props.handleClose(false)}/>
            <div className="login_head">Sign Up</div>
            <Input   placeholder="Name" className="input_field"/>
            <Labelbox type="datepicker"/>
            <Input   placeholder="Email" className="input_field"/>
            <Input   placeholder="Phone number" className="input_field"/>
            <div className="sign_btns_div">
             {Btns.map((data,index)=>
             <Button key={index} className="gender_btns">{data.btn}</Button>
             )}
             </div>
             <Button className="verify_btn">Continue</Button>  
        
        </div>
    )
}