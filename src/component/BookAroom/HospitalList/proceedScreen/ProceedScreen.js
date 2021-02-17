import React from 'react';
import './ProceedScreen.scss';
import Labelbox from "../../../../helpers/labelbox/labelbox";
import ReactPlayer from 'react-player';
import  BedImage from '../../../../images/BookaRoom/outline.svg';
import  BathImage from '../../../../images/BookaRoom/bathtub.svg';
import  WaterImage from '../../../../images/BookaRoom/hotel.svg';
import  ACImage from '../../../../images/BookaRoom/air condition-hot-summer.svg';
import  TVImage from '../../../../images/BookaRoom/television.svg';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {Modal} from 'antd';
import ConfirmPage from '../../BookroomBooking/ConfirmPage';

function ProceedScreen(props){

    const [ModalOpen,setModalOpen]=React.useState(false)
    const ModalClickOpen=()=>{
        setModalOpen(true)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
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
                  <h5 className="reschedule_head">Mayo Clinic Hospital-Reschedule</h5>
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
                      <div id="carouselExampleIndicators" class="carousel slide" data-interval="false" style={{width:'400px', marginLeft:'16%'}}>
                      <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner_reschedule coursel_reschedule_align">
                          <div class="carousel-item active">
                            <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=-kxQerPX_Rc' />
                          </div>
                          <div class="carousel-item">
                            <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=JllCZCOZJkk' />
                          </div>
                          <div class="carousel-item">
                            <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=7waDSzAh28k' />
                          </div>
                      </div>
                    </div>
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
         <div style={{width:'30%'}}>
         <label className="reschedule_align" onClick={ModalClickOpen}>Proceed</label>


         </div>
       </div>

       <Modal
                  title={false}
                  visible={ModalOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                  className="confirm_modal"
                  onCancel={ModalClickClose}
                 >
                     <ConfirmPage/>
    
                 </Modal>
       </div>
    )
}
export default ProceedScreen;

