import React from 'react'
import {NavLink} from "react-router-dom";
import {Modal} from 'antd'
import HistoryButton from '../../../images/history-button.svg'
import Nurse from '../../../images/b_lab.jpeg'
import './Lab_Bookings.scss'
import Lab_Reschedule from './Lab_Reschedule'
export default function Lab_Bookings(){
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
        <div className="lab_bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label><NavLink to="/Lab_bookinghistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/></NavLink>
            </div>
            <div className="bookhistory_list_parent">
             <div className="bookhistory_list">
                <div className="book_nurse_div">  
                  <img src={Nurse} className="book_nur_img"/>
                  <div className="book_text_div">
                      <p className="book_h_name">Best Clinic Lab</p>
                      <div style={{display:"flex"}}>
                       {HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">Jabriya</label>}
                       <span className="elipse" onClick={ElipseOpen}>...</span></div>
                      <p>16 Apr 2021</p>
                  </div>
                </div> 
               <div style={{width:"25%"}}>
                   <div className="duty_div"><p style={{color:"#AEADAD",fontSize:"13px"}}>09:00 AM</p></div>
                   <div className="duty_snddiv"><label className="book_shedule" onClick={ReOpenClick}>Reshedule</label><label className={CancelOpen?"b_cancel_change":"b_cancel"} onClick={CancelClick}>Cancel</label></div>
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
           <Modal
           className="reshedule_modal"
           onCancel={ReOpenClose}
           visible={ReOpen}
           footer={false}
           centered
           >
            <Lab_Reschedule ReOpenClose={ReOpenClose}/>
           </Modal>
        </div>
    )
}