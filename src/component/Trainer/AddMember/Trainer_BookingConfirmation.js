import React, { useEffect, useState } from 'react'
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
import './Trainer_BookingConfirmation.scss'
import ConfirmationModal from '../AddMember/Trainer_ConfirmationModal'
import { GetMemberProfile } from "../../../actions/ProfileActions"
import AddMember from './AddMember'
import CloseIcon from '@material-ui/icons/Close';
import { Modal } from 'antd'
import { ReactSVG } from 'react-svg'
import Trainer from "../../../images/trainer.png";
import HomeIcon from '@material-ui/icons/Home';
import Internet from '../../../images/internet.svg'
import Gym from '../../../images/gym.svg'
import moment from 'moment';
import { Tabs,Upload} from 'antd';
import { connect, useDispatch } from "react-redux";
function BookingConfirmation(props) {

  console.log(props.BookingDet, "BookingDet")
  const dispatch = useDispatch();
  // modal functions
  const [modalOpen, setmodalOpen] = React.useState(false)
  const [tempname, setTempName] = useState('')
  const [trainer, setTrainer] = useState([])
  const [member, setMembers] = useState([])
  const ModalOpenClick = () => {
    trainer[0].tempMemberName = tempname;
    trainer[0].isMember = 2;
    member.map((item) => {
      if (item.Mem_name == tempname) {
        trainer[0].isMember = 1;
      }
    })
    setmodalOpen(true)
  }
  const ModalCloseClick = () => {
    setmodalOpen(false)
  }
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
  useEffect(() => {
    let training_det = [];
    dispatch(GetMemberProfile())
    training_det.push(
      {
        trainer_name: props.BookingDet.TrainerDetails.dataToC.trainerName,
        from_date: props.BookingDet.BookDate.sd,
        to_date: props.BookingDet.BookDate.ed,
        from_time: props.BookingDet.TrainerDetails.dataToChild.tr_from_time,
        to_time: props.BookingDet.TrainerDetails.dataToChild.tr_to_time,
        sessions: props.BookingDet.TrainerDetails.dataToChild.tr_session,
        address: props.BookingDet.TrainerDetails.dataToC.vendor_address,
        cost: props.BookingDet.TrainerDetails.dataToChild.tr_cost,
        trainerId: props.BookingDet.TrainerDetails.dataToC.trainerId,
        packageId: props.BookingDet.TrainerDetails.dataToChild.tr_package_id,
        appointmentScheduleId: props.BookingDet.TrainerDetails.dataToChild.appointmentScheduleId,
        bookedDate: moment(new Date()).format("YYYY-MM-DD"),
        isVIP: props.BookingDet.TrainerDetails.dataToChild.is_vip,
        trainingMode: props.BookingDet.TrainerDetails.dataToChild.tr_training_mode,
        profile: props.BookingDet.TrainerDetails.dataToC.vendor_profile_path,
        paymentStatus: 1,
        isMember: 2,
        tempMemberName: '',
      }
    )
    setTrainer(training_det)
  }, [])
  useEffect(() => {
    console.log(props.ProfileDetails, "ProfileDetails")
    let Member = [];
    props.ProfileDetails && props.ProfileDetails.map((data) => {
      setTempName(data.name)
      data.patientmemberDetails.map((item) => {
        Member.push({ Mem_name: item.name, Mem_Img: item.patientMemberImage })
      })
    })
    setMembers(Member)
  }, [props.ProfileDetails])

  console.log(trainer, member, "trainer")
  return (
    <div className="lab_booking_confir_root">
      <div className="member_parent_div">
        <div className="mem_left_icon"><ChevronLeftIcon className="mem_left" /></div>
        {member.map((data) => {
          return (
            <div className="nurse_img_cont" onClick={()=>setTempName(data.Mem_name)}>
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
      <div className="confir_div"><div style={{ fontSize: "18px", fontWeight: "600" }}>BookingConfirmation</div>
        <div style={{ color: "#83AE40", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>Burn IT<span style={{ color: "#939393", paddingLeft: "5px" }}>
          {/* icons */}
          {trainer && trainer.map((data) => {
            return (
              <>
                {data.trainingMode == 1 && <div className="home_icon_inner_p"><div><HomeIcon /><div>Home</div></div></div>}
                {data.trainingMode == 2 && <div className="internet_div_tra_inner_p"><div className="inter_net_img"><ReactSVG src={Internet} /><div>Online</div></div></div>}
                {data.trainingMode == 3 && <div className="internet_div_gym_inner_p"><div className="inter_net_img"><ReactSVG src={Gym} /><div>Centre</div></div></div>}
              </>
            )
          })}
          {/* end */}
        </span></div></div>
      {/* form details */}
      {trainer && trainer.map((data) => {
        return (
          <Form className="form_items">
            <FormGroup row>
              <Label for="exampleEmail" sm={6} >Name</Label>
              <Col sm={6}>
                {editOpen === false ? <label className="Nurse_form_de">{tempname}</label>
                  : <Labelbox type="text" value={tempname} changeData={(e) => setTempName(e)} />}
                {editOpen === false ? <EditIcon className="edit_nur_name" onClick={EditClick} /> :
                  <SaveIcon className="edit_nur_name" onClick={SaveClick} />}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={6} >Trainer</Label>
              <Col sm={6}>
                <label className="Nurse_form_de">{data.trainer_name}</label>

                {/* <EditIcon className="edit_nur_name"/> */}

              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={6} >From Date</Label>
              <Col sm={6}>
                <label className="Nurse_form_de">{data.from_date}</label>
              </Col>
            </FormGroup>


            <FormGroup row>
              <Label for="exampleEmail" sm={6} >To Date</Label>
              <Col sm={6}>
                <label className="Nurse_form_de">{data.to_date}</label>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleEmail" sm={6} >Time</Label>
              <Col sm={6}>
                <label className="Nurse_form_de">{moment(data.from_time, "HH:mm").format("hh:mm A") + " to " +
                  moment(data.to_time, "HH:mm").format("hh:mm A")}</label>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleEmail" sm={6} >Sessions</Label>
              <Col sm={6}>
                <label className="Nurse_form_de">{data.sessions}</label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={6} >Address</Label>
              <Col sm={6}>
                <label className="Nurse_form_de">{data.address}</label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={6} >Cost (KWD)</Label>
              <Col sm={6}>
                <label className="Nurse_form_de">{data.cost}</label>
              </Col>
            </FormGroup>

          </Form>)
      })}

      <CloseIcon className="add_close_icon" onClick={() => props.ConfirmClose()} />
      <div style={{ textAlign: "center", padding: "10px 10px" }}><Button className="nurse_book_btn" onClick={ModalOpenClick} >Book</Button></div>
      <Modal
        title={<div className="bookconfirm">Booking Confirmation</div>}
        visible={modalOpen}
        footer={false}
        onCancel={ModalCloseClick}
        width={900}
      // className="confirm_modal"
      // maxWidth={"md"}
      // style={{width:"800px"}}
      >
        <ConfirmationModal ModalCloseClick={ModalCloseClick} Params={trainer} />
      </Modal>
    </div>
  )
}
const mapStateToProps = (state) => ({
  ProfileDetails: state.GetProfileDetails.ProfileDetails || [],
});
export default connect(mapStateToProps)(BookingConfirmation)