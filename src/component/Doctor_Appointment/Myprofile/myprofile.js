import React,{useEffect, useState} from "react";
import "./myprofile.scss";
import Doctor from "../../../images/doctorappoinment.png";
import Plus from "../../../images/plus.png";
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {Popconfirm,message} from 'antd';
import Nurse from "../../../images/nurse.png";
import Report from "../../../images/report.png";
import Trainer from "../../../images/trainer.png";
import TrainingCenter from "../../../images/trainingcenter.png";
import DietMeal from "../../../images/dietmeal.png";
import Pharmacy from "../../../images/pharmacy.png";
import address from "../../../images/address.svg";
import calendar from "../../../images/calendar.svg";
import driver from "../../../images/driver.svg";
import envelope from "../../../images/envelope.svg";
import insurance from "../../../images/insurance.svg";
import smartphone from "../../../images/smartphone.svg";
import avatar from "../../../images/user.png";
import self from "../../../images/self.png";
import prescription from "../../../images/prescription.png";
import {useHistory,NavLink} from 'react-router-dom'
import { Collapse } from 'antd';
import Labelbox from "../../../helpers/labelbox/labelbox";
import smart from '../../../images/smartwatch.jfif'
import fitness from '../../../images/fitnessband.jpg'
import camera from '../../../images/camera.jpg'
import Avatar from '../../../helpers/Upload/Upload'
import moment from 'moment'
import {Skeleton} from 'antd'
import { Tabs,Upload} from 'antd';
import {connect,useDispatch} from 'react-redux'
import NextVaccinationMother from '../../Mother/NextVaccination'
import MotherMedication from '../../Mother/MotherMedication'
import PrescriptionView from '../../Pregnant_Mother/PrescriptionModal'
import MotherDevice from '../../Mother/MotherDevices'
import ValidationLibrary from '../../../helpers/validationfunction'
import PersonIcon from '@material-ui/icons/Person';
import AvatarImage from '@material-ui/icons/Face';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import PerscriptionHistory from '../../Pregnant_Mother/Prescription'
import {
GetMemberProfile,
GetPatientHealthTips,
GetPatientPerscription,
AddPatientDetails,
GetRelationship,
DeleteMember,
ParticularPatientVaccination,
UpdateBasicPatientDetails,
} from '../../../actions/ProfileActions'
import { QuestionCircleOutlined } from '@ant-design/icons'
const { Panel } = Collapse;
const { TabPane } = Tabs;






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

function Myprofile(props) {
    const [tabdisble,settabdisble]=useState(false)
    let history = useHistory();
    let dispatch=useDispatch()
    function handleEditProfile(data){
        console.log("datta",FamilyProfile.name.value=data[0].name)
        FamilyProfile.name.value=data[0].name
        history.push({
            pathname:"/doctorEdit",
            state:{
                PatientData:data,
            }
        })
    }

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
    const [FamilyProfile,setFamilyProfile]=useState({
        name:{
            value:"",
            validation:[{ name: "required" }],
            error:null,
            errormsg:null
        },
        gender:{
           value:"",
           validation:[{ name: "required" }],
           error:null,
           errormsg:null
       },
       mobileno:{
        value:"",
        validation:[],
        error:null,
        errormsg:null
       },
       date:{
        value:"",
        validation:[{ name: "required" }],
        error:null,
        errormsg:null
      },
      relationship:{
        value:"",
        validation:[{ name: "required" }],
        error:null,
        errormsg:null
      },
      height:{
        value:"",
        validation:[{ name: "required" }],
        error:null,
        errormsg:null
      },
      weight:{
        value:"",
        validation:[{ name: "required" }],
        error:null,
        errormsg:null
      }

    })   
    const [currentKey,setcurrentKey]=useState("1")
    const [UploadData,setuploadData]=useState([])
    const handleClick = key => {
        console.log('click ', key);
        setcurrentKey(key)
        // setFamilyProfile((prevState) =>({
        //     ...prevState,
        //   }))
      };
   
    const [elp,setelp]=useState(false)
    const [showForm,setShowForm] = useState(false)
    const [profileDetails,setprofileDetails]=useState(false)
    const [Relation,setRelation]=useState([])
    const [EditPatient,setEditPatient]=useState(false)
    const [VaccationViewData,setVaccationViewData]=useState([])
    const [NextAppointment,setNextAppointment]=useState([])
    const [patient_id,setpatient_id]=useState([])
    const [PerscriptionData,setPerscriptionData]=useState([])
    const [loading,setloading]=useState(true)
    const [fileList,setfilelist]=useState([])
    const [imageChanged,setimageChanged]=useState(false)
    const [imageUrl,setimageUrl]=useState("")
    const openForm = () => {
        setShowForm(true)
    }

    const Submit = () => {
        
    var mainvalue = {};
    var targetkeys = Object.keys(FamilyProfile);
    for (var i in targetkeys) {
        var errorcheck = ValidationLibrary.checkValidation(
            FamilyProfile[targetkeys[i]].value,
            FamilyProfile[targetkeys[i]].validation
        );
        FamilyProfile[targetkeys[i]].error = !errorcheck.state;
        FamilyProfile[targetkeys[i]].errmsg = errorcheck.msg;
        mainvalue[targetkeys[i]] = FamilyProfile[targetkeys[i]].value;
    }
    var filtererr = targetkeys.filter((obj) => FamilyProfile[obj].error == true);
    if(filtererr.length>0){
        
    }else{
        if(EditPatient){
            
        
            var formdata=new FormData();
            formdata.set("name",FamilyProfile.name.value)
            formdata.set("dob",FamilyProfile.date.value)
            formdata.set("height",FamilyProfile.height.value)
            formdata.set("gender",FamilyProfile.gender.value)
            formdata.set("heightUnit","CM")
            formdata.set("weight",FamilyProfile.weight.value)
            formdata.set("weightUnit","Kg")
            formdata.set("bmi","")
            formdata.set("intakeCal","")
            formdata.set("durationDays","")
            formdata.set("anyMedication","")
            formdata.set("anyDisease","")
            formdata.set("anySurgery","")
            formdata.set("anyGoals","")
            formdata.set("goalWeight","")
            formdata.set("goalWeightUnit","")
            formdata.set("parrentPatientId",patient_id.PatientMemberId)
            formdata.set("patientId",profileDetails.patientId)
            dispatch(UpdateBasicPatientDetails(formdata,profileDetails.patientId)).then(()=>{
              StateClear()
              setShowForm(false)
              
            })
      } 
        else{  
        dispatch(AddPatientDetails(FamilyProfile,profileDetails.patientId,fileList,imageChanged)).then(()=>{
            StateClear()
        })
      }
      

       setimageUrl("")
        setShowForm(false)
    }
   
     setFamilyProfile((prevState) =>({
        ...prevState,
      }))
     
    }
    const EditPatientMembers=(data,id)=>{
        const patient=props.ProfileDetails[0]&&props.ProfileDetails[0].patientmemberDetails
        var PatientMemberid=patient.find((data)=>{
            return(
                data.PatientMemberId==id
            )
        })
        setEditPatient(true)
        setShowForm(true)
        setpatient_id(PatientMemberid)

        FamilyProfile.name.value=data.name
        FamilyProfile.gender.value=data.gender==="Male"?1:data.gender==="Female"?2:""
        FamilyProfile.date.value=data.dob
        FamilyProfile.mobileno.value=data.phone_no
        FamilyProfile.relationship.value=data.relation_id
        FamilyProfile.weight.value=data.weight
        FamilyProfile.height.value=data.height
        setimageUrl(data.patientMemberImage)
        setFamilyProfile((prevState) =>({
            ...prevState,
        }))
    }
    const StateClear=()=>{
        const key=["name","gender","mobileno","relationship","height","weight"]
        key.map((data)=>{
            FamilyProfile[data].value="" 
        })
        setFamilyProfile((prevState) =>({
            ...prevState,
          }))
        setShowForm(false)
    }
    function checkValidation(data, key) {

        var errorcheck = ValidationLibrary.checkValidation(
            data,
            FamilyProfile[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: FamilyProfile[key].validation,
        };
        setFamilyProfile((prevState)=>({
            ...prevState,
            [key]: dynObj,
        }))
    }
    const icons = [
        {img:avatar,variant:"Name",detail:profileDetails.name},
        {img:calendar,variant:"Date of birth",detail:profileDetails.dob},
        {img:smartphone,variant:"Mobile",detail:profileDetails.phno},
        {img:envelope,variant:"Email",detail:profileDetails.email},
        {img:address,variant:"Address",detail:
        <Popconfirm 
        title={
        <>
        <div>Address:</div>
        <span>{profileDetails.name+","+profileDetails.address}</span>
        </>
        }
        icon={false}
        okText={false}
        cancelText={false} 
        >   
        <div>{profileDetails.name+","+profileDetails.address}<span className="elp">...</span></div>
       </Popconfirm>
        },
        // {img:calendar,variant:"Expected Delivery Date",detail:"12 Dec"},
        {img:driver,variant:"Civil ID",detail:"-"},
        {img:insurance,variant:"Insurance",detail:"-"}, 
    ]
    useEffect(()=>{
       dispatch(GetMemberProfile())
       dispatch(GetPatientHealthTips(profileDetails.patientId))
       dispatch(GetPatientPerscription(profileDetails.patientId))
       dispatch(GetRelationship())
    

    },[profileDetails.patientId])
    const Vaccination=props.ProfileDetails[0]&&props.ProfileDetails[0].vaccinationList
    const Medication=props.ProfileDetails[0]&&props.ProfileDetails[0].patientMedication
    const [healthloading,sethealthloading]=useState(true)
    const [vacci_load,setvacci_load]=useState(true)
  
    useEffect(()=>{
        if(props.Perscription.length>0){
            setloading(false)
        }
        if(props.HealthTips.length>0){
            sethealthloading(false)
        }
        if(Vaccination&&Vaccination.length>0){
            setvacci_load(false)
        }
        props.ProfileDetails.map((data)=>{
            setprofileDetails({
                img:data.profile_image,
                name:data.name,
                age:data.age,
                gender:data.gender==="M"?"Male":"Female",
                dob:moment(data.dob).format("DD-MMM-YYYY"),
                phno:data.phone_no,
                email:data.email,
                address:data.address,
                patientId:data.patientId
            })
        })
       let relation=[]
        props.Relationship.map((data)=>{
            relation.push({
                id:data.PatientrealationshipId,value:data.realationship
            })
        })
        setRelation(relation)
        // next appointament
        let NextAppoint=[]
        props.ProfileDetails[0]?.patientNextAppointment.map((data)=>{
            NextAppoint.push({
               doctor_name:data.doctorName,
               date:moment(data.book_date).format("DD-MMM-YYYY"),
               time:data.from_time
            })
        })
        setNextAppointment(NextAppoint)
     },[props,loading]) 
     const DeletePatient=(id)=>{
       dispatch(DeleteMember(id))
     }
    function MedicationView(){
        var MedicationData=Medication.map((data)=>{
            return(
               <div></div>
            )
        })
        setcurrentKey("4")
    }
    function TabViews(id,name){
       
        if(name==="vaccination"){
        var VaccationData=Vaccination.find((data)=>{
                return(
                    data.patientId==id
                )
            })
        setVaccationViewData(VaccationData)
        setcurrentKey("2")
        settabdisble(true)
        } 
    }
    function PerscriptionView(id){
        var PerscriptionList=props.Perscription.find((data)=>{
            return(
                data.patientId==id
            )
        })
        setPerscriptionData(PerscriptionList)
        setcurrentKey("6")
    }
    // console.log("patientId",imageChanged)
    // const changeImageUpload=(file,imageChanged,img)=>{
    //     alert(imageChanged)
    //     f(file)
    //     var list=[]
    //     list.push(file)
    //      var fileData=list[0].fileList.map((data)=>{
    //          return {name:data.name}
    //      })
    //      var ddd=fileData[0].name
    //     //  setuploadData({ddd})
       
    //     setuploadData(file)
    //     setimageChanged(imageChanged)
   
    // }
    console.log("check",props)
    console.log("file",imageChanged)
  
    return(
        <div>
            <div className="cover_image_cont">
            <img className="cover_image" src={profileDetails.img} srcset=".svg"/>
            </div>
            <div className="major_detail">
                <div style={{width:"180px",height:"100px"}}>
                <div className="profileimg_cont">
                   <img className="profileimg" src={profileDetails.img}/>
                </div>
                </div>
                <div className="Nameinfo">
                   <div className="name">{profileDetails.name}</div>
                   <div>{profileDetails.age + "Years/"+profileDetails.gender}</div>
                    
                </div>
                <div>
                    <Button onClick={()=>handleEditProfile(props.ProfileDetails)} className="editbtn">Edit profile</Button>
                </div>


            </div>
            <div className="tabmenus">
            {/* <Menu mode="horizontal"  style={{ zIndex: 1, width: '100%', left: "10%" }} onClick={handleClick} selectedKeys={[currentKey]}>
                <Menu.Item key="1">Family Member</Menu.Item>
                <Menu.Item key="2">Next Vaccination</Menu.Item>
                <Menu.Item key="3">Next Appointment</Menu.Item>
                <Menu.Item key="4">Medication</Menu.Item>
                <Menu.Item key="5">Health Tips</Menu.Item>
                <Menu.Item key="6">Prescription History</Menu.Item>
                <Menu.Item key="7">Devices</Menu.Item>

            </Menu> */}
             <Tabs defaultActiveKey="1" onChange={handleClick} activeKey={currentKey}>
             <TabPane tab="Family Member" key="1">
             <div className="familymember">
            <div className="familymemberheader">
                <div>{showForm ? "Add Family Members":"Family Members"}</div>

                {!showForm && <img style={{cursor:"pointer"}} src={Plus} onClick={openForm} /> }
            </div>
            {/* Form starts here */}
          {showForm &&  <div className="add_memberform">
                <div className="img_cont">
                     {/* <Avatar 
                     IMageChange={(file,imageChanged,img)=>changeImageUpload(file,imageChanged,img)}
                     FileList={fileList}
                     imageChanged={imageChanged}
                     /> */}
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
                     <span>Add photo</span>
                </div>
                <div className="name_cont">
                    <div className="name">
                    <Labelbox type="text" labelname="Name"
                    changeData={(data) => checkValidation(data, "name")}
                    value={FamilyProfile.name.value}
                    error={FamilyProfile.name.error}
                    errmsg={FamilyProfile.name.errmsg} />
                    </div>
                    <div className="gender">
                    <Labelbox type="select" labelname="Gender"
                    dropdown={[{id:1,value:"Male"},{id:2,value:"Female"}]}
                    changeData={(data) => checkValidation(data, "gender")}
                    value={FamilyProfile.gender.value}
                    error={FamilyProfile.gender.error}
                    errmsg={FamilyProfile.gender.errmsg} 
                    /> 
                    <Labelbox type="datepicker" labelname="Date of Birth"
                    changeData={(data) => checkValidation(data, "date")}
                    value={FamilyProfile.date.value}
                    error={FamilyProfile.date.error}
                    errmsg={FamilyProfile.date.errmsg}
                    disableFuture={true}
                    />
                    </div>
                    <div className="number">
                    <Labelbox type="text" labelname="Mobile number"
                     changeData={(data) => checkValidation(data, "mobileno")}
                     value={FamilyProfile.mobileno.value}
                     error={FamilyProfile.mobileno.error}
                     errmsg={FamilyProfile.mobileno.errmsg}
                    />
                    </div>

                </div>
                <div className="relationship_cont">
                    <div className="relation">
                    <Labelbox type="select" labelname="Relationship"
                    dropdown={Relation}
                    changeData={(data) => checkValidation(data, "relationship")}
                    value={FamilyProfile.relationship.value}
                    error={FamilyProfile.relationship.error}
                    errmsg={FamilyProfile.relationship.errmsg}
                    />
                        </div>
                    <div className="height">
                    <Labelbox type="text" labelname="Height"
                    changeData={(data) => checkValidation(data, "height")}
                    value={FamilyProfile.height.value}
                    error={FamilyProfile.height.error}
                    errmsg={FamilyProfile.height.errmsg}
                    />
                    <span className="unit">cm</span>
                    <Labelbox type="text" labelname="Weight"
                    changeData={(data) => checkValidation(data, "weight")}
                    value={FamilyProfile.weight.value}
                    error={FamilyProfile.weight.error}
                    errmsg={FamilyProfile.weight.errmsg}
                    />
                    <span className="unit">kg</span></div>
                    <div className="addmemberbtn"><Button className="cancelbtn" onClick={StateClear}>Cancel</Button>
                    <Button className="submitbtn" onClick={Submit}>Submit</Button></div>

                </div>
            </div>}
            {/* form ends here */}
            <div className="familymember_imgs">
            {props.ProfileDetails[0]&&props.ProfileDetails[0].patientmemberDetails.map((data)=>{
            return(
                <div style={{height:"140px"}}>
            
                <div className="memberimg">
                <Popconfirm 
                 placement="bottom"
                 icon={false}
                title={
                    <div className="edit_patient_profile">
               <div><div>Gender</div><div className="snd_part">{data.gender}</div></div>
               <div><div>Mobile Number</div><div className="snd_part">{data.phone_no===""?"---":data.phone_no}</div></div>
               <div><div>Height</div><div className="snd_part">{data.height+ data.height_unit}</div></div>
               <div><div>Weight</div><div className="snd_part">{data.weight+data.weight_unit}</div></div>
               <div><div>Relationship</div><div className="snd_part">{data.relation_id}</div></div>
               <div><div>Date of Birth</div><div className="snd_part">{data.dob}</div></div>
               </div>
               
                }
                okText="Delete" cancelText="Edit"
                onConfirm={()=>DeletePatient(data.PatientMemberId)}
                onCancel={()=>EditPatientMembers(data,data.PatientMemberId)}
                >   
                {data.patientMemberImage===null?<PersonIcon style={{ fontSize: "2rem" }} className="profile_dummy_img" />:
                <img src = {data.patientMemberImage} /> }

                <div className="membername">{data.name}</div>
                {/* <div>dffggh</div> */}
                </Popconfirm>   
               </div> 
            
            </div>
            )  
        })}

            </div>
            </div>
            <div className="moredetail">
            {icons.map((data)=>{
            return(
                <div className="minicard">
                    
                   <div className="minicard_icon"> <img src={data.img}/></div>
                    <div>
                        <div className="name">{data.variant}</div>
                        <div className="details">{data.detail}</div>

                    </div>

                </div>
                    )  
                })}
                
            </div>
            <div className="nextvaccination_head">
            <div className="vaccinationhead_p">Next Vaccination Appointment</div>
            <div className={Vaccination>3?"nextvacci_scroll":"nextvacci"}>
            {vacci_load ?<Skeleton  paragraph={{ rows: 3 }} active title={false} loading={vacci_load}/>:
             <>
            {props.ProfileDetails[0]&&props.ProfileDetails[0].vaccinationList.map((data,index)=>
                <>
                <div className="vaccinationimg">
                    <div className="vaccinationimg_cont" onClick={()=>TabViews(data.patientId,"vaccination")}>{data.profileImage===null?<PersonIcon style={{ fontSize: "2rem" }} className="profile_dummy_img" />:<img src={data.profileImage}/>}</div>
                    <div style={{cursor:"pointer"}}>{data.patientName}</div>

                </div>
                <div className="vaccinationdetail">
                  
                    <div style={{color:"#333",fontWeight:"500"}}>{data.patientName}</div>
                    <div>{data.vaccineDetails.vaccineName}</div>
                    <div>{moment(data.vaccineDetails.nextVaccineDate).format("DD-MMM-YYYY")}</div>


                    </div>
                    {/* <Button className="viewbtn">View</Button> */}
                </>

             )}
             </>
             } 
            </div>
            </div>
            <div className="nextappointment">
          
         
          <div className="appointmentdetail">
              <div className="selfcont"><img src={self}/></div>
              <div className="appointmenthead">
                  <div>
                  <div className="head">New Appointment</div>
                  <div><span className="doctor">Doctor:</span>{NextAppointment[0]?.doctor_name}</div>
                  </div>
                  <div className="appointmentdate">
                      <div>{NextAppointment[0]?.date}</div>
                      <div>{NextAppointment[0]?.time}</div>

                  </div>
                  
              </div>

              <NavLink to="/appointment"><Button className="viewbtn">View</Button></NavLink>

              </div>
             
      </div>
      <div className="fitness">
          <div className="watchimg">
              <img src={smart}/>
              <span>Fitness</span>

          </div>
          <div className="smalldot"></div>
          <div className="bigdot"></div>
          <div className="watchimg">
              <img src={fitness}/>
              <span>GPS Kids</span>

          </div>
          <div className="smalldot"></div>
          <div className="bigdot"></div><div className="watchimg">
              <img src={camera}/>
              <span>Camera</span>
          </div>
          

        
      </div>
      <div className="medicationhead" style={{paddingLeft:"50px"}}>Medication</div>
      <div className="nextappointment">
          
         
          <div className="appointmentdetail">
              <div className="selfcont"><img src={self}/></div>
              
              <div className="medicationhead">
              {props.ProfileDetails[0]&&props.ProfileDetails[0].patientMedication.map((data,index)=>
                  <div className="tablets">                  
                      <div className="tabletname">{data.medicineName}</div>
                  <div className="dashedline"></div>
                  <div className="dosage">{"Daily"+" "+ data.day+" "+ "Tablet"}</div>
                  </div> 
                  )} 
              </div>
             
              <Button className="viewbtn" onClick={()=>MedicationView(props.ProfileDetails,"medication")}>View</Button>
            
         
              </div>
            
             
      </div>
      <div className="healthtip_collapse">
      <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="Health Tips" key="1">
    {healthloading?<div className="healthtip_content"><Skeleton  paragraph={{ rows: 3 }} active title={false} loading={healthloading}/></div>:
    <>
    {props.HealthTips.map((data,index)=>
        <div className="healthtip_content">
            <div className="subhead">{data.healthtip_title===null?<Skeleton.Input style={{ width: 500,height:10 }} active size='small' />:data.healthtip_title}</div>
            <div className="msg">{data.health_tip}</div>
           </div>
    )}
    </>
  }
        {/* <div className="healthtip_content">
        <div className="subhead">Work up a sweat</div> 
        <div className="msg">To improve overall cardiovascular health, the AHA suggests 30 minutes of moderate exercise, five days per week.
         You can even divide this time into two or three segments of 10 to 15 minutes per day.</div>
               </div>
   
        <div className="healthtip_content">
        <div className="subhead">Start small</div> 

        <div className="msg">Walking is the simplest positive change you can make to improve your heart health. In addition to reducing heart disease
         and stroke risks, walking also improves blood pressure, enhances your mental well-being, and reduces risk for breast and colon cancer.
         </div>
        </div> */}
    </Panel>
    </Collapse>
    </div>
    <div className="prescription_collapse">
      <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="Prescription" key="1">
        <div className="prescription_parent">
        <div className="prescription_content">
        {loading?<Skeleton  paragraph={{ rows: 4 }} active title={false} loading={loading}/>:
           <>
            {props.Perscription.map((data)=>
            
            <div className="prescription_box" >
                <div className="pres_img"><img src={prescription}/></div>
                <div>{data.patientName}</div>

            </div>
            )}

            </>

         }
        </div>
        {loading===false&&<div className="view_pre_parent"><Button className="viewbtn" onClick={()=>PerscriptionView()}>View</Button></div>}

        </div>
       
    </Panel>
    </Collapse>
    </div>
             </TabPane>
             <TabPane tab="Next Vaccination" key="2" disabled>
                 <NextVaccinationMother patientId={VaccationViewData}/>
             </TabPane>
             <TabPane tab="Next Appointment" key="3" disabled>
         
             </TabPane>
             <TabPane tab="Medication" key="4" disabled>

                 <MotherMedication medication={profileDetails.patientId}/>
             </TabPane>
             <TabPane tab="Health Tips" key="5" disabled>
          
             </TabPane>
             <TabPane tab="Prescription History" key="6" disabled>
                {/* <PrescriptionView PerscriptionData={PerscriptionData}/> */}
                <PerscriptionHistory/>
             </TabPane>
             <TabPane tab="Devices" key="7" disabled>
                <MotherDevice/>
             </TabPane>
             </Tabs>
            </div>
           
        </div>
    )
}

const mapStateToProps = (state) =>
({
    ProfileDetails:state.GetProfileDetails.ProfileDetails,
    HealthTips:state.GetProfileDetails.healthTips,
    Perscription:state.GetProfileDetails.Perscription,
    Relationship:state.GetProfileDetails.Relationship,
    particularVaccination:state.GetProfileDetails.particularVaccination,
    UpdateBasic_Details:state.GetProfileDetails.UpdateBasic_Details,

});

export default connect(mapStateToProps)(Myprofile);