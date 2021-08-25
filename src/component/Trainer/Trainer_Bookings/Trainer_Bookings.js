import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { Modal } from 'antd'
import HistoryButton from '../../../images/history-button.svg'
import Tc from '../../../images/tr_cat_image.png'
import './Trainer_Bookings.scss'
import HomeIcon from '@material-ui/icons/Home';
import { ReactSVG } from 'react-svg'
import Internet from '../../../images/internet.svg'
import Gym from '../../../images/gym.svg'
import Trainer from "../../../images/trainer.png";
import { connect, useDispatch } from "react-redux";
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom'
import VideocamIcon from '@material-ui/icons/Videocam';
import { PatientTrainingBookingDetials,PatientTrainerCancelBooking} from '../../../actions/trainerdetailsaction'
import RescheduleBooking from '../../Nurse/RescheduleBooking/RescheduleBooking';
function Tra_Bookings(props) {
    let history = useHistory()
    const dispatch = useDispatch();
    const [CancelOpen, setCancelOpen] = React.useState(false)
    const [HideAdrs, setHideAdrs] = React.useState(false)
    const [BookingInfo, setBookingInfo] = useState([])
    console.log("props training", props)

    const CancelClick = (id) => {
        dispatch(PatientTrainerCancelBooking(id))
        setCancelOpen(!CancelOpen)
    }
    // elipse function
    const ElipseOpen = () => {
        setHideAdrs(!HideAdrs)
    }
    const [ReOpen, setReOpen] = React.useState(false)
    const ReOpenClick = () => {
        setReOpen(true)
    }
    const ReOpenClose = () => {
        setReOpen(false)
    }
    const Reschedule=(index)=>{
        history.push({
            pathname: "/trainer_bookigreschedule",
            state: BookingInfo[index]
            
          })
    }
    const Schedule=(index)=>{
        history.push({
            pathname: "/trainer_myschedule",
            state: BookingInfo[index]
          })
    }
    useEffect(() => {
        dispatch(PatientTrainingBookingDetials())
    }, [])
    useEffect(() => {
        console.log(props.getPatientTrainerBookings, "getPatientTrainerBookings")
        setBookingInfo(props.getPatientTrainerBookings)
    }, [props.getPatientTrainerBookings])
    console.log(BookingInfo, "bokkkk")
    return (
        <div className="Tra_bookings_parentdiv">
            <div className="book_headdiv">
                <label className="book_h">Bookings</label><NavLink to="/Trainer_BookingHistory"><img src={HistoryButton} style={{ cursor: "pointer", width: "20px" }} /></NavLink>
            </div>
            {BookingInfo && BookingInfo.map((data,index) => {
                return (
                    <div className="bookhistory_list_parent">
                        <div className="diet_bookhistory_list">
                            <div className="book_diet_div">
                                <div>
                                    <div><img src={data.vendor_profile_path} className="book_nur_img" /></div>
                                    {/* icons */}
                                    <div className="tainerlist_home_inner_booking">
                                        {data.training_mode == 1 && <div className="home_icon_inner_p"><div><HomeIcon /><div>Home</div></div></div>}
                                        {data.training_mode == 2 && <div className="internet_div_tra_inner_p"><div className="inter_net_img"><ReactSVG src={Internet} /><div>Online</div></div></div>}
                                        {data.training_mode == 3 && <div className="internet_div_gym_inner_p"><div className="inter_net_img"><ReactSVG src={Gym} /><div>Centre</div></div></div>}
                                    </div>
                                </div>
                                {/* end */}
                                <div className="book_text_div">
                                    <p className="book_h_name">{data.trainerName}</p>
                                    <p style={{ color: "#AEADAD", fontSize: "15px" }}>{"34 Years / " + data.vendor_contact_gender}</p>
                                    <span><label className="book_h_name">Amount</label><label className="tc_amt_kwd">{data.amount + " KWD"}</label></span>
                                    <p style={{ color: "#AEADAD", fontSize: "15px" }}>{data.vendor_address}</p>
                                </div>
                            </div>
                            <div>
                                <div style={{ textAlign: "end", fontWeight: "500" }}>
                                    <div><p style={{ color: "#AEADAD", fontSize: "13px" }}>{moment(data.book_date).format("DD-MM-YYYY")}</p></div>
                                    <p style={{ fontSize: "15px", color: "#AEADAD" }}>{moment(data.from_time, "HH:mm").format("hh:mm A") + " to " + moment(data.to_time, "HH:mm").format("hh:mm A")}</p>
                                    <p style={{ fontSize: "20px" }}>Burn IT</p>
                                    <p style={{ fontSize: "20px" }}>{data.tr_session +" Sessions"} </p>
                                    <div>
                                        <label><VideocamIcon className="tra_vd_icon" /></label>
                                        <label style={{ color: "#F2951B", cursor: "pointer" }} onClick={()=>Schedule(index)}>My schedule</label>
                                        <label style={{ color: "#83AF40", margin: "0px 20px", cursor: "pointer" }} onClick={()=>Reschedule(index)}>Reschedule</label>
                                        <label className={CancelOpen ? "b_cancel_change" : "b_cancel"} onClick={()=>CancelClick(data.trainerBookingId)}>Cancel</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* To click cancel button to open this part */}
                        {CancelOpen ?
                            <div className="cancel_part_open">
                                <div className="cancel_part_div">
                                    <div className="amt_process">Add 100 KWD to Wallet</div>
                                    <div className="amt_process">Process Refund 100 KWD</div>
                                </div>
                            </div>
                            : null}

                    </div>
                )
            })}

        </div>
    )
}
const mapStateToProps = (state) => ({
    getPatientTrainerBookings: state.trainerListReducer.getPatientTrainerBookings || [],
});
export default connect(mapStateToProps)(Tra_Bookings)