import React,{useState, useEffect} from "react";
import "./history.scss";
import plus from '../../../images/plus.png'
import history from '../../../images/history-button.svg'
import filter from '../../../images/filter2.svg'
import { ReactSVG } from 'react-svg'
import { Button } from "@material-ui/core";
import Labelbox from "../../../helpers/labelbox/labelbox";
import nurse from '../../../images/trainer.png'
import { Rate } from 'antd';
import {useHistory} from 'react-router-dom'
import {Modal} from 'antd'


import { useDispatch, connect } from "react-redux";
import { GetMyAppointmentsHistory } from "../../../actions/myappointmentshistoryaction";
import { GetAppointmentPrescriptionHistory } from "../../../actions/myappointmentprescriptionhistoryaction";
import Moment from 'moment';


var hashHistory = require('react-router-redux')




                  

function History(props) {
    const dispatch = useDispatch();
    const [showfilterForm,setShowfilter] = useState(false)
    let history = useHistory();

    const HistoryPush=(url)=>{
      history.push(url);
    //   window.location.reload()
      }
    const openfilter = () => {
        setShowfilter(!showfilterForm)
    }
    const [modalOpen,setmodalOpen]=React.useState(false)
const ModalOpenClick=()=>{
   setmodalOpen(true)
}
const ModalCloseClick=()=>{
   setmodalOpen(false)
}
const [ReviewOpen,setreviewOpen]=React.useState(false)
const ReviewOpenClick=()=>{
   setreviewOpen(true)
}
const ReviewCloseClick=()=>{
   setreviewOpen(false)
}
     
const data = {
	patientId:"1",
	currentDate:"2020-06-14",
	limit:5,
	pageno:1
}
const dataBooking = {
	bookingId: "207"
}
    useEffect(() => {
        dispatch(GetMyAppointmentsHistory(data));
        dispatch(GetAppointmentPrescriptionHistory(dataBooking));
      }, []);
      Moment.locale('en');
      var dt = props.myAppointmentsHistory.book_date;
    console.log("myAppointmentsHistoryProps", props)

    return(
        <div className="myappointments_layout">
            <div className="appointmentsheadflex">
                <div>History</div>
                <div className="appointment_icons">
                    <img src={plus} onClick={()=>HistoryPush("/feed")}/>
                    {/* <ReactSVG src={history}/> */}
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
            {props.myAppointmentsHistory.map(data => (
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">{data.doctorName}</div><div className="appointdate">{Moment(dt).format('d MMM yy')}<span className="appointtime">{Moment(dt).format('hh:mm a')}</span></div></div>
                <div className="listpaperflex"><div className="patname">{data.clinicDetails[0].vendor_location}</div><div>Cancelled Date & Time</div></div>
                <div className="listpaperflex"><div className={data.payment_status == 1 ? 'paidbg' : ''}>{data.payment_status == 1 ? 'Paid' : 'UnPaid'}</div><div className="paymentdate">24 Nov 2020</div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">{data.book_amount} KWD</span></div><div className="paymenttime">11.00AM</div></div>
                <div className="listpaperflex"><div className="rescheduleclr">-</div><div className="reviewbtn"><span onClick={ReviewOpenClick}>Review</span><span onClick={ModalOpenClick}>View Prescription</span></div></div>
            </div>
            ))}
            {/* <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov 2020<span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div>Rescheduled Date & Time</div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate">24 Nov 2020</div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime">11.00AM</div></div>
                <div className="listpaperflex"><div className="rescheduleclr">Rescheduled</div><div className="reviewbtn"><span onClick={ReviewOpenClick}>Review</span><span onClick={ModalOpenClick}>View Prescription</span></div></div>

            </div>
            <div className="appointmentlistpaper"> */}
                {/* <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov 2020<span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div></div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate"></div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime"></div></div>
                <div className="listpaperflex"><div className="rescheduleclr">-</div><div className="reviewbtn"><span onClick={ReviewOpenClick}>Review</span><span onClick={ModalOpenClick}>View Prescription</span></div></div>

            </div> */}
            <Modal
        title={<div className="">Prescription</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        className="prescription"
        // maxWidth={"md"}
        // style={{width:"800px"}}
       >
       {props.myPrescriptionHistory.map(data => (         
           <>
           <div className="presflexdiv">
               <div className="presflex"><div className="presflexhead">Name</div><div>Hanna</div></div>
               <div className="presflex"><div className="presflexhead">Doctor Name</div><div>sss</div></div>
               <div className="presflex"><div className="presflexhead">Date</div><div>date</div></div>
           </div>      
           <div className="dosagediv">
               {data.medicineDetails.map(data =>(                   
           <div className="dosagedetail">
           <div className="dosagehead">
                  <div className="medicinename">Medicine</div>
                  <div className="dosagetime"><div>Day</div>
                  <div>M</div>
                  <div>A</div>
                  <div>N</div></div>
           </div>
           <div className="dosagelevel">
                  <div className="medicinelevel"><div>{data.medicineName}</div></div>
                  <div className="dosagenumerics"><div>{data.day}</div>
                  <div>{data.morning}</div>
                  <div>{data.afternoon}</div>
                  <div>{data.night}</div></div>
           </div>
           <div className="paracetomaldesc">{data.instruction}</div>

        </div>
               ))}
       </div>
           </>
           ))}
       </Modal>
       <Modal
        title={<div className=""> Review</div>}
        visible={ReviewOpen}
        footer={false}
        onCancel={ReviewCloseClick}
        className=""
        // maxWidth={"md"}
        // style={{width:"800px"}}
       >
           <div className="reviewflex">
               <div className="reviewimg_cont"><img src={nurse}/><div>Hannah</div></div>
               
           </div>
           <div className="starratingflex"><div>Rating</div><Rate allowHalf defaultValue={2.5} /></div>
           <div><Labelbox type="textarea" placeholder="Write a review"/></div>
           <div className="reviewsubmit"><Button onClick={ReviewCloseClick}>Submit Review</Button></div>
       </Modal>
        </div>
    )}
    
const mapStateToProps = (state) =>
({
    myAppointmentsHistory: state.doctorAppointmentReducer.getMyAppointmentsHistoryList || [],
    myPrescriptionHistory: state.doctorAppointmentReducer.getAppointementPrescriptionHistory || [],
});

export default connect(mapStateToProps)(History);