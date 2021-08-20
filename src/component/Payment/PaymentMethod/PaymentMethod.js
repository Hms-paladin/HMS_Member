import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './PaymentMethod.scss'
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Left from '../../../images/back.svg'
import Right from '../../../images/right.svg'
import Atm from '../../../images/atm.png'
import Logo from "../../../images/Logo.png";
import Knet from '../../../images/knet.jpg'
import Credit from '../../../images/credit.jpg'
import Labelbox from '../../../helpers/labelbox/labelbox';
import { NavLink } from 'react-router-dom'
import { Tabs, Radio } from 'antd';
import { Redirect, Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {PatientLabBooking} from '../../../actions/clinicalLabAction'
import {PatientTrainerBooking,PatientTrainerReschedule} from '../../../actions/trainerdetailsaction'
import moment from "moment";
const { TabPane } = Tabs;
function CancelPayment(props) {
  const dispatch = useDispatch();
  const location = useLocation()
  console.log(location.state,"stsststs")
  const [params, setParams] = useState()

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       mode: 'left',
  //     };
  //   }

  const [Mode, setMode] = useState('left')

  const handleModeChange = e => {
    const mode = e.target.value;
    setMode({ mode });
  };

  const payrReceivePush = () => {
    if(location.state.key=="ClinicalLab"){
      dispatch(PatientLabBooking(params))
    }
    if(location.state.key=="Trainer"){
      dispatch(PatientTrainerBooking(params))
    }
    if(location.state.key=="Reschedule"){
      dispatch(PatientTrainerReschedule(params))
    }
  };

  useEffect(()=>{
    let dataToPass=[]
    if(location.state.key=="ClinicalLab"){
      dataToPass.push(
        {
          Lab_vendor_id: location.state!=null&&location.state.Confirm_details[0].Lab_vendor_id,
          TestDate: location.state!=null&&location.state.Confirm_details[0].TestDate,
          TestTime: location.state!=null&&location.state.Confirm_details[0].TestTime,
          TotalAmt: location.state!=null&&location.state.Confirm_details[0].cost,
          isMember: location.state!=null&&location.state.Confirm_details[0].IsMember,
          MemberName: location.state!=null&&location.state.Confirm_details[0].PatientName,
          test: location.state!=null&&location.state.Confirm_details[0].TestName
        }
      )
      setParams(dataToPass)
    }
    if(location.state.key=="Trainer"){
      setParams(location.state.Trainer)
    }
    if(location.state.key=="Reschedule"){
      let trainer_info=location.state.Trainer;
      let resch_info=location.state.ReschInfo;
      dataToPass.push({
        "oldBookingId":trainer_info.trainerBookingId,
        "patientId":trainer_info.patient_id,
        "trainerId":trainer_info.trainer_id,
        "packageId":trainer_info.package_id,
        "appointmentScheduleId":trainer_info.appointment_id,
        "fromDate":moment(resch_info.FromDate).format('YYYY-MM-DD'),
        "toDate":moment(resch_info.ToDate).format('YYYY-MM-DD'),
        "bookedDate":trainer_info.book_date,
        "amount":trainer_info.amount,
        "fromTime":trainer_info.from_time,
        "toTime":trainer_info.to_time,
        "isVIP":trainer_info.is_vip,
        "trainingMode":trainer_info.training_mode,
        "paymentStatus":trainer_info.payment_status,
        "isMember":1,
        "tempMemberName":"Edwin",
        "name":"Edwin",
        "dob":"1997-07-02",
        "gender":"M",
        "height":"175",
        "heightUnit":"CM",
        "weight":"60",
        "weightUnit":"Kg",
        "bmi":"120",
        "intakeCal":"10",
        "durationDays":"10",
        "anyMedication":"any medication",
        "anyDisease":"",
        "anySurgery":"",
        "anyGoals":"",
        "goalWeight":"70",
        "goalWeightUnit":"Kg",
        "parrentPatientId":"1"
      })
      setParams(dataToPass)
    }
  },[location])

  const { mode } = Mode;
  console.log(params,location.state.Trainer,location.state.ReschInfo, "params")
  return (
    <div className="PaymentMethod">
      <div className="option_container">
        <div><p className="select_text">Select Option to Pay <span className="option_amt">55 KWD</span></p></div>

      </div>
      <div className="payment_method_container">
        <p className="select_pay_text">Please Select a Payment Method</p>
        <Divider light className="select_divider" />
        <Grid container className="saved_cards_container">
          <Grid item xs={12} md={5} className="payment_method_child">
            <p className="saved_cards">Saved Cards</p>
            <div className="saved_cards_parent">
              <img src={Right} className="card_move" />
              <div className="debit_container">
                <div className="debit_child">
                  <img src={Atm} className="deb_img" />
                </div>
              </div>
              <div className="pay_carddetails">
                <h1 style={{ fontSize: "32px" }}>**** **** **** 3118</h1>
                <div className="pay_carddate">
                  <span>08/18</span>
                  <span style={{ marginLeft: "30px" }}>07/23</span>
                </div>
                <h4>Dalal</h4>
              </div>
              <img src={Left} className="card_move" />
            </div>
          </Grid>
          <Grid item xs={8} md={5}>
            <div className="payment_method">
              <div>
                <Radio.Group onChange={() => handleModeChange()} value={Mode} style={{ marginBottom: 8 }}>

                </Radio.Group>
                <Tabs defaultActiveKey="1" tabPosition={Mode} style={{ height: 260 }}>
                  {/* {[...Array(3).keys()].map(i => (
            <TabPane tab={`${i===0?"Credit":i===1?"Knet":i===2?"Credit":""}`} key={i}> */}
                  <TabPane tab={<span><label className="l_list">Wallet</label><img src={Logo} className="l_pay" /></span>} key={1}>
                    <div className="divider_line"></div>
                    <div className="payment_method_list">
                      <Labelbox type="text" labelname="Card Number" placeholder="1245-1258-4567-7865" />
                      <Labelbox type="text" labelname="Card Holder Name" placeholder="DALAL" />
                      <Grid container>
                        <Grid item md={8} sm={8}>
                          <div className="select_expiry_date"><Labelbox type="select" optionValue="07" labelname="Expiry Date" /><span className="select_labelbox"><Labelbox type="select" optionValue="2023" /></span></div>
                        </Grid>
                        <Grid item md={4} sm={4}>
                          <div className="payment_ccv">
                            <Labelbox type="number" labelname="CVV" placeholder="202" />
                          </div>
                        </Grid>
                      </Grid>
                    </div>


                  </TabPane>
                  <TabPane tab={<span><label style={{ paddingRight: "23px" }}>Knet</label><img src={Credit} className="l_pay" /></span>} key={2}>

                  </TabPane>
                  <TabPane tab={<span><label style={{ paddingRight: "18px" }}>Credit</label><img src={Knet} className="l_pay" /></span>} key={3}>
                  </TabPane>
                  {/* ))} */}
                </Tabs>
              </div>


            </div>
          </Grid>
          <Grid item xs={4} md={2}>
            <div className="summery_parent">
              <div className="summery_div">
                <p className="summery_text">Summary</p>
                <div className="sub_total_div"><p>SubTotal</p><span>55</span></div>
                <Divider />
                <div className="sub_total_div"><p>SubTotal</p><span>55</span></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="pay_now_container"><Button className="pay_cancel">Cancel Payment</Button><Link to={{ pathname: "/paymentreceive" }}><Button className="pay_now_button" onClick={() => payrReceivePush()}>Pay Now</Button></Link></div>
    </div>
  )
}
const mapStatetoProps = (state) => ({
  PatientLabBooking: state.clinicalLabReducer.PatientLabBooking || [],
})
export default connect(mapStatetoProps)(CancelPayment);