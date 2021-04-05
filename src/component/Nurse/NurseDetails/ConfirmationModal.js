import React from 'react'
import './ConfirmationModal.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/nurse.png'
import {NavLink} from 'react-router-dom'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider'
export default function ConfirmationModal(props){
    const[HideAdrs,setHideAdrs]=React.useState(false)
    // elipse function
    const ElipseOpen=()=>{
      setHideAdrs(!HideAdrs)
  }
    return(
        <div className="booking_confirm">
           {/* <div className="bookconfirm">BookingConfirmation</div> */}
           <Grid container spacing={4} className="book_confirm_container">
               <Grid item sm={12} md={3} className="confirm_nurse_imggrid">
                  <div className="Nurse_img_div">
                    <img src={Nurse} className="confir_nurse"/>
                    <div className="confirm_b_name">Rose</div>
                    </div>
                  
               </Grid>
               <Grid item xs={12} md={9}>
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
            <p className="mem_con_namehead">Start Date</p>
            <p className="mem_con_name">1 Apr 2021</p> 
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">End Date</p>
            <p className="mem_con_name">03 Apr 2021</p> 
            </FormGroup>
          </Col>
       
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Designed Duties</p>
            <p className="mem_con_name">Caring, Baby sitting, In-Home Care, Coordinate with physician</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Excluded Days</p>
            <p className="mem_con_name">Wed 18 Nov 2019, Thu 19 Nov 2019, Mon 23 Nov 2019</p> 
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">Duty Hours</p>
            <p className="mem_con_name">12:00 Hrs</p> 
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">Start Time</p>
            <p className="mem_con_name">09:00 AM</p> 
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="mem_con_namehead">End Time</p>
            <p className="mem_con_name">09:00 PM</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Month(KWD)</p>
            <p className="mem_con_name">480</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="mem_con_namehead">General Duties</p>
            <p className="mem_con_name">Baby Care, Elderly Care</p> 
            </FormGroup>
          </Col>
         
          </Row>
          </Form>
          </Grid>
            <Grid item xs={12} md={12} style={{textAlign:"center"}}>
               <NavLink to="/paymentmethod"><Button className="confirm_b_btn">Confirm</Button></NavLink>
               </Grid>   
           </Grid>
           
       </div>
    )
}