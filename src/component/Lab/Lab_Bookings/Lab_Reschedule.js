import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Location from '../../../images/pin.png'
import Labelbox from '../../../helpers/labelbox/labelbox'
import './Lab_Reschedule.scss'
export default function Lab_Reschedule(props){
    const[HideAdrs,setHideAdrs]=React.useState(false)
    const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    return(
        <div className="lab_reshedule_root">
             <div className="header_reschedule">
                 <div style={{fontSize:"18px",fontWeight:"600"}}>BookingConfirmation</div>
                 <div style={{color:"#83AE40",fontWeight:"600"}}>Best Clinical Lab<span><img src={Location} className="location_img"/></span></div>
            </div>
            <Form className="form_items">
        <FormGroup row>
        <Label for="exampleEmail" sm={6} >Name</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">Dalal</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Test</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">X-ray Teeth</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} > Date</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">01 Jan 2021</label>
        </Col>
      </FormGroup>
      
     
      <FormGroup row>
        <Label for="exampleEmail" sm={6} > Time</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">09:00 AM</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Cost (KWD)</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">50</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Address</Label>
        <Col sm={6}>
          <div>
          <span>{HideAdrs?<label className="Nurse_form_de">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:
        <label className="Nurse_form_de">Jabriya</label>} <span className="elipse" onClick={ElipseOpen}>...</span></span></div>
        </Col>
      </FormGroup>
    
      </Form> 
      <div className="res_td_pick">
          <div className="re_date"><Labelbox type="datepicker" labelname="Date"/></div>
          <div className="re_time"><Labelbox type="timepicker" labelname="Time"/></div>
      </div>
      <div className="re_btn_div"><Button className="lab_res_btn" onClick={()=>props.ReOpenClose()}>Reschedule</Button></div>
        </div>
    )
}