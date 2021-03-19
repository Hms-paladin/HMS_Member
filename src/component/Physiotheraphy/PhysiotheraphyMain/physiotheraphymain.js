import React from "react";
import Doctor from "../../../images/doctorappoinment.png";
import Nurse from "../../../images/nurse.png";
import Report from "../../../images/report.png";
import Trainer from "../../../images/trainer.png";
import './physiotheraphymain.scss'
import { NavLink} from "react-router-dom";


// import "./searchresult.scss";

const images = [
                    {img:Doctor,title:"Geriatic Physiotheraphy",pathname:"/physiotheraphyfeed"},
                    {img:Nurse,title:"Musculosketal Physiotheraphy",pathname:"/physiotheraphyfeed"},
                    {img:Report,title:"Peadiatric Physiotheraphy",pathname:"/physiotheraphyfeed"},
                    {img:Trainer,title:"Sports Physiotheraphy",pathname:"/physiotheraphyfeed"},
                    
]

                  

function Physiotheraphymain(props) {
    return(
        <div>        <div className="mainpage_heading container">Physiotheraphy Category</div>

        <div className="container">
        {images.map((data)=>{
            return(
            <div className="imgContainer">
                <NavLink to={data.pathname ? data.pathname : ""}> <img src = {data.img} /></NavLink>
                <div className="imgTitle">{data.title}</div>
            </div> 
            )  
        })}
        </div>
        </div>

    )
}

export default Physiotheraphymain;