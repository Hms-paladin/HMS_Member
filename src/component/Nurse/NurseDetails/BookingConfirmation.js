import React from 'react'
import Nurseimage1 from '../../../images/pharmacy.png'
import Nurseimage2 from '../../../images/nurse.png'
import Nurseimage3 from '../../../images/doctorappoinment.png'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import Labelbox from '../../../helpers/labelbox/labelbox'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import './BookingConfirmation.scss'
import DesignDuties from './DesignDuties'
export default function BookingConfirmation(){
    const images = [
        {img:Nurseimage1,name:"Lina"},
        {img:Nurseimage2,name:"Aysa"},
        {img:Nurseimage3,name:"Saud"}
    ]
    const[editOpen,seteditOpen]=React.useState(false)
    const[DutiesOpen,setDutiesOpen]=React.useState(true)
    function EditClick(){
      seteditOpen(true)
    }
    function SaveClick(){
      seteditOpen(false)
    }
    function DutiesClick(){
      setDutiesOpen(false)
    }
   
    return(
        <div>
         <div className="member_parent_div">
            <div className="mem_left_icon"><ChevronLeftIcon className="mem_left"/></div>
              {images.map((data)=>{
            return(
             <div className="nurse_img_cont">
                 <img src = {data.img} className="mem_img"/>
                <div className="mem_name">{data.name}</div>
            </div> 
            ) 
    
        })}
             <div><div className="add_member"><AddIcon/></div>
                 <div className="mem_name">New</div>
            </div>
        </div>
        <div className="confir_div"><div style={{fontSize:"18px",fontWeight:"600"}}>BookingConfirmation</div><div style={{color:"#83AE40",fontWeight:"600"}}>Rose</div></div>
        {/* form details */}
       
        <Form className="form_items">
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Name</Label>
        <Col sm={6}>
        {editOpen===false?<label className="Nurse_form_de">Dalal</label>
           :<Labelbox type="text"/>}
         {editOpen===false?<EditIcon className="edit_nur_name" onClick={EditClick}/>:
          <SaveIcon className="edit_nur_name" onClick={SaveClick}/>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Designed Duties</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">Caring,Baby sitting,In-Home Care,Coordinate with physician</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Start Date</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">01 Jan 2021</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >End Date</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">05 Apr 2021</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Excluded Days</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">
          Wed 04 Apr 2021,
          Thu 18 Apr 2021,
          Mon 22 Apr 2021
        </label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Duty Hours</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">12:00 Hrs</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >General Duties</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">Baby Care, Elderly Care</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Start Time</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">09:00 AM</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >End Time</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">09:00 PM</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Cost Per Month(KWD)</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">480</label>
        </Col>
      </FormGroup>
      </Form> 
       <div style={{textAlign:"center",padding:"10px 10px"}}><Button className="nurse_cancel" onClick={DutiesClick}>Edit</Button><Button className="nurse_book_btn">Book</Button></div>
       {/* {DutiesOpen===false?<DesignDuties/>:null} */}
        </div>
       
    )
}