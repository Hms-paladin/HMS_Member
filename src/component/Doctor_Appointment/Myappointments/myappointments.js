import React,{useState, useEffect}  from "react";
import "./myappointments.scss";
import plus from '../../../images/plus.png'
import historybtn from '../../../images/history-button.svg'
import filter from '../../../images/filter2.svg'
import Queue from './Queue'
import { ReactSVG } from 'react-svg'
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route,useHistory,Link,NavLink,Redirect} from "react-router-dom";
import Labelbox from "../../../helpers/labelbox/labelbox";

import { useDispatch, connect } from "react-redux";
import { GetMyAppointments } from "../../../actions/myappointmentsaction";
import Moment from 'moment';



var hashHistory = require('react-router-redux')




                  

function Myappointment(props) {
    const dispatch = useDispatch();
    const [patientId, setPatientId] = React.useState("16");
    let history = useHistory();

    useEffect(() => {
        setPatientId("16");
        localStorage.setItem('patientId', patientId);
      }, []);
    const HistoryPush=(url)=>{
      history.push(url);
    //   window.location.reload()
      }
      
  function RescheduleBooking(data) {
    console.log("event Doctor", data)
    history.push({
      pathname: "/doctorbookingreschedule",
      state: data
    })
  }
    const [showcancelForm,setShowForm] = useState(false)
    const [queue,setqueue] = useState(false)
    const opencancelForm = () => {
        setShowForm(!showcancelForm)
        setqueue(false)
    }

   
    const [showfilterForm,setShowfilter] = useState(false)
     
    const openfilter = () => {
        setShowfilter(!showfilterForm)
    }
    const QueueOpen = () => {
        setqueue(!queue)
        setShowForm(false)
    }
const data = {
	patientId: "16",
	currentDate: "2020-07-23",
	pageno:1,
	limit:10
}
    useEffect(() => {
        dispatch(GetMyAppointments(data));
      }, []);
      Moment.locale('en');
      var dt = props.myAppointments.book_date;
    console.log("myAppointmentsProps", props)
     
    return(
        <div className="myappointments_layout">
            <div className="appointmentsheadflex">
                <div>Appointments</div>
                <div className="appointment_icons">
                    <img src={plus} onClick={()=>HistoryPush("/feed")}/>
                    <ReactSVG src={historybtn} onClick={()=>HistoryPush("/history")} />
                    <ReactSVG src={filter} onClick={openfilter}/>

                </div>
            </div>
           {showfilterForm && <div className="appointmentlistpaper">
                <div className="advfilterhead">Advance Filter</div>
                <div className="advfilterflex">
                    <div className="flexr1"><Labelbox type="select" labelname="Member Name"/></div>
                    <div className="flexr1"><Labelbox type="select" labelname="Doctor Name"/></div>
                    <Labelbox type="datepicker" labelname="From Date"/>
                    <Labelbox type="datepicker" labelname="To Date"/>
                    <div className="applybtndiv"><Button className="applybtn">Apply</Button></div>
                </div>
            </div>}
            {props.myAppointments.map((data) => (                
            <div className="appointmentlistpaper">
            <div className="listpaperflex"><div className="doctrname">{data.doctorName}</div><div className="appointdate">{Moment(dt).format('d MMM yy')}<span className="appointtime">{Moment(dt).format('hh:mm a')}</span></div></div>
            <div className="listpaperflex"><div className="patname">{data.clinicDetails[0].vendor_location}</div><div></div></div>
            <div className="listpaperflex"><div className={data.payment_status == 1 ? 'paidbg' : ''}>{data.payment_status == 1 ? 'Paid' : 'UnPaid'}</div><div className="paymentdate"></div></div>
            <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">{data.book_amount} KWD</span></div><div className="paymenttime"></div></div>
            <div className="listpaperflex"><div className="appnttypeclr">Appointment Type</div><div className="reviewbtn"><span onClick={()=>RescheduleBooking(data)}>Reschedule</span>
            <span className={showcancelForm?"doct_change_color":"cancelspanbtn"} onClick={opencancelForm} >Cancel</span><span className={queue?"doct_change_color":"queuespanbtn"} onClick={QueueOpen}>Queue</span></div></div>
           {showcancelForm && <div className="cancellationoption"><Button>Add {data.book_amount} KWD to wallet</Button><Button>Process Refund {data.book_amount} KWD</Button></div>}
           {queue&&<Queue/>}
        </div>
            ))}
            

        </div>
    )}
    
const mapStateToProps = (state) =>
({
    myAppointments: state.doctorAppointmentReducer.getMyAppointmentsList || []
});

export default connect(mapStateToProps)(Myappointment);