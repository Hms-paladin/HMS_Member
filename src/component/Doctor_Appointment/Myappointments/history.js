import React,{useState} from "react";
import "./myappointments.scss";
import plus from '../../../images/plus.png'
import history from '../../../images/history-button.svg'
import filter from '../../../images/filter2.svg'
import { ReactSVG } from 'react-svg'
import { Button } from "@material-ui/core";
import Labelbox from "../../../helpers/labelbox/labelbox";

import {Modal} from 'antd'




var hashHistory = require('react-router-redux')




                  

function History(props) {
    const [showfilterForm,setShowfilter] = useState(false)
     
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
     
    return(
        <div className="myappointments_layout">
            <div className="appointmentsheadflex">
                <div>History</div>
                <div className="appointment_icons">
                    <img src={plus}/>
                    {/* <ReactSVG src={history}/> */}
                    <ReactSVG src={filter} onClick={openfilter}/>

                </div>
            </div>
            {showfilterForm && <div className="appointmentlistpaper">
                <div className="advfilterhead">Advanced Filter</div>
                <div className="advfilterflex">
                    <div className="flexr1"><Labelbox type="select" labelname="Member Name"/></div>
                    <div className="flexr1"><Labelbox type="select" labelname="Doctor Name"/></div>
                    <Labelbox type="datepicker" labelname="From Date"/>
                    <Labelbox type="datepicker" labelname="To Date"/>
                    <div className="applybtndiv"><Button className="applybtn">Apply</Button></div>



                </div>
            </div>}
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
                <div className="listpaperflex"><div className="rescheduleclr">Rescheduled</div><div className="reviewbtn"><span>Review</span><span onClick={ModalOpenClick}>View Prescription</span></div></div>

            </div>
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov <span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div></div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate"></div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime"></div></div>
                <div className="listpaperflex"><div className="rescheduleclr">-</div><div className="reviewbtn"><span>Review</span><span onClick={ModalOpenClick}>View Prescription</span></div></div>

            </div>
            <Modal
        title={<div className="">Prescription</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        className=""
        // maxWidth={"md"}
        // style={{width:"800px"}}
       >
           <div className="presflexdiv">
               <div className="presflex"><div className="presflexhead">Name</div><div>Hannah</div></div>
               <div className="presflex"><div className="presflexhead">Doctor Name</div><div>Dalal</div></div>
               <div className="presflex"><div className="presflexhead">Date</div><div>21 Nov 2020</div></div>
           </div>
       </Modal>

        </div>
    )}
    export default History;