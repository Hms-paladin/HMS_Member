import React, { useState } from "react";
import Doctor from "../../../images/doctorappoinment.png";
import Nurse from "../../../images/nurse.png";
import Report from "../../../images/report.png";
import Trainer from "../../../images/trainer.png";
import TrainingCenter from "../../../images/trainingcenter.png";
import DietMeal from "../../../images/dietmeal.png";
import Pharmacy from "../../../images/pharmacy.png";
import Lab from "../../../images/lab.png";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Physotheropy from "../../../images/physotheropy.png";
import BookRoom from "../../../images/bookroom.png";
import {NavLink} from 'react-router-dom'
import "./searchresult.scss";
// import { Swiper, SwiperSlide } from 'swiper-react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation, Lazy } from "swiper/dist/js/swiper.esm";
// import { Navigation } from 'swiper/dist/js/swiper.esm';
// import 'swiper/swiper.scss';

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
                    {img:Doctor,title:"Cardiologist"},
                    {img:Lab,title:"Allergists/Immunologist"},
                    {img:Physotheropy,title:"Radiologist"},
                    {img:BookRoom,title:"Neurologist"},
                    {img:TrainingCenter,title:"ENT"},
                    {img:Doctor,title:"Cardiologist"}
]

const styles={
	imgContainer:{
			    width:'17%',
                height:'auto',
                margin:'20px 1.5%',
                borderRadius: '2px',
                boxshadow: '0px 5px 5px 2px #ded5de',
	},
	container:{
		borderBottom:'0.3px solid #c8c6c6'
	},
}
const params = {
    modules: [ Navigation,Lazy],
    slidesPerView:'5',
      slidesPerColumn: '2',
      direction: 'horizontal',
    //   preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
      },
    loop: false,
    spaceBetween: 30,
    //   pagination:{
    //     el:'.swiper-pagination',
    //     clickable:true,
    //   },
    };
 
function Searchresult(props) {
    const [swiper,setswiper]=useState(null)
    const goNext = () => {
        if (swiper !== null) {
          swiper.slideNext();
        }
      };
     
    return(
        <>
        <div className="search_spl_parent">
          <div className="container"> 
            <div>
        <Swiper {...params} getSwiper={images}>
     
     {images.map((data)=>{
            return(
            <div className="imgContainer" style={styles.imgContainer}>
               <NavLink to="/feed"><img src = {data.img}/></NavLink> 
                <div className="imgTitle">{data.title}</div>
        </div> 
       
            )  
        })}
       
     
         </Swiper>
         </div>
         </div>
        <div><ArrowForwardIosIcon className="tra_right_arrow" onClick={goNext}/></div>
        
        </div>
        </>
    )
}

export default Searchresult;