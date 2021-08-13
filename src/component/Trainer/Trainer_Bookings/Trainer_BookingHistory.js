import React,{useState,useEffect} from 'react'
import './Trainer_BookingHistory.scss'
import {Modal} from 'antd'
import Trainer_CreateReview from './Trainer_CreateReview'
import Tc from '../../../images/tr_cat_image.png'
import BookingHistoryModal from './Trainer_BookingHistoryModal'
import { ReactSVG } from 'react-svg'
import Internet from '../../../images/internet.svg'
import Gym from '../../../images/gym.svg'
import Trainer from "../../../images/trainer.png";
import VideocamIcon from '@material-ui/icons/Videocam';
import { NavLink } from 'react-router-dom'
import moment from 'moment';
import HomeIcon from '@material-ui/icons/Home';
import { connect, useDispatch } from "react-redux";
import {PatientTrainingBookingHistoryDetials} from "../../../actions/trainerdetailsaction"
function Trainer_BookingHistory(props){
    const dispatch = useDispatch();
    const [ModalOpen,setModalOpen]=React.useState(false)
    const [History,setHistory]=useState([])
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
    const[HideAdrs,setHideAdrs]=React.useState(false)
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    useEffect(()=>{
        dispatch(PatientTrainingBookingHistoryDetials())
    },[])
    useEffect(()=>{
        console.log(props.TrainerBookingHistory,"TrainerBookingHistory")
        setHistory(props.TrainerBookingHistory)
    },[props.TrainerBookingHistory])
    console.log(History,"History")
     return(
        <div className="Tc_history">
             <div className="book_headdiv">
            <label className="book_h">Booking History</label>
            </div>
            {History.map((data,index)=>

            <div className="bookhistory_list_parent">
             <div className="bookhistory_list_item">
                <div className="book_nurse_div">  
                  <div>
                    <div><img src={data.vendor_profile_path} className="book_nur_img"/></div>
                    <div className={data.cancel_status===1?"his_cancel":"his_reschedule"} >{data.cancel_status===1&&"Cancelled"||data.is_rescheduled===1&&"Reschedule"}</div>
                    <div className ="tainerlist_home_inner_booking">
                  {data.training_mode===1&&<div className="home_icon_inner_p"><div><HomeIcon/><div>Home</div></div></div>}
                  {data.training_mode===2&&<div className="internet_div_tra_inner_p"><div  className="inter_net_img"><ReactSVG src={Internet}/><div>Online</div></div></div>}
                  {data.training_mode===3&&<div className="internet_div_gym_inner_p"><div  className="inter_net_img"><ReactSVG src={Gym}/><div>Centre</div></div></div>}
                 </div>
                  </div>
                    <div className="book_text_div">
                    <p className="book_h_name">{data.trainerName}</p>
                      <p  style={{color:"#AEADAD",fontSize:"15px"}}>{"34 Years /"+data.vendor_contact_gender}</p>
                      <span><label className="book_h_name">Amount</label><label className="tc_amt_kwd">{data.amount+" KWD"}</label></span>
                      <p style={{color:"#AEADAD",fontSize:"15px"}}>{data.vendor_address}</p>
                      </div>
                </div> 

                <div style={{textAlign:"end",fontWeight:"500"}}>
                  <div><label style={{color:"#666666",fontSize:"13px"}}>{moment(data.book_date).format("DD-MM-YYYY")}</label>
                  <label style={{fontSize:"15px",color:"#AEADAD"}}>{moment(data.from_time, "HH:mm").format("hh:mm A") + " to " + moment(data.to_time, "HH:mm").format("hh:mm A")}</label></div>
                   <p>{data.cancel_status===1&&"Cancelled Date & Time"||data.is_rescheduled===1&&"Reschedule Date & Time"}</p>
                   <p style={{fontWeight:"400",color:"#666666"}}>{data.cancel_status===1&&data.cancel_date!=null&&moment(data.cancel_date).format("DD-MM-YYYY")||data.is_rescheduled===1&&data.reschedule_date&&moment(data.reschedule_date).format("DD-MM-YYYY")}</p>
                   <p style={{fontWeight:"400",color:"#666666"}}>{data.cancel_status===1&&data.cancel_date!=null&&moment(data.cancel_date,"HH:mm").format("hh:mm A")||data.is_rescheduled===1&&data.reschedule_date&&moment(data.reschedule_date,"HH:mm").format("hh:mm A")}</p>
                   <p style={{fontSize:"20px"}}>Burn IT</p>
                   <p style={{fontSize:"20px"}}>{data.tr_session+" Sessions"}</p>
                </div>
                </div> 
                   <div className="book_his_parent">
                      <div><label className="his_review" onClick={ReviewClickOpen}>Review</label><NavLink to="/trainerbooking"><label className="his_repeat">Repeat</label></NavLink></div>
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
                  {ReviewOpen&&<Trainer_CreateReview ModalClickClose={ReviewClickClose}/>} 

             </Modal>
          
         </div>       
     )
}
const mapStateToProps = (state) => ({
    TrainerBookingHistory: state.trainerListReducer.getPatientTrainerBookingHistory || [],
});
export default connect(mapStateToProps)(Trainer_BookingHistory)