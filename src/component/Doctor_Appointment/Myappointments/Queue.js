import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import './Queue.scss';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import first from '../../../images/image2.png'
import second from '../../../images/image2.png'
import third from '../../../images/image3.png'
import fourth from '../../../images/image4.png'
import fivth from '../../../images/image6.png'
import avatar from '../../../images/user.png'
class ImageCarouselDynamic extends Component{
  constructor(props) {
  super(props);
  this.state={ goToSlide:0,
    // showNavigation: true,
     offsetRadius:6,
     animationConfig:{ tension: 120, friction: 14 }}
}
  onChangeData=(data,key)=>{
    var animationConfig=this.state.animationConfig;
    animationConfig[key]=data;
    this.setState({animationConfig});
  }
  gotoslideleft=(e)=>{

        this.state.goToSlide+1<e?
        this.setState({goToSlide:this.state.goToSlide+1})
        :this.setState({goToSlide:0})
        console.log(e,"e")
        console.log(this.state.goToSlide,"ffffffffffffff")
       }

  gotoslideright=(e)=>{

  this.state.goToSlide-1>-e?
  this.setState({goToSlide:this.state.goToSlide-1})
  :this.setState({goToSlide:0})
  console.log(e,"e")

 }

  render() {



  var states={slides:[
  {
    key: 1,
    content:<img src={first} className="image" style={{width:200,height:200,borderRadius:'50%'}} alt="1" />
   
  },
  {
    key:2,
    content:<img src={second} className="image" style={{width:200,height:200,borderRadius:'50%'}} alt="1" />
  },
  {
    key:3,
    content: <img src={third} className="image" style={{width:200,height:200,borderRadius:'50%'}} alt="1" />
    
  },
  {
    key:4,
    content:<img src={fourth} className="image" style={{width:200,height:200,borderRadius:'50%'}} alt="1" />
  
  },
  {
    key:5,
    content: <img src={fivth} className="image" style={{width:200,height:200,borderRadius:'50%'}} alt="1" />
   
  },

],
}
    return (
      <div>
        
      <div className="ImageCarouselDynamic">
      <div className="queuetime"><p>Hi Dalal,You are in the sixth position of the queue</p></div>
      <div className="imageitem" style={{width:400, height:250,margin:"auto"}}>
        <Carousel
          slides={states.slides}
          goToSlide={this.state.goToSlide}
          // showNavigation={this.state.showNavigation}
           offsetRadius={this.state.offsetRadius}
           animationConfig={this.state.animationConfig}
           // getShortestDirection={()=>alert('')}
          className="dialog"
        />
        <div className="carosal_arrow">
          {/* <FaChevronLeft className="left_arrow" onClick={(e)=>this.gotoslideright(
        states.slides.length)}/> */}
      {/* <FaChevronRight className="right_arrow" onClick={(e)=>this.gotoslideleft(
        states.slides.length
        )}/> */}
        </div>
        </div>
       
        </div> 
        </div> 
    );
  }
}
export default ImageCarouselDynamic; 