import React,{useEffect, useState} from "react";
import "./myprofile.scss";
import Doctor from "../../../images/doctorappoinment.png";
import Plus from "../../../images/plus.png";

import Button from '@material-ui/core/Button'
import {  Menu } from 'antd';
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
import {useHistory} from 'react-router-dom'
import { Collapse } from 'antd';
import Labelbox from "../../../helpers/labelbox/labelbox";
import smart from '../../../images/smartwatch.jfif'
import fitness from '../../../images/fitnessband.jpg'
import camera from '../../../images/camera.jpg'
import Avatar from '../../../helpers/Upload/Upload'
import moment from 'moment'
import {Skeleton} from 'antd'
import { Tabs } from 'antd';
import {connect,useDispatch} from 'react-redux'
import NextVaccinationMother from '../../Mother/NextVaccination'
import MotherMedication from '../../Mother/MotherMedication'
import MotherDevice from '../../Mother/MotherDevices'
import {GetMemberProfile,GetPatientHealthTips,GetPatientPerscription} from '../../../actions/ProfileActions'
const { Panel } = Collapse;
const { TabPane } = Tabs;





const images = [
    {img:Doctor,title:"Ashwin"},
    {img:Nurse,title:"Arun"},
    {img:Report,title:"Ranjith"},
    {img:Trainer,title:"Vijay"},
    {img:TrainingCenter,title:"Surya"},
    {img:DietMeal,title:"Prakash"},
    {img:Pharmacy,title:"Sahil"},

]
           

function Myprofile(props) {
     
    let history = useHistory();
    let dispatch=useDispatch()
    function handleEditProfile(){
        history.push("/doctorEdit")
    }
    // function ScrollFamily(){
    //     window.scrollTo(0, 400);
    // }
    // function ScrollNextVaccination(){
    //     window.scrollTo(0, 650);
    // } function ScrollNextAppointment(){
    //     window.scrollTo(0, 700);
    // } function ScrollMedication(){
    //     window.scrollTo(0, 1200);
    // } function ScrollHealthtip(){
    //     window.scrollTo(0, 1500);
    // }
    // function ScrollPrescription(){
    //     window.scrollTo(0, 1800);
    // }
    // function ScrollDevices(){
    //     window.scrollTo(0, 1000);
    // }
    const [currentKey,setcurrentKey]=useState("1")
    const handleClick = e => {
        console.log('click ', e);
        setcurrentKey(e.key)
      };
    const Elipse=()=>{
        setelp(!elp)
    }
    const [elp,setelp]=useState(false)
    const [showForm,setShowForm] = useState(false)
    const [profileDetails,setprofileDetails]=useState(false)
    const openForm = () => {
        setShowForm(true)
    }

    const closeForm = () => {
        setShowForm(false)
    }
    const icons = [
        {img:avatar,variant:"Name",detail:profileDetails.name},
        {img:calendar,variant:"Date of birth",detail:profileDetails.dob},
        {img:smartphone,variant:"Mobile",detail:profileDetails.phno},
        {img:envelope,variant:"Email",detail:profileDetails.email},
        {img:address,variant:"Address",detail:<div>{profileDetails.name+profileDetails.address}<span className="elp" onClick={Elipse}>...</span></div>},
        // {img:calendar,variant:"Expected Delivery Date",detail:"12 Dec"},
        {img:driver,variant:"Civil ID",detail:"-"},
        {img:insurance,variant:"Insurance",detail:"-"}, 
    ]
    useEffect(()=>{
       dispatch(GetMemberProfile())
       dispatch(GetPatientHealthTips(props.ProfileDetails[0]&&props.ProfileDetails[0].patientId))
       dispatch(GetPatientPerscription(props.ProfileDetails[0]&&props.ProfileDetails[0].patientId))
    },[])
    console.log("patientId",props.ProfileDetails[0]&&props.ProfileDetails[0].patientId)
    useEffect(()=>{
        props.ProfileDetails.map((data)=>{
            setprofileDetails({
                img:data.profile_image,
                name:data.name,
                age:data.age,
                gender:data.gender,
                dob:moment(data.dob).format("DD-MMM-YYYY"),
                phno:data.phone_no,
                email:data.email,
                address:data.address,
                patientId:data.patientId
            })
        })
     },[props]) 
    //  console.log(props.ProfileDetails[0].vaccinationList,"ddd")  
    return(
        <div>
            <div className="cover_image_cont">
            <img className="cover_image" src={profileDetails.img}/>
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
                    <Button onClick={handleEditProfile} className="editbtn">Edit profile</Button>
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
             <Tabs defaultActiveKey="1" onChange={handleClick}>
             <TabPane tab="Family Member" key="1">
             <div className="familymember">
            <div className="familymemberheader">
                <div>{showForm ? "Add Family Members":"Family Members"}</div>

                {!showForm && <img style={{cursor:"pointer"}} src={Plus} onClick={openForm} /> }
            </div>
            {/* Form starts here */}
          {showForm &&  <div className="add_memberform">
                <div className="img_cont">
                     <Avatar/>
                     <span>Add photo</span>
                </div>
                <div className="name_cont">
                    <div className="name"><Labelbox type="text" labelname="Name"/></div>
                    <div className="gender"><Labelbox type="select" labelname="Gender"/> <Labelbox type="datepicker" labelname="Date of Birth"/></div>
                    <div className="number"><Labelbox type="text" labelname="Mobile number"/></div>

                </div>
                <div className="relationship_cont">
                    <div className="relation"><Labelbox type="select" labelname="Relationship"/></div>
                    <div className="height"><Labelbox type="text" labelname="Height"/><span className="unit">cm</span> <Labelbox type="text" labelname="Weight"/><span className="unit">kg</span></div>
                    <div className="addmemberbtn"><Button className="cancelbtn" onClick={closeForm}>Cancel</Button>
                    <Button className="submitbtn" onClick={closeForm}>Submit</Button></div>

                </div>
            </div>}
            {/* form ends here */}
            <div className="familymember_imgs">
            {images.map((data)=>{
            return(
                <div style={{height:"140px"}}>
            <div className="memberimg">
                <img src = {data.img} />
                <div className="membername">{data.title}</div>
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
                {elp&&
                <div className="ad_elpse">
                    <p>Arabian Gulf Road | Next to National Museum, Salmiya,Hawali Governorate 13057,Kuwait</p>
                </div>}
            </div>
            <div className="nextvaccination">
            {props.ProfileDetails[0]&&props.ProfileDetails[0].vaccinationList.map((data,index)=>
                <>
                <div className="vaccinationimg">
                    <div className="vaccinationimg_cont"><img src={data.profileImage}/></div>
                    <div>{data.patientName}</div>

                </div>
                <div className="vaccinationdetail">
                    <div className="vaccinationhead">Next Vaccination Appointment</div>
                    <div>{data.patientName}</div>
                    <div>{data.vaccineDetails.vaccineName}</div>
                    <div>{moment(data.vaccineDetails.nextVaccineDate).format("DD-MMM-YYYY")}</div>


                    </div>
                    <Button className="viewbtn">View</Button>
                </>

             )} 
            </div>
            <div className="nextappointment">
          
         
          <div className="appointmentdetail">
              <div className="selfcont"><img src={self}/></div>
              <div className="appointmenthead">
                  <div>
                  <div className="head">New Appointment</div>
                  <div><span className="doctor">Doctor:</span>Hameed</div>
                  </div>
                  <div className="appointmentdate">
                      <div>Jan 12 20202</div>
                      <div>10:00Am</div>

                  </div>
                  
              </div>

              <Button className="viewbtn">View</Button>

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
      <div className="medicationhead">Medication</div>
      <div className="nextappointment">
          
         
          <div className="appointmentdetail">
              <div className="selfcont"><img src={self}/></div>
              
              <div className="medicationhead">
              {props.Perscription[0]&&props.Perscription[0].medicineDetails.map((data,index)=>
                  <div className="tablets">                  
                      <div className="tabletname">{data.medicineName}</div>
                  <div className="dashedline"></div>
                  <div className="dosage">{data.day + "Tablet"}</div>
                  </div> 
                  )} 
              </div>
             
              <Button className="viewbtn">View</Button>
            
         
              </div>
            
             
      </div>
      <div className="healthtip_collapse">
      <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="Health Tips" key="1">
    {props.HealthTips.map((data,index)=>
        <div className="healthtip_content">
            <div className="subhead">{data.healthtip_title===null?<Skeleton.Input style={{ width: 500,height:10 }} active size='small' />:data.healthtip_title}</div>
            <div className="msg">{data.health_tip}</div>
           </div>
    )}
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
        <div className="prescription_content">
            <div className="prescription_box">
                <div className="pres_img"><img src={prescription}/></div>
                <div>Dhina</div>

            </div>
            <div className="prescription_box">
                <div className="pres_img"><img src={prescription}/></div>
                <div>Dhina</div>

            </div>
        </div>
    
       
    </Panel>
    </Collapse>
    </div>
             </TabPane>
             <TabPane tab="Next Vaccination" key="2">
                 <NextVaccinationMother/>
             </TabPane>
             <TabPane tab="Next Appointment" key="3" disabled>
         
             </TabPane>
             <TabPane tab="Medication" key="4" disabled>
                 <MotherMedication/>
             </TabPane>
             <TabPane tab="Health Tips" key="5" disabled>
          
             </TabPane>
             <TabPane tab="Prescription History" key="6" disabled>
                {/* <MotherDevice/> */}
             </TabPane>
             <TabPane tab="Devices" key="7">
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
    Perscription:state.GetProfileDetails.Perscription
});

export default connect(mapStateToProps)(Myprofile);