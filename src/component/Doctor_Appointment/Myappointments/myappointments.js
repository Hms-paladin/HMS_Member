import React,{useState}  from "react";
import "./myappointments.scss";
import plus from '../../../images/plus.png'
import history from '../../../images/history-button.svg'
import filter from '../../../images/filter2.svg'
// import Queue from './Queue'
import { ReactSVG } from 'react-svg'
import { Button } from "@material-ui/core";



var hashHistory = require('react-router-redux')




                  

function Myappointments(props) {
    const [showcancelForm,setShowForm] = useState(false)
    const [queue,setqueue] = useState(false)
    const opencancelForm = () => {
        setShowForm(!showcancelForm)
    }

    const QueueOpen = () => {
        setqueue(!queue)
    }
   
     
    return(
        <div className="myappointments_layout">
            <div className="appointmentsheadflex">
                <div>Appointments</div>
                <div className="appointment_icons">
                    <img src={plus}/>
                    <ReactSVG src={history}/>
                    <ReactSVG src={filter}/>

                </div>
            </div>
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov <span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div></div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate"></div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime"></div></div>
                <div className="listpaperflex"><div className="appnttypeclr">Appointment Type</div><div className="reviewbtn"><span>Reschedule</span><span className="cancelspanbtn" onClick={opencancelForm} >Cancel</span><span className="queuespanbtn" onClick={QueueOpen}>Queue</span></div></div>
               {showcancelForm && <div className="cancellationoption"><Button>Add 100 KWD to wallet</Button><Button>Process Refund 100 KWD</Button></div>}
               {/* {queue&&<Queue/>} */}
            </div>
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov <span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div></div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate"></div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime"></div></div>
                <div className="listpaperflex"><div className="membericon">Member <span>M</span></div><div className="reviewbtn"><span>Reschedule</span><span className="cancelspanbtn">Cancel</span><span className="queuespanbtn">Queue</span></div></div>

            </div>
            

        </div>
    )}
    export default Myappointments;