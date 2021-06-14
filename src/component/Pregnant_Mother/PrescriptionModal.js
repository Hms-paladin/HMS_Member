import React,{useEffect, useState} from "react";
import prescription from "../../images/PregnantMother/prescription.jpg";
import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import { useDispatch, connect } from "react-redux";
import Labelbox from "../../helpers/labelbox/labelbox";
import historybtn from '../../images/history-button.svg'
import { ReactSVG } from 'react-svg'
import {ParticularPerscriptionHistory} from '../../actions/ProfileActions'
function PrescriptionView(props) {
  let dispatch=useDispatch()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const [Data,setData]=useState([])
useEffect(()=>{
  dispatch(ParticularPerscriptionHistory(props.PrescriptionId))
},[props.PrescriptionId])
useEffect(()=>{
  let list=[]
  props.PerscriptionData[0]&&props.PerscriptionData[0].medicineDetails.map((data)=>
  list.push([
  <div className="pres_parent">
  <div className="pres_patient_detail">
    <div className="pres_days_child">
  <Labelbox type="text" labelname="Medicine"
    value={data.medicineName}
   />
   <div className="pres_days_deta">
   <Labelbox type="text" labelname="Day"
    value={data.day}
   />
   <Labelbox type="text" labelname="M"
    value={data.morning}
   />
   <Labelbox type="text" labelname="A"
    value={data.afternoon}
   />
   <Labelbox type="text" labelname="N"
    value={data.night}
   />
   </div>
   </div>
   </div>
   <div className="last_div"><Labelbox type="text"
    value={data.instruction}
   />
   </div>
   </div>
  ])
  )
  setData([list])
},[props.PerscriptionData])
  return (
    <div className="prescrip_detail">
       <div style={{textAlign:"end",marginRight:"5%",cursor:"pointer"}}><ReactSVG src={historybtn} onClick={()=>props.onResendStatefun(props.PrescriptionId)} /></div>
      {props.PerscriptionData.map((data)=>
        <div style={{padding:"0px 23px"}}>
        <div className="D_name">{data.patientName}<span className="d_years">{data.age+" "+"Years"}</span></div>
      </div>
      )}
       <Grid container spacing={4}  style={{padding:"0px 20px"}}>
          {/* <Grid item sm={12} md={3} className="first_grid_pres"> */}
      
     {/* </Grid> */}
     <Grid item sm={12} md={5}>
     {/* {props.PerscriptionData.medicineDetails */}
         {Data}         
     </Grid> 
     <Grid item sm={12} md={5}>
       {/* <div style={{height:"300px"}}> */}
       <Slider {...settings}>
       <img src={prescription} style={{width:"100%",height:"300px%"}}/>
       <img src={prescription} style={{width:"100%",height:"300px"}}/>
       </Slider>
       {/* </div> */}
     </Grid>  
     </Grid>

    </div>
  );
}
    
const mapStateToProps = (state) =>
({
    PerscriptionData: state.GetProfileDetails.ParticularPerscription,
   
});

export default connect(mapStateToProps)(PrescriptionView);