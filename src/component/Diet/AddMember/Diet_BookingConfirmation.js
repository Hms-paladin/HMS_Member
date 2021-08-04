import React,{useState,useEffect} from 'react'
import Nurseimage1 from '../../../images/pharmacy.png'
import Nurseimage2 from '../../../images/nurse.png'
import Nurseimage3 from '../../../images/doctorappoinment.png'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import Labelbox from '../../../helpers/labelbox/labelbox'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Location from '../../../images/pin.png'
import './Diet_BookingConfirmation.scss'
 import ConfirmationModal from '../AddMember/Diet_ConfirmationModal'
import AddMember from './AddMember'
import CloseIcon from '@material-ui/icons/Close';
import {Modal} from 'antd'
import ValidationLibrary from '../../../helpers/validationfunction'
import {UpdatePatientDetails} from '../../../actions/ProfileActions'
import { useDispatch } from 'react-redux';
export default function BookingConfirmation(props){
  // modal functions
  let dispatch=useDispatch()
  const [modalOpen,setmodalOpen]=React.useState(false)
  const [Familymember,setFamilymember]=useState([])
  const [memberTrue,setmemberTrue]=useState(false)
  const [Members,setMembers]=useState([])
  const [Patients,setPatients]=useState({
    name:{
      value:""
    },
    address:{
      value:""
    }
  })
  const ModalOpenClick=()=>{
     setmodalOpen(true)
  }
  const ModalCloseClick=()=>{
     setmodalOpen(false)
  }
  // end
    const images = [
        {img:Nurseimage1,name:"Lina"},
        {img:Nurseimage2,name:"Aysa"},
        {img:Nurseimage3,name:"Saud"}
    ]
    const[editOpen,seteditOpen]=React.useState(false)
    const[HideAdrs,setHideAdrs]=React.useState(false)
    const[BookOpen,setBookOpen]=React.useState(false)
    const [ValueId,setValueId]=useState("")
    function EditClick(data,value){

      if(data==="name"){
      Patients.name.value=localStorage.getItem("name") 
      seteditOpen(true)
      setValueId(value)
    }
    else if(data==="address"){
      Patients.address.value=localStorage.getItem("address") 
      seteditOpen(true)
    }
   
    }
    function SaveClick(){
      dispatch(UpdatePatientDetails(Patients,localStorage.getItem("patientId"))).then(()=>{
        seteditOpen(false)
      })
      setPatients((prevState)=>({
        ...prevState,
    }))
    Patients.address.value=""

    }
  
    function BookClick(){
      setBookOpen(true)
    }
    function BookClose(){
      setBookOpen(false)
    }
   // elipse function
   const ElipseOpen=()=>{
    setHideAdrs(!HideAdrs)
}
function checkValidation(data, key) {
  let dynObj = {
      value: data,
  };
  setPatients((prevState)=>({
      ...prevState,
      [key]: dynObj,
  }))
}
useEffect(()=>{
  let Members=[JSON.parse(localStorage.getItem("MemberDetails"))]
  if(Members){
  Members.map((data)=>{
      setFamilymember(data)
  })
  
}

},[])
const FindGoalWeight=(id)=>{
    
    setmemberTrue(true)
    // if(memberTrue){
    var Member=Familymember.find((data)=>{
      console.log("data",data)
      
      return(data.PatientMemberId==id)
    })
  // }
  setMembers(Member)
  props.FindGoalWeight(Members,memberTrue)
}
  
console.log(Members,"props")
    return(
        <div className="lab_booking_confir_root">
         <div className="member_parent_div">
            <div className="mem_left_icon"><ChevronLeftIcon className="mem_left"/></div>
              {Familymember.map((data,index)=>{
            return(
             <div className={Members?.PatientMemberId===data.PatientMemberId?"img_cont_diet":"nurse_img_cont"} onClick={()=>FindGoalWeight(data.PatientMemberId)}>
                 <img src = {data.patientMemberImage} 
                //  onError={(e)=>{e.target.onerror = null; e.target.src={Nurseimage3}}}
                 className="mem_img"/>
                <div className="mem_name">{data.name}</div>
            </div> 
            ) 
    
        })}
             <div className="add_plus_div"><div className="add_member" onClick={BookClick}><AddIcon/></div>
                 <div className="mem_name">New</div>
            </div>
        </div>
        {BookOpen===true?<AddMember BookClose={BookClose}/>:null}
        <div className="confir_div">
          <div style={{fontSize:"18px",fontWeight:"600"}}>BookingConfirmation</div>
          <div style={{color:"#83AE40",fontWeight:"600"}}>{props.DietCompany[0].dietcompanyname}<span style={{color:"#939393",paddingLeft:"10px"}}>{props.GetData[0]?.packagename}</span></div></div>
        {/* form details */}
       
        <Form className="form_items">
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Name</Label>
        <Col sm={6}>
        {editOpen===false?<label className="Nurse_form_de">{memberTrue?Members.name:localStorage.getItem("name")}</label>
           :<div style={{display:"flex",alignItems:"center"}}><Labelbox type="text"
           changeData={(data) => checkValidation(data, "name")}
           value={Patients.name.value}
           />
          <SaveIcon className="edit_nur_name" onClick={SaveClick}/>
           </div>}
           {editOpen===false&&<EditIcon className="edit_nur_name" onClick={()=>EditClick("name",1)}/>}
       
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Delivery Address</Label>
        <Col sm={6}>
       
         {editOpen===false?<label className="Nurse_form_de">{localStorage.getItem("address")}</label>
           :<div style={{display:"flex",alignItems:"center"}}><Labelbox type="text"
           changeData={(data) => checkValidation(data, "address")}
           value={Patients.address.value}
           />
          <SaveIcon className="edit_nur_name" onClick={SaveClick}/>
           </div>}
         {editOpen===false&&<EditIcon className="edit_nur_name" onClick={()=>EditClick("address")}/>}
        
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Total Days</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">{props.GetData[0]?.duration}</label>
        </Col>
      </FormGroup>
      
     
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Cost Per Month (KWD)</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">{props.GetData[0]?.amount}</label>
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >Start Date</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">{props.GetData[0]?.from_date}</label>
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleEmail" sm={6} >End Date</Label>
        <Col sm={6}>
        <label className="Nurse_form_de">{props.GetData[0]?.to_date}</label>
        </Col>
      </FormGroup>
    
      </Form> 
      <CloseIcon className="add_close_icon" onClick={()=>props.ConfirmClose()}/>
       <div style={{textAlign:"center",padding:"10px 10px"}}><Button className="nurse_book_btn" onClick={ModalOpenClick}>Book</Button></div>
        <Modal
        title={<div className="bookconfirm">Booking Confirmation</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        width={700}
        // className="confirm_modal"
        // maxWidth={"md"}
        // style={{width:"800px"}}
       >
         <ConfirmationModal ModalCloseClick={ModalCloseClick} GetData={props.GetData} sessionId={props.sessionId} BookingData={props.BookingData} DietCompany={props.DietCompany}/>
       </Modal> 
        </div>
       
    )
}