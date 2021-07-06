import React from 'react'
import Nurse from '../../../images/nurse.png'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Divider from '@material-ui/core/Divider'
import Location from '../../../images/pin.png'
import './Lab_BookingHistoryModal.scss'
import moment from 'moment';
export default function BookingHistoryModal(props) {
  const Book_Details = props.History;
  var DateTime = Book_Details.cancel_date;
  if(DateTime!=null){
    var Cancel_DateTime = DateTime.split(" ");
  }
  else{Cancel_DateTime=["0000-00-00","00:00:00"]}
  
  const [HideAdrs, setHideAdrs] = React.useState(false)
  const ElipseOpen = () => {
    setHideAdrs(!HideAdrs)
  }
  console.log(props.History, "bbbbbbbbbbbb")
  return (
    <div>
      <div className="lab_repeat_div">
        <span><label className="lab_med_head">{Book_Details.Lab}</label>
          <img src={Location} /></span>
        <div>
          <span>{HideAdrs ? <label className="lab_addrs_elps">{Book_Details.vendor_address}</label> :
            <label className="lab_addrs_elps">{Book_Details.vendor_contact}</label>} <span className="elipse" onClick={ElipseOpen}>...</span></span>
        </div>
      </div>


      <Divider />
      <Form>
        <Row form>
          <Col md={4} sm={3}>
            <FormGroup>
              <p className="mem_con_namehead">Name</p>
              <p className="mem_con_name">{Book_Details.temp_member_name!=null?Book_Details.temp_member_name:Book_Details.patientName}</p>
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
              <p className="mem_con_namehead">Date</p><p className="mem_con_name">{moment(Book_Details.test_date).format("DD-MM-YYYY")}</p>
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
              <p className="mem_con_namehead">Test</p>
              {Book_Details.LabBookedTestData.map((data) => {
                return (<p className="mem_con_name">{data.lab_test_name}</p>)
              })}
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
              <p className="mem_con_namehead">Time</p>
              <p className="mem_con_name">{moment(Book_Details.test_time, "HH:mm").format("hh:mm A")}</p>
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
              <p className="mem_con_namehead">Address</p>
              <p className="mem_con_name">{Book_Details.vendor_address}</p>
            </FormGroup>
          </Col>
          <Col md={4} sm={3}>
            <FormGroup>
              <p className="mem_con_namehead">Cost (KWD)</p>
              <p className="mem_con_name">{Book_Details.total_amount}</p>
            </FormGroup>
          </Col>
          {Book_Details.cancel_status == 1 &&
            <>
              <Col md={4} sm={3}>
                <FormGroup>
                  <p className="mem_con_namehead">Cancelled Date</p>
                  <p className="mem_con_name">{moment(Cancel_DateTime[0]).format("DD-MM-YYYY")}</p>
                </FormGroup>
              </Col>
              <Col md={4} sm={3}>
                <FormGroup>
                  <p className="mem_con_namehead">Cancelled Time</p>
                  <p className="mem_con_name">{moment(Cancel_DateTime[1], "HH:mm").format("hh:mm A")}</p>
                </FormGroup>
              </Col></>
          }
          {Book_Details.is_rescheduled == 1 &&
            <>
              <Col md={4} sm={3}>
                <FormGroup>
                  <p className="mem_con_namehead">Rescheduled Date</p>
                  <p className="mem_con_name">{moment(Book_Details.changedRescheduleDate).format("DD-MM-YYYY")}</p>
                </FormGroup>
              </Col>
              <Col md={4} sm={3}>
                <FormGroup>
                  <p className="mem_con_namehead">Rescheduled Time</p>
                  <p className="mem_con_name">{moment(Book_Details.changedRescheduleTime, "HH:mm").format("hh:mm A")}</p>
                </FormGroup>
              </Col></>
          }

        </Row>
      </Form>
    </div>
  )
}