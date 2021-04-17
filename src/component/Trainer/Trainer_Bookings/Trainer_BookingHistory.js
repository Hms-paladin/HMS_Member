import React from 'react'
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
export default function Trainer_BookingHistory(props){
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
            img:Trainer
        },
        {
            id:3,
            name:"Lina's & Dina's",
            Date:"20 Apr 2021",
            diet:"Fiber Diet",
            img:Trainer

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
                    <div className={data.historyid===8?"his_cancel":"his_reschedule"} >{data.history}</div>
                    <div className ="tainerlist_home_inner_booking">
                  {/* <div className="home_icon_inner_p"><div><HomeIcon/><div>Home</div></div></div> */}
                  <div className="internet_div_tra_inner_p"><div  className="inter_net_img"><ReactSVG src={Internet}/><div>Online</div></div></div>
                  {/* <div className="internet_div_gym_inner_p"><div  className="inter_net_img"><ReactSVG src={Gym}/><div>Centre</div></div></div> */}
                 </div>
                  </div>
                    <div className="book_text_div">
                    <p className="book_h_name">Farah</p>
                      <p  style={{color:"#AEADAD",fontSize:"15px"}}>34 Years / Female</p>
                      <span><label className="book_h_name">Amount</label><label className="tc_amt_kwd">160 KWD</label></span>
                      <p style={{color:"#AEADAD",fontSize:"15px"}}>Shamiya</p>
                      </div>
                </div> 

                <div style={{textAlign:"end",fontWeight:"500"}}>
                  <div><label style={{color:"#666666",fontSize:"13px"}}>01 Apr 2021</label>
                  <label style={{fontSize:"15px",color:"#AEADAD"}}>08:00 AM To 09:00 AM</label></div>
                   <p>Cancelled Date & Time</p>
                   <p style={{fontWeight:"400",color:"#666666"}}>03 Apr 2021</p>
                   <p style={{fontWeight:"400",color:"#666666"}}>10.30 PM</p>
                   <p style={{fontSize:"20px"}}>Burn IT</p>
                   <p style={{fontSize:"20px"}}>30 Sessions</p>
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