import React,{useEffect} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import HistoryButton from '../../../images/history-button.svg'
import Hospital  from "../../../images/BookaRoom/room_img.png"
import './BookingDetails.css';
import {Modal} from 'antd';
import { connect, useDispatch } from 'react-redux'
import HospitalView from "../BookroomHistory/HospitalViewModal"
import { GetRoomBookingDetails } from '../../../actions/Book a RoomActions'
function BookingDetails(props){
  let dispatch=useDispatch()
  const [ ModalOpen, setModalOpen]=React.useState(false)
   const ModalClickOpen=()=>{
    setModalOpen(true)
   }
   const ModalClickClose=()=>{
     setModalOpen(false)
   }
    let history= useHistory();
    const [CancelOpen,setCancelOpen]=React.useState(false)
    const CancelClick=()=>{
        setCancelOpen(!CancelOpen)

    }
     function ReshedulePage(){
       history.push("/reschedulepage")
    }
    useEffect(()=>{
       dispatch(GetRoomBookingDetails())
    },[])
    useEffect(()=>{
   },[])
   console.log("props",props)
    return(
        <div className="bookings_parentdiv">
{/* Booking header */}
          <div className="book_headdiv">
             <label className="book_h">Bookings</label>
             <NavLink to="/bookroomhistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px", marginRight:'24px'}}/></NavLink>
          </div>
{/* body of the book */}
         <div className="bookhistory_list_parent">
           <div className="bookhistory_list">
              <div className="book_div">  
                    <img src={Hospital} className="book_img"onClick={ModalClickOpen} />
                    <div className="book_text_div"><p className="book_h_name">Mayo Clinic Hospital</p>
                        <p style={{color:'#AEADAD', fontSize:'16px'}}>Shaab Sea View <span className="dot_align" style={{cursor:'pointer'}}>... </span></p>
                        <p>27 Nov 2020</p>
                    </div>
              </div> 
              <div style={{width:"35%"}}>
                <div className="room_div"><p>Room Type</p><p style={{color:"#AEADAD",fontSize:"13px"}}>Lulwa</p></div>
              </div>
          </div>    
  {/*shedule and cancel  */}
          <div className="cancel_div">
               <label className="book_shedule" onClick={ReshedulePage}>Reschedule</label>
               <label  className={CancelOpen?"b_cancel_change":"cancel_align"} onClick={CancelClick}>Cancel</label>
          </div>
    {/* To click cancel button to open this part */}
          {CancelOpen?
            <div className="cancel_part_open">
                <div className="cancel_part_div">
                    <div className="amt_process">Add 480 KWD to Wallet</div>
                    <div className="amt_process">Process Refund 480 KWD</div>
                </div>
             </div>
            :
            null
          }
         
      </div>
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
                  
                     <HospitalView/>
    
                 </Modal>
   </div>
    )
}
const mapStateToProps=(state)=>({
  BookList:state.BookRoom.BookList || []

})
export default connect(mapStateToProps)(BookingDetails);


