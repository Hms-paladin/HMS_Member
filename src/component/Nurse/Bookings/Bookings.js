import React from 'react'
import HistoryButton from '../../../images/history-button.svg'
import Nurse from '../../../images/nurse.png'
import './Bookings.scss'
export default function Bookings(){
    return(
        <div className=" bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/> 
            </div>
            <div className="bookhistory_list">
              <div className="book_nurse_div">  
                <img src={Nurse} className="book_nur_img"/><div className="book_text_div"><p className="book_h_name">Rose</p><p>16 Apr 2021</p></div>
               </div> 
               <div style={{width:"35%"}}>
                   <div className="duty_div"><p>Duty Hours</p><p style={{color:"#AEADAD",fontSize:"13px"}}>12:00 Hrs</p></div>
                   <div className="duty_snddiv"><label className="book_shedule">My Shedule</label><label className="book_reshedule">Reshedule</label><label className="b_cancel">Cancel</label></div>
                </div>
            </div>   
        </div>
    )
}