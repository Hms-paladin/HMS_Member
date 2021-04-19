import React from 'react'
import Slider from "react-slick";
import './Slider.scss'
export default function SliderComp(props){
    var settings = {
        dots: true
      };
    return(
        <Slider {...settings} className="slick_parent_comp">
            {props.children}
        </Slider> 
    )
}