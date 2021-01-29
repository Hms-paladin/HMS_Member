import React,{useState} from "react";
import "./myprofile.scss";
import Doctor from "../../images/doctorappoinment.png";
import Plus from "../../images/plus.png";

import Button from '@material-ui/core/Button'
import {  Menu } from 'antd';
import Nurse from "../../images/nurse.png";
import Report from "../../images/report.png";
import Trainer from "../../images/trainer.png";
import TrainingCenter from "../../images/trainingcenter.png";
import DietMeal from "../../images/dietmeal.png";
import Pharmacy from "../../images/pharmacy.png";
import address from "../../images/address.svg";
import calendar from "../../images/calendar.svg";
import driver from "../../images/driver.svg";
import envelope from "../../images/envelope.svg";
import insurance from "../../images/insurance.svg";
import smartphone from "../../images/smartphone.svg";
import avatar from "../../images/user.png";
import self from "../../images/self.png";
import prescription from "../../images/prescription.png";
import {useHistory} from 'react-router-dom'
import { Collapse } from 'antd';
import Labelbox from "../../helpers/labelbox/labelbox";
const { Panel } = Collapse;





const images = [
    {img:Doctor,title:"Ashwin"},
    {img:Nurse,title:"Arun"},
    {img:Report,title:"Ranjith"},
    {img:Trainer,title:"Vijay"},
    {img:TrainingCenter,title:"Surya"},
    {img:DietMeal,title:"Prakash"},
    {img:Pharmacy,title:"Sahil"},

]
const icons = [
    {img:avatar,variant:"Name",detail:"Dalal"},
    {img:calendar,variant:"Date of birth",detail:"12 Jan"},
    {img:smartphone,variant:"Mobile",detail:"934786486"},
    {img:envelope,variant:"Email",detail:"Dalal@gmail.com"},
    {img:address,variant:"Address",detail:"Dalal,Anna nagar,Chennai"},
    {img:calendar,variant:"Expected Delivery Date",detail:"12 Dec"},
    {img:driver,variant:"Civil ID",detail:"123124"},
    {img:insurance,variant:"Insurance",detail:"-"},


   

]
                  

function Myprofile(props) {
    let history = useHistory();
    function handleEditProfile(){
        history.push("/doctorEdit")
    }

    const [showForm,setShowForm] = useState(false)

    const openForm = () => {
        setShowForm(true)
    }

    const closeForm = () => {
        setShowForm(false)
    }
    return(
        <div>
            <div className="cover_image_cont">
            <img className="cover_image" src={Doctor}/>
            </div>
            <div className="major_detail">
                <div style={{width:"180px",height:"100px"}}>
                <div className="profileimg_cont">
                   <img className="profileimg" src={Doctor}/>
                </div>
                </div>
                <div className="Nameinfo">
                   <div className="name">Dalal</div>
                   <div>29Yrs/Female</div>
                    
                </div>
                <div>
                    <Button onClick={handleEditProfile} className="editbtn">Edit profile</Button>
                </div>


            </div>
            <div className="tabmenus">
            <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ zIndex: 1, width: '100%', left: "10%" }}>
                <Menu.Item key="1"><div>Family Member</div></Menu.Item>
                <Menu.Item key="2">Next Vaccination</Menu.Item>
                <Menu.Item key="3">Next Appointment</Menu.Item>
                <Menu.Item key="4">Medication</Menu.Item>
                <Menu.Item key="5">Health Tips</Menu.Item>
                <Menu.Item key="6">Prescription History</Menu.Item>
                <Menu.Item key="7">Devices</Menu.Item>

            </Menu>
            </div>
            <div className="familymember">
            <div className="familymemberheader">
                <div>Family Members</div>

                {!showForm && <img style={{cursor:"pointer"}} src={Plus} onClick={openForm} /> }
            </div>
            {/* Form starts here */}
          {showForm &&  <div className="add_memberform">
                <div className="img_cont">
                     <img src={avatar}/>
                     <span>Add photo</span>
                </div>
                <div className="name_cont">
                    <div className="name"><Labelbox type="text" labelname="Name"/></div>
                    <div className="gender"><Labelbox type="select" labelname="Gender"/> <Labelbox type="text" labelname="Date of Birth"/></div>
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
            </div>
            <div className="nextvaccination">
          
                <div className="vaccinationimg">
                    <div className="vaccinationimg_cont"><img src={Doctor}/></div>
                    <div>Abith</div>

                </div>
                <div className="vaccinationdetail">
                    <div className="vaccinationhead">Next Vaccination Appointment</div>
                    <div>Dina</div>
                    <div>Hepatitis</div>
                    <div>29-08-2020</div>


                    </div>
                    <Button className="viewbtn">View</Button>
                   
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
              <img src={Doctor}/>
          </div>
          <div className="smalldot"></div>
          <div className="bigdot"></div>
          <div className="watchimg">
              <img src={Nurse}/>
          </div>
          <div className="smalldot"></div>
          <div className="bigdot"></div><div className="watchimg">
              <img src={Trainer}/>
          </div>
          

        
      </div>
      <div className="medicationhead">Medication</div>
      <div className="nextappointment">
          
         
          <div className="appointmentdetail">
              <div className="selfcont"><img src={self}/></div>
              <div className="medicationhead">
                  <div className="tablets">                  
                      <div className="tabletname">Vitamin B complex</div>
                  <div className="dashedline"></div>
                  <div className="dosage">1 Tablet</div>
                  </div>
                  <div className="tablets">                  
                      <div className="tabletname">Vitamin B complex</div>
                  <div className="dashedline"></div>
                  <div className="dosage">1 Tablet</div>
                  </div>

                  

                  
                  
              </div>

              <Button className="viewbtn">View</Button>

              </div>
             
      </div>
      <div className="healthtip_collapse">
      <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel header="Health Tips" key="1">
        <div className="healthtip_content">
            <div className="subhead">Plan your meals and snacks</div>
            <div className="msg">Eating a healthy breakfast and allocating more calories earlier in the day reduces cardiovascular disease risk. 
                People who skip breakfast are more likely to be obese, have inadequate nutrition, show evidence of impaired glucose
                 metabolism or be diagnosed with diabetes</div>
        </div>
    
        <div className="healthtip_content">
        <div className="subhead">Work up a sweat</div> 
        <div className="msg">To improve overall cardiovascular health, the AHA suggests 30 minutes of moderate exercise, five days per week.
         You can even divide this time into two or three segments of 10 to 15 minutes per day.</div>
               </div>
   
        <div className="healthtip_content">
        <div className="subhead">Start small</div> 

        <div className="msg">Walking is the simplest positive change you can make to improve your heart health. In addition to reducing heart disease
         and stroke risks, walking also improves blood pressure, enhances your mental well-being, and reduces risk for breast and colon cancer.
         </div>
        </div>
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
        </div>
    )
}

export default Myprofile