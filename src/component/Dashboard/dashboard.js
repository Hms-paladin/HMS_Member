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
// routes path
import PrescriptionHistory from "../Pharmacy/PrescriptionHistory/prescriptionhistory";
import PaymentReceived from '../Payment/PaymentReceived/PaymentReceived'
import PaymentMethod from '../Payment/PaymentMethod/PaymentMethod'
import OrderPacking from '../Pharmacy/OrderDetailsPacked/OrderDetails-Packed'

// book a room 
import HospitalList from "../BookAroom/HospitalList/HospitalList" ;

// Trainer
import TrainerList from "../Trainer/TrainerList/TainerList";
function routepush(props){
    props.history.push("/paymentreceived")
}
const images = [
                    {img:Doctor,title:"Doctor Apponintment",pathname:"/doctorappointment"},
                    {img:Nurse,title:"Nursing",pathname:"/nursehistory"},
                    {img:Report,title:"Report"},
                    {img:Trainer,title:'Trainer',pathname:"/tainerlist"},
                    {img:TrainingCenter,title:"Training Center"},
                    {img:DietMeal,title:"Diet Meal",pathname:"/Advertisement_diet"},
                    {img:Pharmacy,title:"Pharmacy",pathname:"/prescriptionhistory"},
                    {img:Lab,title:"Lab",pathname:"/labhistory"},
                    {img:Physotheropy,title:"Physiotherapy",pathname:"/physiotheraphy"},
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
        <div>
        <Route exact path={`${props.match.path}/prescriptionhistory`} component={PrescriptionHistory} />
        <Route exact path={`${props.match.path}/orderdetails`} component={OrderTable} />
        <Route exact path={`${props.match.path}/book`} component={HospitalList}/>
        <Route exact path={`${props.match.path}/tainerlist`} component={TrainerList}/>
       
        </div>
        </div>
    )
}

export default Dashboard;