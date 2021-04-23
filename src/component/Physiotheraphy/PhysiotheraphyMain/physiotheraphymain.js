import React from "react";
import Doctor from "../../../images/doctorappoinment.png";
import Nurse from "../../../images/nurse.png";
import Report from "../../../images/report.png";
import Trainer from "../../../images/trainer.png";
import './physiotheraphymain.scss'
import { NavLink} from "react-router-dom";
import CarosalComp from '../../../helpers/CarosalSlider/CarosalSlider'

// import "./searchresult.scss"
const images = [
                    {img:Doctor,title:"Geriatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Nurse,title:"Musculoskeletal Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Report,title:"Paediatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Trainer,title:"Sports Physiotherapy",pathname:"/physiotheraphyfeed"},


                    {img:Doctor,title:"Geriatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Nurse,title:"Musculoskeletal Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Report,title:"Paediatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Trainer,title:"Sports Physiotherapy",pathname:"/physiotheraphyfeed"},

                    {img:Doctor,title:"Geriatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Nurse,title:"Musculoskeletal Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Report,title:"Paediatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Trainer,title:"Sports Physiotherapy",pathname:"/physiotheraphyfeed"},


                    {img:Doctor,title:"Geriatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Nurse,title:"Musculoskeletal Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Report,title:"Paediatric Physiotherapy",pathname:"/physiotheraphyfeed"},
                    {img:Trainer,title:"Sports Physiotherapy",pathname:"/physiotheraphyfeed"},
]

                  

function Physiotheraphymain(props) {
    return(
        <div>        <div className="mainpage_heading container">Physiotherapy Category</div>

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
        </div>

    )
}

export default Physiotheraphymain;