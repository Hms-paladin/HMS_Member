import React, { useEffect, useState } from "react"
import Thumb from '../../../images/thumb.svg'
import Flag from '../../../images/flag.svg'
import Qualification from '../../../images/qualification.svg'
import Language from '../../../images/language.svg'
import Skills from '../../../images/skills.svg'
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';
import BookingConfirmation from './BookingConfirmation'
import DesignDuties from './DesignDuties'
import SliderComp from '../../../helpers/Slider/Slider';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import './NurseDetails.scss'
function NurseDetails(props) {
    const [proceed, setproceed] = React.useState(false)
    const [Duties, setDuties] = React.useState(false)
    const [HideAdrs, setHideAdrs] = React.useState(false)
    const [nurseDetails, setNurseDetails] = useState([])

    let { nurseId } = useParams()

    useEffect(() => {
        let nurse = []
        if (props.GetPatientNurseSearch[0]?.details[nurseId]) {
            nurse.push(props.GetPatientNurseSearch[0]?.details[nurseId])
        }
        setNurseDetails(nurse)
    }, [props.GetPatientNurseSearch, nurseId])

    console.log(nurseDetails.length, "nurse")

    const ElipseOpen = () => {
        setHideAdrs(!HideAdrs)
    }
    function ProceedClick() {
        setproceed(true)
    }
    function DutiesClick() {
        setDuties(true)
    }
    var settings = {
        dots: true
    };
    return (
        <div style={{ width: "100%" }} className="nurse_de_parent">
            {nurseDetails.length > 0 && nurseDetails.map((val) => {
                return (
                    <>
                        <div className="nursede_parent">
                            <div style={{ height: "250px", width: "100%" }}>
                                <img src={val.profile_name} className="Pro_tra_img" />
                            </div>
                        </div>
                        <Grid container>
                            <Grid item sm={4} md={4} className="nurse_de_fstgrid">
                                <div><img className="nurse_profile" src={val.profile_name} /></div>
                                <div className="nurse_de_fstdiv"><div className="nurse_de_fstitems"><div className="nurse_star_rating"><label>4.0</label><StarIcon /></div></div>
                                    <div className="nurs_review">161 Reviews</div>
                                    <div style={{ marginTop: "23px" }}><img src={Thumb} style={{ width: "25px" }} /><label className="review_per">93%</label><label>(15 reviews)</label></div>
                                </div>
                            </Grid>
                            <Grid item sm={4} md={4} className="grid_seconditem">
                                <div style={{ textAlign: "center" }}>
                                    <div className="nurs_de_name">{val.name}</div>
                                    <div><StarIcon className="star_fill" /><StarIcon className="star_fill" /><StarIcon className="star_fill" /><StarIcon className="star_fill" /><StarIcon className="start_emp_fill" /></div>
                                    <div style={{ fontSize: "22px", fontWeight: "600" }}>{val.age} Years / {val.gender}</div>
                                    <div style={{ color: "#666666", fontSize: "22px" }}>Wellness company</div>
                                    <div>{HideAdrs ? <label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label> : <label className="lab_adrs">Jabriya</label>}
                                        <span className="elipse" onClick={ElipseOpen}>...</span></div>
                                </div>
                            </Grid>
                            <Grid item sm={4} md={4} className="nurse_thirdgrid">
                                <div className="mnth_kwd">{val.Cost} KWD / Month</div><div className="exp_yrs">{val.experience} Years</div>
                            </Grid>
                            <Grid item sm={12} md={12} className="cmy_sup">
                                <SliderComp>

                                    {[...Array(5)].map((img, index) => (
                                        <div ><div>Dalal</div>
                                            <div>"I appreciate your timely support when I was in agony and facing a lot of anxiety.My heartfelt thank to wellness company".</div>
                                        </div>))}
                                </SliderComp>
                            </Grid>
                        </Grid>
                        {/* nurse information */}
                        <Grid container className="nurse_duties_container">
                            <Grid item sm={6} md={6}>
                                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Flag} style={{ width: "35px" }} /></div><div><p className="nurse_dehead">Nationality</p><p>{val.nationality}</p></div></div>
                                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Qualification} style={{ width: "35px" }} /></div><div><p className="nurse_dehead">Qualification</p><p>{val.qualification}</p></div></div>
                                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Language} style={{ width: "35px" }} /></div><div><p className="nurse_dehead">Languages</p><p>{val.language}</p></div></div>
                                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Skills} style={{ width: "35px" }} /></div><div><p className="nurse_dehead">Skills</p><p>{val.skills}</p></div></div>
                                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Flag} style={{ width: "35px" }} /></div><div><p className="nurse_dehead">Duty Hours</p><p>{val.eightHour ? "08:00 Hrs" : "12:00 Hrs"}</p></div></div>
                            </Grid>
                            {/* design duties */}

                            <Grid item sm={6} md={6}>
                                {proceed === false ?
                                    <DesignDuties ProceedClick={ProceedClick} /> :
                                    <div className="booking_confr"><BookingConfirmation DesignDuties={DutiesClick} Duties={Duties} /></div>}

                            </Grid>
                        </Grid>


                    </>
                )

            })}


        </div>
    )
}

const mapStateToProps = (state) =>
(
    {
        GetPatientNurseSearch: state.PatientNurseSearch.GetPatientNurseSearch,
    }
);
export default connect(mapStateToProps)(NurseDetails);