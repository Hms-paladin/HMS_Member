import React from 'react';
import './HospitalOffer.scss';
import offer_bg from '../../../images/offer_bg.png'
import star from '../../../images/star.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import room_img from "../../../images/BookaRoom/room_img.png";
import StarIcon from '@material-ui/icons/Star';
import Labelbox from "../../../helpers/labelbox/labelbox";
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import sort from '../../../images/sort.svg';
import {NavLink, useHistory} from "react-router-dom";

import { ReactSVG } from 'react-svg'


import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  function valuetext(value) {
    return `${value}`;
  }
  
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
  
  
export default function HospitalOffer(){

  let history= useHistory();

  function confirmPage(){
    history.push('/confirmhospital')
  }
  
    return(
        <div style={{display:'flex'}}>
 
            <div style={{width:'50%'}}>
                <div  className="offer_filter_div">
                    <div className="offer_filter_div"> Filter </div>
                    <div className="offer_date_fil_div">
                        <div className="date_pic_childdiv">
                        <Labelbox type="datepicker" />
                        </div>
                        <div className="offer_date_pic_childdiv">
                            <Labelbox type="datepicker"/></div>
                    </div>
                </div>

                <div className="Costfiler">Cost Range
                          
                    <Slider
                        defaultValue={60}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={10}
                        // marks={marks}
                        valueLabelDisplay="on"
                    />
                    <div className="slider_labels">
                        <span>100KWD</span>
                        <span>30KWD</span>

                    </div>
                    </div>

           </div>
          <div style={{width:'50%'}}>
            <div className="sort_cont_hos">
              <div className="sort_bestoff"><div className="sort_hos"> Offer <ReactSVG src={sort} /></div>
               <div className="sort_hos">Rating <ReactSVG src={sort} /></div></div> 

           </div>
            <div className="card hos_offer_card" >
                <div className = "card-body">
                   
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                       <div><img src={room_img} style={{width:'90px', cursor:'pointer'}} onClick={confirmPage}/></div>
                       <div>
                        <p className="name_star_head">Dasman</p>
                        <div  className="star_rating_hos">
                            {[...Array(5)].map((img,index)=>(
                            <div key={index}><StarIcon className="star_icon_hos"/></div>
                            ))}
                        </div>
                        </div>
                        <div className="hos_offer"><img src={offer_bg} onClick={confirmPage} />
                           <div className="offer_numerics_hos"><span>10 %</span><span>Offer</span></div>
                        </div>
                        <div>
                            <p className="available_rate">300 KWD / Day</p>
                            <p style={{color:'#83AF40'}}>AVAILABLE</p>
                        </div>
  
                    </div>
                </div>
            </div>
            <div className="card hos_offer_card">
                <div className = "card-body">
                   
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                       <div><img src={room_img} style={{width:'90px', cursor:'pointer'}} onClick={confirmPage} /></div>
                       <div>
                        <p className="name_star_head">Dasman</p>
                        <div  className="star_rating_hos">
                            {[...Array(5)].map((img,index)=>(
                            <div key={index}><StarIcon className="star_icon_hos"/></div>
                            ))}
                        </div>
                        </div>
                        <div className="hos_offer"><img src={offer_bg}/>
                           <div className="offer_numerics_hos"><span>10 %</span><span>Offer</span></div>
                        </div>
                        <div>
                            <p className="available_rate">300 KWD / PAY</p>
                            <p style={{color:'#83AF40'}}>AVAILABLE</p>
                        </div>
  
                    </div>
                </div>
            </div>
            <div className="card hos_offer_card">
                <div className = "card-body">
                   
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                       <div><img src={room_img} style={{width:'90px', cursor:'pointer'}} onClick={confirmPage}/></div>
                       <div>
                        <p className="name_star_head">Dasman</p>
                        <div  className="star_rating_hos">
                            {[...Array(5)].map((img,index)=>(
                            <div key={index}><StarIcon className="star_icon_hos"/></div>
                            ))}
                        </div>
                        </div>
                        <div className="hos_offer"><img src={offer_bg}/>
                           <div className="offer_numerics_hos"><span>10 %</span><span>Offer</span></div>
                        </div>
                        <div>
                            <p className="available_rate">300 KWD / PAY</p>
                            <p style={{color:'#FD5353'}}>NOT AVAILABLE</p>
                        </div>
  
                    </div>
                </div>
            </div>

            </div>


        </div>
    


    )
}
