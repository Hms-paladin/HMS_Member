import React from 'react'
import './Tra_BookingHistory.scss'
import {Modal} from 'antd'
import Tra_CreateReview from './Tra_CreateReview'
import Tc from '../../../images/tr_cat_image.png'
import BookingHistoryModal from './Tra_BookingHistoryModal'
export default function Tra_BookingHistory(props){
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
            img:Tc
        },
        {
            id:3,
            name:"Lina's & Dina's",
            Date:"20 Apr 2021",
            diet:"Fiber Diet",
            img:Tc

        }
    ]
    const[HideAdrs,setHideAdrs]=React.useState(false)
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
     return(
        <div className="Tc_history">
             <div className="book_headdiv">
            <label className="book_h">Booking History</label>
            </div>
            {BookingDetails.map((data,index)=>

            <div className="bookhistory_list_parent">
             <div className="bookhistory_list_item">
                <div className="book_nurse_div">  
                  <div>
                    <div><img src={data.img} className="book_nur_img"/></div>
                    <div className={data.historyid===8?"his_cancel":"his_reschedule"} onClick={ModalClickOpen}>{data.history}</div>
                  </div>
                    <div className="book_text_div">
                       <p className="book_h_name">Liverpool Club</p>
                      <p  style={{color:"#AEADAD",fontSize:"13px"}}>Adailia</p>
                      <span><label className="book_h_name">Amount</label><label className="tc_amt_kwd">160 KWD</label></span>
                      <p className="b_form_n">Booked For</p>
                      {[...Array(2)].map((data)=><label className="book_form_name">Dalal</label>)}
                      </div>
                </div> 

                <div style={{textAlign:"end"}}>
                  <div><p style={{color:"#666666",fontSize:"13px"}}>01 Apr 2021</p></div>
                   <p style={{fontSize:"20px"}}>12 sessions</p>
                   <p style={{fontSize:"20px"}}>Two Member Program</p>
                   <p>Cancelled Date & Time</p>
                   <p style={{fontWeight:"400",color:"#666666"}}>03 Apr 2021</p>
                   <p style={{fontWeight:"400",color:"#666666"}}>10.30 PM</p>
                </div>
                </div> 
                 
                   <div className="book_his_parent">
                      <div><label className="his_review" onClick={ReviewClickOpen}>Review</label><label className="his_repeat">Repeat</label></div>
                  </div>
             </div>
            )}
             <Modal
              title={false}
              visible={open}
              footer={false}
              size={"lg"}
              {...props}
              centered
              className=""
              onCancel={ModalClickClose}
             >
                 {/* <CreateReview ModalClickClose={ModalClickClose}/> */}
                 {/* {ModalOpen&&<BookingHistoryModal History={BookingDetails}/> */}
                  {ReviewOpen&&<Tra_CreateReview ModalClickClose={ReviewClickClose}/>} 

             </Modal>
          
         </div>       
     )
}