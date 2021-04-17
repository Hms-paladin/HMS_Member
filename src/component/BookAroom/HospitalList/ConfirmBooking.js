import React from 'react';
import './ConfirmBooking.scss';
import Labelbox from "../../../helpers/labelbox/labelbox";
import ReactPlayer from 'react-player';
import  BedImage from '../../../images/BookaRoom/outline.svg';
import  BathImage from '../../../images/BookaRoom/bathtub.svg';
import  WaterImage from '../../../images/BookaRoom/hotel.svg';
import  ACImage from '../../../images/BookaRoom/air condition-hot-summer.svg';
import  TVImage from '../../../images/BookaRoom/television.svg';
import { useHistory } from 'react-router-dom';
import Slider from "react-slick";
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'
function ConfirmBooking(){
  let history = useHistory();
  
  function proceedPage(){
    history.push('/proceedpage')
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
                              <p style={{display:'flex', justifyContent:'center'}}>{imageItem.Name}</p>

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
            <div style={{marginTop:'40px', marginRight:'40px'}}>
              <label className="reschedule_cancel">Cancel</label>
              <label className="reschedule_align" onClick={proceedPage}>Confirm</label>
            </div>

         </div>


  
      
       </div>
       </div>
    )
}
export default ConfirmBooking;

