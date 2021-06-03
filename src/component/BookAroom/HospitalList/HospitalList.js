
import React,{useState} from "react";
import './HospitalList.scss';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import avatar from '../../../images/nurse.png'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import star from '../../../images/star.png'
import {useHistory} from 'react-router-dom'
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'
import Labelbox from "../../../helpers/labelbox/labelbox";
import StarIcon from '@material-ui/icons/Star';
import Thumb from "../../../images/BookaRoom/round-thumb.svg";
import search from "../../../images/loupe.png";
import { Input,Modal } from 'antd';
import HospitalOffer from "../HospitalList/HospitalOffer";


var hashHistory = require('react-router-redux')

const { Search } = Input;

const onSearch = value => console.log(value);




const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

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



               

function HospitalList(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [ModalOpen,setModalOpen]=React.useState(false)
const ModalClickOpen=()=>{
    setModalOpen(true)
}
const ModalClickClose=()=>{
  setModalOpen(false)
}

  let history = useHistory();

  function Bookingdetails(){
    history.push("/doctorbooking")
}
    const classes = useStyles();
    
    return(  
        <div className="hos_list_container">
           <div  className="filter_div">
            <div className="filter_div"> Filter </div>
            <div className="date_fil_div">
                <div className="date_pic_childdiv">
                <Labelbox type="datepicker" />
                </div>
                <div className="date_pic_childdiv">
                    <Labelbox type="datepicker"/></div>
            </div>

           </div>
          <div className="second_head">  
          <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
          {/* <Search className="search_hospitallist"
                placeholder="Search"
                allowClear 
                style={{ width: 300, margin: '0 10px' }}
           /> 
                <img className="searchicon_hos"src={search} />  */}
        <div style={{position:"relative",width:"500px"}}><Input type="search " placeholder={"Search"} className="srch_his"/><img src={search} style={{position:"absolute",top:"7px",right:"17px",width:"20px"}}/></div>

          </div> 

        
            <div className="second_div">
               <div className="second_details">
                  <div className="snd_deta"><div className="avatar_div"> <img src={avatar}onClick={ModalClickOpen}  /></div>
                   <div className="hos_details">
                     <div className="detail_1">Mayo Clinic Hospital</div>
                     <div className="detail_2">Shaab sea View</div>
                     <div  className="star_rating">
                            {[...Array(5)].map((img,index)=>(
                            
                            <div key={index}><StarIcon className="star_icon"/></div>
                            ))}
                      </div>
                    </div>
                    </div> 
                     <div className="rate_numeric"> <div className="number_rating">4.5<img src={star}/></div></div>
               </div>
                <div style={{display:'flex', marginTop:'10px'}} >
                   <img className="thumb_size" src={Thumb}/>
                   <p style={{color:'#83AF40', marginTop:'0px', marginBottom:'0px', marginRight:'10px'}}>93%</p>
                   <p style={{marginTop:'0px', marginBottom:'0px'}}>(15reviews)</p>
                </div>
                <div className="box_align">
                    <p className="box_first_text">Dalal</p>
                    <p className="box_second_text">The ambiance and room maintenance are very good</p>
                </div>
                   <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
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
                     
            </div>
           </div>
         

           <Modal
                  title="Mayo Clinic Hospital"
                  visible={ModalOpen}
                  footer={false}
                  fullwidth={true}
                  size={"lg"}
                  {...props}
                  centered
                  width={1000}
                  // className="confirm_modal"
                  onCancel={ModalClickClose}
                 >
                  
                     < HospitalOffer/>
    
                 </Modal>
        </div> 

    ) 
}
export default HospitalList;