import React from 'react';
import './ConfirmReschedule.css';
import Divider from '@material-ui/core/Divider';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Hospital from "../../../../images/BookaRoom/room_img.png";
import Pin from "../../../../images/pin.png";

 
export default  function ConfirmReshedule(){
    return(
      <div>
          <div className="confirmpage_head">
              <div style={{display:'flex'}} >
                  <div style={{marginRight:'38px'}}> 
                      <img src={Hospital}/>
                  </div>
                  <div style={{marginTop:'20px'}}>
                      <div style={{display:'flex'}}>
                        <p className="confirm_hos_head"> Mayo Clinic Hospital</p>
                        <img src={Pin} style={{width:'20px', height:'20px', marginTop:'8px'}}/>


                      </div>
                  <p style={{color:'grey', fontSize:'15px', marginRight:'25px'}}>Shaab Sea View</p>

                  </div>
               
              </div>
          </div>
          <Divider style={{margin:'8px'}}/>
          <Form>
              <Row form>
                  <Col md={3}>
                      <FormGroup>
                          <p className="confirm_heading">Name</p>
                          <p className="confirm_subhead">Dalal</p>
                      </FormGroup>
                  </Col>
                  <Col md={3}>
                      <FormGroup>
                          <p className="confirm_heading">Room Type</p>
                          <p className="confirm_subhead">Lulwa</p>
                      </FormGroup>
                  </Col>
                  </Row>
                  <h5>Existing Booking</h5>
                  <Row form>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Check In</p>
                          <p className="confirm_subhead">08 Dec 2020</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Check Out</p>
                          <p className="confirm_subhead">10 Dec 2020</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Total days</p>
                          <p className="confirm_subhead">2</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Cost Per Day (KWD)</p>
                          <p className="confirm_subhead">400</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Total Cost (KWD)</p>
                          <p className="confirm_subhead">1200</p>
                      </FormGroup>
                  </Col>
                  </Row>
                  <h5>Rescheduled Booking</h5>
                  <Row form>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Check In</p>
                          <p className="confirm_subhead">11 Dec 2020</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Check Out</p>
                          <p className="confirm_subhead">14 Dec 2020</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Total days</p>
                          <p className="confirm_subhead">4</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Room Type</p>
                          <p className="confirm_subhead">Lulwa</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Cost Per Day (KWD)</p>
                          <p className="confirm_subhead">400</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Total Cost (KWD)</p>
                          <p className="confirm_subhead">1200</p>
                      </FormGroup>
                  </Col>
                  </Row>
                  <Row form>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">Already paid (KWD)</p>
                          <p className="confirm_subhead">800</p>
                      </FormGroup>
                  </Col>
                  <Col md={2}>
                      <FormGroup>
                          <p className="confirm_heading">To Pay (KWD)</p>
                          <p className="confirm_subhead">400</p>
                      </FormGroup>
                  </Col>
              </Row>
          </Form>

      </div>
    )

}