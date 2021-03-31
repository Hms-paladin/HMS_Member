import React,{useState} from "react";
import './feed.scss'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import RangeCalendar from "../../../helpers/rangecalendar/RangeCalendar";
import { ReactSVG } from 'react-svg'
import sun from '../../../images/sun.svg'
import moon from '../../../images/night.svg'
import left from '../../../images/navigate_back.svg'
import right from '../../../images/navigate-next.svg'
import male from '../../../images/male.svg'
import female from '../../../images/female.svg'
import sort from '../../../images/sort.svg'
import avatar from '../../../images/nurse.png'
import pin from '../../../images/pin.png'
import Internet from '../../../images/internet1.svg'
import Clinic from '../../../images/Clinic1.svg'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ReactPlayer from 'react-player'
import offer_bg from '../../../images/offer_bg.png'
import star from '../../../images/star.png'
import {useHistory} from 'react-router-dom'
import sample from '../../../images/sample.mp4'
import { Player } from 'video-react';
import ShareIcon from '@material-ui/icons/Share';
var hashHistory = require('react-router-redux')





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



function valuetext(value) {
  return `${value}`;
}

                  

function Feed(props) {
  let history = useHistory();
  const [App_type,setApp_type]=useState(false)
  function Bookingdetails(){
    history.push("/doctorbooking")
}
    const classes = useStyles();
    
   
     
    return(  
        <div className="feed_layout">
           <div className="filter_container">
                      Filter
                      <div className="Costfiler">
                          Cost
                          
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        // marks={marks}
        valueLabelDisplay="on"
      />
      <div className="slider_labels">
          <span>100KWD</span>
          <span>300KWD</span>

      </div>
     </div>
     <div className="Costfiler">
                          Distance
                          
      <Slider
        defaultValue={50}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        // marks={marks}
        valueLabelDisplay="on"
      />
      <div className="slider_labels">
          <span>1Km</span>
          <span>15Km</span>

      </div>
     </div><div className="Costfiler">
                          Offers
                          
      <Slider
        defaultValue={70}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={5}
        // marks={marks}
        valueLabelDisplay="on"
      />
      <div className="slider_labels">
          <span>0%</span>
          <span>30%</span>

      </div>
     </div>
    <div> <RangeCalendar/></div>
    <div> <Button className="applybtn">Apply</Button></div>

           </div>
        <div className="feed_rightcol">
        <div className="page_control">
            <div className="controlbtns">
        <Button className="day"> <ReactSVG src={sun} /></Button>
        <Button className="night"> <ReactSVG src={moon} /></Button>
        <Button className="left"> <ReactSVG src={left} /></Button>
        <Button className="date">Wed,27-11-2020</Button>

        <Button className="right"> <ReactSVG src={right} /></Button>
        <Button className="male"> <ReactSVG src={male} /></Button>
        <Button className="female"> <ReactSVG src={female} /></Button>



        </div>
        <div className="sort_cont">
               <div className="sort">Cost <ReactSVG src={sort} /></div>
              <div className="best_offers"><div className="sort">Best Offers <ReactSVG src={sort} /></div>
               <div className="sort">Rating <ReactSVG src={sort} /></div></div>

        </div>
        </div>
        <div className="feed_div" onClick={Bookingdetails}>
                   <div className="story_details">
                     <div className="avatar_div"> <img src={avatar} /></div>
                     <div className="pimary_detail">
                       <div className="detail1">Dr.Farah</div>
                       <div className="detail2">MD-Conservative Dentistry</div>
                       <div className="detail3">Excel - Polyclinic <span className="pin"><img src={pin} />2 km</span></div>


                     </div>
                     <div className="offer_percent"><img src={offer_bg}/><div className="offer_numerics"><span>15 %</span><span>Offer</span></div></div>
                     <div className="rating_numerics"> <div className="rating_numeric_bg">4.3<img src={star}/></div><div className="price_kwd">100 KWD</div></div>
                     <div> <StyledRating
          name="customized-color"
          defaultValue={1}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          max={1}
        /></div>

                   </div>
                   <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Player src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      // playsInline
     
    />
     <ShareIcon className="vd_share"/>
    </div>
    <div class="carousel-item">
    <Player src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      playsInline
     
    />
     <ShareIcon className="vd_share"/>
    </div>
    <div class="carousel-item">
    <Player src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      playsInline
     
    />
     <ShareIcon className="vd_share"/>
    </div>
  </div>

</div>
<div className="time_slots">
  <Button className="greenbtn" onClick={Bookingdetails}>10:00AM</Button>
  <Button className="redbtn" onClick={Bookingdetails}>10:40AM</Button>
  <Button className="greenbtn" onClick={Bookingdetails}>11:00AM</Button>
  <Button className="redbtn" onClick={Bookingdetails}>10:50AM</Button>
  <Button className="redbtn" onClick={Bookingdetails}>2:00PM</Button>
  <Button className="greenbtn" onClick={Bookingdetails}>3:00PM</Button>
  <Button className="redbtn" onClick={()=>setApp_type(!App_type)}>3:45PM</Button>
  <Button className="greenbtn" onClick={Bookingdetails}>8:00PM</Button>
  <Button className="greenbtn"onClick={Bookingdetails}>8:30PM</Button>

{/* Appointment Type */}
{App_type&&<div className="appoint_type_doc">
   <label>Choose Appointment Type</label>
  <div className="type_div"> <div><img src={Internet} style={{width:"40px"}}/><div>OnLine</div></div>
   <div><img src={Clinic} style={{width:"32px"}}/><div>InClinic</div></div></div>
</div>}

{/* end */}

  </div>

        </div>
        <div className="feed_div"  onClick={Bookingdetails}>
                   <div className="story_details">
                     <div className="avatar_div"> <img src={avatar} /></div>
                     <div className="pimary_detail">
                       <div className="detail1">Dr.Farah</div>
                       <div className="detail2">MD-Conservative Dentistry</div>
                       <div className="detail3">Excel - Polyclinic <span className="pin"><img src={pin} />2 km</span></div>


                     </div>
                     <div className="offer_percent"><img src={offer_bg}/><div className="offer_numerics"><span>15 %</span><span>Offer</span></div></div>
                     <div className="rating_numerics"> <div className="rating_numeric_bg">4.3<img src={star}/></div><div className="price_kwd">100 KWD</div></div>
                     <div> <StyledRating
          name="customized-color"
          defaultValue={1}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          icon={<FavoriteIcon fontSize="inherit" />}
          max={1}
        /></div>

                   </div>
                   <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    
            <Player src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      playsInline
     
    />
     <ShareIcon className="vd_share"/>
    </div>
    <div class="carousel-item">
    <Player src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      playsInline
     
    />
     <ShareIcon className="vd_share"/>
    </div>
    <div class="carousel-item">
    <Player src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      // className='react-player'
      className="react_video"
      width='100%'
      height='100%'
      playsInline
     
    />
     <ShareIcon className="vd_share"/>
    </div>
  </div>
 
</div>
<div className="time_slots">
  <Button className="greenbtn" onClick={Bookingdetails}>10:00AM</Button>
  <Button className="redbtn" onClick={Bookingdetails}>10:40AM</Button>
  <Button className="greenbtn" onClick={Bookingdetails}>11:00AM</Button>
  <Button className="redbtn" onClick={Bookingdetails}>10:50AM</Button>
  <Button className="redbtn" onClick={Bookingdetails}>2:00PM</Button>
  <Button className="greenbtn" onClick={Bookingdetails}>3:00PM</Button>
  <Button className="redbtn" onClick={Bookingdetails}>3:45PM</Button>
  <Button className="greenbtn" onClick={Bookingdetails}>8:00PM</Button>
  <Button className="greenbtn" onClick={Bookingdetails}>8:30PM</Button>



  </div>
        </div>
      
        </div>
        </div> 
    ) 
}
export default Feed;