import React, { useState, useEffect }  from 'react'
import Calendar from '../../../helpers/BookingsCalendar/Calendar'
import Grid from '@material-ui/core/Grid'
import AvailableSlots from './AvailableSlots'
import { Modal } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ConfirmationModal from '../AddMember/Trainer_ConfirmationModal'
import { GetSlotsTrainerBooking } from "../../../actions/trainerdetailsaction"
import { useDispatch, connect } from "react-redux";
import moment from "moment";
import { SystemUpdateSharp } from '@material-ui/icons'
import { PatientTrainerScheduleDetails } from "../../../actions/trainerdetailsaction"
import GetScheduleCalendar from '../../../helpers/BookingsCalendar/GetScheduleCalendar'
// import './BookingShedule.scss'
function BookingReSchedule(props) {
  const location = useLocation()
  const dispatch=useDispatch()
  const [isClicked, setIsClicked] = useState(false)
  const [val, setVal] = useState(false)
  const [trainer,setTrainer] = useState(location.state);
  const [secheduleDates,setSecheduleDates]=useState([])
  // modal functions
  const [modalOpen, setmodalOpen] = React.useState(false)
  const [list,setList]=useState([])
  const [session,setSession]=useState(0)
  const [slots, setSlots] = useState({
    Timing: {
      value: [],
      validation: [{ name: "required" }],
      error: null,
      errmsg: null,
    },
    FromDate:'',
    ToDate:''
  })
  const ModalOpenClick = () => {
    if (slots["Timing"].value.length == 0) {
      setVal(true)
    }
    else {
      setmodalOpen(true)
    }
  }
  const ModalCloseClick = () => {
    setmodalOpen(false)
  }
  // end
  const [slotslist, setslotslist] = useState(false)
  const [slotId, setslotId] = useState("")
  // const slots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"]
  const ColorChange = (Change_id) => {
    let list = slotslist;
    let index = -1;
    if ((index = slotslist.indexOf(Change_id)) != -1) {
      list.splice(index, 1);
    } else {
      list.push(Change_id);
    }
    setslotslist({ slotslist: list })
    // setslotId.find((data)=>{
    //     return data
    // }
  };

  useEffect(() => {
    dispatch(PatientTrainerScheduleDetails(trainer))
 }, [trainer])

  const onBtnClicked = (id) => {
    list.map((data) => {
      if (data.dummyId == id) {
        if (data.bookedStatus == false) {
          if (data.isClicked == false) {
            data.isClicked = true
            slots["Timing"].value = [data]
            setVal(false)
          }
          else {
            data.isClicked = false
            slots["Timing"].value = []
          }
        }
      }
      if (data.dummyId != id) {
        data.isClicked = false
      }
    })
    setIsClicked((prevState) => ({
      ...prevState
    }))
  }
  const getDates = (datearr,d1,d2) => {
    console.log(datearr,d1,d2, "startdate_enddate")
    if (datearr.length > 0) {
      let today=moment().format("YYYY-MM-DD")
      let appoint_id = trainer.appointment_id;
      let Slots = [{ sd: datearr[0], ed: datearr.pop(), appoint_id }]
      dispatch(GetSlotsTrainerBooking(Slots))
      slots["FromDate"]=datearr[0];
      slots["ToDate"]=datearr.pop();
      
    }
    // else{setList([])}
    if(d1.length>0&&d2.length>0){
      let appoint_id=trainer.appointment_id;
      let from_date=trainer.from_date;
      let to_date=trainer.to_date;
      let Slots = [{ sd: from_date, ed:to_date, appoint_id }]
      dispatch(GetSlotsTrainerBooking(Slots))
    }
    // else{setList([])}
  }
  useEffect(() => {
    let items=[]
    console.log(props.getSlotsTrainerBooking, "getSlots")
    if (props.getSlotsTrainerBooking) {
      props.getSlotsTrainerBooking.map((data) => {
        items.push({
          dummyId: data.dummyId,
          fromTime: data.fromTime,
          toTime: data.toTime,
          bookedStatus: data.bookedStatus,
          isClicked: false
        })
      })
      setList(items)
    }
  }, [props.getSlotsTrainerBooking])

  useEffect(()=>{
    setTrainer((prevState)=>({
      ...prevState,
      key:"reshedule"
    }))
  },[location.state])
  console.log(list, "slots")


 useEffect(() => {
    let completedDate = [],rescheduleDate=[],toBeRescheduled=[],remainingdates=[],PassArr=[],gapDays=[];
    let today=moment().format("YYYY-MM-DD")
    console.log(props.getMySchedule,"getMySchedule")
    props.getMySchedule&&props.getMySchedule.map((data)=>{
       data.caldendarData.map((x,i) => {
          if(x.completedDate==true&&x.currentDayId!=5){completedDate.push(x.selected_date)}
          if(x.rescheduledDate==true&&x.currentDayId!=5){rescheduleDate.push(x.selected_date)}
          if(x.toBeRescheduled==true&&x.currentDayId!=5){toBeRescheduled.push(x.selected_date)}
          if(x.toBeRescheduled==false&&x.rescheduledDate==false&&x.completedDate==false)
          {
             if(x.bookedDate==true&&x.currentDayId!=5)
             remainingdates.push(x.selected_date)
          }
          if(x.currentDayId==5){gapDays.push(x.selected_date)}
          console.log(x.selected_date,today,i,"sss")
          if(today>=x.selected_date&&i==0){
            setSession(1)
          }
          if(today<x.selected_date&&i==0){
            setSession(0)
          }
       })
    })
    PassArr.push({complete_date:completedDate,resch_date:rescheduleDate,toberesch_date:toBeRescheduled,remain_dates:remainingdates,gap_dates:gapDays})
    setSecheduleDates(PassArr)
    
 }, [props.getMySchedule])

 console.log(secheduleDates,session, "locccc")

  return (
    <div className="booking_shedule_tra">
      <Grid container>
        <Grid item xs={12} md={5} className="bookings_cal_range">
          {/* <Calendar
            heading="Reschedule"
            SelectDate="enable"
            category="Indoor-Fitness-Burn IT"
            amt={trainer.amount + " KWD"}
            changeData={(data) => getDates(data)}
            Name_of_type={trainer.trainerName}
          /> */}
           <GetScheduleCalendar
                  heading="Reschedule"
                  amt={trainer.amount + " KWD"}
                  Name_of_type={trainer.trainerName}
                  // upcomingdays="enable"
                  trainer_MyShedule_dots={session==1&&"enable"}
                  OnScheduleDate={secheduleDates}
                  changeData={(data,d1,d2) => getDates(data,d1,d2)}
                  SelectDate={session==0&&"enable"}
                  Session={session}
                  TotalSessions={trainer.tr_session}
               />
        </Grid>
        <Grid item xs={12} md={7} className="tra_booing_parent">
          <div className="tra_booking_confirm">
            <div>
              <div className="ava_slots_div">Available Slots</div>
              <div className=" slot_parent_inner_div row-col-6">
                {list.length > 0 && list.map((data) => <div>{
                  <Button className={data.isClicked == true && "btn_selected" || data.bookedStatus == true && "btn_booked" || data.bookedStatus == false && "btn_avail"} onClick={() => onBtnClicked(data.dummyId)}>{moment(data.fromTime, "HH:mm").format("hh:mm A")}</Button>
                }
                </div>)}
                {/* {slots.map((data) => <div><Button>{data}</Button></div>)} */}
              </div>
              <div className="algn_cnt_div">
                <div className="ava_dot_cir_div"><label className="b_dot_avail_up"></label><label>Selected</label></div>
                <div className="ava_dot_cir_div"><label className="b_dot_avail_ex"></label><label>Available</label></div>
                <div className="ava_dot_cir_div"><label className="b_res_avail_ex"></label><label> Already Booked</label>
                </div>
              </div>
              <div style={{ color: "red", fontSize: "11px",display:"flex",justifyContent:"center"}}>{val ? "Choose a slot" : ""}</div>
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
        <ConfirmationModal ModalCloseClick={ModalCloseClick} Params={trainer} Resch_Info={slots} Origin="reshedule"/>
      </Modal>
    </div>
  )
}
const mapStateToProps = (state) => ({
  getSlotsTrainerBooking: state.trainerListReducer.getSlotsTrainerBooking || [],
  getMySchedule: state.trainerListReducer.getMySchedule || [],
});
export default connect(mapStateToProps)(BookingReSchedule);