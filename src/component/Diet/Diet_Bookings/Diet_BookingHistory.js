import React, { useEffect,useState } from 'react'
import Diet1 from '../../../images/diet1.png'
import Diet2 from '../../../images/Diet_b.png'
import './Diet_BookingHistory.scss'
import {Modal} from 'antd'
import Diet_CreateReview from './Diet_CreateReview'
import BookingHistoryModal from './Diet_BookingHistoryModal'
import { connect, useDispatch } from 'react-redux'
import { DietBookingHistory,AddRepeatMenu} from '../../../actions/DietHistoryActions'
import moment from 'moment'
 function Diet_BookingHistory(props){
     let dispatch=useDispatch()
    const [ModalOpen,setModalOpen]=React.useState(false)
    const [open,setopen]=React.useState(false)
    const [bookingid,setbookingid]=useState([])
    const ModalClickOpen=(id)=>{
        var bookingid=BookingDetails.find((data)=>{
            return(data.dietbookingId==id)
        })
        setbookingid(bookingid)
        setModalOpen(true)
        setopen(true)
        setReviewOpen(false)
    }
    console.log("check",bookingid)
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
    const RepeatMenuAdded=(id)=>{
        var RepeatId=BookingDetails.find((data)=>{
            return(data.dietbookingId==id)
        })
        dispatch(AddRepeatMenu(RepeatId))
       console.log("BookingDetails",RepeatId)

    }
   const [BookingDetails,setBookingDetails]=useState([])
   useEffect(()=>{
     dispatch(DietBookingHistory())
   },[])
   useEffect(()=>{
       let History=[]
       props.BookingHistory[0]?.details.map((data)=>{
        History.push(data)
       })
       setBookingDetails(History)
  },[props.BookingHistory])
     return(
        <div className="Diet_history">
             <div className="book_headdiv">
            <label className="book_h">Booking History</label>
            </div>
            {BookingDetails.map((data,index)=>

            <div className="bookhistory_list_parent">
             <div className="bookhistory_list_item">
                <div className="book_nurse_div">  
                  <img src={data.vendor_profile_path} className="book_nur_img" onClick={()=>ModalClickOpen(data.dietbookingId)}/><div className="book_text_div">
                      <p className="book_h_name">{data.vendor_name}</p>
                      <p  style={{color:"#AEADAD",fontSize:"13px"}}>{data.diet_package_name}</p>
                      <p>{moment(data.from_date).format("DD MMM YYYY")}</p>
                      </div>
                </div> 

                <div style={{textAlign:"end"}}>
                   <p>Total Days</p>
                   <div><p>{data.diet_duration}</p></div>
                </div>
                </div> 
                 
                   <div className="book_his_parent">
                      <div className={data.cancel_status===1?"his_cancel":data.cancel_status===0?"his_reschedule":""} onClick={()=>ModalClickOpen(data.dietbookingId)}>{data.Bookingstatus}</div>
                      <div><label className="his_review" onClick={ReviewClickOpen}>Review</label><label className="his_repeat" onClick={()=>RepeatMenuAdded(data.dietbookingId)}>Repeat</label></div>
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
                 {ModalOpen?<BookingHistoryModal bookingHistory={bookingid} />:
                 ReviewOpen?<Diet_CreateReview ModalClickClose={ReviewClickClose}/>:null} 

             </Modal>
          
         </div>       
     )
}
const mapStateToProps=(state)=>({
    BookingHistory:state.DietReducer.BookingHistory
})
export default connect(mapStateToProps)(Diet_BookingHistory);