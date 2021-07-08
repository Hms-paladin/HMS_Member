import React, { useEffect,useState} from 'react'
import {NavLink} from "react-router-dom";
import {Modal} from 'antd'
import HistoryButton from '../../../images/history-button.svg'
import Diet from '../../../images/diet1.png'
import './Diet_Bookings.scss'
import BookingHistoryModal from './Diet_BookingHistoryModal'
import { DietBookingList } from '../../../actions/DietHistoryActions'
import { useDispatch,connect } from 'react-redux';
import moment from 'moment'
 function Diet_Bookings(props){
    let dispatch=useDispatch()
    const [CancelOpen,setCancelOpen]=React.useState(false)
    const [bookingid,setbookingid]=useState([])
    const [Bookings,setBookings]=useState([])
    const [Open,setOpen]=useState("")
    const CancelClick=(index,id)=>{
        if(Bookings[index]?.dietbookingId===id){
            alert("dddd")
        setCancelOpen(!CancelOpen)
        setOpen(1)
        }else{
            setCancelOpen(false)
            setOpen(0)  
        }
    }


    
    const [ModalOpen,setModalOpen]=React.useState(false)
    const ModalClickOpen=(id)=>{
       var bookingid=Bookings.find((data)=>{
           return(data.dietbookingId==id)
       })
       setbookingid(bookingid)
        setModalOpen(true)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
    }
    useEffect(()=>{
       dispatch(DietBookingList())
    },[])
    useEffect(()=>{
        let booking_list=[]
        props.dietBookings[0]?.details.map((data)=>{
            booking_list.push(data)
        })
        setBookings(booking_list)
     },[props.dietBookings])
    return(
        <div className="diet_bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label>
            <NavLink to="/diet_bookinghistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/></NavLink>
            </div>
            <div className="bookhistory_list_item_parent">
             {Bookings.map((data,index)=>
             <div className="dietb_parentdiv">
             <div className="diet_booking_listitem">
                <div className="book_diet_div">  
                  <img src={data.vendor_profile_path} className="book_nur_img" onClick={()=>ModalClickOpen(data.dietbookingId)}/>
                  <div className="book_text_div">
                      <p className="book_h_name">{data.vendor_name}</p>
                      <p  style={{color:"#AEADAD",fontSize:"13px"}}>{data.diet_package_name}</p>
                      <p>{moment(data.from_date).format("DD MMM YYYY")}</p>
                  </div>
                </div> 
               <div>
                   <div style={{textAlign:"end"}}>
                   <p>Total Days</p>
                   <div><p style={{color:"#AEADAD",fontSize:"13px"}}>{data.diet_duration}</p></div>
                   <div><label className={CancelOpen?"b_cancel_change":"b_cancel"} onClick={()=>CancelClick(index,data.dietbookingId)}>Cancel</label></div>
                   </div>
            
                </div>
                </div> 
            {/* To click cancel button to open this part */}
            {data.dietbookingId&&CancelOpen?
            <div className="cancel_part_open">
              <div className="cancel_part_div">
                  <div className="amt_process">Add 100 KWD to Wallet</div>
                  <div className="amt_process">Process Refund 100 KWD</div>
              </div>
              </div>
              :null}
              </div>
              )}   
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
                 <BookingHistoryModal bookingid={bookingid}/>

             </Modal>
        </div>
    )
}
const mapStateToProps=(state)=>({
  dietBookings:state.DietReducer.Booking_list
})
export default connect(mapStateToProps)(Diet_Bookings);