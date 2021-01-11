import React from "react";
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
                    <Button className="editbtn">Edit profile</Button>
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
                <img style={{cursor:"pointer"}} src={Plus}/>
            </div>
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
        </div>
    )
}

export default Myprofile;