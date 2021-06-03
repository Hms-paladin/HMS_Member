import React from 'react'
import Nurse from '../../../images/nurse.png'
import './BookingHistory.scss'
import {Modal} from 'antd'
import CreateReview from './CreateReview'
import BookingHistoryModal from './BookingHistoryModal'
export default function BookingHistory(props){
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
    const BookingDetails=[
        {
            id:1,
            name:"Rose",
            Date:"16 Apr 2021",
            history:"Cancelled",
            dutyhours:"12:00 Hrs",
            historyid:8
        },
        {
            id:2,
            name:"Rose",
            Date:"18 Apr 2021",
            history:"Rescheduled",
            dutyhours:"12:00 Hrs",
            historyid:10
        },
        {
            id:3,
            name:"Rose",
            Date:"20 Apr 2021",
            dutyhours:"12:00 Hrs"

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
                <div className="book_nurse_div">  
                  <img src={Nurse} className="book_nur_img"/><div className="book_text_div"><p className="book_h_name">{data.name}</p><p>{data.Date}</p></div>
                </div> 

                <div style={{width:"35%"}}>
                   <div className="duty_div"><label>Duty Hours</label><label style={{color:"#AEADAD",fontSize:"13px"}}>{data.dutyhours}</label></div>
                </div>
                </div> 
                 
                   <div className="book_his_parent">
                      <div className={data.historyid===8?"his_cancel":"his_reschedule"} onClick={ModalClickOpen}>{data.history}</div>
                      <div><label className="his_review" onClick={ReviewClickOpen}>Review</label><label className="his_repeat" onClick={ModalClickOpen}>Repeat</label></div>
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
              width={900}
              className="confirm_modal"
              onCancel={ModalClickClose}
             >
                 {/* <CreateReview ModalClickClose={ModalClickClose}/> */}
                 <BookingHistoryModal History={BookingDetails}/>

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
                 <CreateReview ModalClickClose={ReviewClickClose}/> 
                

             </Modal>
           
         </div>       
     )
}