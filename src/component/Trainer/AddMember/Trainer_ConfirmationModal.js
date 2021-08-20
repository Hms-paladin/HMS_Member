import React, { useState, useEffect } from 'react'
import './Trainer_ConfirmationModal.scss'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/Diet_b.png'
import Trainer from "../../../images/trainer.png";
import { Col, Form, FormGroup, Label, Input, Row } from 'reactstrap';
// import PaymentMethod from '../../Pharmacy/PaymentMethod/PaymentMethod'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import Internet from '../../../images/internet.svg'
import Gym from '../../../images/gym.svg'
import { ReactSVG } from 'react-svg'
import moment from 'moment';
import { Redirect, Link } from "react-router-dom";
export default function ConfirmationModal(props) {

  const [HideAdrs, setHideAdrs] = React.useState(false)
  const [Trainer, setTrainer] = useState(props.Params)
  const[ReschInfo,setReschInfo]=useState(props.Resch_Info&&props.Resch_Info)
  // elipse function
  const ElipseOpen = () => {
    setHideAdrs(!HideAdrs)
  }
  console.log(Trainer, "Params")
  console.log(props.Origin && props.Origin,ReschInfo, "origin")
  return (
    <div className="booking_confirm">
      {/* <div className="bookconfirm">BookingConfirmation</div> */}
      <Grid container spacing={4} className="book_confirm_container">
        <Grid item sm={12} md={3} className="confirm_nurse_imggrid">
          <div className="Nurse_img_div">
            <img src={Trainer.vendor_profile_path} className="confir_nurse" />
            <div className="confirm_b_name"></div>

          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <Form>
            <Row form>
              <Col md={3} sm={6}>
                <FormGroup>
                  <p className="mem_con_namehead">Name</p>
                  <p className="mem_con_name">{Trainer.patientName}</p>
                </FormGroup>
              </Col>
              <Col md={3} sm={6}>
                <FormGroup>
                  <p className="mem_con_namehead">Trainer</p>
                  {/* <p className="mem_con_name">Jabriya</p>  */}

                  <label className="mem_con_name">{Trainer.trainerName}</label>
                </FormGroup>
              </Col>
              {props.Origin == "Trainer_Booking" &&
                <>
                  <Col md={3} sm={6}>
                    <FormGroup>
                      <p className="mem_con_namehead">From Date</p>
                      <p className="mem_con_name">{moment(Trainer.from_date).format("DD-MM-YYYY")}</p>
                    </FormGroup>
                  </Col>
                  <Col md={3} sm={6}>
                    <FormGroup>
                      <p className="mem_con_namehead">To Date</p>
                      <p className="mem_con_name">{moment(Trainer.to_date).format("DD-MM-YYYY")}</p>
                    </FormGroup>
                  </Col>
                </>
              }

              {props.Origin == "reshedule" &&
                <>
                  <Col md={3} sm={6}>
                    <FormGroup>
                      <p className="mem_con_namehead">From Date</p>
                      <p className="mem_con_name">{moment(props.Resch_Info.FromDate).format("DD-MM-YYYY")}</p>
                    </FormGroup>
                  </Col>
                  <Col md={3} sm={6}>
                    <FormGroup>
                      <p className="mem_con_namehead">To Date</p>
                      <p className="mem_con_name">{moment(props.Resch_Info.ToDate).format("DD-MM-YYYY")}</p>
                    </FormGroup>
                  </Col>
                </>
              }

              <Col md={3} sm={6}>
                <FormGroup>
                  <p className="mem_con_namehead">Time</p>
                  <p className="mem_con_name">{moment(Trainer.from_time, "HH:mm").format("hh:mm A") + " to " +
                    moment(Trainer.to_time, "HH:mm").format("hh:mm A")}</p>
                </FormGroup>
              </Col>
              <Col md={3} sm={6}>
                <FormGroup>
                  <p className="mem_con_namehead">Sessions</p>
                  <p className="mem_con_name">{Trainer.tr_session}</p>
                </FormGroup>
              </Col>
              <Col md={3} sm={6}>
                <FormGroup>
                  <p className="mem_con_namehead">Training Location</p>
                  <div className="tainerlist_home_inner_booking">
                    {Trainer.training_mode == 1 && <div className="home_icon_inner_p"><div><HomeIcon /><div>Home</div></div></div>}
                    {Trainer.training_mode == 2 && <div className="internet_div_tra_inner_p"><div className="inter_net_img"><ReactSVG src={Internet} /><div>Online</div></div></div>}
                    {Trainer.training_mode == 3 && <div className="internet_div_gym_inner_p"><div className="inter_net_img"><ReactSVG src={Gym} /><div>Centre</div></div></div>}
                  </div>
                </FormGroup>
              </Col>
              <Col md={3} sm={6}>
                <FormGroup>
                  <p className="mem_con_namehead">Cost (KWD)</p>
                  <p className="mem_con_name">{Trainer.amount}</p>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Grid>
        {props.Origin == "Trainer_Booking" &&
        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <Link to={{ pathname: "/paymentmethod", state: { Trainer, key: "Trainer" } }}><Button className="confirm_b_btn">Confirm</Button></Link>
        </Grid>}
        {props.Origin == "reshedule" &&
        <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
          <Link to={{ pathname: "/paymentmethod", state: { Trainer,ReschInfo,key: "Reschedule" } }}><Button className="confirm_b_btn">Confirm</Button></Link>
        </Grid>}
      </Grid>
    </div>
  )
}
