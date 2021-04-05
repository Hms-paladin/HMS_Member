import React from 'react'
import './Diet_ConfirmationModal.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/Diet_b.png'
import { Col, Form, FormGroup, Label, Input,Row} from 'reactstrap';
// import PaymentMethod from '../../Pharmacy/PaymentMethod/PaymentMethod'
import {NavLink} from 'react-router-dom'
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
               <Grid item sm={12} md={4} className="confirm_nurse_imggrid">
                  <div className="Nurse_img_div">
                    <img src={Nurse} className="confir_nurse"/>
                  <div className="confirm_b_name">Healthy Eats</div>
                  <div style={{fontSize:"13px",color:"#ABA9A9"}}>Keto Diet</div>
                   
                    </div>
               </Grid>
               <Grid item xs={12} md={8}>
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
            <p className="mem_con_namehead">Delivery Address</p>
            {/* <p className="mem_con_name">Jabriya</p>  */}
            <div>
        {HideAdrs?<label className="mem_con_name">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:
        <label className="mem_con_name">Jabriya</label>} <span className="elipse" onClick={ElipseOpen}>...</span></div>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Total Days</p>
            <p className="mem_con_name">28</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Month (KWD)</p>
            <p className="mem_con_name">200</p> 
            </FormGroup>
          </Col>
         
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Start Date</p>
            <p className="mem_con_name">29 Nov 2020</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">End Date</p>
            <p className="mem_con_name">27 Dec 2020</p> 
            </FormGroup>
          </Col>
          </Row>
          </Form>
          </Grid>
            <Grid item xs={12} md={12} style={{textAlign:"center"}}>
               <NavLink to="paymentmethod"><Button className="confirm_b_btn">Proceed</Button></NavLink>
               </Grid>   
           </Grid>
           
       </div>
    )
}
