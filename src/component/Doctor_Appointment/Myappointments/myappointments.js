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
import ValidationLibrary from "../../../helpers/validationfunction";
import { useDispatch, connect } from "react-redux";
import { GetMyAppointments,PatientList,DoctorList ,cancelDoctorAppointment,patientAppointmentAdvancedFilter} from "../../../actions/myappointmentsaction";
import Moment from 'moment';



var hashHistory = require('react-router-redux')




                  

function Myappointment(props) {
    const dispatch = useDispatch();
    const [patientList, setPatientList] = useState({})
    const [doctorList, setDoctorList] = useState({})
    const [patientId, setPatientId] = React.useState("16");
    let history = useHistory();
    const [MyAppoinments, setMyAppointments] = useState({
        member_name: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        doctor_name: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        start_date: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        end_date: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
})
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
    const QueueOpen = (index) => {
        if(props.myAppointments[index].ismodel===1)
        props.myAppointments[index].ismodel=0
        else
        props.myAppointments[index].ismodel=1
        setqueue(!queue)
        setShowForm(false)

        // console.log(props.myAppointments[index],index,"props.myAppointments")
    }
const data = {
	patientId: "16",
	currentDate: "2020-07-23",
	pageno:1,
	limit:10
}
    useEffect(() => {
        dispatch(GetMyAppointments(data));
        dispatch(PatientList());
        dispatch(DoctorList());
      }, []);

useEffect(() => {

    let DoctorList = [];
    props.DoctorList.map((data) =>
        DoctorList.push({ id: data.doctorId, value: data.doctorName })
    );
    setDoctorList({ DoctorList });

    let PatientList = [];
    props.PatientList.map((data) =>
        PatientList.push({ id: data.patient_id, value: data.patientName })
    );
    setPatientList({ PatientList });

}, [props.DoctorList,props.PatientList])

      Moment.locale('en');
      var dt = props.myAppointments.book_date;
    console.log("myAppointmentsProps", props)
     
const cancelAppoinment = (id) => {
    
    dispatch(cancelDoctorAppointment(id)).then(() => {
        dispatch(GetMyAppointments(data));
    })
}   

const advancedFilter = () => {
    var mainvalue = {};
    var targetkeys = Object.keys(MyAppoinments);
    for (var i in targetkeys) {
        var errorcheck = ValidationLibrary.checkValidation(
            MyAppoinments[targetkeys[i]].value,
            MyAppoinments[targetkeys[i]].validation
        );
        MyAppoinments[targetkeys[i]].error = !errorcheck.state;
        MyAppoinments[targetkeys[i]].errmsg = errorcheck.msg;
        mainvalue[targetkeys[i]] = MyAppoinments[targetkeys[i]].value;
    }
    var filtererr = targetkeys.filter((obj) => MyAppoinments[obj].error == true);

    if (filtererr.length > 0){
        
    }
    else{
    dispatch(patientAppointmentAdvancedFilter(MyAppoinments));
    }

    setMyAppointments((prevState) => ({
        ...prevState,
    }));
} 

function checkValidation(data, key) {
  
    var errorcheck = ValidationLibrary.checkValidation(
        data,
        MyAppoinments[key].validation
    );
    let dynObj = {
        value: data,
        error: !errorcheck.state,
        errmsg: errorcheck.msg,
        validation: MyAppoinments[key].validation,
    };

  
    setMyAppointments((prevState) => ({
        ...prevState,
        [key]: dynObj,
    }));
}

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
                    <div className="flexr1">
                        {/* <Labelbox type="select" 
                        dropdown={doctorList.DoctorList}
                        labelname="Member Name"/> */}

                        <Labelbox type="select"
                        dropdown={doctorList.DoctorList}
                        changeData={(data) =>
                            checkValidation(data, "member_name")
                        }
                        labelname="Member Name"
                        value={MyAppoinments.member_name.value}
                        error={MyAppoinments.member_name.error}
                        errmsg={MyAppoinments.member_name.errmsg} />
                     </div>
                    <div className="flexr1">
                        {/* <Labelbox type="select" 
                        dropdown={patientList.PatientList} 
                        labelname="Doctor Name"/> */}

                        <Labelbox type="select"
                        dropdown={patientList.PatientList} 
                        changeData={(data) =>
                            checkValidation(data, "doctor_name")
                        }
                        labelname="Doctor Name"
                        value={MyAppoinments.doctor_name.value}
                        error={MyAppoinments.doctor_name.error}
                        errmsg={MyAppoinments.doctor_name.errmsg} />

                        </div>
                    {/* <Labelbox type="datepicker" labelname="From Date"/> */}
                    <Labelbox type="datepicker" 
                        // disablePast={true}
                        labelname="From Date"
                        changeData={(data) =>
                            checkValidation(data, "start_date")
                        }
                        value={MyAppoinments.start_date.value}
                        error={MyAppoinments.start_date.error}
                        errmsg={MyAppoinments.start_date.errmsg} />

                    <Labelbox type="datepicker" 
                        // disablePast={true}
                        labelname="To Date"
                        changeData={(data) =>
                            checkValidation(data, "end_date")
                        }
                        value={MyAppoinments.end_date.value}
                        error={MyAppoinments.end_date.error}
                        errmsg={MyAppoinments.end_date.errmsg} />
            
                    {/* <Labelbox type="datepicker" labelname="To Date"/> */}
                    <div className="applybtndiv"><Button className="applybtn"onClick={advancedFilter} >Apply</Button></div>
                </div>
            </div>}
            {props.myAppointments.map((data,index) => { 
                // props.myAppointments[index].ismodel=0
                return(              
            <div className="appointmentlistpaper">
            <div className="listpaperflex"><div className="doctrname">{data.doctorName}</div><div className="appointdate">{Moment(dt).format('d MMM yy')}<span className="appointtime">{Moment(dt).format('hh:mm a')}</span></div></div>
            <div className="listpaperflex"><div className="patname">{data.clinicDetails[0].vendor_location}</div><div></div></div>
            <div className="listpaperflex"><div className={data.payment_status == 1 ? 'paidbg' : ''}>{data.payment_status == 1 ? 'Paid' : 'UnPaid'}</div><div className="paymentdate"></div></div>
            <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">{data.book_amount} KWD</span></div><div className="paymenttime"></div></div>
            <div className="listpaperflex"><div className="appnttypeclr">Appointment Type</div><div className="reviewbtn"><span onClick={()=>RescheduleBooking(data)}>Reschedule</span>
            <span className={showcancelForm?"doct_change_color":"cancelspanbtn"} onClick={()=>opencancelForm(index)} >Cancel</span><span className={queue?"doct_change_color":"queuespanbtn"} onClick={()=>QueueOpen(index)}>Queue</span></div></div>
           {showcancelForm && <div className="cancellationoption"><Button onClick={()=>cancelAppoinment(data.bookingId)} >Add {data.book_amount} KWD to wallet</Button><Button onClick={()=>cancelAppoinment(data.bookingId)}>Process Refund {data.book_amount} KWD</Button></div>}
           {data.ismodel&&data.ismodel===1&&<Queue appointment_details={data} />}
        </div>
                )
                })}
            

        </div>
    )}
    
const mapStateToProps = (state) =>
({
    myAppointments: state.doctorAppointmentReducer.getMyAppointmentsList || [],
    DoctorList: state.doctorAppointmentReducer.DoctorList || [],
    PatientList: state.doctorAppointmentReducer.PatientList || []
});

export default connect(mapStateToProps)(Myappointment);