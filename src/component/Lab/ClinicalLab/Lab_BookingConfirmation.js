import React, { useState, useEffect } from 'react'
import Nurseimage1 from '../../../images/pharmacy.png'
import Nurseimage2 from '../../../images/nurse.png'
import Nurseimage3 from '../../../images/doctorappoinment.png'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import Labelbox from '../../../helpers/labelbox/labelbox'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Location from '../../../images/pin.png'
import './Lab_BookingConfirmation.scss'
import ConfirmationModal from './Lab_ConfirmationModal'
import AddMember from './AddMember'
import CloseIcon from '@material-ui/icons/Close';
import { GetPatientProfile } from "../../../actions/PatientProfileAction"
import { Modal } from 'antd'
import moment from 'moment';
import { connect, useDispatch } from "react-redux";
function BookingConfirmation(props) {
  // modal functions
  const dispatch = useDispatch();
  const [modalOpen, setmodalOpen] = React.useState(false)
  const[members,setMembers]=React.useState([])
  const BookingDet = props.Params;
  console.log(props.Params, "rrrrrrrrr")
  const patient_name = JSON.parse(localStorage.getItem("patient_name"));
  const members_name = JSON.parse(localStorage.getItem("IsMember"));
  const ModalOpenClick = () => {
    BookingDet[0].PatientName = tempname;
    BookingDet[0].IsMember = 2;
    members_name.map((item) => {
      if (item == tempname) {
        BookingDet[0].IsMember = 1;
      }
    })
    setmodalOpen(true)
  }
  // useEffect(() => {
  //   let test_items = []
  //   if (props.Params.LabBookedTestData.length > 0) {
  //     props.Part_Book_Det.LabBookedTestData.map((data) => {
  //       test_items.push(data.lab_test_name);
  //       setTest(test_items)
  //     })
  //   }
  //   else{setTest([])}
  // }, [props.Params])
  const ModalCloseClick = () => {
    setmodalOpen(false)
  }
  useEffect(() => {
    dispatch(GetPatientProfile())
  }, [])

  useEffect(() => {
    let Member = []
    props.GetPatientProfile.map((data) => {
      data.patientmemberDetails.map((item) => {
        Member.push({Mem_name:item.name,Mem_Img:item.patientMemberImage})
      })
    })
    console.log(Member,"member")
    setMembers(Member)
  }, [props.GetPatientProfile])


  const [tempname, setTempName] = useState(patient_name)
  // end
  const images = [
    { img: Nurseimage1, name: "Lina" },
    { img: Nurseimage2, name: "Aysa" },
    { img: Nurseimage3, name: "Saud" }
  ]
  const [editOpen, seteditOpen] = React.useState(false)
  const [HideAdrs, setHideAdrs] = React.useState(false)
  const [BookOpen, setBookOpen] = React.useState(false)
  function EditClick() {
    seteditOpen(true)
  }
  function SaveClick() {
    seteditOpen(false)
  }

  function BookClick() {
    setBookOpen(true)
  }
  function BookClose() {
    setBookOpen(false)
  }
  // elipse function
  const ElipseOpen = () => {
    setHideAdrs(!HideAdrs)
  }

  function NameChange(data) {
    setTempName(data)
  }



  


  console.log(tempname, "tempname")
  console.log(BookingDet, "ppppp")
  console.log(members_name, "members_name")
  return (
    <div className="lab_booking_confir_root">
      <div className="member_parent_div">
        <div className="mem_left_icon"><ChevronLeftIcon className="mem_left" /></div>
        {members.map((data) => {
          return (
            <div className="nurse_img_cont">
              <img src={data.Mem_Img} className="mem_img" />
              <div className="mem_name">{data.Mem_name}</div>
            </div>
          )
        })}
        <div className="add_plus_div"><div className="add_member" onClick={BookClick}><AddIcon /></div>
          <div className="mem_name">New</div>
        </div>
      </div>
      {BookOpen === true ? <AddMember BookClose={BookClose} /> : null}
      <div className="confir_div"><div style={{ fontSize: "18px", fontWeight: "600" }}>Booking Confirmation</div><div style={{ color: "#83AE40", fontWeight: "600" }}>{BookingDet[0].LabName}<span><img src={Location} className="location_img" /></span></div></div>
      {/* form details */}

      <Form className="form_items">
        <FormGroup row>
          <Label for="exampleEmail" sm={6} >Name</Label>
          <Col sm={6}>
            {editOpen === false ? <label className="Nurse_form_de">{tempname}</label>
              : <Labelbox type="text" value={tempname} changeData={(e) => NameChange(e)} />}
            {editOpen === false ? <EditIcon className="edit_nur_name" onClick={EditClick} /> :
              <SaveIcon className="edit_nur_name" onClick={SaveClick} />}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={6} >Test</Label>
          <Col sm={6}>
            {/* <label className="Nurse_form_de">{BookingDet[0].PackageType}</label>
             */}

            {BookingDet[0].testItems.map((data, index) => {
              return (
                <>
                  {index == 0 ? <label className="Nurse_form_de">{data}</label> :
                    <label className="Nurse_form_de">{"," + data}</label>}
                </>
              )
            })}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={6} > Date</Label>
          <Col sm={6}>
            <label className="Nurse_form_de">{moment(BookingDet[0].TestDate).format("DD-MM-YYYY")}</label>
          </Col>
        </FormGroup>


        <FormGroup row>
          <Label for="exampleEmail" sm={6} > Time</Label>
          <Col sm={6}>
            <label className="Nurse_form_de">{moment(BookingDet[0].TestTime, "HH:mm").format("hh:mm A")}</label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={6} >Address</Label>
          <Col sm={6}>
            <div>
              {HideAdrs ? <label className="Nurse_form_de">{BookingDet[0].LabAddr}</label> :
                <label className="Nurse_form_de">{BookingDet[0].LabAddr}</label>} <span className="elipse" onClick={ElipseOpen}>...</span></div>
          </Col>
        </FormGroup>

      </Form>
      <CloseIcon className="add_close_icon" onClick={() => props.ConfirmClose()} />
      <div style={{ textAlign: "center", padding: "10px 10px" }}><Button className="nurse_book_btn" onClick={ModalOpenClick}>Book</Button></div>
      <Modal
        title={<div className="bookconfirm">Booking Confirmation</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        width={700}
      // className="confirm_modal"
      // maxWidth={"md"}
      // style={{width:"800px"}}
      >
        <ConfirmationModal ModalCloseClick={ModalCloseClick} Params={BookingDet} />
      </Modal>
    </div>

  )
}
const mapStatetoProps = (state) => ({
  GetPatientProfile: state.PatientProfileReducer.getPatientProfile || [],
})
export default connect(mapStatetoProps)(BookingConfirmation);