import React,{useState, useEffect} from "react";
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
import Trainer from "../../../images/trainer.png";
import {Input} from 'antd'
import search from '../../../images/search.svg'
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'


import { useDispatch, connect } from "react-redux";
import { GetTrainerList } from "../../../actions/trainerlistaction";

var hashHistory = require('react-router-redux')

const { Search } = Input;
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
  const dispatch = useDispatch();
  let history = useHistory();
  console.log("trainerList", props)

const data = { 
	"limit":10,
	"pageno":1,
	"typeSearch":true,
	"searchContent":"i",
	"filter":false,
	"modeId":"1"
}

  useEffect(() => {
    dispatch(GetTrainerList(data));
  }, []);

  const homeitems=[
  {
      image:<HomeIcon/>,
      imagename:'Home'
  },
 
]
function Bookingdetails(state) {
  console.log("event Trainer", state)
  history.push({
    pathname: "/trainerdetails",
    state: { 
      trainerId: state.trainerId,
      trainingId: state.tr_training_id
    }
  })
}

    const classes = useStyles();

    return(  
        <div className="feed_layout">
          <Grid container spacing={10}>
          <Grid item xs={12} md={4} className="fil_cont_div">
            
           <div className="filter_container_icons">
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
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{position:"relative",marginBottom:"10px",width:"75%"}}><Input type="search " placeholder={"Search"} className="srch_his"/><img src={search} style={{position:"absolute",top:"7px",right:"17px"}}/></div>
                </div>
                {props.trainerList.map((data,index)=>  <Paper className={"tra_his_item_p"}>    
                <div style={{display:"flex",width:"100%"}}>
                <div className="book_nurse_div" onClick={() => Bookingdetails(data)}>  
                  <img src={data.vendor_profile_path} className="lab_his_img"/>
                
                   <div className="lab_his__text_div">
                      <p className="lab_his_h_name">{data.trainingName}</p>
                      <p className="lab_adrs">{data.training_mode}</p>
                      <p className="lab_adrs">34 Years / 5 Years Experience</p>
                    <label className="lab_adrs">{data.vendor_name}</label>
                      
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
            { data.mediaDetails.map((index) => (          
              <li data-target="#carouselExampleIndicators" data-slide-to="{ index }" class="active"></li>
              ))}
            </ol>
         <div class="carousel-inner">
           {data.mediaDetails.map(data => (
            <div class="carousel-item active">
              <VedioPlayer src={data.media_filename}/>
            </div>
           ))}
        </div>
        </div>
                </Paper>
                )}
                </Grid>
                </Grid>    
        </div> 
    ) 
}


const mapStateToProps = (state) =>
({
  trainerList: state.trainerListReducer.getTrainerListPatient || []
});

export default connect(mapStateToProps)(TrainerList);