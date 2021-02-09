
import React,{useState} from "react";
import './HospitalList.css';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import avatar from '../../../images/nurse.png'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ReactPlayer from 'react-player'
import star from '../../../images/star.png'
import {useHistory} from 'react-router-dom'
import Labelbox from "../../../helpers/labelbox/labelbox";
import StarIcon from '@material-ui/icons/Star';
import Thumb from "../../../images/BookaRoom/round-thumb.svg";
import search from "../../../images/loupe.png";
import { Input } from 'antd';



var hashHistory = require('react-router-redux')

const { Search } = Input;

const onSearch = value => console.log(value);



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
               

function HospitalList(props) {
  let history = useHistory();

  function Bookingdetails(){
    history.push("/doctorbooking")
}
    const classes = useStyles();
    return(  
        <div className="hos_list_container">
           <div  className="filter_div">
            <div className="filter_div"> Filter </div>
            <div className="date_fil_div">
                <div className="date_pic_childdiv">
                <Labelbox type="datepicker" />
                </div>
                <div className="date_pic_childdiv">
                    <Labelbox type="datepicker"/></div></div>

           </div>
          <div className="second_head">  
          <div style={{display:'flex'}}>
           <Search className="search_hospitallist"
                placeholder="Search"
                allowClear 
                style={{ width: 300, margin: '0 10px' }}
           /> 
                <img className="searchicon_hos"src={search} /> 

          </div>
        
            <div className="second_div">
               <div className="second_details">
                  <div className="avatar_div"> <img src={avatar} /></div>
                   <div className="hos_details">
                     <div className="detail_1">Mayo Clinic Hospital</div>
                     <div className="detail_2">Shaab sea View</div>
                     <div  className="star_rating">
                            {[...Array(5)].map((img,index)=>(
                            
                            <div key={index}><StarIcon className="star_icon"/></div>
                            ))}
                      </div>
                    </div>
                     <div className="rate_numeric"> <div className="number_rating">4.5<img src={star}/></div></div>
               </div>
                <div style={{display:'flex', marginTop:'10px'}} >
                   <img className="thumb_size" src={Thumb}/>
                   <p style={{color:'#83AF40', marginTop:'0px', marginBottom:'0px', marginRight:'10px'}}>93%</p>
                   <p style={{marginTop:'0px', marginBottom:'0px'}}>(15reviews)</p>
                </div>
                <div className="box_align">
                    <p className="box_first_text">Dalal</p>
                    <p className="box_second_text">The ambiance and room maintenance are very good</p>
                </div>
                   <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
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

            <div className="second_div">
                <div className="second_details">
                     <div className="avatar_div"> <img src={avatar} /></div>
                     <div className="hos_details">
                       <div className="detail_1">Royal Hospital</div>
                       <div className="detail_2">Shalmiya</div>
                       <div  className="star_rating">
                            {[...Array(5)].map((img,index)=>(
                            
                            <div key={index}><StarIcon className="star_icon"/></div>
                            ))}
                      </div>
                     </div>
                     <div className="rate_numeric"> <div className="number_rating">4.5<img src={star}/></div></div>
                     
                </div>
                <div style={{display:'flex', marginTop:'10px'}} >
                   <img className="thumb_size" src={Thumb}/>
                   <p style={{color:'#83AF40', marginTop:'0px', marginBottom:'0px', marginRight:'10px'}}>93%</p>
                   <p style={{marginTop:'0px', marginBottom:'0px'}}>(15reviews)</p>
                </div>
                <div className="box_align">
                    <p className="box_first_text">Dalal</p>
                    <p className="box_second_text">The ambiance and room maintenance are very good</p>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=-kxQerPX_Rc' />
                        </div>
                        <div class="carousel-item">
                        <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=JllCZCOZJkk' />
                        </div>
                        <div class="carousel-item">
                        <ReactPlayer className="react_video" url={'https://www.youtube.com/watch?v=7waDSzAh28k'} />
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div> 
    ) 
}
export default HospitalList;