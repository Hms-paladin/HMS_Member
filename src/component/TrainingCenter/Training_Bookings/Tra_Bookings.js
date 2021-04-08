import React from 'react'
import {NavLink} from "react-router-dom";
import {Modal} from 'antd'
import HistoryButton from '../../../images/history-button.svg'
import Tc from '../../../images/tr_cat_image.png'
import './Tra_Bookings.scss'
export default function Tra_Bookings(){
    const [CancelOpen,setCancelOpen]=React.useState(false)
    const[HideAdrs,setHideAdrs]=React.useState(false)
    const CancelClick=()=>{
        setCancelOpen(!CancelOpen)
    }
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    const [ReOpen,setReOpen]=React.useState(false)
    const ReOpenClick=()=>{
        setReOpen(true)
    }
    const ReOpenClose=()=>{
        setReOpen(false)
    }
    return(
        <div className="Tra_bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label><NavLink to="/tc_bookingshistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/></NavLink>
            </div>
            <div className="bookhistory_list_parent">
             <div className="diet_bookhistory_list">
                <div className="book_diet_div">  
                  <img src={Tc} className="book_nur_img"/>
                  <div className="book_text_div">
                      <p className="book_h_name">Liverpool Club</p>
                      <p  style={{color:"#AEADAD",fontSize:"13px"}}>Adailia</p>
                      <span><label className="book_h_name">Amount</label><label className="tc_amt_kwd">160 KWD</label></span>
                      <p className="b_form_n">Booked For</p>
                      {[...Array(2)].map((data)=><label className="book_form_name">Dalal</label>)}
                  </div>
                </div> 
               <div>
                   <div style={{textAlign:"end"}}>
                   <div><p style={{color:"#AEADAD",fontSize:"13px"}}>01 Apr 2021</p></div>
                   <p style={{fontSize:"20px"}}>12 sessions</p>
                   <p style={{fontSize:"20px"}}>Two Member Program</p>
                   <div>
                       <NavLink to="/tc_myschedule"><label style={{color:"#F2951B",cursor:"pointer"}}>My schedule</label></NavLink>
                       <NavLink to="/tc_reschedule_bookings"><label style={{color:"#83AF40",margin:"0px 20px",cursor:"pointer"}}>Reschedule</label></NavLink>
                       <label className={CancelOpen?"b_cancel_change":"b_cancel"} onClick={CancelClick}>Cancel</label>
                    </div>
                   </div>
                </div>
                </div> 
            {/* To click cancel button to open this part */}
            {CancelOpen?
            <div className="cancel_part_open">
              <div className="cancel_part_div">
                  <div className="amt_process">Add 100 KWD to Wallet</div>
                  <div className="amt_process">Process Refund 100 KWD</div>
              </div>
              </div>
              :null}
              
           </div>
       
        </div>
    )
}