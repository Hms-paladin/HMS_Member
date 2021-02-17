import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import HistoryButton from '../../../images/history-button.svg'
import Nurse from '../../../images/nurse.png'
import './BookingDetails.css';

function BookingDetails(){
    let history= useHistory();
    const [CancelOpen,setCancelOpen]=React.useState(false)
    const CancelClick=()=>{
        setCancelOpen(!CancelOpen)

    }
     function ReshedulePage(){
       history.push("/reschedulepage")
    }
    return(
        <div className="bookings_parentdiv">
{/* Booking header */}
          <div className="book_headdiv">
             <label className="book_h">Bookings</label>
             <NavLink to="/bookroomhistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px", marginRight:'24px'}}/></NavLink>
          </div>
{/* body of the book */}
         <div className="bookhistory_list_parent">
           <div className="bookhistory_list">
              <div className="book_div">  
                    <img src={Nurse} className="book_img"/>
                    <div className="book_text_div"><p className="book_h_name">Mayo Clinic Hospital</p>
                        <p>Shaab Sea View <span style={{cursor:'pointer'}}>... </span></p>
                        <p>27 Nov 2020</p>
                    </div>
              </div> 
              <div style={{width:"35%"}}>
                <div className="room_div"><p>Room Type</p><p style={{color:"#AEADAD",fontSize:"13px"}}>Lulwa</p></div>
              </div>
          </div>    
  {/*shedule and cancel  */}
          <div className="cancel_div">
               <label className="book_shedule" onClick={ReshedulePage}>Re Shedule</label>
               <label  className={CancelOpen?"b_cancel_change":"cancel_align"} onClick={CancelClick}>Cancel</label>
          </div>
    {/* To click cancel button to open this part */}
          {CancelOpen?
            <div className="cancel_part_open">
                <div className="cancel_part_div">
                    <div className="amt_process">Add 480 KWD to Wallet</div>
                    <div className="amt_process">Process Refund 480 KWD</div>
                </div>
             </div>
            :
            null
          }
         
      </div>
   </div>
    )
}
export default BookingDetails;




