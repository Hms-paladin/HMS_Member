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
function PregnantMotherProfile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      <div>
        <Menu
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
        </Menu>
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
      {/* family ends */}
      {/* family details */}
      <div
        style={{
          background: "#F0F0F0 0% 0% no-repeat padding-box",
          height: "150px",
          width: "1450px",
          boxShadow: "0px 3px 10px #00000021",
          borderRadius: "20px",
          opacity: "1",
          marginTop: "35px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={1}>
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
        <Grid container spacing={3}>
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
          <Grid item xs={1}>
            <img
              src={insurance_icon}
              style={{
                width: "40px",
                height: "40px",
                color: "#83AF40",
                marginLeft: "30px",
              }}
            />
          </Grid>
          Insurance
        </Grid>
      </div>

      <Modal
        className="modal-profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <EditProfileModal />
      </Modal>
    </div>
  );
}
export default PregnantMotherProfile;
