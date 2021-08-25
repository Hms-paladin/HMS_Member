import React, { useState} from "react";
import {NavLink} from 'react-router-dom'
import {Row,Col} from 'antd';
import Slider from "react-slick";
import './CarosalSlider.scss'
const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block',fontSize:"35px",right:"-37px",color:"#83AF40"}}
      onClick={onClick}
    />
  )
}

// const SamplePrevArrow = props => {
//   const { className, style, onClick } = props
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block'}}
//       onClick={onClick}
//     />
//   )
// }

const settings = {
  dots: false,
  slidesToShow:6,
  slidesToScroll: 6,
  draggable:true,
  rows:2,
  swipe:true,
  initialSlide: 0,
  adaptiveHeight:true,
  infinite: false,
  // slide:"div" 
  // autoplaySpeed: 3000,
  autoplay: true,
  cssEase: "linear",
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
  ],
  nextArrow: <SampleNextArrow />,
  
  
}
 
const CarosalComp = (props) => {
 

  return (
    <div className="carosal_root_div">
     <Row justify="center">
        <Col span={20}  justify="center">
          <Slider  {...settings} autoplay>
               
               {props.children}
            
          </Slider>
          </Col>
      </Row>
      
    </div>
  )
}

export default CarosalComp;