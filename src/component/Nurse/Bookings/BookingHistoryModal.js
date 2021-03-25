import React from 'react'
import Nurse from '../../../images/nurse.png'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider'
import './BookingHistoryModal.scss'
export default function BookingHistoryModal(props){
  console.log(props,"divya")
    return(
      <div>
      <div className="nurse_review_imgdiv"><img src={Nurse} style={{width:"100px",borderRadius:"50px",boxShadow: '0px 3px 5px #00000033'}}/><label className="nur_his_name">Rose</label></div>
      <Divider/>
        <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
                <p className="mem_con_namehead">Designed Duties</p><p className="mem_con_name">Caring,Baby sitting,In-Home Care,Coordinate with physician</p>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
               <p className="mem_con_namehead">Start Date</p><p className="mem_con_name">2 Feb 2021</p>
            
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">End Date</p><p className="mem_con_name">7 Apr 2021</p>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">Excluded Days</p>
                   <p className="mem_con_name"> Wed 04 Apr 2021,
                   Thu 18 Apr 2021,
                   Mon 22 Apr 2021</p>
            </FormGroup>
          </Col>
           <Col md={2}>
            <FormGroup>
              <div><p className="mem_con_namehead">Cancelled Date&Time</p><p className="mem_con_name">5 Feb 2021<br/>10.30 AM</p></div>
               {/* <div><p className="mem_con_namehead">Reschedule Date&Time</p><p className="mem_con_name">4 Feb 2021<br/>10.30 AM</p></div> */}
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">Duty Hours</p><p className="mem_con_name">12 Hrs</p>
           
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">General Duties</p><p className="mem_con_name">Baby Care, Elderly Care</p>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <div><p className="mem_con_namehead">Start Time</p><p className="mem_con_name">09.00AM</p></div> 
           
            </FormGroup>
          </Col>
           <Col md={2}>
           <FormGroup>
              <div><p className="mem_con_namehead">End Time</p><p className="mem_con_name">09.00PM</p></div> 
           </FormGroup>
         </Col>
         <Col md={2}>
           <FormGroup>
           <div><p className="mem_con_namehead">Cost Per Month(KWD)</p><p className="mem_con_name">480</p></div> 
           </FormGroup>
         </Col>
        </Row>
        </Form>  
        </div>
    )
}