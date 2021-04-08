import React from 'react'
import Calendar from  '../BookingsCalender/Calendar'
import Grid from '@material-ui/core/Grid'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {Tag,Modal} from 'antd'
import ConfirmationModal from '../AddMember/ConfirmationModal'
import CloseIcon from '@material-ui/icons/Close';
export default function Tc_BookingReShedule(props){
      // modal functions
  const [modalOpen,setmodalOpen]=React.useState(false)
  const ModalOpenClick=()=>{
     setmodalOpen(true)
  }
  const ModalCloseClick=()=>{
     setmodalOpen(false)
  }
    return(
        <div className="booking_shedule_tra">
            <Grid container>
                <Grid item xs={12} md={5}>
                   <Calendar
                    heading="Reschedule"
                    Shedule_dots="enable"
                    // reschedule="enable"
                   />
                </Grid>
                <Grid item xs={12} md={7} className="tra_booing_parent">
                <div className="tra_booking_confirm">
        <div className="confir_div"><div style={{fontSize:"18px",fontWeight:"600"}}>RescheduleConfirmation</div><div style={{color:"#83AE40",fontWeight:"600"}}>Two Member Program</div></div>
        {/* form details */}
       
        <Form className="form_items">
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Name</Label>
        <Col sm={6}>
        {/* <label className="Nurse_form_de">Dalal</label> */}
        {[...Array(2)].map((data)=><Tag closable className="tag_tra_name">
          Dalal
        </Tag>)}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Training Center</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">Liverpool Club</label>
        
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Start Date</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">23 Mar 2021</label>
        </Col>
      </FormGroup>
      
     
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Sessions</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">12</label>
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Package Cost (KWD)</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">80</label>
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Total Cost (KWD)</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">80</label>
        </Col>
      </FormGroup>
    
      </Form> 
      <CloseIcon className="add_close_icon" onClick={()=>props.ConfirmClose()}/>
       <div style={{textAlign:"center",padding:"10px 10px"}}><Button className="nurse_book_btn" onClick={ModalOpenClick}>Book</Button></div>
        <Modal
        title={<div className="bookconfirm">Reschedule Confirmation</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        className="confirm_modal"
        // maxWidth={"md"}
        width={800}
        // style={{width:"800px"}}
       >
         <ConfirmationModal ModalCloseClick={ModalCloseClick}/>
       </Modal> 
        </div>
       

                
                </Grid>
           </Grid>
        </div>
    )
}