import React from "react";
import './feed.scss'
import Button from '@material-ui/core/Button'


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
               <div className="sort">Best Offers <ReactSVG src={sort} /></div>
               <div className="sort">Rating <ReactSVG src={sort} /></div>

        </div>
        </div>
        <div className="feed_div">

        </div>
        </div>
        </div> 
    ) 
}
export default Feed;