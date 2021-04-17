import React,{useState}  from "react";
import "./myappointments.scss";
import plus from '../../../images/plus.png'
import historybtn from '../../../images/history-button.svg'
import filter from '../../../images/filter2.svg'
import Queue from './Queue'
import { ReactSVG } from 'react-svg'
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route,useHistory,Link,NavLink,Redirect} from "react-router-dom";
import Labelbox from "../../../helpers/labelbox/labelbox";





var hashHistory = require('react-router-redux')




                  

function Myappointment(props) {
    let history = useHistory();

    const HistoryPush=(url)=>{
      history.push(url);
    //   window.location.reload()
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
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov 2020<span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div></div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate"></div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime"></div></div>
                <div className="listpaperflex"><div className="appnttypeclr">Appointment Type</div><div className="reviewbtn"><span onClick={()=>HistoryPush("/doctorbookingreschedule")}>Reschedule</span><span className={showcancelForm?"doct_change_color":"cancelspanbtn"} onClick={opencancelForm} >Cancel</span><span className={queue?"doct_change_color":"queuespanbtn"} onClick={QueueOpen}>Queue</span></div></div>
               {showcancelForm && <div className="cancellationoption"><Button>Add 100 KWD to wallet</Button><Button>Process Refund 100 KWD</Button></div>}
               {queue&&<Queue/>}
            </div>
            <div className="appointmentlistpaper">
                <div className="listpaperflex"><div className="doctrname">Dr Farah</div><div className="appointdate">27 Nov 2020<span className="appointtime">08:00AM</span></div></div>
                <div className="listpaperflex"><div className="patname">Salmiyah</div><div></div></div>
                <div className="listpaperflex"><div className="paidbg">Paid</div><div className="paymentdate"></div></div>
                <div className="listpaperflex"><div className="amntcap">Amount <span className="amntinkwd">100 KWD</span></div><div className="paymenttime"></div></div>
                <div className="listpaperflex"><div className="membericon">Member <span>M</span></div><div className="reviewbtn"><span onClick={()=>HistoryPush("/doctorbookingreschedule")}>Reschedule</span><span className="cancelspanbtn" >Cancel</span><span className="queuespanbtn">Queue</span></div></div>

            </div>
            

        </div>
    )}
    export default Myappointment;