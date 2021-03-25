import React from 'react'
import {NavLink} from "react-router-dom";
import {Modal} from 'antd'
import HistoryButton from '../../../images/history-button.svg'
import Diet from '../../../images/diet1.png'
import './Diet_Bookings.scss'
import BookingHistoryModal from './Diet_BookingHistoryModal'
export default function Diet_Bookings(props){
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
    const [ModalOpen,setModalOpen]=React.useState(false)
    const ModalClickOpen=()=>{
        setModalOpen(true)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
    }
    return(
        <div className="diet_bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label><NavLink to="/diet_bookinghistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/></NavLink>
            </div>
            <div className="bookhistory_list_parent">
             <div className="diet_bookhistory_list">
                <div className="book_diet_div">  
                  <img src={Diet} className="book_nur_img" onClick={ModalClickOpen}/>
                  <div className="book_text_div">
                      <p className="book_h_name">Healthy Eats</p>
                      <p  style={{color:"#AEADAD",fontSize:"13px"}}>Keto Diet</p>
                      <p>16 Apr 2021</p>
                  </div>
                </div> 
               <div>
                   <div style={{textAlign:"end"}}>
                   <p>Total Days</p>
                   <div><p style={{color:"#AEADAD",fontSize:"13px"}}>28</p></div>
                   <div><label className={CancelOpen?"b_cancel_change":"b_cancel"} onClick={CancelClick}>Cancel</label></div>
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
           <Modal
              title={false}
              visible={ModalOpen}
              footer={false}
              {...props}
              centered
              width={650}
              onCancel={ModalClickClose}
             >
                 {/* <CreateReview ModalClickClose={ModalClickClose}/> */}
                 <BookingHistoryModal />

             </Modal>
        </div>
    )
}