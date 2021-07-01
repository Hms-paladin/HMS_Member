import React, { useEffect, useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Location from '../../../images/pin.png'
import Labelbox from '../../../helpers/labelbox/labelbox'
import './Lab_Reschedule.scss'
import moment from 'moment';
import ValidationLibrary from "../../../helpers/validationfunction"
export default function Lab_Reschedule(props) {
  const [HideAdrs, setHideAdrs] = React.useState(false)
  const ElipseOpen = () => {
    setHideAdrs(!HideAdrs)
  }
  const Book_info = props.Part_Book_Det;
  useEffect(()=>{
    reschedule.Date.value="";
    reschedule.Time.value="";
    setReschedule((prevState) => ({
      ...prevState,
  }));
  },[props.Part_Book_Det])
  const [reschedule, setReschedule] = useState({
    Date: {
      value: "",
      validation: [{ name: "required" }],
      error: null,
      errmsg: null,
    },
    Time: {
      value: "",
      validation: [{ name: "required" }],
      error: null,
      errmsg: null,
    }
  })

  const checkValidation = (data, key) => {

    var errorcheck = ValidationLibrary.checkValidation(
        data,
        reschedule[key].validation
    );
    let dynObj = {
        value: data,
        error: !errorcheck.state,
        errmsg: errorcheck.msg,
        validation: reschedule[key].validation,
    };

    setReschedule((prevState) => ({
        ...prevState,
        [key]: dynObj,
    }));
}
console.log(reschedule,"reschedule")
  return (
    <div className="lab_reshedule_root">
      <div className="header_reschedule">
        <div style={{ fontSize: "18px", fontWeight: "600" }}>Booking Confirmation</div>
        <div style={{ color: "#83AE40", fontWeight: "600" }}>{Book_info.Lab}<span><img src={Location} className="location_img" /></span></div>
      </div>
      <Form className="form_items">
        <FormGroup row>
          <Label for="exampleEmail" sm={6} >Name</Label>
          <Col sm={6}>
            <label className="Nurse_form_de">{Book_info.temp_member_name}</label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={6} >Test</Label>
          <Col sm={6}>
            <label className="Nurse_form_de">X-ray Teeth</label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={6} > Date</Label>
          <Col sm={6}>
            <label className="Nurse_form_de">{moment(Book_info.test_date).format("DD-MM-YYYY")}</label>
          </Col>
        </FormGroup>


        <FormGroup row>
          <Label for="exampleEmail" sm={6} > Time</Label>
          <Col sm={6}>
            <label className="Nurse_form_de">{moment(Book_info.test_time, "HH:mm").format("hh:mm A")}</label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={6} >Cost (KWD)</Label>
          <Col sm={6}>
            <label className="Nurse_form_de">{Book_info.total_amount}</label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={6} >Address</Label>
          <Col sm={6}>
            <div>
              <span>{HideAdrs ? <label className="Nurse_form_de">{Book_info.vendor_address}</label> :
                <label className="Nurse_form_de">{Book_info.vendor_address}</label>} <span className="elipse" onClick={ElipseOpen}>...</span></span></div>
          </Col>
        </FormGroup>

      </Form>
      <div className="res_td_pick">
        <div className="re_date">
          <Labelbox type="datepicker"
            changeData={(data) => checkValidation(data, "Date")}
            value={reschedule.Date.value}
            error={reschedule.Date.error}
            errmsg={reschedule.Date.errmsg} />
        </div>
        <div className="re_time">
          <Labelbox type="timepicker"
            changeData={(data) => checkValidation(data, "Time")}
            value={reschedule.Time.value}
            error={reschedule.Time.error}
            errmsg={reschedule.Time.errmsg} />
        </div>
      </div>
      <div className="re_btn_div"><Button className="lab_res_btn" onClick={() => props.ReOpenClose()}>Reschedule</Button></div>
    </div>
  )
}