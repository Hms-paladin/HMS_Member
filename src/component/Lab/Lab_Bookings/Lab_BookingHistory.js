import React from 'react'
import Nurse from '../../../images/lab_history.jpg'
import './Lab_BookingHistory.scss'
import {Modal} from 'antd'
import CreateReview from './Lab_CreateReview'
import BookingHistoryModal from './Lab_BookingHistoryModal'
export default function Lab_BookingHistory(props){
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
            name:"YIACO Medical Center",
            Date:"16 Apr 2021",
            history:"Cancelled",
            dutyhours:"09:00 AM",
            historyid:8
        },
        {
            id:2,
            name:"YIACO Medical Center",
            Date:"18 Apr 2021",
            history:"Rescheduled",
            dutyhours:"09:00 AM",
            historyid:10
        },
        {
            id:3,
            name:"YIACO Medical Center",
            Date:"20 Apr 2021",
            dutyhours:"09:00 AM"

        }
    ]
    const[HideAdrs,setHideAdrs]=React.useState(false)
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
     return(
        <div className="Lab_history">
             <div className="book_headdiv">
            <label className="book_h">Booking History</label>
            </div>
            {BookingDetails.map((data,index)=>

            <div className="bookhistory_list_parent">
             <div className="bookhistory_list_item">
                <div className="book_nurse_div">  
                  <img src={Nurse} className="book_nur_img" onClick={ModalClickOpen}/><div className="book_text_div">
                      <p className="book_h_name">{data.name}</p>
                      <div>{HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">Jabriya</label>}
                       <span className="elipse" onClick={ElipseOpen}>...</span></div>
                      <p>{data.Date}</p>
                      </div>
                </div> 

                <div style={{width:"35%"}}>
                   <div className="duty_div"><label style={{color:"#AEADAD",fontSize:"13px",fontWeight:"500"}}>{data.dutyhours}</label></div>
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
              className=""
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