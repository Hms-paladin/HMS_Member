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

import { makeStyles } from '@material-ui/core/styles';
import { ReactSVG } from "react-svg";
import tick from '../../../images/checked.svg'
import like from '../../../images/like.svg'
import Labelbox from "../../../helpers/labelbox/labelbox";
import { Button } from "@material-ui/core";
import plus from '../../../images/plus.svg'
import close from '../../../images/cancel.svg'


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
    const openForm = () => {
      setShowForm(true)
  }
  const closeForm = () => {
    setShowForm(false)
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
                <div className="detailpara">
                <div id="carouselExampleIndicators" class="carousel slide" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className="reviewpost">
                 <div className="heads">Dalal</div>
                 <div>I had the best experience with Dr.Hannah</div>
        </div>
    </div>
    <div class="carousel-item">
        <div className="reviewpost"> 
        <div className="heads">Dalal</div>
                 <div>I had the best experience with Dr.Hannah</div>

        </div>
    </div>
    
  </div>
  </div>


                </div>
                <div style={{fontWeight:'500',color:"grey"}}>Hannah is one of the best doctor.We had great expeience</div>
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
                    <div className="newfamilyphoto_div">
                        <ReactSVG className="plussvg" src={plus}/>
                        <div className="new">New</div>
                    </div>
                </div>
                </div>}
            
            </div>

        </div>
    )

}
export default Doctorbooking;