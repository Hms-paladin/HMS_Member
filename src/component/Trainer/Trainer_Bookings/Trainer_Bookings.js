import React from 'react'
import {NavLink} from "react-router-dom";
import {Modal} from 'antd'
import HistoryButton from '../../../images/history-button.svg'
import Tc from '../../../images/tr_cat_image.png'
import './Trainer_Bookings.scss'
import HomeIcon from '@material-ui/icons/Home';
import { ReactSVG } from 'react-svg'
import Internet from '../../../images/internet.svg'
import Gym from '../../../images/gym.svg'
import Trainer from "../../../images/trainer.png";
import VideocamIcon from '@material-ui/icons/Videocam';
export default function Tra_Bookings(props){
    const [CancelOpen,setCancelOpen]=React.useState(false)
    const[HideAdrs,setHideAdrs]=React.useState(false)

    console.log("props training", props)

    const CancelClick=()=>{
        setCancelOpen(!CancelOpen)
    }
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    const [ReOpen,setReOpen]=React.useState(false)
    const ReOpenClick=()=>{
        setReOpen(true)
    }
    const ReOpenClose=()=>{
        setReOpen(false)
    }
    return(
        <div className="Tra_bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label><NavLink to="/Trainer_BookingHistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/></NavLink>
            </div>
            <div className="bookhistory_list_parent">
             <div className="diet_bookhistory_list">
                <div className="book_diet_div">  
                <div>
                  <div><img src={Trainer} className="book_nur_img"/></div>
                       {/* icons */}
                       <div className ="tainerlist_home_inner_booking">
                  {/* <div className="home_icon_inner_p"><div><HomeIcon/><div>Home</div></div></div> */}
                  <div className="internet_div_tra_inner_p"><div  className="inter_net_img"><ReactSVG src={Internet}/><div>Online</div></div></div>
                  {/* <div className="internet_div_gym_inner_p"><div  className="inter_net_img"><ReactSVG src={Gym}/><div>Centre</div></div></div> */}
                 </div>
                 </div>
                 {/* end */}
                  <div className="book_text_div">
                      <p className="book_h_name">Farah</p>
                      <p  style={{color:"#AEADAD",fontSize:"15px"}}>34 Years / Female</p>
                      <span><label className="book_h_name">Amount</label><label className="tc_amt_kwd">160 KWD</label></span>
                      <p style={{color:"#AEADAD",fontSize:"15px"}}>Shamiya</p>
                  </div>
                </div> 
               <div>
                   <div style={{textAlign:"end",fontWeight:"500"}}>
                   <div><p style={{color:"#AEADAD",fontSize:"13px"}}>01 Apr 2021</p></div>
                   <p style={{fontSize:"15px",color:"#AEADAD"}}>08:00 AM To 09:00 AM</p>
                   <p style={{fontSize:"20px"}}>Burn IT</p>
                   <p style={{fontSize:"20px"}}>30 Sessions</p>
                   
                   <div>
                      <label><VideocamIcon className="tra_vd_icon" /></label>
                       <NavLink to="/trainer_myschedule"><label style={{color:"#F2951B",cursor:"pointer"}}>My schedule</label></NavLink>
                       <NavLink to="/trainer_bookigreschedule"><label style={{color:"#83AF40",margin:"0px 20px",cursor:"pointer"}}>Reschedule</label></NavLink>
                       <label className={CancelOpen?"b_cancel_change":"b_cancel"} onClick={CancelClick}>Cancel</label>
                    </div>
                   </div>
                </div>
                </div> 
            {/* To click cancel button to open this part */}
            {CancelOpen?
            <div className="cancel_part_open">
              <div className="cancel_part_div">
                  <div className="amt_process">Add 100 KWD to Wallet</div>
                  <div className="amt_process">Process Refund 100 KWD</div>
              </div>
              </div>
              :null}
              
           </div>
       
        </div>
    )
}