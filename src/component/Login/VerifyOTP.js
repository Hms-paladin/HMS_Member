import React from 'react'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
export default function VerifyOTP(props){
    return(
        <div className="verify_code_parent">
             <CloseIcon className="l_closeicon" onClick={()=>props.handleClose(false)}/>
            <div>
                <div className="digit_text">Enter the 4-digit code sent to</div>
                <div className="ph_no">+965 9865436754</div>
            </div>
            <div className="otp_div">
            {[...Array(4)].map((index)=>(
                <div className="otp">5</div>
                      ))} 
             </div>     
             <Button className="verify_btn">Verify</Button>  
             <div className="resend_time">Resend code in 0:51</div>  
        </div>
    )
}