import React from "react";
import "./myappointments.scss";
import plus from '../../../images/plus.png'
import history from '../../../images/history-button.svg'
import filter from '../../../images/filter2.svg'
import { ReactSVG } from 'react-svg'




var hashHistory = require('react-router-redux')




                  

function History(props) {
   
     
    return(
        <div className="myappointments_layout">
            <div className="appointmentsheadflex">
                <div>History</div>
                <div className="appointment_icons">
                    <img src={plus}/>
                    <ReactSVG src={history}/>
                    <ReactSVG src={filter}/>

                </div>
            </div>
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov <span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div>Cancelled Date & Time</div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate">24 Nov 2020</div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime">11AM</div></div>
                <div className="listpaperflex"><div className="cancelledclr">Cancelled</div><div className="reviewbtn">Review</div></div>

            </div>
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov <span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div>Rescheduled Date & Time</div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate">24 Nov 2020</div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime">11AM</div></div>
                <div className="listpaperflex"><div className="rescheduleclr">Rescheduled</div><div className="reviewbtn"><span>Review</span><span>View Prescription</span></div></div>

            </div>
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov <span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div></div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate"></div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime"></div></div>
                <div className="listpaperflex"><div className="rescheduleclr">-</div><div className="reviewbtn"><span>Review</span><span>View Prescription</span></div></div>

            </div>

        </div>
    )}
    export default History;