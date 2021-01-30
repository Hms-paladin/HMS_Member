import React, { useState } from "react";
import bg_image from "../../images/PregnantMother/bg_mother.jpg";
import profile_icon from "../../images/PregnantMother/PregnantMother.png";
import { Button, Modal } from "antd";
import "./Pregnant_Mother.scss";
import { Layout, Menu } from "antd";
import Card from "@material-ui/core/Card";
import EditProfileModal from "./EditProfileModal";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Grid from "@material-ui/core/Grid";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import calender_icon from "../../images/PregnantMother/calendar.svg";
import mobile_icon from "../../images/PregnantMother/smartphone-call.svg";
import email_icon from "../../images/PregnantMother/envelope.svg";
import address_icon from "../../images/PregnantMother/address.svg";
import licence_icon from "../../images/PregnantMother/Driver License.svg";
import insurance_icon from "../../images/PregnantMother/insurance.svg";
import gps_kids from "../../images/PregnantMother/gpsKids.png";
import mirror from "../../images/PregnantMother/mirror camera.png";
import watch from "../../images/PregnantMother/smart_watch.png";
import prescription from "../../images/PregnantMother/prescription.jpg";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import up_arrow from "../../images/PregnantMother/double-up-arrow.svg";
import Labelbox from "../../helpers/labelbox/labelbox";

import { Tabs } from "antd";
import PrescriptionModal from "./PrescriptionModal";
function PregnantMotherProfile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showDetails, ShowdetailsTrue] = useState(false);
  // const [prescriptionDetails,prescriptionModalTrue]=useState(false);
  const [AddFamily, AddFamilyTrue] = useState(false);

  const { TabPane } = Tabs;

  const handleProfileClick = () => {
    alert("no no");
    ShowdetailsTrue(!showDetails);
  };
  const handleAddFamily = () => {
    alert("no no");
    AddFamilyTrue(!AddFamily);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const prescriptionModal =()=>{
    setIsModalVisible(true);
    showModal(false);
    // prescriptionModalTrue(!prescriptionDetails);
    // setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <div className="container">
        <div>
          {" "}
          <img src={bg_image} className="pregnantmother" />
        </div>
        {/* <div  className="profile_icon" style={{display:'flex'}}> */}
        <div className="container">
          <div class="row">
            <div class="col profile_icon" style={{ display: "flex" }}>
              <img src={profile_icon} />
              <div className="col">
                <div className="profile_details">Dalal</div>
                <span>29 Years/Female</span>
              </div>
            </div>
            <div className="col">
              <Button onClick={showModal} className="profile_button">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          width: "90%",
          left: "10%",
          top: "560px",
          fontSize: "20px",
        }}
      >
        {/* <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            position: "absolute",
            zIndex: 1,
            width: "90%",
            left: "10%",
            top: "560px",
            fontSize: "20px",
          }}
        >
          <Menu.Item key="1">
            <div>Family Member</div>
          </Menu.Item>
          <Menu.Item key="2">Next Vaccination</Menu.Item>
          <Menu.Item key="3">Next Appointment</Menu.Item>
          <Menu.Item key="4">Medication</Menu.Item>
          <Menu.Item key="5">Health Tips</Menu.Item>
          <Menu.Item key="6">Prescription History</Menu.Item>
          <Menu.Item key="7">Devices</Menu.Item>
        </Menu> */}

        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Next Vaccination" key="1"></TabPane>
          <TabPane tab="Next Appointment" key="2"></TabPane>
          <TabPane tab="Medication" key="3"></TabPane>
          <TabPane tab="Health Tips" key="5"></TabPane>
          <TabPane tab="Prescription" key="6">
            <img src={prescription}/>
          </TabPane>
          <TabPane tab="Devices" key="7"></TabPane>
         
        </Tabs>
      </div>
      <div className="position_set">
        <div className="card_center">
          <div className="mini-box_background">
            <div className="round_text">
              <div style={{ color: "white" }}>Child Info</div>
            </div>
          </div>
        </div>
        <div className="card_center">
          {/* <Card className="pregnant_mother-card">dfvbdfgbf</Card> */}
          <div className="box_background">
            <div className="box_text">
              <Grid
                style={{ font: "normal normal 23px/22px Roboto" }}
                container
                spacing={3}
              >
                <Grid item xs={2}>
                  <div>Name</div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                  <div>Dina</div>
                </Grid>
                <Grid item xs={2}>
                  <div>Age</div>
                </Grid>
                <Grid item xs={4}>
                  <div>13 Weeks</div>
                </Grid>
                <Grid item xs={2}>
                  <div>height</div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                  <div>-</div>
                </Grid>
                <Grid item xs={2}>
                  <div>Weight</div>
                </Grid>
                <Grid item xs={4}>
                  <div>-</div>
                </Grid>
                <Grid itme xs={12}>
                  <div style={{ font: "normal normal 15px/22px Roboto" }}>
                    Check your lovely Dina's Height and Weight{" "}
                    <span style={{ color: "#83AF40" }}>
                      @ Best Clinical Lab
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="box_circle">
            <div className="round_text">
              <div style={{ font: "normal normal bold 30px/22px Roboto" }}>
                189 Days to go
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* family */}

      <div
        className="container"
        style={{
          marginTop: "235px",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <div style={{ fontSize: "26px" }}>
          Family Member
          <AddBoxIcon
            style={{
              float: "right",
              width: "52px",
              height: "52px",
              color: "#83AF40",
            }}
            onClick={handleAddFamily}
          />
        </div>
      </div>

      <div
        style={{
          background: "#F0F0F0 0% 0% no-repeat padding-box",
          height: "150px",
          width: "1450px",
        }}
      >
        <div style={{ display: "flex" }}>
          <Grid container spacing={3}>
            <Grid item xs={1}>
              <img
                style={{
                  width: "109px",
                  height: "109px",
                  marginTop: "17px",
                  // marginLeft: "20px",
                }}
                src={profile_icon}
                onClick={handleProfileClick}
              />
            </Grid>
            <Grid item xs={1}>
              <img
                src={profile_icon}
                style={{
                  width: "109px",
                  height: "109px",
                  marginTop: "17px",
                  // marginLeft: "20px",
                }}
                onClick={handleProfileClick}
              />
            </Grid>
            <Grid item xs={1}>
              <img
                src={profile_icon}
                style={{
                  width: "109px",
                  height: "109px",
                  marginTop: "17px",
                  // marginLeft: "20px",
                }}
                onClick={handleProfileClick}
              />
            </Grid>
            <img
              src={profile_icon}
              style={{
                width: "109px",
                height: "109px",
                marginTop: "27px",
                // marginLeft: "20px",
              }}
              onClick={handleProfileClick}
            />
            <Grid item xs={1}>
              <img
                src={profile_icon}
                style={{
                  width: "109px",
                  height: "109px",
                  marginTop: "17px",
                  // marginLeft: "20px",
                }}
                onClick={handleProfileClick}
              />
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={1}>
            <p style={{ marginLeft: "40px" }}>Lina</p>
          </Grid>
          <Grid item xs={1}>
            <p style={{ marginLeft: "30px" }}>Abdullah</p>
          </Grid>
          <Grid item xs={1}>
            <p style={{ marginLeft: "40px" }}>Saud</p>
          </Grid>
          <Grid item xs={1}>
            <p style={{ marginLeft: "30px" }}>Naseer</p>
          </Grid>
          <Grid item xs={1}>
            <p style={{ marginLeft: "25px" }}>Dina</p>
          </Grid>
        </Grid>
      </div>
      {AddFamily !== false ? (
        <React.Fragment>
          <div>Add Family Member</div>
          <div
            style={{
              background: "#F0F0F0 0% 0% no-repeat padding-box",
              height: "270px",
              width: "1450px",
              marginLeft: "5px",
              boxShadow: "0px 3px 10px #00000021",
              opacity: "1",
              marginTop: "35px",
              padding: "15px",
            }}
          >
            <Grid container spacing={16}>
              <Grid item xs={4}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    marginLeft: "12%",
                    marginTop: "5%",
                    boxShadow: "0px 3px 6px #00000029",
                  }}
                >
                  <PermIdentityIcon
                    style={{
                      width: "80px",
                      height: "80px",
                      color: "#83AF40",
                      marginLeft: "17px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container spacing={16}>
                  <Grid item xs={8}>
                    <Labelbox type="text" labelname="Name"></Labelbox>
                  </Grid>
                  <Grid item xs={12} style={{ display: "flex" }}>
                    <Grid item xs={3}>
                      <Labelbox type="select" labelname="Gender"></Labelbox>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
                      <Labelbox
                        type="datepicker"
                        labelname="Date of Birth"
                      ></Labelbox>
                    </Grid>
                  </Grid>
                  <Grid item xs={8}>
                    <Labelbox type="number" labelname="Mobile"></Labelbox>
                   
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs={8}>
                    <Labelbox type="select" labelname="Relationship"></Labelbox>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={3}>
                      <Labelbox type="number" labelname="Height"></Labelbox>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={3}>
                      <Labelbox type="number" labelname="Weight"></Labelbox>
                    </Grid>
                  </Grid>
                  <Grid item xs={8}>
                  <button>Cancel</button> <button>Submit</button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      ) : null}
      {/* family ends */}
      {showDetails !== false ? (
        <div
          style={{
            background: "#F0F0F0 0% 0% no-repeat padding-box",
            height: "160px",
            width: "1400px",
            boxShadow: "0px 3px 10px #00000021",
            borderRadius: "20px",
            opacity: "1",
            marginTop: "35px",
            marginLeft: "35px",
          }}
        >
          <div style={{ float: "right" }}>
            <Button
              style={{
                borderRadius: "0px 20px 0px 10px",
                backgroundColor: "#83AF40",
                color: "#FFFFFF",
                width: "135px",
                height: "36px",
                marginLeft: "35px",
              }}
            >
              Edit
            </Button>
          </div>
          <Grid
            container
            spacing={3}
            style={{
              marginLeft: "15px",
              marginTop: "10px",
              font: "normal normal bold 20px/40px Roboto",
            }}
          >
            <Grid item xs={2}>
              <p>Gender</p>
            </Grid>
            <Grid item xs={2}>
              <p>Mobile Number</p>
            </Grid>
            <Grid item xs={2}>
              <p>Height</p>
            </Grid>
            <Grid item xs={2}>
              <p>Weight</p>
            </Grid>
            <Grid item xs={2}>
              <p>Relationship</p>
            </Grid>
            <Grid item xs={2}>
              <p>Date of Birth</p>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            style={{
              marginLeft: "15px",
              font: "normal normal normal 18px/40px Roboto",
              color: "#777777",
            }}
          >
            <Grid item xs={2}>
              <p>Female</p>
            </Grid>
            <Grid item xs={2}>
              <p>+916565656566</p>
            </Grid>
            <Grid item xs={2}>
              <p>104 Cm</p>
            </Grid>
            <Grid item xs={2}>
              <p>25 Kg</p>
            </Grid>
            <Grid item xs={2}>
              <p>Daughter</p>
            </Grid>
            <Grid item xs={2}>
              <p>07 Jan 2010</p>
            </Grid>
          </Grid>
        </div>
      ) : null}
      {/* family details */}
      <div
        style={{
          background: "#F0F0F0 0% 0% no-repeat padding-box",
          height: "160px",
          width: "1400px",
          boxShadow: "0px 3px 10px #00000021",
          borderRadius: "20px",
          opacity: "1",
          marginTop: "35px",
          marginLeft: "35px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={1} style={{ marginTop: "10px" }}>
            <PermIdentityIcon
              style={{ width: "40px", height: "40px", color: "#83AF40" }}
            />
          </Grid>
          <Grid item xs={1}>
            Name <br />
            Dalal
          </Grid>
          <Grid item xs={1}>
            <img
              src={calender_icon}
              style={{
                width: "40px",
                height: "40px",
                color: "#83AF40",
                marginLeft: "30px",
              }}
            />
          </Grid>
          Date of Birth <br /> 06 Dec 1990
          <Grid item xs={1} />
          <Grid item xs={1}>
            <img
              src={mobile_icon}
              style={{
                width: "40px",
                height: "40px",
                color: "#83AF40",
                marginLeft: "30px",
              }}
            />
          </Grid>
          Mobile
          <br /> +97100007777
          <Grid item xs={1} />
          <Grid item xs={1}>
            <img
              src={email_icon}
              style={{
                width: "40px",
                height: "40px",
                color: "#83AF40",
                marginLeft: "30px",
              }}
            />
          </Grid>
          Email
          <br /> dalal@gmail.com
          <Grid item xs={1} />
          <Grid item xs={1}>
            <img
              src={address_icon}
              style={{
                width: "40px",
                height: "40px",
                color: "#83AF40",
                marginLeft: "30px",
              }}
            />
          </Grid>
          Address
          <br /> xxx,yy
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={1}>
            <img
              src={calender_icon}
              style={{ width: "40px", height: "40px", color: "#83AF40" }}
            />
          </Grid>
          <Grid item xs={1}>
            Expected Delivery Date
          </Grid>
          <Grid item xs={1}>
            <img
              src={licence_icon}
              style={{
                width: "40px",
                height: "40px",
                color: "#83AF40",
                marginLeft: "30px",
              }}
            />
          </Grid>
          Civil Id
          <Grid item xs={1} />
          <Grid item xs={1} style={{ marginLeft: "25px" }}>
            <img
              src={insurance_icon}
              style={{
                width: "40px",
                height: "40px",
                color: "#83AF40",
                marginLeft: "50px",
              }}
            />
          </Grid>
          Insurance
          <br />
          4478 1254 5698 3254
        </Grid>
      </div>
      {/* family details ends */}
      {/* vaccination appointment */}
      <div
        style={{
          background: "#F0F0F0 0% 0% no-repeat padding-box",
          height: "176px",
          width: "1400px",
          marginLeft: "35px",
          boxShadow: "0px 3px 10px #00000021",
          borderRadius: "20px",
          opacity: "1",
          marginTop: "35px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={1} style={{ display: "grid" }}>
            <img
              src={profile_icon}
              style={{
                width: "95px",
                height: "95px",
                color: "#83AF40",
                marginLeft: "30px",
                marginTop: "8px",
              }}
            />
            <span style={{ marginLeft: "50px", fontSize: "16px" }}>Dina</span>
          </Grid>
          <Grid item xs={2} style={{ marginLeft: "30px", marginTop: "20px" }}>
            <p style={{ display: "grid" }}>
              <span style={{ font: "normal bold 16px/26px Roboto" }}>
                Next Vaccination Appointment
              </span>
              <span style={{ fontSize: "15px", color: "#A2A2A2" }}> Dina</span>
              <span style={{ fontSize: "15px", color: "#A2A2A2" }}>
                {" "}
                Heptatitis B
              </span>
              <span style={{ fontSize: "15px", color: "#A2A2A2" }}>
                {" "}
                29-08-2019
              </span>
            </p>
          </Grid>
        </Grid>
        <div style={{ float: "right" }}>
          <Button
            style={{
              borderRadius: "10px 0px 20px 0px",
              backgroundColor: "#83AF40",
              color: "#FFFFFF",
              width: "135px",
              height: "36px",
            }}
          >
            View
          </Button>
        </div>
      </div>
      {/* vaccination appointment ends*/}
      {/* next vaccination appointment */}
      <div className="box">
        <div className="ribbon ribbon-top-left">
          <span>Self</span>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginLeft: "13%",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Next Appointment</p>
          <p style={{ display: "grid", color: "#939393", fontSize: "18px" }}>
            10 Dec 2020
            <span>10:00 AM</span>
          </p>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginLeft: "13%",
            fontSize: "20px",
          }}
        >
          <p style={{ display: "flex", padding: "20px" }}>
            Doctor:<p>Farah Al-Seleh</p>
          </p>
          <p style={{ color: "#939393", fontSize: "18px", marginTop: "40px" }}>
            <Button
              style={{
                borderRadius: "10px 0px 20px 0px",
                backgroundColor: "#83AF40",
                color: "#FFFFFF",
                width: "135px",
                height: "36px",
              }}
            >
              View
            </Button>
          </p>
        </div>
      </div>
      {/* next vaccination appointment ends */}
      {/* products */}
      <div style={{ display: "flex", padding: "45px" }}>
        <div className="round_product" style={{ display: "grid" }}>
          <img
            src={watch}
            style={{
              width: "180px",
              height: "180px",
              marginTop: "17px",
              marginLeft: "17px",
            }}
          />
          <p
            style={{
              marginLeft: "55px",
              marginTop: "12%",
              font: "normal normal normal 32px/40px Roboto",
            }}
          >
            Fitness
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "7%", marginLeft: "85px" }}>
          <p
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#C7C7C7",
              borderRadius: "50%",
              marginTop: "6px",
            }}
          />
          <p
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#C7C7C7",
              borderRadius: "50%",
              marginLeft: "10px",
            }}
          ></p>
        </div>
        <div className="round_product" style={{ marginLeft: "85px" }}>
          <img
            src={gps_kids}
            style={{
              width: "180px",
              height: "180px",
              marginTop: "17px",
              marginLeft: "17px",
            }}
          />
          <p
            style={{
              marginLeft: "55px",
              marginTop: "12%",
              font: "normal normal normal 32px/40px Roboto",
            }}
          >
            GPS Kids
          </p>
        </div>
        <div style={{ display: "flex", marginTop: "7%", marginLeft: "85px" }}>
          <p
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#C7C7C7",
              borderRadius: "50%",
              marginTop: "6px",
            }}
          />
          <p
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#C7C7C7",
              borderRadius: "50%",
              marginLeft: "10px",
            }}
          ></p>
        </div>
        <div className="round_product" style={{ marginLeft: "85px" }}>
          <img
            src={mirror}
            style={{
              width: "150px",
              height: "150px",
              marginTop: "45px",
              marginLeft: "23px",
            }}
          />
          <p
            style={{
              marginLeft: "55px",
              marginTop: "12%",
              font: "normal normal normal 32px/40px Roboto",
            }}
          >
            Camera
          </p>
        </div>
      </div>
      {/* product ends */}
      {/* medication */}
      <p
        style={{
          marginLeft: "40px",
          font: "normal normal normal 36px/40px Roboto",
          marginTop: "15px",
        }}
      >
        Medication
      </p>
      <div className="box_medication">
        <div className="ribbon ribbon-top-left">
          <span>Self</span>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginLeft: "13%",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          <p style={{ fontWeight: "bold" }}>Vitamin B complex</p>
          <p
            style={{
              border: "none",
              borderTop: "3px dotted gray",
              color: "gray",
              marginTop: "15px",
              height: "1px",
              width: "73%",
            }}
          ></p>
          <p style={{ display: "grid", color: "#939393", fontSize: "18px" }}>
            Daily 1 Tablet
          </p>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            marginLeft: "12%",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          <p style={{ fontWeight: "bold", marginLeft: "16px" }}>Calcium</p>
          <p
            style={{
              border: "none",
              borderTop: "3px dotted gray",
              color: "gray",
              marginTop: "15px",
              height: "1px",
              width: "72%",
              marginLeft: "87px",
            }}
          ></p>
          <p style={{ display: "grid", color: "#939393", fontSize: "18px" }}>
            Daily 1 Tablet
          </p>
        </div>
        <p style={{ color: "#939393", fontSize: "18px", float: "right" }}>
          <Button
            style={{
              borderRadius: "10px 0px 20px 0px",
              backgroundColor: "#83AF40",
              color: "#FFFFFF",
              width: "135px",
              height: "36px",
            }}
          >
            View
          </Button>
        </p>
      </div>
      {/* medication ends */}
      {/* health tips */}
      <p
        style={{
          marginLeft: "40px",
          font: "normal normal normal 36px/40px Roboto",
          marginTop: "20px",
        }}
      >
        Health Tips
      </p>
      <div
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          height: "176px",
          width: "1400px",
          marginLeft: "35px",
          boxShadow: "0px 3px 10px #00000021",
          borderRadius: "20px",
          opacity: "1",
          marginTop: "35px",
          padding: "15px",
        }}
      >
        <h1>Plan your meals and snacks</h1>
        <p
          style={{
            color: "#939393",
            font: "normal normal normal 22px/40px Roboto",
            paddingLeft: "20px",
          }}
        >
          Eating a healthy breakfast and allocating more calories earlier in the
          day reduces cardiovascular disease risk. People who skip breakfast are
          more likely to be obese, have inadequate nutrition, show evidence of
          impaired glucose metabolism or be diagnosed with diabetes
        </p>
      </div>
      {/* health tips ends  */}
      {/* work up */}
      <div
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          height: "176px",
          width: "1400px",
          marginLeft: "35px",
          boxShadow: "0px 3px 10px #00000021",
          borderRadius: "20px",
          opacity: "1",
          marginTop: "35px",
          padding: "15px",
        }}
      >
        <h1>Work up a sweat</h1>
        <p
          style={{
            color: "#939393",
            font: "normal normal normal 22px/40px Roboto",
            paddingLeft: "20px",
          }}
        >
          To improve overall cardiovascular health, the AHA suggests 30 minutes
          of moderate exercise, five days per week. You can even divide this
          time into two or three segments of 10 to 15 minutes per day.
        </p>
      </div>
      {/* work up ends */}
      {/* start small */}
      <div
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          height: "176px",
          width: "1400px",
          marginLeft: "35px",
          boxShadow: "0px 3px 10px #00000021",
          borderRadius: "20px",
          opacity: "1",
          marginTop: "35px",
          padding: "15px",
        }}
      >
        <h1>Start small</h1>
        <p
          style={{
            color: "#939393",
            font: "normal normal normal 22px/40px Roboto",
            paddingLeft: "20px",
          }}
        >
          Walking is the simplest positive change you can make to improve your
          heart health. In addition to reducing heart disease and stroke risks,
          walking also improves blood pressure, enhances your mental well-being,
          and reduces risk for breast and colon cancer.
        </p>
      </div>
      {/* start small ends  */}
      {/* prescription history */}
      <div>
        <p
          style={{
            marginLeft: "40px",
            font: "normal normal normal 36px/40px Roboto",
            marginTop: "20px",
          }}
        >
          Prescription History
          <p style={{ float: "right" }}>
            <ExpandLessIcon style={{ width: "110px", height: "60px" }} />
          </p>
        </p>
      </div>
      <div
        style={{
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          height: "235px",
          width: "1400px",
          marginLeft: "35px",
          boxShadow: "0px 3px 10px #00000021",
          borderRadius: "20px",
          opacity: "1",
          marginTop: "35px",
          padding: "15px",
        }}
      >
        <p
          style={{
            color: "#939393",
            font: "normal normal normal 22px/40px Roboto",
            paddingLeft: "20px",
            display: "flex",
          }}
        >
          <div style={{ display: "grid" }}>
            <img src={prescription} style={{ width: "176px", height: "180px" }} />
            <span style={{ paddingLeft: "55px" }}>Dalal</span>
          </div>
          <div style={{ display: "grid" }}>
            <img src={prescription} style={{ width: "176px", height: "180px" }} />
            <span style={{ paddingLeft: "55px" }}>Dina</span>
          </div>
        </p>
        <p
          style={{
            width: "50px",
            height: "50px",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 10px #00000045",
            borderRadius: "50%",
            float: "right",
          }}
        >
          <img
            src={up_arrow}
            style={{
              width: "30px",
              height: "30px",
              marginLeft: "10px",
              marginTop: "7px",
            }}
          />
        </p>
      </div>
      {/* prescription history ends */}
      <Modal
        className="modal-profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <PrescriptionModal/>
        {/* {((<EditProfileModal />)||(<PrescriptionModal/>))} */}
      </Modal>
    </div>
  );
}
export default PregnantMotherProfile;
