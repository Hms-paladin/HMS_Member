import React from 'react'
import './Lab_ConfirmationModal.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/nurse.png'
import { Col, Form, FormGroup, Label, Input,Row} from 'reactstrap';
import PaymentMethod from '../../Pharmacy/PaymentMethod/PaymentMethod'
import {NavLink} from 'react-router-dom'
export default function ConfirmationModal(props){
    
    return(
       <div className="booking_confirm">
           {/* <div className="bookconfirm">BookingConfirmation</div> */}
           <Grid container spacing={4} className="book_confirm_container">
               <Grid item sm={12} md={4} className="confirm_nurse_imggrid">
                  <div className="Nurse_img_div"><img src={Nurse} className="confir_nurse"/></div>
                  <div className="confirm_b_name">Best Clinical Lab</div>
               </Grid>
               <Grid item xs={12} md={8}>
               <Form>
        <Row form>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Test</p>
            <p className="mem_con_name">X ray-Teeth</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Date</p>
            <p className="mem_con_name">01 Jan 2021</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Time</p>
            <p className="mem_con_name">09:00 AM</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Address</p>
            <p className="mem_con_name">Jabriya</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cost (KWD)</p>
            <p className="mem_con_name">50</p> 
            </FormGroup>
          </Col>
          </Row>
          </Form>
          </Grid>
            <Grid item xs={12} md={12} style={{textAlign:"center"}}>
               <NavLink to="paymentmethod"><Button className="confirm_b_btn">Confirm</Button></NavLink>
               </Grid>   
           </Grid>
           
       </div>
    )
}