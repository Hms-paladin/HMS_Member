import React from "react";
import prescription from "../../images/PregnantMother/prescription.jpg";
import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
function PrescriptionView(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log("dddd",props.PerscriptionData)
  return (
    <div>
       <Grid container spacing={4}>
          <Grid item sm={12} md={3} className="first_grid_pres">
        <div>
        <div className="D_name">{props.PerscriptionData.patientName}<span className="d_years">{props.PerscriptionData.age+"Years"}</span></div>
        <div className="doctor_name">Dr.Farah</div>
        <div className="d_date">---<span className="d_time">--</span></div>
      </div>
     </Grid>
     
     <Grid item sm={12} md={4}>
     {/* <AwesomeSlider
      cssModule={AwsSliderStyles} 
      animation="cubeAnimation"> 
      <img src={prescription}/>
      
      </AwesomeSlider> */}
       <Slider {...settings}>
       <img src={prescription}/>
       <img src={prescription}/>
       <img src={prescription}/>
       <img src={prescription}/>
       <img src={prescription}/>
       <img src={prescription}/>
       </Slider>
     </Grid>  
     </Grid>

    </div>
  );
}
export default PrescriptionView;