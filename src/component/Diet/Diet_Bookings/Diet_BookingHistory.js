import React from 'react'
import Diet1 from '../../../images/diet1.png'
import Diet2 from '../../../images/Diet_b.png'
import './Diet_BookingHistory.scss'
import {Modal} from 'antd'
import Diet_CreateReview from './Diet_CreateReview'
import BookingHistoryModal from './Diet_BookingHistoryModal'
export default function Diet_BookingHistory(props){
    const [ModalOpen,setModalOpen]=React.useState(false)
    const [open,setopen]=React.useState(false)
    const ModalClickOpen=()=>{
        setModalOpen(true)
        setopen(true)
        setReviewOpen(false)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
        setopen(false)
    }
    // Review function
    const [ReviewOpen,setReviewOpen]=React.useState(false)
    const ReviewClickOpen=()=>{
        setReviewOpen(true)
        setModalOpen(false)
        setopen(true)
    }
    const ReviewClickClose=()=>{
        setReviewOpen(false)
        setopen(false)
    }
    const BookingDetails=[
        {
            id:1,
            name:"Healthy Eats",
            Date:"16 Apr 2021",
            history:"Cancelled",
            diet:"Keto Diet",
            historyid:8,
            img:Diet1
        },
        {
            id:3,
            name:"Lina's & Dina's",
            Date:"20 Apr 2021",
            diet:"Fiber Diet",
            img:Diet2

        }
    ]
    const[HideAdrs,setHideAdrs]=React.useState(false)
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
     return(
        <div className="Diet_history">
             <div className="book_headdiv">
            <label className="book_h">Booking History</label>
            </div>
            {BookingDetails.map((data,index)=>

            <div className="bookhistory_list_parent">
             <div className="bookhistory_list_item">
                <div className="book_nurse_div">  
                  <img src={data.img} className="book_nur_img" onClick={ModalClickOpen}/><div className="book_text_div">
                      <p className="book_h_name">{data.name}</p>
                      <p  style={{color:"#AEADAD",fontSize:"13px"}}>{data.diet}</p>
                      <p>{data.Date}</p>
                      </div>
                </div> 

                <div style={{textAlign:"end"}}>
                   <p>Total Days</p>
                   <div><p>28</p></div>
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
              visible={open}
              footer={false}
              {...props}
              width={ModalOpen?650:ReviewOpen?560:null}
              centered
              onCancel={ModalClickClose}
             >
                 {/* <CreateReview ModalClickClose={ModalClickClose}/> */}
                 {ModalOpen?<BookingHistoryModal History={BookingDetails}/>:
                 ReviewOpen?<Diet_CreateReview ModalClickClose={ReviewClickClose}/>:null} 

             </Modal>
          
         </div>       
     )
}