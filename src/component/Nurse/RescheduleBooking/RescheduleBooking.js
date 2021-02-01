import React from 'react'
import {Form,FormGroup,Label,Col} from 'reactstrap';
import {Tag,Modal} from "antd"
import Calendar from '../NurseHistory/RangeCalendar'
import Flag from '../../../images/flag.svg'
import Qualification from '../../../images/qualification.svg'
import Language from '../../../images/language.svg'
import Skills from '../../../images/skills.svg'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../../helpers/labelbox/labelbox'
import './RescheduleBooking.scss'
import ConfirmationModal from '../NurseDetails/ConfirmationModal'
export default function RescheduleBooking(props){
  const [modalOpen,setmodalOpen]=React.useState(false)
  const ModalOpenClick=()=>{
     setmodalOpen(true)
  }
  const ModalCloseClick=()=>{
     setmodalOpen(false)
  }
    return(
        <div className="reschedule_booking">
             <Grid container className="nurse_duties_container">
            <Grid item sm={6} md={6}>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Flag} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Nationality</p><p>India</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Qualification} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Qualification</p><p>B.Sc.Nursing</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Language} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Languages</p><p>English,Malayalam,Arabic</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Skills} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Skills</p><p>Baby Care,Elderly Care</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Flag} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Duty Hours</p><p>12:00 Hrs</p></div></div>
            </Grid>
            <Grid item sm={6} md={6}>
            <div  className="nur_duties">
                 {/* reschedule booking */}
                <div className="reschedule_b_head">Reschedule Booking</div>
                <Form className="form_items">
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Name</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">Dalal</label>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Designed Duties</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">Caring,Baby sitting,In-Home Care,Coordinate with physician</label>
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
        <Label for="exampleEmail" sm={6} >Cost Per Month(KWD)</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">480</label>
        </Col>
      </FormGroup>
      </Form>

                <div className="date_pic_div"><Labelbox type="datepicker" labelname="Start Date"/><Labelbox type="text" labelname="End Date"/></div>
                <div  className="date_pic_div"><Labelbox type="timepicker" labelname="Start Time"/><Labelbox type="text" labelname="End Time"/></div>
                <Calendar/>
                <div className="excl_parent_div"><div className="excl_dot"></div><label style={{color:"#504D5D",fontWeight:"600"}}>Excluded Days</label></div>
                <div className="proceed_div"><Button className="proceed" onClick={ModalOpenClick}>Reschedule</Button></div>
            </div>
            </Grid>
            </Grid>
            <Modal
        title={<div className="bookconfirm">Reschedule Confirmation</div>}
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