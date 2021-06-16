import React, { useEffect, useState } from 'react'
import diet from '../../../images/Diet_b.png'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider'
import Location from '../../../images/pin.png'
import './Diet_BookingHistoryModal.scss'
import moment from 'moment'
export default function BookingHistoryModal(props){
  
  const[HideAdrs,setHideAdrs]=React.useState(false)
  const ElipseOpen=()=>{
      setHideAdrs(!HideAdrs)
  }
 
  const {bookingHistory}=props

    return(
      <div className="diet_b_modal">
      <div className="lab_repeat_div">
        <div className="lab_med_head"><img src={bookingHistory?bookingHistory.vendor_profile_path:props.bookingid.vendor_profile_path} className="diet_img"/></div>
        <div className="h_diet_h">{bookingHistory?bookingHistory.vendor_name:props.bookingid.vendor_name}</div>
        <div style={{fontWeight:"500"}}>{bookingHistory?bookingHistory.diet_package_name:props.bookingid.diet_package_name}</div>
       
      </div>
        
        
      <Divider/>
        <Form>
        <Row form>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">{bookingHistory?bookingHistory.DiethistoryData[0].name:props.bookingid.DietBookedData[0].name}</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
                <p className="mem_con_namehead">Total Days</p><p className="mem_con_name">{
                  bookingHistory?bookingHistory.DiethistoryData[0].diet_duration:
                  props.bookingid.DietBookedData[0].diet_duration
                }</p>
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Month (KWD)</p>
            <p className="mem_con_name">{
             bookingHistory?bookingHistory.DiethistoryData[0].amount:
            props.bookingid.DietBookedData[0].amount}</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Start Date</p>
            <p className="mem_con_name">{
            moment(bookingHistory?bookingHistory.DiethistoryData[0].from_date:props.bookingid.DietBookedData[0].from_date).format("DD MMM YYYY")}</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">End Date</p>
            <p className="mem_con_name">{moment(bookingHistory?bookingHistory.DiethistoryData[0].from_date:props.bookingid.DietBookedData[0].to_date).format("DD MMM YYYY")}</p> 
            </FormGroup>
          </Col>
        
          <Col md={4} sm={3}>
          {bookingHistory?bookingHistory.cancel_status:props.bookingid.cancel_status===1?<FormGroup>
            <p className="mem_con_namehead">Cancelled Date & Time</p>
            {/* <p className="mem_con_name">25 Apr 2021, 09:30 AM</p>  */}
            </FormGroup>:""}
          </Col>
         
        
        </Row>
        </Form>  
        </div>
    )
}