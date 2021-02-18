import React from 'react'
import diet from '../../../images/Diet_b.png'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider'
import Location from '../../../images/pin.png'
import './Diet_BookingHistoryModal.scss'
export default function BookingHistoryModal(props){
  console.log(props,"divya")
  const Historyid=props.History[0].historyid&&props.History[0].historyid
  const[HideAdrs,setHideAdrs]=React.useState(false)
  const ElipseOpen=()=>{
      setHideAdrs(!HideAdrs)
  }
    return(
      <div className="diet_b_modal">
      <div className="lab_repeat_div">
        <div className="lab_med_head"><img src={diet} className="diet_img"/></div>
        <div className="h_diet_h">Healthy Eats</div>
        <div style={{fontWeight:"500"}}>Keto Diet</div>
       
      </div>
        
        
      <Divider/>
        <Form>
        <Row form>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
                <p className="mem_con_namehead">Total Days</p><p className="mem_con_name">28</p>
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cost Per Month (KWD)</p>
            <p className="mem_con_name">200</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Start Date</p>
            <p className="mem_con_name">16 Apr 2021</p> 
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">End Date</p>
            <p className="mem_con_name">23 Apr 2021</p> 
            </FormGroup>
          </Col>
        
          <Col md={4} sm={3}>
            <FormGroup>
            <p className="mem_con_namehead">Cancelled Date</p>
            <p className="mem_con_name">25 Apr 2021</p> 
            </FormGroup>
          </Col>
         
        
        </Row>
        </Form>  
        </div>
    )
}