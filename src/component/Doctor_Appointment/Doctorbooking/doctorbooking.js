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
            </div>
            <div className="flex3">hi</div>

        </div>
    )

}
export default Doctorbooking;