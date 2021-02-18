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
import OrderTable from '../Pharmacy/OrderDetails/orderdetails'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const images = [
                    {img:Doctor,title:"Doctor Apponintment",pathname:"/doctorappointment"},
                    {img:Nurse,title:"Nursing",pathname:"/nursehistory"},
                    {img:Report,title:"Report"},
                    {img:Trainer,title:"Trainer"},
                    {img:TrainingCenter,title:"Training Center"},
                    {img:DietMeal,title:"Diet Meal",pathname:"/Advertisement_diet"},
                    {img:Pharmacy,title:"Pharmacy",pathname:"/prescriptionhistory"},
                    {img:Lab,title:"Lab",pathname:"/labhistory"},
                    {img:Physotheropy,title:"Physiotherapy"},
                    {img:BookRoom,title:"Book a Room", pathname:"/hospitallist"}
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