import React from 'react'
import {NavLink} from "react-router-dom";
import HistoryButton from '../../../images/history-button.svg'
import Nurse from '../../../images/nurse.png'
import Divider from '@material-ui/core/Divider';
import {Modal} from 'antd'
import BookingHistoryModal from './BookingHistoryModal'
import './Bookings.scss'
export default function Bookings(props){
    const [CancelOpen,setCancelOpen]=React.useState(false)
    const CancelClick=()=>{
        setCancelOpen(!CancelOpen)
    }
    const [ModalOpen,setModalOpen]=React.useState(false)
    const ModalClickOpen=()=>{
        setModalOpen(true)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
    }
    return(
        <div className="nurse_bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label><NavLink to="/bookinghistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/></NavLink>
            </div>
            <div className="bookhistory_list_parent">
             <div className="bookhistory_list">
                <div className="book_nurse_div">  
                  <img src={Nurse} className="book_nur_img" onClick={ModalClickOpen}/><div className="book_text_div"><p className="book_h_name">Rose</p><p>16 Apr 2021</p></div>
                </div> 
               <div style={{width:"35%"}}>
                   <div className="duty_div"><p>Duty Hours</p><p style={{color:"#AEADAD",fontSize:"13px"}}>12:00 Hrs</p></div>
                   <div className="duty_snddiv">
                    <NavLink to="/myschedule"><label style={{color:"#F2951B",fontWeight:"600",cursor:"pointer"}}>Myschedule</label></NavLink>
                   <NavLink to="/reschedulebookings"><label style={{color:"#83AF40",fontWeight:"600",padding:"0px 20px",cursor:"pointer"}}>Reschedule</label></NavLink>
                   <label className={CancelOpen?"b_cancel_change":"b_cancel"} onClick={CancelClick}>Cancel</label></div>
                </div>
                </div> 
            {/* To click cancel button to open this part */}
            {CancelOpen?
            <div className="cancel_part_open">
              <div className="cancel_part_div">
                  <div className="amt_process">Add 480 KWD to Wallet</div>
                  <div className="amt_process">Process Refund 480 KWD</div>
              </div>
              </div>
              :null}
              
           </div>
           <Modal
              title={false}
              visible={ModalOpen}
              footer={false}
              size={"lg"}
              {...props}
              centered
              width={900}
              className="confirm_modal"
              onCancel={ModalClickClose}
             >
                 {/* <CreateReview ModalClickClose={ModalClickClose}/> */}
                 <BookingHistoryModal />

             </Modal>
        </div>
    )
}