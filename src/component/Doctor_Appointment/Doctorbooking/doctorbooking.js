import React, { useState, useEffect, setState } from "react";
import './doctorbooking.scss'
import AliceCarousel from 'react-alice-carousel';
import Nurse from "../../../images/nurse.png";
import Report from "../../../images/report.png";
import Trainer from "../../../images/trainer.png";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import pin from '../../../images/pin.png'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import star from '../../../images/star.png'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import { ReactSVG } from "react-svg";
import tick from '../../../images/checked.svg'
import like from '../../../images/like.svg'
import Labelbox from "../../../helpers/labelbox/labelbox";
import { Button } from "@material-ui/core";
import plus from '../../../images/plus.svg'
import close from '../../../images/cancel.svg'
import calendar from '../../../images/calendar2.svg'
import edit from '../../../images/edit.svg'
import clinic from '../../../images/clinic.svg'
import clock from '../../../images/clock.svg'
import location from '../../../images/location.svg'
import avatar from '../../../images/us.svg'
import { Modal } from 'antd'
import Avatar from '../../../helpers/Upload/Upload'
import SliderComp from '../../../helpers/Slider/Slider'

import { useDispatch, connect } from "react-redux";
import { GetParticularDoctorDetails } from "../../../actions/doctorbookingaction";
import { GetDoctorServiceDropdown } from "../../../actions/masterdropdownaction";
import { PostDoctorBooking } from "../../../actions/postpatientdoctorbookingaction";
import { PutFavouriteAddorRemoveAction } from "../../../actions/favouriteaddorremoveaction";
import moment from "moment";

// const images = [
//   {
//     original: 'https://hmsuploads.s3.ap-south-1.amazonaws.com/MediaUploads/1991-1615011703761-https',
//     thumbnail: 'https://hmsuploads.s3.ap-south-1.amazonaws.com/MediaUploads/1991-1615011703761-https'
//   },
//   {
//     original: 'http://lorempixel.com/1000/600/nature/2/',
//     thumbnail: 'http://lorempixel.com/250/150/nature/2/'
//   },
//   {
//     original: 'http://lorempixel.com/1000/600/nature/3/',
//     thumbnail: 'http://lorempixel.com/250/150/nature/3/'
//   }
// ]
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

function Doctorbooking(props) {
  const dispatch = useDispatch();

  const [duration, HandleChange] = useState( '0' );
  const [currentDate] = useState(Date.now());
  console.log("itemselect", duration);

  const [showForm, setShowForm] = useState(false)
  const [App_type, setApp_type] = useState()
  const [openFormData, setOpenFormData] = useState()
  
  const [patientId, setPatientId] = React.useState();

  const openForm = (e) => {
    console.log("openform", openFormData)
    setOpenFormData(e);
    setShowForm(true)
  }
  const closeForm = () => {
    setShowForm(false)
  }
console.log("patientId", patientId)
function ConfirmBooking(e) {
  const doctorBooking = {
    doctorId: props.location.state.doctorId,
    patientId: patientId,
    clinicId: props.location.state.clinicId,
    serviceTypeId: duration.serviceTypeId,
    bookeDate: moment(dateNow).format('YYYY/MM/DD'),
    fromTime: openFormData.fromTime ,
    toTime: openFormData.toTime,
    totalSlots: duration.slot,
    isVIP:"0",
    amount: props.particularDoctor.amount,
    paymentStatus:"1",
    appointmentTypeId:1,
    appointmentTypeIsChangable:1,
    isMember:2,
    tempMemberName:"Edwin"
  }
  console.log("itemselectdata", doctorBooking);
  dispatch(PostDoctorBooking(doctorBooking));
}  
  
  const classes = useStyles();

  console.log("props", props)
  const data = {
    doctorId: props.location.state.doctorId || 0,
    clinicId: props.location.state.clinicId || 0,
    lat: "8.331080",
    long: "77.172989",
    currentDate: "2020-06-15",
    searchDate: "2020-06-15",
  }
  console.log("doctorservice", props.doctorServiceDDL)
  useEffect(() => {
    dispatch(GetParticularDoctorDetails(data));
    dispatch(GetDoctorServiceDropdown(data.doctorId));
    setPatientId(localStorage.getItem('patientId') || '');
  }, []);
  
  const [images, setimages] = useState([]);
  console.log(" props.particularDoctor.mediaDetails",  props.particularDoctor.mediaDetails)
  useEffect(() => {
    var a = props.particularDoctor.mediaDetails || [];
    let obj =[];
    for (var i =0; i<a.length; i++){
    var img ={
      original :a[i].media_filename,
      thumbnail :a[i].media_filename,
      id: a[i].id,
      title: a[i].media_title
    }
  obj.push(img);
  }
setimages(obj);
}, []);
  // useEffect(() => {
  //   let ddlDoctorService = []
  //   props.doctorServiceDDL.map((data) =>
  //     ddlDoctorService.push({
  //       value: data.service_type,
  //       id: data.serviceTypeId
  //     })
  //   )
  //   console.log("ddlpust", ddlDoctorService)
  //   setDDLDoctorService({ ddlDoctorService })
  // })
  //   console.log("ddlDoctorService", setDDLDoctorService)

  const [dateNow, setDateNow] = useState(Date.now);

  const [showminiForm, setShowminiForm] = useState(false)
  const openminiForm = () => {
    setShowminiForm(true)
  }
  const closeminiForm = () => {
    setShowminiForm(false)
  }
  const [addmemberForm, setaddmemberForm] = useState(false)
  const openaddmemberForm = () => {
    setaddmemberForm(true)
  }
  const closeaddmemberForm = () => {
    setaddmemberForm(false)
  }
  const [modalOpen, setmodalOpen] = React.useState(false)
  const ModalOpenClick = () => {
    setmodalOpen(true)
  }
  const ModalCloseClick = () => {
    setmodalOpen(false)
  }
  // const [valueFavourite, setFavouriteValue] = React.useState();
  // function FavouriteToggle(){
  //   console.log("valueFavourite", valueFavourite)
  // }
  const [favouriteToggled, setFavouriteToggled] = React.useState(props.particularDoctor.favourite);
  const favouriteData = {
    doctorId: props.location.state.doctorId || 0,
    patientId: patientId,
    favourite: favouriteToggled
  }
  const FavouriteToggle = React.useCallback(() => {
    setFavouriteToggled(!favouriteToggled);
    dispatch(PutFavouriteAddorRemoveAction(favouriteData))
    console.log("favouriteToggled", favouriteToggled)
  });

  
  return (
    <div className="doctorbooking_layout">

      <div className="flex1">

        {/* <AliceCarousel
//   mouseDragEnabled={true}
        playButtonEnabled={true}
  >
    <img src={Nurse} className="yours-custom-class" />
    <img src={Trainer} className="yours-custom-class" />
    <img src={Report} className="yours-custom-class" />
    <img src={Nurse} className="yours-custom-class" />
    <img src={Trainer} className="yours-custom-class" />
  </AliceCarousel> */}
        <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} />
      </div>
      <div className="flex2">
        <div className="docnameflex"><div className="docname"><img src={props.particularDoctor.doctorProfileImage} />{props.particularDoctor.vendor_name}</div> 
        <StyledRating
          name="customized-color"
          defaultValue={1}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          onClick={FavouriteToggle}
          icon={<FavoriteIcon fontSize="inherit" />}
          max={1}
        /></div>
        <div className="docspec">{props.particularDoctor.vendor_contact_qualification}</div>
        <div className="titleflex"><div className="title">{props.particularDoctor.clinicName} <span className="pin"><img src={pin} />{Math.round(props.particularDoctor.Distance)} Km</span></div></div>
        <div style={{ display: 'flex', marginTop: "5px" }}><div className="rating_numeric_bg">4.3<img src={star} /></div><span className="offer_rate">5 % Offer</span></div>
        <div style={{ display: 'flex' }} className="verification">Medical registration verified <span className="tick"><ReactSVG src={tick} /></span></div>
        <div className="reviewrating"><ReactSVG src={like} /><span>93 %</span>(115 reviews)</div>
        {/* slider */}
        <div className="detailpara">
          <SliderComp>

            {[...Array(5)].map((img, index) => (
              <div>
                <div className="heads">Dalal</div>
                <div>I had the best experience with Dr.Hannah</div>
              </div>
            ))}
          </SliderComp>
        </div>
        {/* end */}

        <div style={{ fontWeight: '500', color: "grey" }}>{props.particularDoctor.vendor_selfDes} </div>
        <div className="consultingdiv"><div className="consultingtype">
          {/* <Labelbox labelname="Select service" type="select" dropdown={doctorServiceDDL.ddlDoctorService}  valueField={doctorServiceDDL.serviceTypeId} 
          /> */}
          {/* {props.doctorServiceDDL.map(item => (
          <select onChange={() => onItemSelect(item.duration)}>
        <option
          key={item.serviceTypeId}
          value={item.service_type}
          >
          {item.service_type}
        </option>
    </select>
      ))} */}
        </div>
          <Grid item xs={6}>
            <Select id="trinity-select" label="Doctor Service" style={{ width: "100%" }}>
              {props.doctorServiceDDL.map((item) => (
                <MenuItem key={item.serviceTypeId} value={item.service_type} onClick={() => {HandleChange(item)}}>
                  {item.service_type}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6} >
            <div className="durationdiv"><div>Duration</div><div style={{ fontSize: "18px" }}>{duration.duration} mins</div></div></Grid>
        </div>
        <div className="selecttime_div">
          <div style={{ fontSize: "16px" }}>Select Time</div>
          <div className="booked_den" ><div className="bookedclr"></div>Booked</div>
          <div className="available_den"><div className="availableclr"></div>Available</div>
          <div className="selected_den"><div className="selectedclr"></div>Selected</div>

        </div>
        <div className="time_slots">
          {props.particularDoctorClinicSlots.map((item1) => (
            <Button className="{item1.bookedStatus == false ? greenbtn : redbtn}"  onClick={() => openForm(item1)} >{item1.fromTime}</Button>      
          ))}

        </div>
      </div>
      <div className="flex3">
        {showForm && <div className="bookingform">
          <ReactSVG className="close_ico" onClick={closeForm} src={close} />
          <div className="familymembers">
            <div className="familyphoto_div">
              <img src={Nurse} />
              <div>Jethro</div>
            </div>
            <div className="familyphoto_div">
              <img src={Nurse} />
              <div>Jethro</div>
            </div><div className="familyphoto_div">
              <img src={Nurse} />
              <div>Jethro</div>
            </div><div className="familyphoto_div">
              <img src={Nurse} />
              <div>Jethro</div>
            </div>
            <div className="familyphoto_div">
              <img src={Nurse} />
              <div>Jethro</div>
            </div>
            <div className="newfamilyphoto_div" onClick={openaddmemberForm}>
              <ReactSVG className="plussvg" src={plus} />
              <div className="new">New</div>
            </div>
          </div>
          {addmemberForm && <div className="addmember_mini">
            <div className="avatar_uploaderdiv">
              <Avatar />
              <div>Add Photo</div>

            </div>
            <div><Labelbox type="text" labelname="Name" /></div>
            <div className="formflex"><div style={{ width: "50%", marginRight: "10px" }}><Labelbox type="select" labelname="Gender" /></div><div style={{ width: "50%" }}><Labelbox type="datepicker" labelname="Date of Birth" /></div></div>
            <div><Labelbox type="text" labelname="Mobile number" /></div>
            <div><Labelbox type="select" labelname="Relationship" /></div>
            <div className="heightformflex"><Labelbox type="text" labelname="Height" /><span>cms</span><Labelbox type="text" labelname="Weight" /><span>kgs</span></div>

            <div className="avatar_uploaderdiv_btns"><Button className="cancel" onClick={closeaddmemberForm}>Cancel</Button><Button className="submit" onClick={closeaddmemberForm}>Submit</Button></div>
          </div>}

          <div className="mini_formrow">
            <div className="first"><ReactSVG src={avatar} />Member Name</div>
            <div className="second nameedit">Dalal  {!showminiForm && <ReactSVG className="edit" src={edit} onClick={openminiForm} />}
            </div>
            {showminiForm && <div className="nameedit_form arrow-top">
              <div> <Labelbox labelname="Member Name" type="text" /></div>
              <div className="miniform_nestedrow">
                <div><Labelbox labelname="Age" type="number" /> </div>
                <div> <Labelbox labelname="Gender" type="select" /> </div>
              </div>
              <div className="minifrombtn"><span className="cancel" onClick={closeminiForm}>Cancel</span><span className="save" onClick={closeminiForm}>Save</span></div>

            </div>}


          </div>
          <div className="mini_formrow">
            <div className="first"><ReactSVG src={calendar} />Date</div>
            <div className="second">{moment(dateNow).format('YYYY/MM/DD')}</div>

          </div><div className="mini_formrow">
            <div className="first"><ReactSVG src={clock} />Time</div>
            <div className="second">{openFormData.fromTime}, {openFormData.toTime}</div>

          </div><div className="mini_formrow">
            <div className="first"><ReactSVG src={clinic} />Clinic</div>
            <div className="second">{openFormData.clinicName}</div>

          </div><div className="mini_formrow">
            <div className="first"><ReactSVG src={location} />Location</div>
            <div className="second">{props.particularDoctor.clinicLocation}</div>

          </div>
          <div className="bookbtnflex"><Button onClick={ModalOpenClick}>Book</Button></div>
        </div>}
        <Modal
          title={<div className="bookconfirm">Booking Confirmation</div>}
          visible={modalOpen}
          footer={false}
          onCancel={ModalCloseClick}
          className="border_modal"
          width={750}
        // maxWidth={"md"}
        // style={{width:"800px"}}
        >
          <div className="bookconfirmmodal">
            <div className="useravatar"><img src={avatar} /><span>{props.particularDoctor.vendor_name}</span></div>
            <div className="bookconfirmflex">
              <div className="bookconfirmflexrow1">
                <div className="bookconfirmflexblock1"><div className="blockheads">Member Name</div><div>Hannah</div></div>
                <div className="bookconfirmflexblock1"><div className="blockheads">Date</div><div>12 Dec 2021</div></div>
                <div className="bookconfirmflexblock1"><div className="blockheads">Time</div>
                {(openFormData == undefined) ? <div></div> : <div>{openFormData.fromTime}</div>}</div>
                <div className="bookconfirmflexblock1"><div className="blockheads">Appointment Type</div><div>Online</div></div>
              </div>
              <div className="bookconfirmflexrow2">
                <div className="bookconfirmflexblock2">
                  <div className="blockheads">Clinic</div><div>
                    {(openFormData == undefined) ? <div></div> : <div>{openFormData.clinicName}</div>}</div>
                  </div>
                <div className="bookconfirmflexblock1"><div className="blockheads">Location</div><div>{props.particularDoctor.clinicLocation} </div></div>
                <div className="bookconfirmflexblock1"><div className="blockheads"> Cost(KWD)</div><div>{props.particularDoctor.amount} KWD</div></div>
              </div>
            </div>


          </div>
          <div className="cnfrmbtn"> <NavLink to="paymentmethod"><Button onClick={() => ConfirmBooking()}>Confirm</Button></NavLink></div>

        </Modal>
      </div>

    </div>
  )

}

const mapStateToProps = (state) =>
({
  patientDoctorBooking: state.doctorAppointmentReducer.postPatientDoctorBooking || [],
  particularDoctor: state.doctorAppointmentReducer.getparticularDoctorSearchDetails || [],
  particularDoctorClinicSlots: state.doctorAppointmentReducer.getparticularDoctorSearchClinicSlotsDetails || [],
  doctorServiceDDL: state.masterDropdownReducer.getDoctorServiceDDL || [],

});

export default connect(mapStateToProps)(Doctorbooking);   