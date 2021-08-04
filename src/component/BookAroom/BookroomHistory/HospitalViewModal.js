import React from 'react';
import './HospitalViewModal.css';
import Pin from "../../../images/pin.png";
import Divider from '@material-ui/core/Divider';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';


export default function HospitalView(props){
    return(
       <div>
        <div className="hospital_head">
            <div style={{display:'flex'}}>
                <p className="hos_name_haed">{props.BookingList.roomVendorName}</p>
                <img src={Pin} className="loac_ion"/>
                </div>
                <span style={{color:'grey', fontSize:'15px', marginRight:'25px'}}>{props.BookingList.vendor_location}</span>
                </div>
                <Divider style={{margin:'8px'}}/> 
                <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
            <p className="modal_head">Name</p>
            <p className="mem_con_name">{props.BookingList.patientName}</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
                <p className="modal_head">Check In</p>
                <p className="mem_con_name">{moment(props.BookingList.book_date_from).format("DD-MMM-YYYY")}</p>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
               <p className="modal_head">Check Out</p>
               <p className="mem_con_name">{moment(props.BookingList.book_date_to).format("DD-MMM-YYYY")}</p>
            
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Room Type</p>
            <p className="mem_con_name">{props.BookingList.br_room_type}</p>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="modal_head">Total Days</p>
                   <p className="mem_con_name">{props.BookingList.totalDays}</p>
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Cost Per Day(KWD)</p>
            <p className="mem_con_name">{props.BookingList.amount}</p>
           
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Total Cost(KWD)</p>
            <p className="mem_con_name">{props.BookingList.amount}</p>
            </FormGroup>
          </Col>
       
        
        </Row>
        </Form>         
    
     
       </div>
    )
}