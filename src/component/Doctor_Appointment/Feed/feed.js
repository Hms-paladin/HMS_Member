import React,{useState, useEffect} from "react";
import './feed.scss'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {Popconfirm} from 'antd'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import RangeCalendar from "../../../helpers/rangecalendar/RangeCalendar";
import { ReactSVG } from 'react-svg'
import sun from '../../../images/sun.svg'
import moon from '../../../images/night.svg'
import left from '../../../images/navigate_back.svg'
import right from '../../../images/navigate-next.svg'
import male from '../../../images/male.svg'
import female from '../../../images/female.svg'
import sort from '../../../images/sort.svg'
import avatar from '../../../images/nurse.png'
import pin from '../../../images/pin.png'
import Internet from '../../../images/internet1.svg'
import Clinic from '../../../images/Clinic1.svg'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import offer_bg from '../../../images/offer_bg.png'
import star from '../../../images/star.png'
// import Calendar from './Calendar'
import {useHistory} from 'react-router-dom'
import VedioPlayer from '../../../helpers/VedioPlayer/VedioPlayer'
import Internet_type from '../../../images/internet_type.svg';
import { GetPatientDoctorSearch } from "../../../actions/feedaction";
import { useDispatch, connect } from "react-redux";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { PutFavouriteAddorRemoveAction } from "../../../actions/favouriteaddorremoveaction";


var hashHistory = require('react-router-redux')
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

                  

function Feed(props) {
  console.log("doctorsearch", props)
  const dispatch = useDispatch(); 

    const classes = useStyles();
    
  const [patientId, setPatientId] = React.useState(
    localStorage.getItem('patientId') || ''
  );
   const App_type_function=()=>{
    setApp_type(!App_type)
   }
    
  //  type change to colors
  const [sun_icon,setsun_icon]=useState('day')
  const [moon_night,setmoon_night]=useState('night')
  const [men_icon,setmen_icon]=useState('male_ic')
  const [female_icon,setfemale_icon]=useState('female_ic')

  const [dayToggled, setdayToggled] = React.useState(false);
  const dayToggle = React.useCallback(() => {
    setdayToggled(!dayToggled);
    if(dayToggled == true)
      setsun_icon('day');
      else
      setsun_icon('day_changes')
  });
  const [nightToggled, setnightToggled] = React.useState(false);
  const nightToggle = React.useCallback(() => {
    setnightToggled(!nightToggled);
    if(nightToggled == true)
    setmoon_night('night');
      else
      setmoon_night('night_changes')
  });
  // function FavouriteToggle(value) {  
  //   console.log("favourite", value)
  //   useEffect(() => {
  //     dispatch(PutFavouriteAddorRemoveAction(value));
  // }, []);
  // }
  //const [doctor,setfemale_icon]=useState('female_ic')
  const[doctorGender, setDoctorGender] = React.useState(false)
  const [maleToggled, setmaleToggled] = React.useState(false);
  const [femaleToggled, setfemaleToggled] = React.useState(false);
  const [maleClassName, setmaleClassName] = React.useState();
  const [femaleClassName, setfemaleClassName] = React.useState();
  const [valueGender, setValueGender] = React.useState("");

  const maleToggle = React.useCallback(() => {
    setmaleToggled(!maleToggled);
    if(maleToggled == true){      
      setmen_icon('male_changes');
      setValueGender("male");
      setfemale_icon('female_ic')
      setDoctorGender(true)
    }
    else{        
      setmen_icon('male_ic')
      setValueGender("");
      setfemale_icon('female_changes');
      setDoctorGender(false)
    }
  });
  
  const femaleToggle = React.useCallback(() => {
    setfemaleToggled(!femaleToggled);
    if(femaleToggled == true){
      setfemale_icon('female_changes');
      setValueGender("female");
      setmen_icon('male_ic')
      setDoctorGender(true)
    }
      else{
        setfemale_icon('female_ic')
        setValueGender("");
        setmen_icon('male_changes');
        setDoctorGender(false)
      }
  });
  // const maleToggle = React.useCallback((e) => {
  //   setmaleClassName(e.nativeEvent.path[0].attributes[0].ownerDocument.activeElement.classList[3])
  //   console.log("male Toggled event", maleClassName)
    
    
  //     doctorGenderFN();
  // });
  // const femaleToggle = React.useCallback((e) => {
  //   setfemaleClassName(e.nativeEvent.path[0].attributes[0].ownerDocument.activeElement.classList[3])
  //   console.log("female Toggled event", femaleClassName)
    
  //     doctorGenderFN();
  // });


  console.log("doctorgender", doctorGender)

  const[valuekm, setValueKM] = useState()
  const[valueoffer, setValueOffer] = useState()
  const[valuekwd, setValueKWD] = useState()
  const[valueApplyFilter, setValueApplyFilter] = useState(false)
  function valuetextkm(value){
    setValueKM(value)
  }
  function valuetextoffer(value){
    setValueOffer(value)
  }
  function valuetextkwd(value){
    setValueKWD(value)
  }
  const [currentDate, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  const [searchDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const dateDecreament = () => {
    const currentDayInMilli = new Date(searchDate).getTime()
    const oneDay = 1000 * 60 *60 *24
    const previousDayInMilli = currentDayInMilli - oneDay
    const previousDate = new Date(previousDayInMilli)

    setSelectedDate(previousDate)
  }
  const dateIncreament = () => {
    const currentDayInMilli = new Date(searchDate).getTime()
    const oneDay = 1000 * 60 *60 *24
    const nextDayInMilli = currentDayInMilli + oneDay
    const nextDate = new Date(nextDayInMilli)

    setSelectedDate(nextDate)
  }
 const ApplyAdvanceFilter = () => {
  setValueApplyFilter(true);
 }

  const data = {    
    patientId: patientId,
    doctorGenderChecking: doctorGender,
    doctorGender: valueGender,
    currentDate: moment(currentDate).format('YYYY/MM/DD'),
    searchDate: moment(searchDate).format('YYYY/MM/DD'),
    day:dayToggled,
    night:nightToggled,
    lat: "8.307531",
    long: "77.221832",
    costBasedSorting: false,
    costBasedSortingOrder: "ASC",
    speciality: '',
    specialityId: 0,
    advanceFilter: valueApplyFilter,
    advanceFilterCost: valuekwd,
    advanceFilterOffers: valueoffer,
    advanceFilterDistance: valuekm,
    limit: 5,
    pageno: 1,
    typeSearch:true,
    typeSearchContent: ""
  }
console.log("doctorSearch", data)
  useEffect(() => {
    dispatch(GetPatientDoctorSearch(data));
}, []);

  let history = useHistory();
  const [App_type,setApp_type]=useState(false)

  function Bookingdetails(state) {
    console.log("event Doctor", state)
    history.push({
      pathname: "/doctorbooking",
      state: {
        doctorId: state.doctorId,
        clinicId: state.clinicId,
        lat:"8.331080",
        long:"77.172989",
        currentDate: moment(currentDate).format('YYYY/MM/DD'),
        searchDate: moment(searchDate).format('YYYY/MM/DD')
      }
    })
  }


    return(  
        <div className="feed_layout">
           <div className="filter_container">
                      Filter
                      <div className="Costfiler">
                          Cost
                          
      <Slider
        defaultValue={20}
        getAriaValueText={valuetextkwd}
        aria-labelledby="discrete-slider-always"
        step={30}
        // marks={marks}
        min={50}
        max={300}
        valueLabelDisplay="on"
      />
      <div className="slider_labels">
          <span>50KWD</span>
          <span>300KWD</span>

      </div>
     </div>
     <div className="Costfiler">
                          Distance
                          
      <Slider
        defaultValue={5}
        getAriaValueText={valuetextkm}
        aria-labelledby="discrete-slider-always"
        step={1}
        min={1}
        max={15}
        // marks={marks}
        valueLabelDisplay="on"
      />
      <div className="slider_labels">
          <span>1Km</span>
          <span>15Km</span>

      </div>
     </div><div className="Costfiler">
                          Offers
                          
      <Slider
        defaultValue={15}
        getAriaValueText={valuetextoffer}
        aria-labelledby="discrete-slider-always"
        step={5}
        min={0}
        max={30}
        // marks={marks}
        valueLabelDisplay="on"
      />
      <div className="slider_labels">
          <span>0%</span>
          <span>30%</span>

      </div>
     </div>
    <div>
    {/* <RangeCalendar  /> */}
      <div className="divcalendar"> <h3 className="h1div">{moment(currentDate).format('MMMM Do, YYYY')}</h3></div>
      <Calendar 
      value={currentDate}
      onChange={changeDate}
      />
    </div>
    <div> <Button className="applybtn" onClick={ApplyAdvanceFilter}>Apply</Button></div>

           </div>
        <div className="feed_rightcol">
        <div className="page_control">
            <div className="controlbtns">
        <Button className={sun_icon} onClick={dayToggle}> <ReactSVG src={sun} /></Button>
        <Button className={moon_night} onClick={nightToggle}> <ReactSVG src={moon} /></Button>
        <div className="calendar_part_parent">
        <Button className="left"> <ReactSVG src={left} onClick={dateDecreament} /></Button>
        <Button className="date" > 
        {/* onClick={CalendarOpen} */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker          
          //variant="inline"
          style={{ textAlign: "center"}}
          format="MMMM do, yyyy"
          margin="normal"
          id="date-picker-inline"
          value={searchDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          InputProps={{
            disableUnderline: true,
           }}

        />
        </Grid>
        </MuiPickersUtilsProvider></Button>

        <Button className="right"> <ReactSVG src={right} onClick={dateIncreament} /></Button>
        </div>
        <Button className={men_icon} onClick={maleToggle}> <ReactSVG src={male} /></Button>
        <Button className={female_icon} onClick={femaleToggle}> <ReactSVG src={female} /></Button>



        </div>
        <div className="sort_cont">
               <div className="sort">Cost <ReactSVG src={sort} /></div>
              <div className="best_offers"><div className="sort">Best Offers <ReactSVG src={sort} /></div>
               <div className="sort">Rating <ReactSVG src={sort} /></div></div>

        </div>
        </div>
        {props.patientDoctorSearch.map(data => (
            <div className="feed_div">
                       <div className="story_details">
                         <div className="avatar_div"> <img src={ data.doctorProfileImage } onClick={() => Bookingdetails(data)}/></div>
                         <div className="pimary_detail">
                           <div className="detail1">{ data.vendor_name }</div>
                           <div className="detail2">{ data.vendor_contact_qualification }</div>
                           <div className="detail3">{ data.clinicName } <span className="pin"><img src={pin} />{ data.Distance }</span></div>
    
    
                         </div>
                         <div className="offer_percent"><img src={offer_bg}/><div className="offer_numerics"><span>15 %</span><span>Offer</span></div></div>
                         <div className="rating_numerics"> <div className="rating_numeric_bg">4.3<img src={star}/></div><div className="price_kwd">100 KWD</div></div>
                         <div> <StyledRating
              name="customized-color"
              defaultValue={data.favourite == false ? 0 : 1}
              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              // onClick={FavouriteToggle}
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              max={1}
            /></div>
    
                       </div>
                       <div id="carouselExampleIndicators" class="carousel slide" data-interval="false">
      <ol class="carousel-indicators">
        { data.mediaDetails.map((index) => (          
        <li data-target="#carouselExampleIndicators" data-slide-to="{ index }" class="active"></li>
        ))}
        
      </ol>
      <div class="carousel-inner">
        { data.mediaDetails.map(data => (          
        <div class="carousel-item active">    
        <VedioPlayer src='{ data.media_filename }' poster={"/assets/poster.png"}/>    
       </div>
        ))}
      </div>
    
    </div>
    <div className="time_slots">
    {data.clinicSlotsDetails.map(data => (
      <Button className="{data.bookedStatus == false ? greenbtn : redbtn}" onClick={() => Bookingdetails(data)}>{data.fromTime}</Button>      
    ))}
      <Popconfirm
      placement="topRight"
      icon={false}
      okText={false}
      cancelText={false}
      title={<div className="appoint_type_doc">
      <label>Choose Appointment Type</label>
     <div className="type_div"> <div><img src={Internet} style={{width:"40px"}}/><div>OnLine</div></div>
      <div><img src={Clinic} style={{width:"32px"}}/><div>InClinic</div></div></div>
    </div>}
      // onConfirm={App_type_function}
    >
      <div className="online_type">
      {/* <Button className="redbtn" onClick={App_type_function}>3:45PM</Button> */}
      {App_type&&<div className="internet_type">
      <div><img src={Internet_type}/></div>
    </div>}
    </div>
    </Popconfirm>
      {/* <Button className="greenbtn" onClick={Bookingdetails}>8:00PM</Button>
      <Button className="greenbtn"onClick={Bookingdetails}>8:30PM</Button> */}
    
    
    
    
      </div>
    
            </div>
        ))}
        </div>
        </div> 
    ) 
}

//   });

const mapStateToProps = (state) =>
({
  patientDoctorSearch: state.doctorAppointmentReducer.getPatientDoctorSearchDetails || [],
  favouriteAddRemove: state.doctorAppointmentReducer.getFavouriteAddorRemoveDetails || []

});

export default connect(mapStateToProps)(Feed);   
//export default Feed;