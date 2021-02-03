import React from 'react'
import './ConfirmationModal.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/nurse.png'
import PaymentMethod from '../../Pharmacy/PaymentMethod/PaymentMethod'
import {NavLink} from 'react-router-dom'
export default function ConfirmationModal(props){
    
    return(
       <div className="booking_confirm">
           {/* <div className="bookconfirm">BookingConfirmation</div> */}
           <Grid container spacing={4} className="book_confirm_container">
               <Grid item sm={12} md={2} className="confirm_nurse_imggrid">
                  <div className="Nurse_img_div"><img src={Nurse} className="confir_nurse"/></div>
                  <div className="confirm_b_name">Rose</div>
               </Grid>
               <Grid item sm={12} md={5} >
                   <div className="book_con_snd_part">
                   <div><p className="mem_con_namehead">Name</p><p className="mem_con_name">Dalal</p></div> 
                   <div><p className="mem_con_namehead">Start Date</p><p className="mem_con_name">2 Feb 2021</p></div> 
                   <div><p className="mem_con_namehead">End Date</p><p className="mem_con_name">7 Apr 2021</p></div>
                   </div> 
                   <div className="book_con_snd_part">
                   <div><p className="mem_con_namehead">Duty Hours</p><p className="mem_con_name">12 Hrs</p></div> 
                   <div><p className="mem_con_namehead">Start Time</p><p className="mem_con_name">09.00AM</p></div> 
                   <div><p className="mem_con_namehead">End Time</p><p className="mem_con_name">09.00PM</p></div> 
                   </div>
            </Grid>   
            <Grid item sm={12} md={5} >
                   <div className="book_con_snd_part">
                   <div><p className="mem_con_namehead">Designed Duties</p><p className="mem_con_name">Caring,Baby sitting,In-Home Care,Coordinate with physician</p></div> 
                   <div><p className="mem_con_namehead">Excluded Days</p>
                   <p className="mem_con_name"> Wed 04 Apr 2021,
                   Thu 18 Apr 2021,
                   Mon 22 Apr 2021</p></div> 
                  
                   </div> 
                   <div className="book_con_snd_part">
                   <div><p className="mem_con_namehead">Cost Per Month(KWD)</p><p className="mem_con_name">480</p></div> 
                   <div><p className="mem_con_namehead">General Duties</p><p className="mem_con_name">Baby Care, Elderly Care</p></div> 
                   </div>
            </Grid>  
            <Grid item xs={12} md={12} style={{textAlign:"center"}}>
               <NavLink to="paymentmethod"><Button className="confirm_b_btn">Confirm</Button></NavLink>
               </Grid>   
           </Grid>
           
       </div>
    )
}