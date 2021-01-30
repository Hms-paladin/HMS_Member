import React from "react";
import Doctor from "../../images/doctorappoinment.png";
import Nurse from "../../images/nurse.png";
import Report from "../../images/report.png";
import Trainer from "../../images/trainer.png";
import TrainingCenter from "../../images/trainingcenter.png";
import DietMeal from "../../images/dietmeal.png";
import Pharmacy from "../../images/pharmacy.png";
import Lab from "../../images/lab.png";
import Physotheropy from "../../images/physotheropy.png";
import BookRoom from "../../images/bookroom.png";

import "./searchresult.scss";

const images = [
                    {img:Doctor,title:"Dentistry"},
                    {img:Nurse,title:"Hematologist"},
                    {img:Report,title:"Anasthesiologist"},
                    {img:Trainer,title:"Dermatologist"},
                    {img:TrainingCenter,title:"Endocrinologist"},
                    {img:DietMeal,title:"Family physician"},
                    {img:Pharmacy,title:"Gastroenterologist"},
                    {img:Lab,title:"Allergist"},
                    {img:Physotheropy,title:"Radiologist"},
                    {img:BookRoom,title:"Neurologist"},
                    {img:TrainingCenter,title:"ENT"},
                    {img:Doctor,title:"Cardiologist"}
]

                  

function Searchresult(props) {
    return(
        <div className="container">
        {images.map((data)=>{
            return(
            <div className="imgContainer">
                <img src = {data.img} />
                <div className="imgTitle">{data.title}</div>
            </div> 
            )  
        })}
        </div>
    )
}

export default Searchresult;