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

import "./dashboard.scss";

const images = [
                    {img:Doctor,title:"Doctor Apponintment"},
                    {img:Nurse,title:"Nursing"},
                    {img:Report,title:"Report"},
                    {img:Trainer,title:"Trainer"},
                    {img:TrainingCenter,title:"Training Center"},
                    {img:DietMeal,title:"Diet Meal"},
                    {img:Pharmacy,title:"Pharmacy"},
                    {img:Lab,title:"Lab"},
                    {img:Physotheropy,title:"Physotheropy"},
                    {img:BookRoom,title:"Book a Room"}
                ]

function Dashboard(props) {
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

export default Dashboard;