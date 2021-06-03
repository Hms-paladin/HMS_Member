import React from 'react'
import './Trainer_ConfirmationModal.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/Diet_b.png'
import Trainer from "../../../images/trainer.png";
import { Col, Form, FormGroup, Label, Input,Row} from 'reactstrap';
// import PaymentMethod from '../../Pharmacy/PaymentMethod/PaymentMethod'
import {NavLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import Internet from '../../../images/internet.svg'
import Gym from '../../../images/gym.svg'
import { ReactSVG } from 'react-svg'
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
                    <img src={Trainer} className="confir_nurse"/>
                  <div className="confirm_b_name">Farah</div>
                   
                    </div>
               </Grid>
               <Grid item xs={12} md={9}>
               <Form>
        <Row form>
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">Trainer</p>
            {/* <p className="mem_con_name">Jabriya</p>  */}
           
        <label className="mem_con_name">Farah</label>
            </FormGroup>
          </Col>
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">From Date</p>
            <p className="mem_con_name">01 Apr 2021</p> 
            </FormGroup>
          </Col>
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">To Date</p>
            <p className="mem_con_name">08 Apr 2021</p> 
            </FormGroup>
          </Col>
         
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">Time</p>
            <p className="mem_con_name">08:00 AM To 09:00 AM</p> 
            </FormGroup>
          </Col>
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">Sessions</p>
            <p className="mem_con_name">30 (Mon - Thu - Sat)</p> 
            </FormGroup>
          </Col>
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">Training Location</p>
             <div className ="tainerlist_home_inner_booking">
                  {/* <div className="home_icon_inner_p"><div><HomeIcon/><div>Home</div></div></div> */}
                  <div className="internet_div_tra_inner_p"><div  className="inter_net_img"><ReactSVG src={Internet}/><div>Online</div></div></div>
                  {/* <div className="internet_div_gym_inner_p"><div  className="inter_net_img"><ReactSVG src={Gym}/><div>Centre</div></div></div> */}
                 </div>
            </FormGroup>
          </Col>
          <Col md={3} sm={6}>
            <FormGroup>
            <p className="mem_con_namehead">Cost (KWD)</p>
            <p className="mem_con_name">160</p> 
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
