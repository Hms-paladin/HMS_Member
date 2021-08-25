import React from 'react'
import './ProceedConfirm.css'
import Pin from "../../../images/pin.png"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/nurse.png'
import {NavLink} from 'react-router-dom'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Hospital  from "../../../images/BookaRoom/room_img.png"
// import Divider from '@material-ui/core/Divider'
export default function ProceedConfirm(props){
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
                  <div className="bk_img_div">
                    <img src={Hospital} className="confir_nurse"/>
                     
                    <span className="span_cont"> <div className="confirm_b_name">
                        Mayo Clicnic Hospital
                    </div>
                    <img src={Pin} style={{width:'18px', height:'18px'}}/>

                    </span>
                     <p style={{color:'#858585'}}>Shaab sea view<span className="dot_align">...</span></p>
                    </div>
                  
               </Grid>
               <Grid item xs={12} md={9}>
               <Form>
        <Row form>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Check In</p>
            <p className="mem_con_name">08 Apr 2021</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Check Out</p>
            <p className="mem_con_name">10 Apr 2021</p> 
            </FormGroup>
          </Col>
       
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Room Type</p>
            <p className="mem_con_name">Lulwa</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Total Days</p>
            <p className="mem_con_name">2</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Day (KWD)</p>
            <p className="mem_con_name">400</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Total Cost (KWD)</p>
            <p className="mem_con_name">800</p> 
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