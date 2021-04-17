import React from 'react';
import './ProceedScreen.scss';
import Labelbox from "../../../../helpers/labelbox/labelbox";
import ReactPlayer from 'react-player';
import  BedImage from '../../../../images/BookaRoom/outline.svg';
import  BathImage from '../../../../images/BookaRoom/bathtub.svg';
import  WaterImage from '../../../../images/BookaRoom/hotel.svg';
import  ACImage from '../../../../images/BookaRoom/air condition-hot-summer.svg';
import  TVImage from '../../../../images/BookaRoom/television.svg';
import { Button, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {Modal} from 'antd';
import ConfirmPage from '../../BookroomBooking/ConfirmPage';
import { ReactSVG } from "react-svg";
import Nurse from "../../../../images/nurse.png";
import close from '../../../../images/cancel.svg'
import plus from '../../../../images/plus.svg'   
import avatar from '../../../../images/us.svg'
import edit from "../../../../images/edit.svg"
import VedioPlayer from '../../../../helpers/VedioPlayer/VedioPlayer'
// import {NavLink} from 'react-router-dom';
// import ConfirmReshedule from "../../BookroomBooking/confirmRescchedule/ConfirmReschedule"
// import ProceedConfirm from '../HospitalList/ProceedConfirm/ProceedConfirm'
import roomimg from "../../../../images/BookaRoom/room_img.png"
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Pin from "../../../../images/pin.png"
import ProceedConfirm from '../../ProceedConfirm/ProceedConfirm';



function ProceedScreen(props){

    const [ModalOpen,setModalOpen]=React.useState(false)
    const ModalClickOpen=()=>{
        setModalOpen(true)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
    }
    const [showForm,setShowForm] = React.useState(false)
    const openForm = () => {
      setShowForm(true)
     }
    const closeForm = () => {
        setShowForm(false)
    }

    const [addmemberForm,setaddmemberForm] = React.useState (false)
    const openaddmemberForm = () => {
      setaddmemberForm(true)
  }
  const closeaddmemberForm = () => {
    setaddmemberForm(false)
}

const [modalOpen,setmodalOpen]=React.useState(false)
const ModalOpenClick=()=>{
   setmodalOpen(true)
}
const ModalCloseClick=()=>{
   setmodalOpen(false)
}

   
  const roomImage=[
   {
     id:1,
     image:BedImage,
     Name:"Bed"
   },
   {
    id:2,
    image:BathImage,
    Name:"Bathroom"
  },
  {
    id:3,
    image:WaterImage,
    Name:"Bed"
  },
  {
    id:4,
    image:ACImage,
    Name:"AC"
  },
  {
    id:1,
    image:TVImage,
    Name:"TV"
  },

   

  ]
    return(
      <div>
       <div style = {{display:'flex'}}>
         <div style={{width:'70%', margin:'25px'}}>
  {/* header part */}
              <div>
                  <h5 className="reschedule_head">Mayo Clinic Hospital</h5>
                  <h5 className="reschedule_head">Lulwa</h5>
              </div>
  {/*date and carousel  */}
            <div style={{display:'flex'}}>
                  <div>
                      <div style={{display:'flex'}}>
                          <div className="date_div_reschedule">
                            <div className="date_second_div_reschedule">
                                <Labelbox type="datepicker"/>
                            </div>
                            <div className="date_pic_childdiv">
                                <Labelbox type="datepicker"/>
                            </div>
                          </div>   
                      </div> 
                      {/* vedioplayer */}
                      <div style={{marginLeft:"30px"}}>
                      <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
     <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
    </div>
    <div class="carousel-item">
     <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>

    </div>
    <div class="carousel-item">
     <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
      
    </div>
  </div>
 
</div>
</div>

                    {/* end */}
                  </div>
                  <div>

                  <div style={{display:'flex', margin:'20px'}}>  
                    <div style={{marginRight:'7px'}}>
                      <label className="label_align_reshedule">Address</label>
                  .   <p style={{color:'#858585'}}>Shaab sea view<span className="dot_align">...</span></p>
                   </div>
                   <div style={{marginRight:'13px'}}>
                        <label  className="label_align_reshedule">Phone</label>
                        <p styl={{color:'#858585'}}>+965098755</p>
                    </div>
                    <div >
                        <label  className="label_align_reshedule">Email ID</label>
                        <p styl={{color:'#858585'}}>info@Mayoclinichospital.com</p>
                     </div>
                    </div>

                    <div className="room_arrange">
                      <p className="room_facility">Room Facilities</p>
                      <div>
                      <div className="row row_align"  >
                  {roomImage.map((imageItem)=>{
                      return(
                        <>
                          <div className="col-sm-3">
    
                              <div className="card card_reschedule">

                                <span>{imageItem.id}</span>
                              <img src={imageItem.image} className="menu_align"/> 

                              </div>
                              <p>{imageItem.Name}</p>

                          </div>
                        </>
                           )
                          })}
                      </div>
                      </div>
                    </div>
                    </div>

            </div>
         </div>
         {/* cancel */}
         <div style={{width:'25%'}}>
            <div className="proceedform">
          <>
            <ReactSVG className="close_ico_proceed" onClick={closeForm} src={close}/>
              <div className="hosmembers">
                <div className="hosphoto_div">
                    <img src={Nurse}/>
                     <div>Jethro</div>
                </div>
                <div className="hosphoto_div">
                    <img src={Nurse}/>
                    <div>Jethro</div>
                </div>
                <div className="hosphoto_div">
                    <img src={Nurse}/>
                    <div>Jethro</div>
                </div>
                <div className="hosphoto_div">
                      <img src={Nurse}/>
                      <div>Jethro</div>
                </div>
                <div className="hosphoto_div">
                      <img src={Nurse}/>
                      <div>Jethro</div>
                 </div>
                 <div className="newhosphoto_div" onClick={openaddmemberForm}>
                     <ReactSVG className="plussvg" src={plus}/>
                     <div className="new">New</div>
                    </div>
                </div>
              
             </>
             {
                addmemberForm && <div className="addmember_mini">
                  <div className="avatar_uploaderdiv"><div className="avatar_uploader"><ReactSVG src={avatar}/> </div><div>Add Photo</div></div>
                  <div><Labelbox type="text"labelname="Name"/></div>
                  <div className="formflex"><Labelbox type="select"labelname="Gender"/><Labelbox type="text"labelname="Date of Birth"/></div>
                  <div><Labelbox type="text"labelname="Mobile number"/></div>
                  <div><Labelbox type="select"labelname="Relationship"/></div>
                  <div className="heightformflex"><Labelbox type="text"labelname="Height"/><span>cms</span><Labelbox type="text"labelname="Weight"/><span>kgs</span></div>

                  <div className="avatar_uploaderdiv_btns"><Button className="cancel" onClick={closeaddmemberForm}>Cancel</Button><Button className="submit"onClick={closeaddmemberForm}>Submit</Button></div>
                </div>
              }
                <Paper className="paper_align">
                  <p className="paper_booking"> Booking Confirmation</p>
                  <div style={{display:'flex', justifyContent:'center'}}>
                    <p style={{color:'#83AF40'}}>Mayo Clinic Hospital</p>
                    <img src={Pin} style={{width:'18px', height:'18px'}}/>
                  </div>
                </Paper>
                
                <div className="proceed_formrow">
                  <div className="first">Name</div>
                  <div className="second nameedit">Dalal <ReactSVG className="edit" src={edit} />
                  </div>                   
                </div>
                <div className="proceed_formrow">
                  <div className="first">Check In</div>
                  <div className="second">27 Dec 2020</div>

                </div><div className="proceed_formrow">
                  <div className="first">Check Out</div>
                  <div className="second">01:00PM,01:30PM</div>

                </div><div className="proceed_formrow">
                  <div className="first">Room Type</div>
                  <div className="second">Lulwa</div>

                </div><div className="proceed_formrow">
                  <div className="first">Total Days</div>
                  <div className="second">2</div>

                </div>
                <div className="proceed_formrow">
                  <div className="first">Cost Per Day(KWD)</div>
                  <div className="second">400</div>

                </div>
                <div className="proceed_formrow">
                  <div className="first">Total Cost(KWD)</div>
                  <div className="second">900</div>

                </div>
                <div className="bookbtnflex"><Button onClick={ModalOpenClick}>Proceed</Button></div>
                </div>
{/* Confirmation Modal */}
                {/* <Modal
                  title={<div className="proceed_confirmation">Booking Confirmation</div>}
                  visible={modalOpen}
                  footer={false}
                  onCancel={ModalCloseClick}
                  className="confirm_modal border_modal"
                >
        <div className="bookconfirmmodal_confirm">
          <div className="userhospic">
             <img src={roomimg}/>
             <div style={{display:'flex'}}>
               <p>Mayo Clinic Hospital</p>
               <img src={Pin} style={{width:'18px', height:'18px'}}/>


             </div>
              <span>Shaab Sea View<span className="dot_align">...</span></span>
             </div>
             <Form style={{marginLeft:'30px'}}>
        <Row form>
          <Col md={4}>
            <FormGroup>
            <p className="modal_head">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
                <p className="modal_head">Check In</p>
                <p className="mem_con_name">08 Dec 2020</p>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
               <p className="modal_head">Check Out</p>
               <p className="mem_con_name">08 Dec 2020</p>
            
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="modal_head">Room Type</p>
            <p className="mem_con_name">Lulwa</p>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="modal_head">Total Days</p>
                   <p className="mem_con_name">2</p>
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
            <p className="modal_head">Cost Per Day(KWD)</p>
            <p className="mem_con_name">400</p>
           
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <p className="modal_head">Total Cost(KWD)</p>
            <p className="mem_con_name">800</p>
            </FormGroup>
          </Col>
   
        </Row>
        </Form>   
        </div>
        <div className="cnfrmbtn"> <NavLink to="paymentmethod"><Button>Confirm</Button></NavLink></div>

       </Modal>
        */}

<Modal
                  title={<div className="bookconfirm">Booking Confirmation</div>}
                  visible={modalOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                  width={900}
                  // className="confirm_modal"
                  onCancel={ModalCloseClick}
                 >
                   <ProceedConfirm/>
                  
    
                 </Modal>
         </div>
       </div>


      
       </div>
    )
}
export default ProceedScreen;

