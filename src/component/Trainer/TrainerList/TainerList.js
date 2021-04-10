import React,{useState} from "react";
import './TrainerList.scss'
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Internet from '../../../images/internet.svg'
import Gym from '../../../images/gym.svg'
import Thumb from '../../../images/thumb.svg'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import percentage from '../../../images/percentage.svg'
import StarIcon from '@material-ui/icons/Star';
import LabImage from '../../../images/lab_clinic.png'
import LabImage2 from '../../../images/b_lab.jpeg'
import {NavLink,path} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import {useHistory} from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'
var hashHistory = require('react-router-redux')


const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);







const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));



function valuetext(value) {
  return `${value}`;
}


                  

function TrainerList(props) {
  let history = useHistory();

  const homeitems=[
  {
      image:<HomeIcon/>,
      imagename:'Home'
  },
 
]
function Bookingdetails(){
  history.push("/trainerdetails")
}
const Lab_history=[
  {
      id:1,
      labname:"Farah",
      off:10,
      rating:4.5,
      review:12,
      re_per:85,
      img:LabImage,
  },
  {
      id:2,
      labname:"YIACO Medical Center",
      off:15,
      rating:4.7,
      review:16,
      re_per:93,
      img:LabImage2,
  }
]

    const classes = useStyles();

    return(  
        <div className="feed_layout">
          <Grid container spacing={10}>
          <Grid item xs={12} md={4}>
           <div className="filter_container">
               <h5>Filter</h5>
               <div className ="tainerlist_home">
                  <div className="home_icon"><div><HomeIcon/><div>Home</div></div></div>
                  <div className="internet_div_tra"><div  className="inter_net_img"><ReactSVG src={Internet}/><div>Online</div></div></div>
                  <div className="internet_div_gym"><div  className="inter_net_img"><ReactSVG src={Gym}/><div>Centre</div></div></div>
               </div>
              <div> 
                  <Button className="applybtn">Apply</Button></div>
           </div>
     
           </Grid>

                 
                <Grid item xs={12} md={8}  className={"paper_items_grid_trainer"}>   
                {Lab_history.map((data,index)=>  <Paper className={"tra_his_item_p"}>    
                <div style={{display:"flex",width:"100%"}}>
                <div className="book_nurse_div" onClick={Bookingdetails}>  
                  <img src={data.img} className="lab_his_img"/>
                
                   <div className="lab_his__text_div">
                      <p className="lab_his_h_name">{data.labname}</p>
                      <p className="lab_adrs">Fitness</p>
                      <p className="lab_adrs">34 Years / 5 Years Experience</p>
                    <label className="lab_adrs">Shamiya</label>
                      
                       {/* star icons */}
                       <div className="star_ra_div">
                       {[...Array(5)].map((img,index)=>(
                      <div key={index} ><StarIcon className="star_lab_icon"/></div> 
                      ))}  
                      </div>
                  </div>
                  </div>
                    {/* Percentage part */}
                    <div className="per_lab_part">
                      <div style={{position:"relative"}}>
                         <img src={percentage} style={{width:"55px"}}/>
                         <div className="per_inside_div"><p>{data.off+"%"}</p><p>off</p></div>
                      </div>
                      <div>
                       <span className="star_ic_div"><label>{data.rating}</label><StarIcon/></span>
                       <div style={{fontSize:"10px"}}>21 Reviews</div>
                      </div>
                   </div>
                   </div>
                   {/* icons */}
                   <div className ="tainerlist_home_inner_p">
                  <div className="home_icon_inner_p"><div><HomeIcon/><div>Home</div></div></div>
                  <div className="internet_div_tra_inner_p"><div  className="inter_net_img"><ReactSVG src={Internet}/><div>Online</div></div></div>
                  <div className="internet_div_gym_inner_p"><div  className="inter_net_img"><ReactSVG src={Gym}/><div>Centre</div></div></div>
                 </div>
                 {/* end */}
                 

                   {/* Vedio */}
                   <div id="carouselExampleIndicators" class="carousel slide" >
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
         <div class="carousel-inner">
         <div class="carousel-item active">
           <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
         </div>
         <div class="carousel-item">
         <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>

         </div>
         <div class="carousel-item">
         <VedioPlayer src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'/>
         </div>
        </div>
        </div>
                </Paper>
                )}
                </Grid>
                </Grid>
      
      
  
     
        </div> 
    ) 
}
export default TrainerList;