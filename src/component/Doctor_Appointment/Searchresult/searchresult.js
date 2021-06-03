import React, { useState,useRef, Fragment, useEffect } from "react";
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
import {NavLink, useHistory} from 'react-router-dom'
import "./searchresult.scss";
import { Carousel,Button,Row,Col} from 'antd';
import Slider from "react-slick";
import CarosalComp from '../../../helpers/CarosalSlider/CarosalSlider'
import { apiurl } from "../../../utils/baseUrl";
import { useDispatch, connect } from "react-redux";
import axios from "axios";
import { GetDoctorSpeciality } from "../../../actions/searchresultaction";
import { RecentActorsSharp, StarRateRounded } from "@material-ui/icons";

// const images = [
//                     {img:Doctor,title:"Dentistry"},
//                     // {img:Nurse,title:"Hematologist"},
//                     // {img:Report,title:"Anesthesiologist"},
//                     // {img:Trainer,title:"Dermatologist"},
//                     // {img:TrainingCenter,title:"Endocrinologist"},
//                     // {img:DietMeal,title:"Family physician"},
//                     // {img:Pharmacy,title:"Gastroenterologist"},
//                     // {img:Lab,title:"Allergists/Immunologist"},
//                     // {img:Physotheropy,title:"Radiologist"},
//                     // {img:BookRoom,title:"Neurologist"},
//                     // {img:TrainingCenter,title:"ENT"},


//                     // {img:Lab,title:"Allergists/Immunologist"},
//                     // {img:Physotheropy,title:"Radiologist"},
//                     // {img:BookRoom,title:"Neurologist"},
//                     // {img:TrainingCenter,title:"ENT"},
                  
                  
// ]
function Searchresult(props) {
  const [images, setimages] = useState([]);
  const [patientId, setPatientId] = React.useState(16);
    const dispatch = useDispatch();
    const history = useHistory();
   
    useEffect(() => {
        dispatch(GetDoctorSpeciality());
        setPatientId(16);
        localStorage.setItem('patientId', patientId);
      }, []);
  

      useEffect(() => {
        var a= props.specialityList || [];
  let obj =[];
  for (var i =0;i < a.length; i++){
    var img ={
      img :a[i].speciality_filename,
      title :a[i].speciality,
      id: a[i].id,
      speciality: true
    }
    obj.push(img);
  }
  setimages(obj);
  }, [props.specialityList]);

  function NavToFeed(data) {
    console.log("event Doctor", data)
    history.push({
      pathname: "/feed",
      state: data
    })
  }
console.log("dashboard", props)
  return (
    <>
     
          <CarosalComp>
        {images.map((data)=>{
return(
<div className="img_cat_Container" onClick={()=>NavToFeed(data)}>
<NavLink to="/feed"><img src = {data.img} /></NavLink> 
<div className="imgTitle">{data.title}</div>
</div> 
)  
})}
            
          </CarosalComp>
     
      
    </>
  )
}


const mapStateToProps = (state) =>
({
    specialityList : state.doctorAppointmentReducer.getDoctorSpecialityDetails  || []
});


export default connect(mapStateToProps)(Searchresult);