import React from 'react'
import Nurse from '../../../images/nurse.png'
import './BookroomHistory.css'
import {Modal} from 'antd';
import BookCreateReview from "./BookCreateReview";
import HospitalView from './HospitalViewModal';
import BookroomRepeat from './BookroomRepeat';

export default function BookroomHistory(props){
   
        const [ModalOpen,setModalOpen]=React.useState(false)
        const ModalClickOpen=()=>{
            setModalOpen(true)
        }
        const ModalClickClose=()=>{
            setModalOpen(false)
        }
        const [ReviewOpen,setReviewOpen]=React.useState(false)
        const ReviewClickOpen=()=>{
            setReviewOpen(true)
        }
        const ReviewClickClose=()=>{
            setReviewOpen(false)
        }
        const [RepeatOpen,setRepeatOpen]= React.useState(false)
        const RepeatClickOpen=()=>{
            setRepeatOpen(true)   
        }
        const RepeatClickClose=()=>{
            setRepeatOpen(false)   
        }
        const BookingDetails=[
            {
                id:1,
                name:"Royal Clinic Hospital",
                location:"Shamiya",
                Date:"26 Nov 2020",
                hos_name:"Dasman",
               
            },
            {
                id:2,
                name:"Mayo Clinic Hospital",
                location:"Shaab Sea view",
                Date:"15 Nov 2020",
                history:"Rescheduled",
                hos_name:"Lulwa",
                historyid:10
            },
            {
                id:3,
                name:"Dar AlSalam Hospital",
                location:"Shaab Sea view",
                Date:"20 Nov 2020",
                hos_name:"Lulwa",
                history:"Cancelled",
                historyid:8
            }
        ]
         return(
            <div className="bookings_parentdiv">
                 <div className="book_headdiv">
                <label className="book_h">Booking History</label>
                </div>
                {BookingDetails.map((data,index)=>
    
                <div className="bookhistory_list_parent">
                    <div className="bookhistory_list_item">
                        <div className="book_room_div">  
                        <img src={Nurse} className="book_room_img"/>
                        <div className="book_text_div">
                            <p className="book_h_name">{data.name}</p>
                            <p className="loaction_align">{data.location}<span className="dot_align" onClick={ModalClickOpen}>...</span></p>
                            <p>{data.Date}</p>
                            <div className={data.historyid===8?"his_cancel":"history_reschedule"} >{data.history}</div>
                        </div>
                        </div> 
        
                        <div style={{width:"35%"}}>
                            <div className="room_div">
                                <label>Room Type</label>
                                <label style={{color:"#AEADAD",fontSize:"13px"}}>{data.hos_name}</label>
                                <div>
                            <label className="history_review" onClick={ReviewClickOpen}>Review</label>
                            <label className="history_repeat" onClick={RepeatClickOpen}>Repeat</label>
                        </div>
                            </div>
                        </div>
                    </div> 
                        
                 </div>
                )}
                 <Modal
                  title={false}
                  visible={ModalOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                  className="confirm_modal"
                  onCancel={ModalClickClose}
                 >
                  
                     <HospitalView />
    
                 </Modal>
                 <Modal
                  title={false}
                  visible={RepeatOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                  className="confirm_modal"
                  onCancel={RepeatClickClose}
                 >
                  
                     <BookroomRepeat />
    
                 </Modal>
                 <Modal
                  title={false}
                  visible={ReviewOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                //   className="confirm_modal"
                  onCancel={ReviewClickClose}
                 >
                     <BookCreateReview ModalClickClose={ReviewClickClose}/> 
                    
    
                 </Modal>
               
             </div>       
         )
    
    
}
