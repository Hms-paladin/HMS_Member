import React,{useState,useEffect} from 'react';
import './HospitalOffer.scss';
import offer_bg from '../../../images/offer_bg.png'
import star from '../../../images/star.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import room_img from "../../../images/BookaRoom/room_img.png";
import StarIcon from '@material-ui/icons/Star';
import Labelbox from "../../../helpers/labelbox/labelbox";
import Slider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import sort from '../../../images/sort.svg';
import {NavLink, useHistory} from "react-router-dom";
import {ParticularHospitalDetails} from '../../../actions/Book a RoomActions'
import { ReactSVG } from 'react-svg'

import { withStyles } from '@material-ui/core/styles';
import { useDispatch,connect} from 'react-redux';

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  
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
 
  
 function HospitalOffer(props){

  let history= useHistory();

  function confirmPage(id){
    var Data=props.RoomList.find((data)=>{
         return data.roomId==id
    })
    history.push({
      pathname:'/proceedpage',
      state:Data
    })
    console.log("Data",Data)
  }
  let dispatch=useDispatch()
  const [SearchKey,setSearchKey]=useState({
    fromdate:{
      value:""
    },
    todate:{
      value:""
    }
  })
  const [valueKwd,setvalueKwd]=useState("")
  function valuetext(value) {
    setvalueKwd(value)
  }
  const [ParticularList,setParticularList]=useState([])
  useEffect(()=>{
    dispatch(ParticularHospitalDetails(props.VendorRoomList))
  },[props.VendorRoomList])
  useEffect(()=>{
    var RoomList=[]
    props.RoomList.map((data)=>{
      RoomList.push(data)
    })
    setParticularList(RoomList)
  },[props.RoomList])
  function checkValidation(data, key) {
    if(data&&key==="todate"){
      var Todate=data
      dispatch(ParticularHospitalDetails(SearchKey.fromdate.value,Todate))
    }
   let dynObj = {
     value: data,
   };
  setSearchKey((prevState) => ({
     ...prevState,
     [key]: dynObj,
   }))
  }  
  console.log("props",props)
    return(
        <div style={{display:'flex'}}>
 
            <div style={{width:'50%'}}>
                <div  className="offer_filter_div">
                    <div className="offer_filter_div"> Filter </div>
                    <div className="offer_date_fil_div">
                        <div className="date_pic_childdiv">
                        <Labelbox type="datepicker" 
                         changeData={(data) => checkValidation(data, "fromdate")}
                         value={SearchKey.fromdate.value}
                        />
                        </div>
                        <div className="offer_date_pic_childdiv">
                            <Labelbox type="datepicker"
                             changeData={(data) => checkValidation(data, "fromdate")}
                             value={SearchKey.fromdate.value}
                            /></div>
                    </div>
                </div>

                <div className="Costfiler">Cost Range
                          
                    <Slider
                        defaultValue={500}
                        // value={valuetext}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-always"
                        step={10}
                        min={1}
                        max={500}
                        // marks={marks}
                        // scale={(x) => x ** 10}
                        valueLabelDisplay="on"
                    />
                    <div className="slider_labels">
                        <span>1 KWD</span>
                        <span>500 KWD</span>

                    </div>
                    </div>

           </div>
          <div style={{width:'50%'}}>
            <div className="sort_cont_hos">
              <div className="sort_bestoff"><div className="sort_hos"> Offer <ReactSVG src={sort} /></div>
               <div className="sort_hos">Rating <ReactSVG src={sort} /></div></div> 

           </div>
           {/* card start */}
           {ParticularList.map((data)=>

            <div className="card hos_offer_card" >
                <div className = "card-body">
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                       <div><img src={data.vendorProfileImage} style={{width:'75px', cursor:'pointer',borderRadius:"50%",height:"75px"}}  onClick={()=>confirmPage(data.roomId)}/></div>
                       <div>
                        <p className="name_star_head">{data.roomType}</p>
                        <div  className="star_rating_hos">
                            {[...Array(5)].map((img,index)=>(
                            <div key={index}><StarIcon className="star_icon_hos"/></div>
                            ))}
                        </div>
                        </div>
                        <div className="hos_offer"><img src={offer_bg} />
                           <div className="offer_numerics_hos"><span>0 %</span><span>Offer</span></div>
                        </div>
                        <div>
                            <p className="available_rate">{data.cost} KWD / Day</p>
                            <p style={{color:'#83AF40'}}>{data.roomAvailable===true&&"Available"}</p>
                        </div>
                         </div>

                </div>
             {/* card end */}
            </div>
                )}


            </div>


        </div>
    


    )
}
const mapStateToProps=(state)=>({
  RoomList:state.BookRoom.Particular_RoomList || []

})
export default connect(mapStateToProps)(HospitalOffer);