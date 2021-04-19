import React,{useState} from "react";
import './doctorbooking.scss'
import AliceCarousel from 'react-alice-carousel';
import Nurse from "../../../images/nurse.png";
import Report from "../../../images/report.png";
import Trainer from "../../../images/trainer.png";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import pin from '../../../images/pin.png'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import star from '../../../images/star.png'
import {NavLink} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { ReactSVG } from "react-svg";
import tick from '../../../images/checked.svg'
import like from '../../../images/like.svg'
import Labelbox from "../../../helpers/labelbox/labelbox";
import { Button } from "@material-ui/core";
import plus from '../../../images/plus.svg'
import close from '../../../images/cancel.svg'
import calendar from '../../../images/calendar2.svg'
import edit from '../../../images/edit.svg'
import clinic from '../../../images/clinic.svg'
import clock from '../../../images/clock.svg'
import location from '../../../images/location.svg'
import avatar from '../../../images/us.svg'
import {Modal} from 'antd'
import Avatar from '../../../helpers/Upload/Upload'
import SliderComp from '../../../helpers/Slider/Slider'






const images = [
    {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }
  ]
  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
    
  
  }
  
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
  
  
  
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
 

  
function Doctorbooking(props) {
    const [showForm,setShowForm] = useState(false)
    const [App_type,setApp_type]=useState(false)
    const openForm = () => {
      setShowForm(true)
  }
  const closeForm = () => {
    setShowForm(false)
}

const [showminiForm,setShowminiForm] = useState(false)
    const openminiForm = () => {
      setShowminiForm(true)
  }
  const closeminiForm = () => {
    setShowminiForm(false)
}
const [addmemberForm,setaddmemberForm] = useState(false)
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
    
return(  
        <div className="doctorbooking_layout">
            
            <div className="flex1">
           
  {/* <AliceCarousel
//   mouseDragEnabled={true}
        playButtonEnabled={true}
  >
    <img src={Nurse} className="yours-custom-class" />
    <img src={Trainer} className="yours-custom-class" />
    <img src={Report} className="yours-custom-class" />
    <img src={Nurse} className="yours-custom-class" />
    <img src={Trainer} className="yours-custom-class" />
  </AliceCarousel> */}
           <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} />
            </div>
            <div className="flex2">
                <div className="docnameflex"><div className="docname"><img src={Nurse}/>Hannah</div> <StyledRating
          name="customized-color"
          defaultValue={1}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          max={1}
        /></div>
             <div className="docspec">MD-Conservative Dentistry</div>
                <div className="titleflex"><div className="title">Excel Poly clinic <span className="pin"><img src={pin} />2 km</span></div></div>
                <div style={{display:'flex',marginTop:"5px"}}><div className="rating_numeric_bg">4.3<img src={star}/></div><span className="offer_rate">5 % Offer</span></div>
                <div style={{display:'flex'}} className="verification">Medical registration verified <span className="tick"><ReactSVG src={tick}/></span></div>
                <div className="reviewrating"><ReactSVG src={like}/><span>93 %</span>(115 reviews)</div>
                {/* slider */}
                <div className="detailpara">
                <SliderComp>
           
           {[...Array(5)].map((img,index)=>(
                <div>
                <div className="heads">Dalal</div>
                 <div>I had the best experience with Dr.Hannah</div>
                 </div>  
           ))}
               </SliderComp>
                </div>
                {/* end */}
                <div style={{fontWeight:'500',color:"grey"}}>Hannah is one of the best doctor.We had great experience</div>
                <div className="consultingdiv"><div className="consultingtype"><Labelbox labelname="Select service"  type="select" /></div>
                <div className="durationdiv"><div>Duration</div><div style={{fontSize:"18px"}}>0h 30mins</div></div>
                </div>
                <div className="selecttime_div">
                    <div style={{fontSize:"16px"}}>Select Time</div>
                    <div className="booked_den" ><div className="bookedclr"></div>Booked</div>
                    <div className="available_den"><div className="availableclr"></div>Available</div>
                    <div className="selected_den"><div className="selectedclr"></div>Selected</div>

                </div>
                <div className="time_slots">
  <Button className="greenbtn" onClick={openForm} >10:00AM</Button>
  <Button className="redbtn" onClick={openForm} >10:40AM</Button>
  <Button className="greenbtn" onClick={openForm} >11:00AM</Button>
  <Button className="redbtn" onClick={openForm}>10:50AM</Button>
  <Button className="redbtn" onClick={openForm} >2:00PM</Button>
  <Button className="greenbtn" onClick={openForm} >3:00PM</Button>
  <Button className="redbtn" onClick={openForm} >3:45PM</Button>
  <Button className="greenbtn" onClick={openForm} >8:00PM</Button>
  <Button className="greenbtn" onClick={openForm}>8:30PM</Button>


  </div>
            </div>
            <div className="flex3">
            {showForm &&  <div className="bookingform">
                <ReactSVG className="close_ico" onClick={closeForm} src={close}/>
                <div className="familymembers">
                    <div className="familyphoto_div">
                        <img src={Nurse}/>
                        <div>Jethro</div>
                    </div>
                    <div className="familyphoto_div">
                        <img src={Nurse}/>
                        <div>Jethro</div>
                    </div><div className="familyphoto_div">
                        <img src={Nurse}/>
                        <div>Jethro</div>
                    </div><div className="familyphoto_div">
                        <img src={Nurse}/>
                        <div>Jethro</div>
                    </div>
                    <div className="familyphoto_div">
                        <img src={Nurse}/>
                        <div>Jethro</div>
                    </div>
                    <div className="newfamilyphoto_div" onClick={openaddmemberForm}>
                        <ReactSVG className="plussvg" src={plus}/>
                        <div className="new">New</div>
                    </div>
                </div>
               {addmemberForm && <div className="addmember_mini">
                  <div className="avatar_uploaderdiv">
                    <Avatar/>
                    <div>Add Photo</div>
                     
                  </div>
                  <div><Labelbox type="text"labelname="Name"/></div>
                  <div className="formflex"><div style={{width:"50%",marginRight:"10px"}}><Labelbox type="select"labelname="Gender"/></div><div style={{width:"50%"}}><Labelbox type="datepicker"labelname="Date of Birth"/></div></div>
                  <div><Labelbox type="text"labelname="Mobile number"/></div>
                  <div><Labelbox type="select"labelname="Relationship"/></div>
                  <div className="heightformflex"><Labelbox type="text"labelname="Height"/><span>cms</span><Labelbox type="text"labelname="Weight"/><span>kgs</span></div>

                  <div className="avatar_uploaderdiv_btns"><Button className="cancel" onClick={closeaddmemberForm}>Cancel</Button><Button className="submit"onClick={closeaddmemberForm}>Submit</Button></div>
                </div> }

                <div className="mini_formrow">
                  <div className="first"><ReactSVG src={avatar}/>Member Name</div>
                  <div className="second nameedit">Dalal  {!showminiForm &&<ReactSVG className="edit" src={edit} onClick={openminiForm}/>}
                  </div>
                 {showminiForm && <div className="nameedit_form arrow-top">
                   <div> <Labelbox labelname="Member Name"  type="text" /></div>
                   <div className="miniform_nestedrow">  
                   <div><Labelbox labelname="Age"  type="number" /> </div>
                   <div> <Labelbox labelname="Gender"  type="select" /> </div>
                   </div>
                   <div className="minifrombtn"><span className="cancel" onClick={closeminiForm}>Cancel</span><span className="save" onClick={closeminiForm}>Save</span></div>

                  </div>}
                  
                   
                </div>
                <div className="mini_formrow">
                  <div className="first"><ReactSVG src={calendar}/>Date</div>
                  <div className="second">27 Dec 2020</div>

                </div><div className="mini_formrow">
                  <div className="first"><ReactSVG src={clock}/>Time</div>
                  <div className="second">01:00PM,01:30PM</div>

                </div><div className="mini_formrow">
                  <div className="first"><ReactSVG src={clinic}/>Clinic</div>
                  <div className="second">Excel polyclinic</div>

                </div><div className="mini_formrow">
                  <div className="first"><ReactSVG src={location}/>Location</div>
                  <div className="second">Salmiyah</div>

                </div>
                <div className="bookbtnflex"><Button onClick={ModalOpenClick}>Book</Button></div>
                </div>}
                <Modal
        title={<div className="bookconfirm">Booking Confirmation</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        className="border_modal"
        width={750}
        // maxWidth={"md"}
        // style={{width:"800px"}}
       >
        <div className="bookconfirmmodal">
          <div className="useravatar"><img src={avatar}/><span>Dr.Farah</span></div>
          <div className="bookconfirmflex">
            <div className="bookconfirmflexrow1">
              <div className="bookconfirmflexblock1"><div className="blockheads">Member Name</div><div>Hannah</div></div>
              <div className="bookconfirmflexblock1"><div className="blockheads">Date</div><div>12 Dec 2021</div></div>
              <div className="bookconfirmflexblock1"><div className="blockheads">Time</div><div>10:00am</div></div>
              <div className="bookconfirmflexblock1"><div className="blockheads">Appointment Type</div><div>Online</div></div>

            </div>
            <div className="bookconfirmflexrow2">
            <div className="bookconfirmflexblock2">
              <div className="blockheads">Clinic</div><div>Excel Polyclinic Dentistry</div></div>
              <div className="bookconfirmflexblock1"><div className="blockheads">Location</div><div>Salmiyah </div></div>
              <div className="bookconfirmflexblock1"><div className="blockheads"> Cost(KWD)</div><div>400 KWD</div></div>
            </div>
          </div>


        </div>
        <div className="cnfrmbtn"> <NavLink to="paymentmethod"><Button>Confirm</Button></NavLink></div>

       </Modal>
            </div>

        </div>
    )

}
export default Doctorbooking;