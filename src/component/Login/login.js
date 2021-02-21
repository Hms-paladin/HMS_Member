import React from 'react'
import './login.scss'
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import VerifyOTP from './VerifyOTP'
import SignUpForm from './SignupForm'
export default function Login(props){
      // login modal open function
      const [open, setOpen] = React.useState(false);
      const [visible,setvisible]=React.useState(false)
      const [signup, setsignup] = React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
        setsignup(false)
        setvisible(true)
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
     
    return(
      <>
        <div className={`login_parent ${open ?'d':signup?"d":""}`}>
            <CloseIcon className="l_closeicon" onClick={()=>props.handleClose(false)}/>
            <div className="login_head">Log In</div>
            <TextField id="standard-basic" label="Enter your phone number" className="text_field"/>
            <Button className="send_otp" onClick={handleClickOpen}>Send OTP</Button>
            <div className="join_member_text">Not a member yet?</div>
            <Button className="join_btn" onClick={ClickJoinHere}>Join here</Button>
            <div className="logging_ins_text">By logging in your agree to THE ONE MOMENT <span>Privacy policy</span> And <span>Terms and conditions</span></div>
            <Dialog
        open={visible}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
        className={open?"verify_modal":"signup_modal"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {open?<VerifyOTP handleClose={handleClose}/>:
        signup?<SignUpForm handleClose={handleClose}/>:null}
        </Dialog>
        </div>
        </>
    )
}