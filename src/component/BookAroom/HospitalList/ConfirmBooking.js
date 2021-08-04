import React,{useEffect, useState} from 'react';
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
import {ParticularRoomDetails} from '../../../actions/Book a RoomActions'
import { useDispatch,connect} from 'react-redux';
function ConfirmBooking(props){
  let history = useHistory();
  let dispatch=useDispatch()
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
 
  const RoomDetail=props.location.state
  const [RoomList,setRoomList]=useState([])
  const [SearchKey,setSearchKey]=useState({
    fromdate:{
      value:""
    },
    todate:{
      value:""
    }
  })
  function checkValidation(data, key) {
    if(data&&key==="todate"){
      var Todate=data
      // dispatch(BookRoomDetails(SearchKey.fromdate.value,Todate))
    }
   let dynObj = {
     value: data,
   };
 setSearchKey((prevState) => ({
     ...prevState,
     [key]: dynObj,
 }))
  }
  useEffect(()=>{
    dispatch(ParticularRoomDetails(RoomDetail))

  },[])
  useEffect(()=>{
    var RoomData=[]
   props.RoomDetails.map((data)=>{
      RoomData.push(data)  
   })
   setRoomList(RoomData)
   if(RoomDetail){
    SearchKey.fromdate.value=RoomDetail.br_from_date
    SearchKey.todate.value=RoomDetail.br_to_date
   }
  },[props.RoomDetails])
  console.log("propsdd",RoomDetail)

    return(
      <div>
       <div style = {{display:'flex'}}>
         <div style={{width:'70%', margin:'25px'}}>
  {/* header part */}
              <div>
                  <h5 className="reschedule_head">{RoomList[0]?.roomVendorName}</h5>
              </div>
  {/*date and carousel  */}
            <div style={{display:'flex'}}>
                  <div>
                      <div style={{display:'flex'}}>
                          <div className="date_div_reschedule">
                            <div className="date_second_div_reschedule">
                                <Labelbox type="datepicker"
                                  changeData={(data) => checkValidation(data, "fromdate")}
                                  value={SearchKey.fromdate.value}
                                />
                            </div>
                            <div className="date_pic_childdiv">
                                <Labelbox type="datepicker"
                                  changeData={(data) => checkValidation(data, "todate")}
                                  value={SearchKey.todate.value}
                                />
                            </div>
                          </div>   
                      </div>  
                      <div>
                   <div id="#carouselExampleIndicators" class="carousel slide" data-interval="false" >
            <ol class="carousel-indicators">
            {RoomList[0]?.mediaDetails.map((data,index)=>
              <li data-target="#carouselExampleIndicators" data-slide-to={index} class="active"></li>
            )}
            </ol>
         <div class="carousel-inner"

         >
        {RoomList[0]?.mediaDetails.map((data,index)=>{
            {console.log("checked",data.media_type)}
            return(
         <div 
         key={index}
        //  active={index === 0}
         class={index == 0 ? "carousel-item active" : "carousel-item"}
        //  data-interval='8000'
         >
         {data.br_file_type==="image"?<img src={data.media_filename}/>: 
         data.br_file_type==="video"?<VedioPlayer src={data.media_filename} playing poster={"/assets/poster.png"}/>:""
         }
         </div>
        )})}
        </div>
        </div>
        </div>
        {/* vedio end */}

   
                  </div>
                  <div>

                  <div style={{display:'flex', margin:'20px'}}>  
                    <div style={{marginRight:'7px'}}>
                      <label className="label_align_reshedule">Address</label>
                  .   <p style={{color:'#858585'}}>{RoomList[0]?.roomVendorAddress}<span className="dot_align">...</span></p>
                   </div>
                   <div style={{marginRight:'13px'}}>
                        <label  className="label_align_reshedule">Phone</label>
                        <p styl={{color:'#858585'}}>+{RoomList[0]?.vendor_phone}</p>
                    </div>
                    <div >
                        <label  className="label_align_reshedule">Email ID</label>
                        <p styl={{color:'#858585'}}>{RoomList[0]?.vendor_email}</p>
                     </div>
                    </div>

                    <div className="room_arrange">
                      <p className="room_facility">Room Facilities</p>
                      <div>
                      <div className="row row_align"  >
                  {RoomList[0]?.facility.map((imageItem,index)=>{
                    var Index=index+1
                      return(
                        <>
                          <div className="col-sm-3">
    
                              <div className="card card_reschedule">

                                <span>{Index}</span>
                              <img src={imageItem.icon} className="menu_align"/> 
                              </div>
                              <p style={{display:'flex', justifyContent:'center'}}>{imageItem.facilityName}</p>

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

const mapStateToProps=(state)=>({
  RoomDetails:state.BookRoom.RoomDetails || []

})
export default connect(mapStateToProps)(ConfirmBooking);