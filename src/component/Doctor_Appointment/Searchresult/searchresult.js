import React, { useState,useRef, Fragment } from "react";
import Doctor from "../../../images/doctorappoinment.png";
import Nurse from "../../../images/nurse.png";
import Report from "../../../images/report.png";
import Trainer from "../../../images/trainer.png";
import TrainingCenter from "../../../images/trainingcenter.png";
import DietMeal from "../../../images/dietmeal.png";
import Pharmacy from "../../../images/pharmacy.png";
import Lab from "../../../images/lab.png";
import Physotheropy from "../../../images/physotheropy.png";
import BookRoom from "../../../images/bookroom.png";
import {NavLink} from 'react-router-dom'
import "./searchresult.scss";
import { Carousel,Button,Row,Col} from 'antd';
import Slider from "react-slick";
import CarosalComp from '../../../helpers/CarosalSlider/CarosalSlider'
const images = [
                    {img:Doctor,title:"Dentistry"},
                    {img:Nurse,title:"Hematologist"},
                    {img:Report,title:"Anesthesiologist"},
                    {img:Trainer,title:"Dermatologist"},
                    {img:TrainingCenter,title:"Endocrinologist"},
                    {img:DietMeal,title:"Family physician"},
                    {img:Pharmacy,title:"Gastroenterologist"},
                    {img:Lab,title:"Allergists/Immunologist"},
                    {img:Physotheropy,title:"Radiologist"},
                    {img:BookRoom,title:"Neurologist"},
                    {img:TrainingCenter,title:"ENT"},


                    {img:Lab,title:"Allergists/Immunologist"},
                    {img:Physotheropy,title:"Radiologist"},
                    {img:BookRoom,title:"Neurologist"},
                    {img:TrainingCenter,title:"ENT"},
                  
                  
]



const Searchresult = (props) => {
  
 

  return (
    <>
     
          <CarosalComp>
        {images.map((data)=>{
return(
<div className="img_cat_Container">
<NavLink to="/feed"><img src = {data.img} /></NavLink> 
<div className="imgTitle">{data.title}</div>
</div> 
)  
})}
            
          </CarosalComp>
     
      
    </>
  )
}

export default Searchresult;