import React from 'react';
import './HospitalViewModal.css';
import RoomIcon from '@material-ui/icons/Room';
import Divider from '@material-ui/core/Divider';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';



export default function HospitalView(){
    return(
       <div>
        <div className="hospital_head">
            <div style={{display:'flex'}}>
                <p className="hos_name_haed">Mayo Clinic Hospital</p>
                <RoomIcon className="loac_ion"/>
                </div>
                <span>Shaab Sea View</span>
                <Divider/> 
                <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
                <p className="mem_con_namehead">Check In</p>
                <p className="mem_con_name">08 Dec 2020</p>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
               <p className="mem_con_namehead">Check Out</p>
               <p className="mem_con_name">08 Dec 2020</p>
            
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Room Type</p>
            <p className="mem_con_name">Lulwa</p>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">total Days</p>
                   <p className="mem_con_name">2</p>
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Day(KWD)</p>
            <p className="mem_con_name">400</p>
           
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Day(KWD)</p>
            <p className="mem_con_name">800</p>
            </FormGroup>
          </Col>
       
        
        </Row>
        </Form>         
    
        </div>
       </div>
    )
}