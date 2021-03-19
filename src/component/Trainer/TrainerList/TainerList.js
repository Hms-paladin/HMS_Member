import React,{useState} from "react";
import './TrainerList.scss'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import avatar from '../../../images/nurse.png'
import pin from '../../../images/pin.png'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ReactPlayer from 'react-player'
import offer_bg from '../../../images/offer_bg.png'
import star from '../../../images/star.png'
import {useHistory} from 'react-router-dom'

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


                  

function TrainerList(props) {
  let history = useHistory();

  const homeitems=[
  {
      image:<HomeIcon/>,
      imagename:'Home'
  },
 
]

    const classes = useStyles();

    return(  
        <div className="feed_layout">
           <div className="filter_container">
               <h5>Filter</h5>
               <div className ="card tainerlist_home">
                   <p>asdade</p>
               </div>
              <div> 
                  <Button className="applybtn">Apply</Button></div>
           </div>
        <div className="feed_rightcol">
    
        <div className="feed_div">
                   <div className="story_details">
                     <div className="avatar_div"> <img src={avatar} /></div>
                     <div className="pimary_detail">
                       <div className="detail1">Dr.Farah</div>
                       <div className="detail2">MD-Conservative Dentistry</div>
                       <div className="detail3">Excel - Polyclinic <span className="pin"><img src={pin} />2 km</span></div>


                     </div>
                     <div className="offer_percent"><img src={offer_bg}/><div className="offer_numerics"><span>15 %</span><span>Offer</span></div></div>
                     <div className="rating_numerics"> <div className="rating_numeric_bg">4.3<img src={star}/></div><div className="price_kwd">100 KWD</div></div>
                   

                   </div>
                   <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
    <div class="carousel-item">
    <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
    <div class="carousel-item">
    <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  </div>

</div>


        </div>
        <div className="feed_div">
                   <div className="story_details">
                     <div className="avatar_div"> <img src={avatar} /></div>
                     <div className="pimary_detail">
                       <div className="detail1">Dr.Farah</div>
                       <div className="detail2">MD-Conservative Dentistry</div>
                       <div className="detail3">Excel - Polyclinic <span className="pin"><img src={pin} />2 km</span></div>


                     </div>
                     <div className="offer_percent"><img src={offer_bg}/><div className="offer_numerics"><span>15 %</span><span>Offer</span></div></div>
                     <div className="rating_numerics"> <div className="rating_numeric_bg">4.3<img src={star}/></div><div className="price_kwd">100 KWD</div></div>
                     <div> </div>

                   </div>
                   <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
    <div class="carousel-item">
    <ReactPlayer className="react_video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
    <div class="carousel-item">
    <ReactPlayer className="react_video" url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
    </div>
  </div>
 
</div>

        </div>
      
        </div>
        </div> 
    ) 
}
export default TrainerList;