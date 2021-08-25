import React from 'react';
import './HospitalViewModal.css';
import Pin from "../../../images/pin.png";
import Divider from '@material-ui/core/Divider';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function HospitalView(){
    return(
       <div>
        <div className="hospital_head">
            <div style={{display:'flex'}}>
                <p className="hos_name_haed">Mayo Clinic Hospital</p>
                <img src={Pin} className="loac_ion"/>
                </div>
                <span style={{color:'grey', fontSize:'15px', marginRight:'25px'}}>Shaab Sea View</span>
                </div>
                <Divider style={{margin:'8px'}}/> 
                <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
            <p className="modal_head">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
                <p className="modal_head">Check In</p>
                <p className="mem_con_name">08 Dec 2020</p>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
               <p className="modal_head">Check Out</p>
               <p className="mem_con_name">08 Dec 2020</p>
            
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Room Type</p>
            <p className="mem_con_name">Lulwa</p>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="modal_head">Total Days</p>
                   <p className="mem_con_name">2</p>
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Cost Per Day(KWD)</p>
            <p className="mem_con_name">400</p>
           
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Total Cost(KWD)</p>
            <p className="mem_con_name">800</p>
            </FormGroup>
          </Col>
       
        
        </Row>
        </Form>         
    
     
       </div>
    )
}