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
import PaymentReceived from '../Pharmacy/PaymentReceived/PaymentReceived'
import PaymentMethod from '../Pharmacy/PaymentMethod/PaymentMethod'
import OrderPacking from '../Pharmacy/OrderDetailsPacked/OrderDetails-Packed'

function routepush(props){
    props.history.push("/paymentreceived")
}
const images = [
                    {img:Doctor,title:"Doctor Apponintment",pathname:"/profile"},
                    {img:Nurse,title:"Nursing",pathname:"/nursehistory"},
                    {img:Report,title:"Report"},
                    {img:Trainer,title:"Trainer"},
                    {img:TrainingCenter,title:"Training Center"},
                    {img:DietMeal,title:"Diet Meal"},
                    {img:Pharmacy,title:"Pharmacy",pathname:"/prescriptionhistory"},
                    {img:Lab,title:"Lab",pathname:"/clinicallab"},
                    {img:Physotheropy,title:"Physotheropy"},
                    {img:BookRoom,title:"Book a Room"}
                ]

function Dashboard(props) {
    return(
        <div className="container">
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
       
        </div>
        </div>
    )
}

export default Dashboard;