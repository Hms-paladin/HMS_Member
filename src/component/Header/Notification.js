import React from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import PersonIcon from '@material-ui/icons/Person';
import './header.scss'
export default function Notification(props){
    return(
        <div className="notifi_div">
        <div><PersonIcon/></div>
        <div>
          <div>Dr.Farah</div>
          <div>Appointment today 09:00 AM</div>
          <div>Consulting</div>
          <div>Online Consulting</div>
        </div>
        <div>
          <p>10.30 AM</p>
          <VideocamIcon/>
          <p> Start Session</p>
        </div>
        </div>
    )
}