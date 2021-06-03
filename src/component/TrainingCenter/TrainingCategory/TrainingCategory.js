import React,{useState} from "react";
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
import { NavLink } from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import './TrainingCategory.scss'
import {Input} from 'antd'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import search from '../../../images/search.svg'
import Tra_ad from '../../../images/tr_add.jpg'
import CarosalComp from '../../../helpers/CarosalSlider/CarosalSlider'
import { Next } from "react-bootstrap/esm/PageItem";
export default function TrainingCategory(props) {
    const images = [
        {img:Doctor,title:"Horse Riding"},
        {img:Nurse,title:"Swimming"},
        {img:Report,title:"Football"},
        {img:Trainer,title:"Drive In"},
        {img:TrainingCenter,title:"Martial Arts"},
        {img:DietMeal,title:"Tennis"},
       
        {img:Trainer,title:"Drive In"},
        {img:TrainingCenter,title:"Martial Arts"},
        {img:DietMeal,title:"Tennis"},
       
        {img:Trainer,title:"Drive In"},
        {img:TrainingCenter,title:"Martial Arts"},
        {img:DietMeal,title:"Tennis"},
       
        {img:Trainer,title:"Drive In"},
        {img:TrainingCenter,title:"Martial Arts"},
        {img:DietMeal,title:"Tennis"},
       

       
]
const [goToSlide,setgoToSlide]=useState(0)
const gotoslideright=(e)=>{
    setgoToSlide(goToSlide+1)
    console.log(e,"e")
  
   }
// advertisement open
const [open, setOpen] =useState(true);

const handleClose = () => {
  setOpen(false);
};

    return(
        <>
        <div className="tra_cat_head_div">
            <div>Training Category</div>  
           <div style={{position:"relative",width:"400px"}}><Input type="search " placeholder={"Search"} className="srch_his"/><img src={search} style={{position:"absolute",top:"11px",right:"11px",width:"15px",height:"15px"}}/></div>
        </div>
        <CarosalComp>
        {images.map((data)=>{
      return(
         <div className="img_cat_Container">
         <NavLink to="/feed"><img src = {data.img} /></NavLink> 
         <div className="imgTitle">{data.title}</div>
         </div> 
      )})}

            
          </CarosalComp>
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
        className={""}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <div>
          <div className="tra_modal">
          <img src={Tra_ad} style={{width:"100%",height:"100%"}}/>
          <div className="tc_add_cont">
              <div>
              <div>20%</div>
              <div>Discount</div>
              <div>Two Member Program</div>
              <div>STAY HEALTHY <br/>BE <span>ACTIVE</span></div>
              </div>
              <div className="tc_ad_bth">
              <NavLink to="/tc_history"> <Button>Book Now</Button> </NavLink>
                </div>
          </div>
          </div>
          <CloseIcon className="l_closeicon" onClick={handleClose}/>
          </div>
        </Dialog>
        </>
    )
}
