import React,{useState} from 'react'
import Calendar from  '../../../helpers/BookingsCalendar/Calendar'
import Grid from '@material-ui/core/Grid'
import AvailableSlots from './AvailableSlots'
import {Modal} from 'antd'
import Button from '@material-ui/core/Button';
import ConfirmationModal from '../AddMember/Trainer_ConfirmationModal'
// import './BookingShedule.scss'
export default function BookingReSchedule(props){
      // modal functions
  const [modalOpen,setmodalOpen]=React.useState(false)
  const ModalOpenClick=()=>{
     setmodalOpen(true)
  }
  const ModalCloseClick=()=>{
     setmodalOpen(false)
  }
  // end
  const [slotslist,setslotslist]=useState(false)   
const [slotId,setslotId]=useState("") 
const slots=["08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM"]
const ColorChange = (Change_id) => {
    let list = slotslist;
    let index = -1;
    if ((index = slotslist.indexOf(Change_id)) != -1) {
      list.splice(index, 1);
    } else {
      list.push(Change_id);
    }
    setslotslist({slotslist:list})
    // setslotId.find((data)=>{
    //     return data
    // }
  };
    return(
        <div className="booking_shedule_tra">
            <Grid container>
                <Grid item xs={12} md={5} className="bookings_cal_range">
                   <Calendar
                   heading="Reschedule"
                   SelectDate="enable"
                   category="Indoor-Fitness-Burn IT"
                   amt="160 KWD"
                   Name_of_type="Farah"
                   />
                </Grid>
                <Grid item xs={12} md={7} className="tra_booing_parent">
                <div className="tra_booking_confirm">
                <div>
            <div className="ava_slots_div">Available Slots</div>
            <div className=" slot_parent_inner_div row-col-6">
                {slots.map((data)=><div><Button>{data}</Button></div>)}
             </div>   
             <div className="algn_cnt_div">
             <div className="ava_dot_cir_div"><label className="b_dot_avail_up"></label><label>Selected</label></div>
           <div className="ava_dot_cir_div"><label className="b_dot_avail_ex"></label><label>Available</label></div>
           <div className="ava_dot_cir_div"><label className="b_res_avail_ex"></label><label> Already Booked</label></div>
           </div>
           <div className="algn_cnt_div">
               <Button onClick={ModalOpenClick}>Reschedule</Button>
            </div>
        </div>
                </div>
                </Grid>
           </Grid>
           <Modal
        title={<div className="bookconfirm">Reschedule Confirmation</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        width={900}
       
       >
         <ConfirmationModal ModalCloseClick={ModalCloseClick}/>
       </Modal> 
        </div>
    )
}