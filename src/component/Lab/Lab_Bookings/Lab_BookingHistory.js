import React,{useState,useEffect} from 'react'
import Nurse from '../../../images/lab_history.jpg'
import './Lab_BookingHistory.scss'
import {Modal} from 'antd'
import CreateReview from './Lab_CreateReview'
import BookingHistoryModal from './Lab_BookingHistoryModal'
import { connect, useDispatch } from "react-redux";
import {GetLabBookingHistory} from "../../../actions/LabBookingHistoryAction"
import moment from 'moment';
function Lab_BookingHistory(props){
    const dispatch = useDispatch();
    const [ModalOpen,setModalOpen]=React.useState(false)
    const[History,setHistory]=useState([])
    const[bookinfo,setBookInfo]=useState({})
    const ModalClickOpen=(id)=>{
        let book_info = History.find((data, index) => {
            return (id === data.labbookingId)
        })
        setBookInfo(book_info)
        setModalOpen(true)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
    }
    const [ReviewOpen,setReviewOpen]=React.useState(false)
    const ReviewClickOpen=(id)=>{
        let book_info = History.find((data, index) => {
            return (id === data.labbookingId)
        })
        setBookInfo(book_info)
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
    useEffect(()=>{
        dispatch(GetLabBookingHistory())
    },[])
    useEffect(()=>{
        console.log(props.GetLabBookingHistory,"GetLabBookingHistory")
        let details=[]
        props.GetLabBookingHistory.map((data)=>{
            data.details.map((item)=>{
                details.push(item)
            })
        })
        setHistory(details)
    },[props.GetLabBookingHistory])
    console.log(History,"History")
    console.log(bookinfo,"bookinfo")
     return(
        <div className="Lab_history">
             <div className="book_headdiv">
            <label className="book_h">Booking History</label>
            </div>
            {History.map((data,index)=>

            <div className="bookhistory_list_parent">
             <div className="bookhistory_list_item">
                <div className="book_nurse_div">  
                  <img src={data.vendor_filename} className="book_nur_img" onClick={()=>ModalClickOpen(data.labbookingId)}/><div className="book_text_div">
                      <p className="book_h_name">{data.Lab}</p>
                      <div>{HideAdrs?<label className="lab_adrs">{data.vendor_address}</label>:<label className="lab_adrs">{data.vendor_address}</label>}
                       <span className="elipse" onClick={ElipseOpen}>...</span></div>
                      <p>{moment(data.test_date).format("DD-MM-YYYY")}</p>
                      </div>
                </div> 

                <div style={{width:"35%"}}>
                   <div className="duty_div"><label style={{color:"#AEADAD",fontSize:"13px",fontWeight:"500"}}>{moment(data.test_time, "HH:mm").format("hh:mm A")}</label></div>
                </div>
                </div> 
                 
                   <div className="book_his_parent">
                      <div className={data.cancel_status==1?"his_cancel":"his_reschedule"} onClick={()=>ModalClickOpen(data.labbookingId)}>{data.cancel_status==1&&"Cancelled" ||data.is_rescheduled==1&&"Rescheduled" }</div>
                      <div><label className="his_review" onClick={()=>ReviewClickOpen(data.labbookingId)}>Review</label><label className="his_repeat" onClick={()=>ModalClickOpen(data.labbookingId)}>Repeat</label></div>
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
                 <BookingHistoryModal History={bookinfo}/>

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
                 <CreateReview ModalClickClose={ReviewClickClose} Review={bookinfo}/> 
                

             </Modal>
           
         </div>       
     )
}
const mapStatetoProps = (state) => ({
    GetLabBookingHistory: state.LabBookingHistoryReducer.getLabBookingHistory || [],
})
export default connect(mapStatetoProps)(Lab_BookingHistory);