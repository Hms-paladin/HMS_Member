import React, { useState, useEffect } from 'react'
import GetScheduleCalendar from '../../../helpers/BookingsCalendar/GetScheduleCalendar'
import Grid from '@material-ui/core/Grid'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, connect } from "react-redux";
import moment from "moment";
import { PatientTrainerScheduleDetails } from "../../../actions/trainerdetailsaction"
function Trainer_Myschedule(props) {

   const location = useLocation()
   const dispatch = useDispatch()
   const trainerDt = location.state
   // modal functions
   const [modalOpen, setmodalOpen] = React.useState(false)
   const [secheduleDates,setSecheduleDates]=useState([])
   const [remainingDays,setRemainingDays]=useState('')
   
   const ModalOpenClick = () => {
      setmodalOpen(true)
   }
   const ModalCloseClick = () => {
      setmodalOpen(false)
   }
   useEffect(() => {
      dispatch(PatientTrainerScheduleDetails(trainerDt))
   }, [trainerDt])
   useEffect(() => {
      let completedDate = [],rescheduleDate=[],toBeRescheduled=[],remainingdates=[],PassArr=[],gapDays=[];
      let remainDays=''
      let today=moment().format("YYYY-MM-DD")
      console.log(props.getMySchedule,"getMySchedule")
      props.getMySchedule.map((data)=>{
         remainDays=data.remainingDays;
         data.caldendarData.map((x) => {
            if(x.completedDate==true&&x.currentDayId!=5){completedDate.push(x.selected_date)}
            if(x.rescheduledDate==true&&x.currentDayId!=5){rescheduleDate.push(x.selected_date)}
            if(x.toBeRescheduled==true&&x.currentDayId!=5){toBeRescheduled.push(x.selected_date)}
            if(x.toBeRescheduled==false&&x.rescheduledDate==false&&x.completedDate==false)
            {
               if(x.bookedDate==true&&x.currentDayId!=5)
               remainingdates.push(x.selected_date)
            }
            if(x.currentDayId==5){gapDays.push(x.selected_date)}
         })
      })
      PassArr.push({complete_date:completedDate,resch_date:rescheduleDate,toberesch_date:toBeRescheduled,remain_dates:remainingdates,gap_dates:gapDays})
      setSecheduleDates(PassArr)
      setRemainingDays(remainDays)
   }, [props.getMySchedule])

   console.log(secheduleDates,trainerDt, "locccc")
   return (
      <div className="booking_shedule_tra">
         <Grid container>
            <Grid item xs={12} md={5} className="bookings_cal_range">
               <GetScheduleCalendar
                  heading="Myschedule"
                  category="Indoor-Fitness-Burn IT"
                  amt={trainerDt.amount + " KWD"}
                  Name_of_type={trainerDt.trainerName}
                  upcomingdays="enable"
                  trainer_MyShedule_dots="enable"
                  OnScheduleDate={secheduleDates}
                  RemainingDays={remainingDays}
                  Session={1}
               />
            </Grid>
         </Grid>
      </div>
   )
}
const mapStateToProps = (state) => ({
   getMySchedule: state.trainerListReducer.getMySchedule || [],
})
export default connect(mapStateToProps)(Trainer_Myschedule)