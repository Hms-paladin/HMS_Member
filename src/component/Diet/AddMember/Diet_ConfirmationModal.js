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
  console.log("props",props)
    return(
       <div className="booking_confirm">
           {/* <div className="bookconfirm">BookingConfirmation</div> */}
           <Grid container spacing={4} className="book_confirm_container">
               <Grid item sm={12} md={4} className="confirm_nurse_imggrid">
                  <div className="Nurse_img_div">
                    <img src={props.DietCompany[0].vendor_filename} className="confir_nurse"/>
                  <div className="confirm_b_name">{props.DietCompany[0].dietcompanyname}</div>
                  <div style={{fontSize:"13px",color:"#ABA9A9"}}>{props.GetData[0].packagename}</div>
                   
                    </div>
               </Grid>
               <Grid item xs={12} md={8}>
               <Form>
        <Row form>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">{localStorage.getItem("name")}</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Delivery Address</p>
            {/* <p className="mem_con_name">Jabriya</p>  */}
            <div>
        {HideAdrs?<label className="mem_con_name">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:
        <label className="mem_con_name">{localStorage.getItem("address")}</label>} <span className="elipse" onClick={ElipseOpen}>...</span></div>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Total Days</p>
            <p className="mem_con_name">{props.GetData[0].duration}</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Month (KWD)</p>
            <p className="mem_con_name">{props.GetData[0].amount}</p> 
            </FormGroup>
          </Col>
         
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">Start Date</p>
            <p className="mem_con_name">{props.GetData[0].from_date}</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="mem_con_namehead">End Date</p>
            <p className="mem_con_name">{props.GetData[0].to_date}</p> 
            </FormGroup>
          </Col>
          </Row>
          </Form>
          </Grid>
            <Grid item xs={12} md={12} style={{textAlign:"center"}}>
              <NavLink to="/paymentmethod">
               <Button className="confirm_b_btn" onClick={props.BookingData}>Proceed</Button>
              </NavLink> 
               </Grid>   
           </Grid>
           
       </div>
    )
}
