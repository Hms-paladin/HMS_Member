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
import { NavLink} from "react-router-dom";
import "./dashboard.scss";
const images = [
                    {img:Doctor,title:"Doctor Appointment",pathname:"/advertisement"},
                    {img:Nurse,title:"Nursing",pathname:"/nursehistory"},
                    {img:Report,title:"Report",pathname:"/reports"},
                    {img:Trainer,title:'Trainer',pathname:"/tainerlist"},
                    {img:TrainingCenter,title:"Training Center",pathname:"/trainingcategory"},
                    {img:DietMeal,title:"Diet Meal",pathname:"/Advertisement_diet"},
                    {img:Pharmacy,title:"Pharmacy",pathname:"/prescriptionhistory"},
                    {img:Lab,title:"Lab",pathname:"/labhistory"},
                    {img:Physotheropy,title:"Physiotherapy",pathname:"/physiotheraphy_ad"},
                    {img:BookRoom,title:"Book a Room", pathname:"/bookaroom_ad"}
                ]

function Dashboard(props) {
    return(
         <div className="dashboard_container">
        {images.map((data)=>{
            return(
             <div className="imgContainer">
                 <NavLink to={data.pathname ? data.pathname : ""}><img src = {data.img} /></NavLink>
                <div className="imgTitle">{data.title}</div>
            </div> 
            ) 
    
        })}
        </div>
    )
}

export default Dashboard;