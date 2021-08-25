import React,{useEffect, useState} from "react";
import "./editprofile.scss";
import Labelbox from '../../../helpers/labelbox/labelbox'
// import avatar from "../../../images/user.png";
import AddBoxIcon from '@material-ui/icons/AddBox';
import Avatar from '../../../helpers/Upload/Upload'
import {connect,useDispatch} from 'react-redux'
import {Upload,message} from 'antd'
import {UpdatePatientDetails} from '../../../actions/ProfileActions'
import { BrowserRouter as Router, Switch, Route,useHistory,Link,NavLink,Redirect} from "react-router-dom";
import ValidationLibrary from '../../../helpers/validationfunction'
import AvatarImage from '@material-ui/icons/Face';

var hashHistory = require('react-router-redux')



                  

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type==='image/svg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng;
}
const uploadButton = (
  <div>
    <AvatarImage className="avatar_img"/>
  </div>
);
function Editprofile(props) {
    let history = useHistory();
    let dispatch=useDispatch();
    const [patientId,setpatientId]=useState("")
    const [loading,setloading]=useState(true)
    const [fileList,setfilelist]=useState([])
    const [imageChanged,setimageChanged]=useState(false)
    const [imageUrl,setimageUrl]=useState("")
     const [ProfileDetails,setProfileDetails]=useState({
      name:{
          value:"",
          validation:[],
          error:null,
          errormsg:null
      },
      dob:{
         value:"",
         validation:[],
         error:null,
         errormsg:null
     },
     email:{
         value:"",
         validation:[],
         error:null,
         errormsg:null
      },
      insurance:{
         value:"",
         validation:[],
         error:null,
         errormsg:null
      },
      gender:{
      value:"",
      validation:[],
      error:null,
      errormsg:null
    },
    mobile:{
      value:"",
      validation:[],
      error:null,
      errormsg:null
    },
    D_date:{
      value:"",
      validation:[],
      error:null,
      errormsg:null
    },
    babyname:{
      value:"",
      validation:[],
      error:null,
      errormsg:null
    },
    address:{
      value:"",
      validation:[],
      error:null,
      errormsg:null
    },

  })  
  const handleChange = info => {
    if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   return;
    }
    if (info.file.status === 'done') {

        setfilelist(info)
      
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>{
       setimageUrl(imageUrl)
       setimageChanged(true)
        }) 
    }
  };
  function checkValidation(data, key) {
    
    var errorcheck = ValidationLibrary.checkValidation(
        data,
        ProfileDetails[key].validation
    );
    let dynObj = {
        value: data,
        error: !errorcheck.state,
        errmsg: errorcheck.msg,
        validation: ProfileDetails[key].validation,
    };
    setProfileDetails((prevState)=>({
        ...prevState,
        [key]: dynObj,
    }))
}
useEffect(()=>{
const PatientData=props.location.state.PatientData
if(props.location.state.PatientData){
ProfileDetails.name.value=PatientData[0].name
ProfileDetails.email.value=PatientData[0].email
ProfileDetails.dob.value=PatientData[0].dob
ProfileDetails.D_date.value=PatientData[0].expected_del_date
ProfileDetails.address.value=PatientData[0].address
ProfileDetails.babyname.value=PatientData[0].baby_name
ProfileDetails.mobile.value=PatientData[0].phone_no
ProfileDetails.gender.value=PatientData[0].gender==="1"?1:PatientData[0].gender==="2"?2:""
setimageUrl(PatientData[0].profile_image)
}
setProfileDetails((prevState)=>({
  ...prevState,
}))
setpatientId(props.location.state.PatientData[0].patientId)
},[])
console.log(patientId,"PatientData")

const Update=()=>{

  dispatch(UpdatePatientDetails(ProfileDetails,patientId)).then(()=>{
    StateClear()
  })
  history.push("/profile");
  setProfileDetails((prevState)=>({
    ...prevState,
}))
setimageUrl("")
}
const StateClear=()=>{
  let Key=["name","dob","email","mobile","address","D_date","babyname"]
  Key.map((data)=>{
    ProfileDetails[data].value=""
  })
  setProfileDetails((prevState)=>({
    ...prevState,
   }))
}
    return(
        <div>
            <div className="editprofile_cont">
              <div className="editprofile">
                  <div className="edit_header">Edit profile</div>
                  <div className="img_flex_row">
                      <div className="upload_place_plus">
                       <div className="uploads">
                                 <Upload
                                   name="avatar"
                                   listType="picture-card"
                                   className="avatar-uploader"
                                   showUploadList={false}
                                   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                   beforeUpload={beforeUpload}
                                   onChange={handleChange}
                                >
    
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                       </div>
                       <AddBoxIcon className="plus_ad"/>
                       </div>
                      <span onClick={Update}>Update</span>
                   </div>
                  <div className="flex_row">
                    
                  <div className="lblbox"> 
                  <Labelbox type="text" labelname="Name"
                   changeData={(data) => checkValidation(data, "name")}
                   value={ProfileDetails.name.value}
                   error={ProfileDetails.name.error}
                   errmsg={ProfileDetails.name.errmsg}
                  /> 
                  </div>
                  <div className="lblbox">
                    <Labelbox type="datepicker" labelname="Date of Birth"
                     changeData={(data) => checkValidation(data, "dob")}
                     value={ProfileDetails.dob.value}
                     error={ProfileDetails.dob.error}
                     errmsg={ProfileDetails.dob.errmsg}
                     disableFuture={true}
                    />
                    </div>

                  </div>
                 <div className="flex_row">
                    
                    <div className="lblbox"> 
                    <Labelbox type="text" labelname="Email"
                    changeData={(data) => checkValidation(data, "email")}
                    value={ProfileDetails.email.value}
                    error={ProfileDetails.email.error}
                    errmsg={ProfileDetails.email.errmsg}
                    />  </div>
                    <div className="lblbox">
                    <Labelbox type="text" labelname="Insurance"
                    changeData={(data) => checkValidation(data, "insurance")}
                    value={ProfileDetails.insurance.value}
                    error={ProfileDetails.insurance.error}
                    errmsg={ProfileDetails.insurance.errmsg}
                    />
                    </div>
  
                    </div><div className="flex_row">
                    
                    <div className="lblbox"> 
                    <Labelbox type="select" labelname="Gender"
                    changeData={(data) => checkValidation(data, "gender")}
                    dropdown={[{id:1,value:"Male"},{id:2,value:"Female"}]}
                    value={ProfileDetails.gender.value}
                    error={ProfileDetails.gender.error}
                    errmsg={ProfileDetails.gender.errmsg}
                    />  
                    </div>
                    <div className="lblbox"><Labelbox type="text" labelname="Mobile"
                     changeData={(data) => checkValidation(data, "mobile")}
                     value={ProfileDetails.mobile.value}
                     error={ProfileDetails.mobile.error}
                     errmsg={ProfileDetails.mobile.errmsg}
                    /></div>
  
                    </div>
                    <div className="flex_row">
                    
                    <div className="lblbox"> 
                    <Labelbox type="datepicker" labelname="Expected Delivery Date"
                    changeData={(data) => checkValidation(data, "D_date")}
                    value={ProfileDetails.D_date.value}
                    error={ProfileDetails.D_date.error}
                    errmsg={ProfileDetails.D_date.errmsg}
                    /> 
                    </div>
                    <div className="lblbox">
                    <Labelbox type="text" labelname="Baby Name"
                    changeData={(data) => checkValidation(data, "babyname")}
                    value={ProfileDetails.babyname.value}
                    error={ProfileDetails.babyname.error}
                    errmsg={ProfileDetails.babyname.errmsg}
                    /></div>
  
                    </div>
                    <div className="flex_row">
                    
                    <div className="lblbox_txtarea"> 
                    <Labelbox type="textarea" labelname="Address"
                    changeData={(data) => checkValidation(data, "address")}
                    value={ProfileDetails.address.value}
                    error={ProfileDetails.address.error}
                    errmsg={ProfileDetails.address.errmsg}
                    />  </div>
                    
  
                    </div>

              </div>
            </div>
        </div>
    )}
    
const mapStateToProps = (state) =>
({
  UpdatePatientDetails:state.GetProfileDetails.UpdatePatientDetails,
    
});

export default connect(mapStateToProps)(Editprofile);