import React from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import { Tag } from 'antd';
import Calendar from '../NurseHistory/RangeCalendar'
import './DesignDuties.scss'
export default function DesignDuties(props){
    return(
        <div  className="nur_duties">
                <div className="nur_duties_div"><div style={{width:"100%"}}><Labelbox type="text" placeholder="Design Duties"/></div><AddBoxIcon className="duty_addbox"/></div>
                <Tag closable className="close_tag">Caring</Tag>
                <div className="date_pic_div"><Labelbox type="datepicker" labelname="Start Date"/><Labelbox type="text" labelname="End Date"/></div>
                <div  className="date_pic_div"><Labelbox type="timepicker" labelname="Start Time"/><Labelbox type="text" labelname="End Time"/></div>
                <Calendar/>
                <div className="excl_parent_div"><div className="excl_dot"></div><label style={{color:"#504D5D",fontWeight:"600"}}>Excluded Days</label></div>
                <div className="proceed_div"><Button className="proceed" onClick={()=>props.ProceedClick()}>Proceed</Button></div></div>
    )
}