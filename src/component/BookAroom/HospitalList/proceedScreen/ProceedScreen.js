import React,{useState,useEffect} from 'react';
import './ProceedScreen.scss';
import Labelbox from "../../../../helpers/labelbox/labelbox";
import ReactPlayer from 'react-player';
import  BedImage from '../../../../images/BookaRoom/outline.svg';
import  BathImage from '../../../../images/BookaRoom/bathtub.svg';
import  WaterImage from '../../../../images/BookaRoom/hotel.svg';
import  ACImage from '../../../../images/BookaRoom/air condition-hot-summer.svg';
import  TVImage from '../../../../images/BookaRoom/television.svg';
import { Button, Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {Modal} from 'antd';
import ConfirmPage from '../../BookroomBooking/ConfirmPage';
import { ReactSVG } from "react-svg";
import Nurse from "../../../../images/nurse.png";
import close from '../../../../images/cancel.svg'
import plus from '../../../../images/plus.svg'   
import avatar from '../../../../images/us.svg'
import edit from "../../../../images/edit.svg"
import VedioPlayer from '../../../../helpers/VedioPlayer/VedioPlayer'
// import {NavLink} from 'react-router-dom';
// import ConfirmReshedule from "../../BookroomBooking/confirmRescchedule/ConfirmReschedule"
// import ProceedConfirm from '../HospitalList/ProceedConfirm/ProceedConfirm'
import roomimg from "../../../../images/BookaRoom/room_img.png"
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Pin from "../../../../images/pin.png"
import ProceedConfirm from '../../ProceedConfirm/ProceedConfirm';
import Avatar from '../../../../helpers/Upload/Upload'
import { useDispatch,connect} from 'react-redux';
import ValidationLibrary from '../../../../helpers/validationfunction'
import { ParticularRoomDetails } from '../../../../actions/Book a RoomActions'
import { GetRelationship, AddPatientDetails } from '../../../../actions/ProfileActions'
import moment from 'moment'
function ProceedScreen(props){
    let dispatch=useDispatch()
    const [ModalOpen,setModalOpen]=React.useState(false)
    const [confirm,setconfirm]=useState(true)
    const ModalClickOpen=()=>{
        setModalOpen(true)
    }
    const ModalClickClose=()=>{
        setModalOpen(false)
    }
    const [showForm,setShowForm] = React.useState(false)
    const openForm = () => {
      setShowForm(true)
     }
    const closeForm = () => {
      setconfirm(true)
    }

    const [addmemberForm,setaddmemberForm] = React.useState (false)
    const openaddmemberForm = () => {
      setaddmemberForm(true)
  }
  const closeaddmemberForm = () => {
    setaddmemberForm(false)
}

const [modalOpen,setmodalOpen]=React.useState(false)
const ModalOpenClick=()=>{
   setmodalOpen(true)
}
const ModalCloseClick=()=>{
   setmodalOpen(false)
}


  const RoomDetail=props.location.state
  const [RoomList,setRoomList]=useState([])
  const [relationship, setRelation] = useState([])
  const [Familymember, setFamilymember] = useState([])
  const [SearchKey,setSearchKey]=useState({
    fromdate:{
      value:""
    },
    todate:{
      value:""
    }
  })
  const [MemberDetails, setMemberDetails] = useState({
    name: {
        value: "",
        validation: [{ name: "required" }],
        error: null,
        errmsg: null
    },
    gender: {
        value: "",
        validation: [{ name: "required" }],
        error: null,
        errmsg: null
    },
    date: {
        value: "",
        validation: [{ name: "required" }],
        error: null,
        errmsg: null
    },
    mobileno: {
        value: "",
        validation: [],
        error: null,
        errmsg: null
    },
    relationship: {
        value: "",
        validation: [{ name: "required" }],
        error: null,
        errmsg: null
    },
    height: {
        value: "",
        validation: [{ name: "required" }],
        error: null,
        errmsg: null
    },
    weight: {
        value: "",
        validation: [{ name: "required" }],
        error: null,
        errmsg: null
    },
})
function checkValidation(data, key) {

    var errorcheck = ValidationLibrary.checkValidation(
        data,
        MemberDetails[key].validation
    );
    let dynObj = {
        value: data,
        error: !errorcheck.state,
        errmsg: errorcheck.msg,
        validation: MemberDetails[key].validation,
    };
    setMemberDetails((prevState) => ({
        ...prevState,
        [key]: dynObj,
    }))
}
const Submit = () => {
    const vendorId = localStorage.getItem("patientId")
    var mainvalue = {};
    var targetkeys = Object.keys(MemberDetails);
    for (var i in targetkeys) {
        var errorcheck = ValidationLibrary.checkValidation(
            MemberDetails[targetkeys[i]].value,
            MemberDetails[targetkeys[i]].validation
        );
        MemberDetails[targetkeys[i]].error = !errorcheck.state;
        MemberDetails[targetkeys[i]].errmsg = errorcheck.msg;
        mainvalue[targetkeys[i]] = MemberDetails[targetkeys[i]].value;
    }
    var filtererr = targetkeys.filter((obj) => MemberDetails[obj].error == true);
    if (filtererr.length > 0) {

    } else {
        dispatch(AddPatientDetails(MemberDetails, vendorId)).then(() => {
            props.BookClose()
        })

    }
    setMemberDetails((prevState) => ({
        ...prevState,
    }))
}
useEffect(() => {
  dispatch(GetRelationship())
}, [])
useEffect(() => {
  let relation = []
  props.Relationship && props.Relationship.map((data) => {
      relation.push({
          id: data.PatientrealationshipId, value: data.realationship
      })
  })
  setRelation(relation)
console.log(props.Relationship,"Relation")
}, [props.Relationship])
  function Validation(data, key) {
    if(data&&key==="todate"){
      var Todate=data
      // dispatch(BookRoomDetails(SearchKey.fromdate.value,Todate))
    }
   let dynObj = {
     value: data,
   };
 setSearchKey((prevState) => ({
     ...prevState,
     [key]: dynObj,
 }))
  }
  useEffect(()=>{
    dispatch(ParticularRoomDetails(RoomDetail))

  },[])
  useEffect(()=>{
    var RoomData=[]
   props.RoomDetails.map((data)=>{
      RoomData.push(data)  
   })
   setRoomList(RoomData)
   if(RoomDetail){
    SearchKey.fromdate.value=RoomDetail.br_from_date
    SearchKey.todate.value=RoomDetail.br_to_date
   }
  },[props.RoomDetails])
 
  console.log("propsdd",RoomDetail)
  useEffect(()=>{
    let Members=[JSON.parse(localStorage.getItem("MemberDetails"))]
    if(Members){
    Members.map((data)=>{
        setFamilymember(data)
    })
    
  }
  },[])
    return(
      <div>
       <div style = {{display:'flex'}}>
         <div style={{width:'70%', margin:'25px'}}>
  {/* header part */}
              <div>
                  <h5 className="reschedule_head">{RoomList[0]?.roomVendorName}</h5>
              </div>
  {/*date and carousel  */}
            <div style={{display:'flex'}}>
                  <div>
                      <div style={{display:'flex'}}>
                          <div className="date_div_reschedule">
                            <div className="date_second_div_reschedule">
                                <Labelbox type="datepicker"
                                changeData={(data) => Validation(data, "fromdate")}
                                value={SearchKey.fromdate.value}
                                />
                            </div>
                            <div className="date_pic_childdiv">
                                <Labelbox type="datepicker"
                                changeData={(data) => Validation(data, "todate")}
                                value={SearchKey.todate.value}
                                />
                            </div>
                          </div>   
                      </div> 
                      {/* vedioplayer */}
                      <div>
                   <div id="#carouselExampleIndicators" class="carousel slide" data-interval="false" >
            <ol class="carousel-indicators">
            {RoomList[0]?.mediaDetails.map((data,index)=>
              <li data-target="#carouselExampleIndicators" data-slide-to={index} class="active"></li>
            )}
            </ol>
         <div class="carousel-inner"

         >
        {RoomList[0]?.mediaDetails.map((data,index)=>{
            {console.log("checked",data.media_type)}
            return(
         <div 
         key={index}
        //  active={index === 0}
         class={index == 0 ? "carousel-item active" : "carousel-item"}
        //  data-interval='8000'
         >
         {data.br_file_type==="image"?<img src={data.media_filename}/>: 
         data.br_file_type==="video"?<VedioPlayer src={data.media_filename} playing poster={"/assets/poster.png"}/>:""
         }
         </div>
        )})}
        </div>
        </div>
        </div>
        {/* vedio end */}
       


                  </div>
                  <div>

                  <div style={{display:'flex', margin:'20px'}}>  
                    <div style={{marginRight:'7px'}}>
                      <label className="label_align_reshedule">Address</label>
                  .   <p style={{color:'#858585'}}>{RoomList[0]?.roomVendorAddress}<span className="dot_align">...</span></p>
                   </div>
                   <div style={{marginRight:'13px'}}>
                        <label  className="label_align_reshedule">Phone</label>
                        <p styl={{color:'#858585'}}>+{RoomList[0]?.vendor_phone}</p>
                    </div>
                    <div >
                        <label  className="label_align_reshedule">Email ID</label>
                        <p styl={{color:'#858585'}}>{RoomList[0]?.vendor_email}</p>
                     </div>
                    </div>

                    <div className="room_arrange">
                      <p className="room_facility">Room Facilities</p>
                      <div>
                      <div className="row row_align"  >
                  {RoomList[0]?.facility.map((imageItem,index)=>{
                    const Index=index+1
                      return(
                        <>
                          <div className="col-sm-3">
    
                              <div className="card card_reschedule">

                                <span>{Index}</span>
                              <img src={imageItem.icon} className="menu_align"/> 

                              </div>
                              <p>{imageItem.facilityName}</p>

                          </div>
                        </>
                           )
                          })}
                      </div>
                      </div>
                    </div>
                    </div>

            </div>
         </div>
         {/* cancel */}
         {confirm?
         <div style={{width:'30%'}}>
            <div style={{marginTop:'40px', marginRight:'40px'}}>
              <label className="reschedule_cancel">Cancel</label>
              <label className="reschedule_align" onClick={(()=>setconfirm(false))}>Confirm</label>
            </div>

         </div>
         :
         
         <div style={{width:'25%'}}>
            <div className="proceedform">
          <>
            <ReactSVG className="close_ico_proceed" onClick={closeForm} src={close}/>
              <div className="hosmembers">
              {Familymember.map((data)=>

                <div className="hosphoto_div">
                    <img src={data.patientMemberImage} lassName="mem_img"/>
                     <div>{data.name}</div>
                </div>
               )}
                 <div className="newhosphoto_div" onClick={openaddmemberForm}>
                     <ReactSVG className="plussvg" src={plus}/>
                     <div className="new">New</div>
                    </div>
                </div>
             </>

             {/* start insert card details */}
             {
                addmemberForm && <div className="addmember_mini">
                 <div style={{ textAlign: "center" }}>
                <Avatar/>
                <div className="Add_ph">Add Photo</div>
              </div>
            <Labelbox type="text" labelname="Name"
                changeData={(data) => checkValidation(data, "name")}
                value={MemberDetails.name.value}
                error={MemberDetails.name.error}
                errmsg={MemberDetails.name.errmsg}
            />
            <div className="gender_date_div">
                <div style={{ width: "50%", paddingRight: "10px" }}>
                    <Labelbox type="select" labelname="Gender"
                        dropdown={[{ id: 1, value: "Male" }, { id: 2, value: "Female" }]}
                        changeData={(data) => checkValidation(data, "gender")}
                        value={MemberDetails.gender.value}
                        error={MemberDetails.gender.error}
                        errmsg={MemberDetails.gender.errmsg}
                    />
                </div>
                <div style={{ width: "50%", marginBottom: "10px", paddingLeft: "10px" }}>
                    <Labelbox type="datepicker" labelname="Date of Birth"
                        changeData={(data) => checkValidation(data, "date")}
                        value={MemberDetails.date.value}
                        error={MemberDetails.date.error}
                        errmsg={MemberDetails.date.errmsg}
                    />
                </div></div>
            <Labelbox type="text" labelname="Mobile Number"
                changeData={(data) => checkValidation(data, "mobileno")}
                value={MemberDetails.mobileno.value}
                error={MemberDetails.mobileno.error}
                errmsg={MemberDetails.mobileno.errmsg}
            />
            <Labelbox type="select" labelname="Relationship"
                dropdown={relationship}
                changeData={(data) => checkValidation(data, "relationship")}
                value={MemberDetails.relationship.value}
                error={MemberDetails.relationship.error}
                errmsg={MemberDetails.relationship.errmsg}
            />
            <div className="gender_date_div"><div style={{ width: "50%", display: "flex", paddingRight: "5px" }}>
                <Labelbox type="text" labelname="Height"
                    changeData={(data) => checkValidation(data, "height")}
                    value={MemberDetails.height.value}
                    error={MemberDetails.height.error}
                    errmsg={MemberDetails.height.errmsg}
                />
                <div className="height_cms">Cms</div></div>
                <div style={{ width: "50%", display: "flex", paddingLeft: "5px" }}>
                    <Labelbox type="text" labelname="Weight"
                        changeData={(data) => checkValidation(data, "weight")}
                        value={MemberDetails.weight.value}
                        error={MemberDetails.weight.error}
                        errmsg={MemberDetails.weight.errmsg}
                    /><div className="height_cms">Kgs</div>
                  </div>
                </div>
                <div style={{ textAlign: "center", padding: "10px 10px" }}>
                <Button className="nurse_cancel" onClick={() =>setaddmemberForm(false)}>Cancel</Button>
                <Button className="nurse_book_btn" onClick={Submit}>Submit</Button></div>
                </div>
              }
              {/* end add deatils */}

                <Paper className="paper_align">
                  <p className="paper_booking"> Booking Confirmation</p>
                  <div style={{display:'flex', justifyContent:'center'}}>
                    <p style={{color:'#83AF40'}}>{RoomList[0]?.roomVendorName}</p>
                    <img src={Pin} style={{width:'18px', height:'18px'}}/>
                  </div>
                </Paper>
                
                <div className="proceed_formrow">
                  <div className="first">Name</div>
                  <div className="second nameedit">{localStorage.getItem("name")}<ReactSVG className="edit" src={edit} />
                  </div>                   
                </div>
                <div className="proceed_formrow">
                  <div className="first">Check In</div>
                  <div className="second">{moment(RoomDetail.br_from_date).format("DD-MMM-YYYY")}</div>

                </div><div className="proceed_formrow">
                  <div className="first">Check Out</div>
                  <div className="second">{moment(RoomDetail.br_to_date).format("DD-MMM-YYYY")}</div>

                </div><div className="proceed_formrow">
                  <div className="first">Room Type</div>
                  <div className="second">{RoomDetail.roomType}</div>

                </div><div className="proceed_formrow">
                  <div className="first">Total Days</div>
                  <div className="second">1</div>

                </div>
                <div className="proceed_formrow">
                  <div className="first">Cost Per Day(KWD)</div>
                  <div className="second">{RoomDetail.cost}</div>

                </div>
                <div className="proceed_formrow">
                  <div className="first">Total Cost(KWD)</div>
                  <div className="second">{RoomDetail.cost}</div>

                </div>
                <div className="bookbtnflex"><Button onClick={ModalOpenClick}>Proceed</Button></div>
                </div>
         </div>
         }
       </div>

                <Modal
                  title={<div className="bookconfirm">Booking Confirmation</div>}
                  visible={modalOpen}
                  footer={false}
                  size={"lg"}
                  {...props}
                  centered
                  width={900}
                  // className="confirm_modal"
                  onCancel={ModalCloseClick}
                 >
                   <ProceedConfirm  RoomDetail={RoomDetail}/>
                  
    
                 </Modal>
      
       </div>
    )
}

const mapStateToProps=(state)=>({
  RoomDetails:state.BookRoom.RoomDetails || [],
  Relationship: state.GetProfileDetails.Relationship,
})
export default connect(mapStateToProps)(ProceedScreen);