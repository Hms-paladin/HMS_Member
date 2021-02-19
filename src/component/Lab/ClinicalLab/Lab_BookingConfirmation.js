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
import Location from '../../../images/pin.png'
import './Lab_BookingConfirmation.scss'
 import ConfirmationModal from './Lab_ConfirmationModal'
import AddMember from './AddMember'
import CloseIcon from '@material-ui/icons/Close';
import {Modal} from 'antd'
export default function BookingConfirmation(props){
  // modal functions
  const [modalOpen,setmodalOpen]=React.useState(false)
  const ModalOpenClick=()=>{
     setmodalOpen(true)
  }
  const ModalCloseClick=()=>{
     setmodalOpen(false)
  }
  // end
    const images = [
        {img:Nurseimage1,name:"Lina"},
        {img:Nurseimage2,name:"Aysa"},
        {img:Nurseimage3,name:"Saud"}
    ]
    const[editOpen,seteditOpen]=React.useState(false)
    const[HideAdrs,setHideAdrs]=React.useState(false)
    const[BookOpen,setBookOpen]=React.useState(false)
    function EditClick(){
      seteditOpen(true)
    }
    function SaveClick(){
      seteditOpen(false)
    }
  
    function BookClick(){
      setBookOpen(true)
    }
    function BookClose(){
      setBookOpen(false)
    }
   // elipse function
   const ElipseOpen=()=>{
    setHideAdrs(!HideAdrs)
}
    return(
        <div className="lab_booking_confir_root">
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
             <div className="add_plus_div"><div className="add_member" onClick={BookClick}><AddIcon/></div>
                 <div className="mem_name">New</div>
            </div>
        </div>
        {BookOpen===true?<AddMember BookClose={BookClose}/>:null}
        <div className="confir_div"><div style={{fontSize:"18px",fontWeight:"600"}}>BookingConfirmation</div><div style={{color:"#83AE40",fontWeight:"600"}}>Best Clinical Lab<span><img src={Location} className="location_img"/></span></div></div>
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
        <Label for="exampleEmail" sm={6} >Test</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">X-ray Teeth</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} > Date</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">01 Jan 2021</label>
        </Col>
      </FormGroup>
      
     
      <FormGroup row>
        <Label for="exampleEmail" sm={6} > Time</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">09:00 AM</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Address</Label>
        <Col sm={6}>
          <div>
        {HideAdrs?<label className="Nurse_form_de">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:
        <label className="Nurse_form_de">Jabriya</label>} <span className="elipse" onClick={ElipseOpen}>...</span></div>
        </Col>
      </FormGroup>
    
      </Form> 
      <CloseIcon className="add_close_icon" onClick={()=>props.ConfirmClose()}/>
       <div style={{textAlign:"center",padding:"10px 10px"}}><Button className="nurse_book_btn" onClick={ModalOpenClick}>Book</Button></div>
        <Modal
        title={<div className="bookconfirm">Booking Confirmation</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        className="confirm_modal"
        // maxWidth={"md"}
        // style={{width:"800px"}}
       >
         <ConfirmationModal ModalCloseClick={ModalCloseClick}/>
       </Modal> 
        </div>
       
    )
}