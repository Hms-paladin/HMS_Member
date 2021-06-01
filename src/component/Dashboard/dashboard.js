import react, { useState, useEffect } from 'react';
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
import { GetDoctorSpeciality } from "../../actions/searchresultaction";
import { connect, useDispatch } from "react-redux";
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

// function Dashboard(props) {
//     const [images, setimages] = useState([]);
  //   const dispatch = useDispatch();
  //  console.log("dashboard Props", props)
  //   useEffect(() => {
  //       dispatch(GetDoctorSpeciality());
    
  //     }, []);

  //     useEffect(() => {
  //       var a = images1;
  // let obj =[];
  // for (var i =0;i < a.length; i++){
  //   var img ={
  //     img :a[i].speciality_filename,
  //     title :a[i].speciality
  //   }
  //   obj.push(img);
  // }
  // setimages(obj);
  // }, [images1]);

  // console.log("images", images1);
  

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



// const mapStateToProps = (state) =>
// // console.log(state.getOptions.getProcessType, "getProcessType")
// ({

//     specialityList : state.doctorAppointmentReducer.getDoctorSpecialityDetails  || []
// });

// export default connect(mapStateToProps)(Dashboard);

export default Dashboard;