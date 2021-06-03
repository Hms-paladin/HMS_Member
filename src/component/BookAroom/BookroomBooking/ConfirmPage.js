// import React from 'react';
// import './ConfirmPage.css';
// import Divider from '@material-ui/core/Divider';
// import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
 
// export default  function ConfirmPage(){
//     return(
//       <div>
//           <div className="confirmpage_head">
//               <div style={{display:'flex'}}>
//                   <p className="confirm_hos_head"> Mayo Clinic Hospital</p>
//                   <span style={{color:'grey', fontSize:'15px', marginRight:'25px'}}>Shaab Sea View</span>
//               </div>
//           </div>
//           <Divider style={{margin:'8px'}}/>
//           <Form>
//               <Row form>
//                   <Col md={3}>
//                       <FormGroup>
//                           <p className="confirm_heading">Name</p>
//                           <p className="confirm_subhead">Dalal</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={3}>
//                       <FormGroup>
//                           <p className="confirm_heading">Room Type</p>
//                           <p className="confirm_subhead">Lulwa</p>
//                       </FormGroup>
//                   </Col>
//                   <h5>Existing Booking</h5>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Check In</p>
//                           <p className="confirm_subhead">08 Dec 2020</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Check Out</p>
//                           <p className="confirm_subhead">10 Dec 2020</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Total days</p>
//                           <p className="confirm_subhead">2</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Cost Per Day (KWD)</p>
//                           <p className="confirm_subhead">400</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Total Cost (KWD)</p>
//                           <p className="confirm_subhead">1200</p>
//                       </FormGroup>
//                   </Col>
//                   <h5>Rescheduled Booking</h5>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Check In</p>
//                           <p className="confirm_subhead">11 Dec 2020</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Check Out</p>
//                           <p className="confirm_subhead">14 Dec 2020</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Total days</p>
//                           <p className="confirm_subhead">4</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Room Type</p>
//                           <p className="confirm_subhead">Lulwa</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Cost Per Day (KWD)</p>
//                           <p className="confirm_subhead">400</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Total Cost (KWD)</p>
//                           <p className="confirm_subhead">1200</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">Already paid (KWD)</p>
//                           <p className="confirm_subhead">800</p>
//                       </FormGroup>
//                   </Col>
//                   <Col md={2}>
//                       <FormGroup>
//                           <p className="confirm_heading">To Pay (KWD)</p>
//                           <p className="confirm_subhead">400</p>
//                       </FormGroup>
//                   </Col>
//               </Row>
//           </Form>

//       </div>
//     )

// }



import React from 'react';
import './ConfirmPage.css';
import Divider from '@material-ui/core/Divider';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Modal} from 'antd';
export default function ConfirmPage(){
    return(
       <div>
        <div className="hospital_head">
            <div style={{display:'flex'}}>
                <p className="hos_name_haed">Mayo Clinic Hospital</p>
                {/* <RoomIcon className="loac_ion"/> */}
                </div>
                <span style={{color:'grey', fontSize:'15px', marginRight:'25px'}}>Shaab Sea View</span>
                </div>
                <Divider style={{margin:'8px'}}/> 
                <Form>
        <Row form>
          <Col md={2}>
            <FormGroup>
            <p className="modal_head">Name</p>
            <p className="mem_con_name">Dalal</p> 
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
                <p className="modal_head">Check In</p>
                <p className="mem_con_name">08 Dec 2020</p>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
               <p className="modal_head">Check Out</p>
               <p className="mem_con_name">08 Dec 2020</p>
            
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Room Type</p>
            <p className="mem_con_name">Lulwa</p>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
            <p className="modal_head">total Days</p>
                   <p className="mem_con_name">2</p>
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Cost Per Day(KWD)</p>
            <p className="mem_con_name">400</p>
           
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <p className="modal_head">Cost Per Day(KWD)</p>
            <p className="mem_con_name">800</p>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <p className="modal_head">Cancelled Date& Time</p>
            <p className="mem_con_name">27 Nov 2020 09.30AM</p>
            </FormGroup>
          </Col>
       
        
        </Row>
        </Form>  

         <label className="">Confirm</label>       
    
     
       </div>
    )
}

