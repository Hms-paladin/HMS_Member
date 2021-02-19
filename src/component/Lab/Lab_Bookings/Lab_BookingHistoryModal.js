import React from 'react'
import Nurse from '../../../images/nurse.png'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider'
import Location from '../../../images/pin.png'
import './Lab_BookingHistoryModal.scss'
export default function BookingHistoryModal(props){
  console.log(props,"divya")
  const Historyid=props.History[0].historyid&&props.History[0].historyid
  const[HideAdrs,setHideAdrs]=React.useState(false)
  const ElipseOpen=()=>{
      setHideAdrs(!HideAdrs)
  }
    return(
      <div>
      <div className="lab_repeat_div">
        <span><label className="lab_med_head">YIACO Medical Center</label>
        <img src={Location}/></span>
        <div>
        <span>{HideAdrs?<label className="lab_addrs_elps">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:
        <label className="lab_addrs_elps">Jabriya</label>} <span className="elipse" onClick={ElipseOpen}>...</span></span>
        </div>
      </div>
        
        
      <Divider/>
        <Form>
        <Row form>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
                <p className="mem_con_namehead">Date</p><p className="mem_con_name">16 Apr 2021</p>
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Test</p>
            <p className="mem_con_name">X ray-Teeth</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Time</p>
            <p className="mem_con_name">09:00 AM</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Address</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cost (KWD)</p>
            <p className="mem_con_name">50</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cancelled Date</p>
            <p className="mem_con_name">25 Apr 2021</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cancelled Time</p>
            <p className="mem_con_name">10:30 PM</p> 
            </FormGroup>
          </Col>
        
        </Row>
        </Form>  
        </div>
    )
}