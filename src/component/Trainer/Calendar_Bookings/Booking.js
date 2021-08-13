import React,{useState,useEffect} from 'react'
import Calendar from  '../../../helpers/BookingsCalendar/Calendar'
import Grid from '@material-ui/core/Grid'
import AvailableSlots from './AvailableSlots'
import { useDispatch, connect } from "react-redux";
import { getDate } from 'date-fns'
import moment from "moment";
import {GetSlotsTrainerBooking} from "../../../actions/trainerdetailsaction"
// import './BookingShedule.scss'
function BookingShedule(props){
    const dispatch = useDispatch();
    const [trainerDet,setTrainerDet]=useState(props)
    const[bookDate,setBookDate]=useState({})
    const [Slots,setSlots]=useState([])
    const getDates=(datearr)=>{
        console.log(datearr,"startdate_enddate")
        if(datearr.length>0){
            let appoint_id=trainerDet.location.state.dataToChild.appointmentScheduleId;
            let len=datearr.length
            let slots=[{sd: datearr[0],ed:datearr[len-1],appoint_id}]
            console.log(slots,datearr,"slotttttts")
            dispatch(GetSlotsTrainerBooking(slots))
            setBookDate({sd: datearr[0],ed:datearr.pop(),appoint_id})
        }
    }
 
    useEffect(()=>{
        console.log(props.getSlotsTrainerBooking,"getSlots")
        if(props.getSlotsTrainerBooking){
            setSlots(props.getSlotsTrainerBooking)
        }
    },[props.getSlotsTrainerBooking])
    console.log(Slots,"slotssssss")
    
    return(
        <div className="booking_shedule_tra">
            <Grid container>
                <Grid item xs={12} md={5} className="bookings_cal_range">
                   <Calendar
                   heading="Booking"
                   SelectDate="enable"
                   category={props.location.state.dataToChild?.tr_package_name}
                   amt={props.location.state.dataToChild?.tr_cost + "KWD"}
                   Name_of_type={props.location.state.dataToC?.trainerName}
                   changeData={(data)=>getDates(data)}
                   />
                </Grid>
                <Grid item xs={12} md={7} className="tra_booing_parent">
                <div className="tra_booking_confirm">
                  <AvailableSlots dataToBind={Slots.length>0&&Slots} trainerDetParams={trainerDet.location.state} BookDate={bookDate}/>
                </div>
                </Grid>
           </Grid>
        </div>
    )
}
const mapStateToProps=(state)=>({
    getSlotsTrainerBooking:state.trainerListReducer.getSlotsTrainerBooking||[],
});
export default connect(mapStateToProps)(BookingShedule);