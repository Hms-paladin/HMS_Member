import React, { useEffect, useState } from 'react'
import Hospital from '../../../images/BookaRoom/room_img.png';
import './BookroomHistory.css'
import {Modal} from 'antd';
import BookCreateReview from "./BookCreateReview";
import HospitalView from './HospitalViewModal';
import {connect, useDispatch} from 'react-redux'
import BookroomRepeat from './BookroomRepeat';
import { GetRoomBookingHistoryDetails } from  '../../../actions/Book a RoomActions'
import moment from 'moment'
import { useHistory } from 'react-router-dom';
function BookroomHistory(props){
        let dispatch=useDispatch()
        let history=useHistory()
        const [ModalOpen,setModalOpen]=React.useState(false)
        const [bookingHistory,setbookingHistory]=useState([])
        const [Historydetails,setHistorydetails]=useState("")
        const ModalClickOpen=(id)=>{
            var Data= props.BookingHistory.find((data)=>{
                return data.roomBookingId==id
            })
            setModalOpen(true)
            setHistorydetails(Data)
        }
       
        const [ReviewOpen,setReviewOpen]=React.useState(false)
        const ReviewClickOpen=(id)=>{
            var Data= props.BookingHistory.find((data)=>{
                return data.roomBookingId==id
            })
            setHistorydetails(Data)
            setReviewOpen(true)
        }
        const [RepeatOpen,setRepeatOpen]= React.useState(false)
        const RepeatClickOpen=()=>{
            history.push('/proceedpage')
            // setRepeatOpen(true)   
        }
     
     
        useEffect(()=>{
          dispatch(GetRoomBookingHistoryDetails())
        },[])
        useEffect(()=>{
            var History=[]
            props.BookingHistory.map((data)=>{
                History.push(data)
            })
            setbookingHistory(History)
        },[props.BookingHistory])
         return(
            <div className="bookings_parentdiv">
                 <div className="book_headdiv">
                <label className="book_h">Booking History</label>
                </div>
                {bookingHistory.map((data,index)=>{
                    
                    return(
    
                <div className="bookhistory_list_parent">
                    <div className="bookhistory_list_item">
                        <div className="book_room_div">  
                        <img src={data?.vendorProfileImage} className="book_room_img" onClick={()=>ModalClickOpen(data.roomBookingId)} alt={"1"}/>
                        <div className="book_text_div">
                            <p className="book_h_name">{data.roomVendorName}</p>
                            <p className="loaction_align">{data.vendor_address}<span className="dot_align" onClick={()=>ModalClickOpen(data.roomBookingId)}>...</span></p>
                            <p>{moment(data.booked_date).format("DD-MMM-YYYY")}</p>
                            <div className={data.cancel_status==1?"book_his_cancel":"history_reschedule"} >{data.rescheduled_booking_id==1 && "Resheduled" || data.cancel_status==1 && "Cancelled" || "Completed"}</div>
                        </div>
                        </div> 
        
                        <div style={{width:"35%"}}>
                            <div className="room_div">
                                <label>Room Type</label>
                                <label style={{color:"#AEADAD",fontSize:"13px"}}>{data.br_room_type}</label>
                                <div>
                            <label className="history_review" onClick={()=>ReviewClickOpen(data.roomBookingId)}>Review</label>
                            <label className="history_repeat" onClick={()=>RepeatClickOpen(data.roomBookingId)}>Repeat</label>
                        </div>
                            </div>
                        </div>
                    </div> 
                        
                 </div>
                )})}
                 <Modal
                  title={false}
                  visible={ModalOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                  width={1000}
                //   className="confirm_modal"
                  onCancel={()=>setModalOpen(false)}
                 >
                  
                     <HospitalView BookingList={Historydetails}/>
    
                 </Modal>
                 {/* <Modal
                  title={false}
                  visible={RepeatOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                  width={650}
                  className="confirm_modal"
                  onCancel={()=>setRepeatOpen(false)}
                 >
                  
                     <BookroomRepeat />
    
                 </Modal> */}
                 <Modal
                  title={false}
                  visible={ReviewOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                //   className="confirm_modal"
                  onCancel={()=>setReviewOpen(false)}
                 >
                     <BookCreateReview ModalClickClose={()=>setReviewOpen(false)} BookingList={Historydetails}/> 
                    
                 </Modal>
               
             </div>       
         )
    
    
}
const mapStateToProps=(state)=>({
    BookingHistory:state.BookRoom.BookingHistory || []

})
export default connect(mapStateToProps)(BookroomHistory);