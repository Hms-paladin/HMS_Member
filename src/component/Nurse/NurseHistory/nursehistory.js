import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../../helpers/labelbox/labelbox'
import { Switch, Input, Modal } from 'antd';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/nurse.png'
import Nurse_2 from '../../../images/lab.png'
import search from '../../../images/search.svg'
import Sort from '../../../images/sort.svg'
import Percentage from '../../../images/percentage.svg'
import { NavLink, useRouteMatch, useParams } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import RangeCalendar from './RangeCalendar'
import Slider from '@material-ui/core/Slider';
import Nurse_ad from '../../../images/Nurse_ad.png'
import './nursehistory.scss';
import { useDispatch, connect } from "react-redux";
import { GetPatientNurseSearch, GetNationalityforNurse, GetMinCostNurse, GetMinExperienceNurse } from '../../../actions/nursingmoduleaction';
import ValidationLibrary from "../../../helpers/validationfunction";
const Genders = [
    {
        id: 1,
        gender: "Male"
    },
    {
        id: 2,
        gender: "Female"
    }
]

function Nursehistory(props) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const errmsg = false;
    const { Search } = Input;
    const [toggleOpen, settoggleOpen] = React.useState(false)
    const [nationality, setNationality] = useState({})
    const [experience, setExperience] = useState({})
    const [cost, setCost] = useState({})
    const [dateRange, setDateRange] = useState([])
    const [nurseDetails, setNurseDetails] = useState([])
    const [searchdata, setSearchdata] = useState()
    const [nurseField, setNurseField] = useState({
        nationality: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        gender: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        }
    })

    const toggleClick = () => {
        settoggleOpen(!toggleOpen)
    }




    // const changeDynamic = (data) => {
    //     console.log(data, "datadata")
    // }
    const NurseHistory = [
        {
            id: 1,
            name: "Rose",
            exp: 5,
            age: 27,
            duty: "Baby Care",
            review_p: 4.2,
            review: "15 reviews",
            amt: 480,
            img: <img src={Nurse} style={{ width: "100%", height: "100%" }} />
        },
        {
            id: 2,
            name: "Reemy",
            exp: 4,
            age: 29,
            duty: "Elderly Care",
            review_p: 4.5,
            amt: 550,
            review: "12 reviews",
            img: <img src={Nurse_2} style={{ width: "100%", height: "100%" }} />
        }
    ]

    const [openmodal, setopenmodal] = React.useState(true)

    useEffect(() => {
        dispatch(GetPatientNurseSearch())
        dispatch(GetNationalityforNurse())
        dispatch(GetMinExperienceNurse())
        dispatch(GetMinCostNurse())
        dispatch(GetPatientNurseSearch({
            "withoutFilter": "",
            "currentDate": "",
            "advanceFilter": "",
            "typeSearch": "",
            "searchContent": "",
            "eightHour": true,
            "costFilter": "",
            "experienceFilter": "",
            "minCost": "",
            "maxCost": "",
            "minExp": "",
            "maxExp": "",
            "genderFilter": "",
            "gender": "",
            "nationalityFilter": "",
            "nationalityId": "",
            "dateFilter": "",
            "fromDate": "",
            "toDate": "",
            "costBasedSorting": "",
            "costBasedSortingOrder": "",
            "expBasedSorting": "",
            "expBasedSortingOrder": "",
            "ageBasedSorting": "",
            "ageBasedSortingOrder": "",
            "pageno": 1,
            "limit": 10
        }))
    }, [])
    // console.log(cost, experience, nurseField, toggleOpen, dateRange, searchdata, "nurse")

    useEffect(() => {
        setCost(props.GetMinCostNurse[0])
        setExperience(props.GetMinExperienceNurse[0])
        setNurseDetails()
    }, [props.GetMinCostNurse, props.GetMinExperienceNurse])

    useEffect(() => {
        setNurseDetails(props.GetPatientNurseSearch[0]?.details)

    }, [props.GetPatientNurseSearch])

    useEffect(() => {
        let NationalityforNurse = [];
        props.GetNationalityforNurse.map((data) =>
            NationalityforNurse.push({ id: data.nationalityid, value: data.nationality })
        );
        setNationality({ NationalityforNurse });
    }, [props.GetNationalityforNurse])

    const CloseModal = () => {
        setopenmodal(false)
    }

    function Expvaluetext(value) {
        // console.log(value, "cost")
        return `${value}`;
    }

    function Costvaluetext(value) {
        // console.log(value, "cost")
        return `${value}`;
    }

    // const onSearch = value => console.log(value,);

    const onSearch = e => {
        setSearchdata(e.target.value)
    }

    console.log(dateRange, "search")

    function checkValidation(data, key) {
        var errorcheck = ValidationLibrary.checkValidation(
            data,
            nurseField[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: nurseField[key].validation,
        };



        setNurseField((prevState) => ({
            ...prevState,
            [key]: dynObj,
        }));
    }

    const addExperience = (data) => {
        setDateRange(data)
    }

    const searchNurse = () => {
        dispatch(GetPatientNurseSearch(cost, experience, nurseField, toggleOpen, dateRange, searchdata)).then((response) => {
        })

    }

    return (
        <>
            <Grid container className="nusre_hisparent">
                <Grid item xs={12} md={4} className="nurse_grid_items_p">
                    <div className="nurse_grid_items_div">
                        <div className="filter_fstdiv">
                            <div className="fli_head">Filter</div>
                            <div className="mnth_cost"><label className="fli">Monthly Cost Range</label><label className="mnth_amt">500 KWD</label></div>
                            <div>

                                <Slider
                                    defaultValue={50}
                                    getAriaValueText={Costvaluetext}
                                    aria-labelledby="discrete-slider-always"
                                    step={10}
                                    valueLabelDisplay="on"
                                />
                            </div>
                            <div className="mnth_secondcost"><label className="mnth_samt">200 KWD</label><label className="mnth_samt">600 KWD</label></div>
                            <div className="mnth_cost"><label className="fli">Experience</label><label className="mnth_amt">5 Years</label></div>
                            <div>
                                <Slider
                                    defaultValue={70}
                                    getAriaValueText={Expvaluetext}
                                    aria-labelledby="discrete-slider-always"
                                    step={10}
                                    valueLabelDisplay="on"
                                />
                            </div>
                            <div className="mnth_cost"><label className="mnth_samt">1 Year</label><label className="mnth_samt">25 Years</label></div>
                            <div style={{ marginTop: "15px" }}>
                                <Labelbox type="select" labelname="Nationality"
                                    dropdown={nationality.NationalityforNurse}
                                    changeData={(data) => checkValidation(data, "nationality")}
                                    value={nurseField.nationality.value}
                                    error={nurseField.nationality.error}
                                    errmsg={nurseField.nationality.errmsg} /></div>
                            <div className="mnth_cost" style={{ marginTop: "15px" }}>
                                <div className="l_gender_div">
                                    <Labelbox type="select" labelname="Gender"
                                        dropdown={[
                                            { id: 1, value: "Male" },
                                            { id: 2, value: "Female" },
                                        ]}
                                        changeData={(data) => checkValidation(data, "gender")}
                                        value={nurseField.gender.value}
                                        error={nurseField.gender.error}
                                        errmsg={nurseField.gender.errmsg}
                                    // dropdown={Gender.gender}
                                    // dropdown={[{ id: "1", value: "Male" }, { id: "2", value: "Female" }]}
                                    /></div>
                                <div><div className="fli">Duty Hours</div> <Switch checked={toggleOpen} onChange={toggleClick} unCheckedChildren={toggleOpen === false && "8 Hrs"} checkedChildren={toggleOpen && "12 Hrs"} /></div>
                            </div>
                        </div>
                        <div className="filter_fstdiv" style={{ marginTop: "10px" }}>
                            <div className="fli">Choose Date</div>
                            <div style={{ width: "100%" }}><RangeCalendar addExperience={(data) => addExperience(data)} /></div>
                            <div><Button className="apply_btn">Apply</Button></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={8} className="snd_part_nurhis">

                    <div style={{ position: "relative" }}><Input type="search " placeholder={"Search"} onChange={onSearch} className="srch_his" /><img src={search} onClick={searchNurse} style={{ position: "absolute", top: "7px", right: "17px" }} /></div>
                    <div className="nurse_dts"><div>
                        <span className="nur_age"><label>Age</label><img src={Sort} className="nur_his_sort" /></span>
                        <span className="nur_age"><label>Experience</label><img src={Sort} className="nur_his_sort" /></span></div>
                        <div><span className="nur_age"><label>Cost</label><img src={Sort} className="nur_his_sort" /></span>
                            <span className="nur_age"><label>Rating</label><img src={Sort} className="nur_his_sort" /></span></div>
                    </div>
                    {nurseDetails && nurseDetails.map((data, index) =>
                        <Paper className="nurse_list_div">
                            <div style={{ width: "22%" }}><div style={{ width: "100%", height: "100%", display: "flex" }}><div style={{ width: "150px" }}>
                                <NavLink to="/nursedetails"> <div style={{ width: "100%", height: "100%" }}>{data.profile_name}</div></NavLink>
                            </div></div></div>
                            <div className="scnd_chld">
                                <p className="nur_name">{data.name}</p>
                                <p>{data.age} Years/{data.exp} Yrs Exp</p>
                                <p>{data.skills}</p>
                            </div>
                            <div className="trd_chld">
                                <label className="permnth_amt">{data.Cost} KWD / Month</label>
                                <div style={{ padding: "40px 0px 0px 25px", display: "flex", justifyContent: "flex-end" }}>
                                    {/* <div className="review_div"><div className="nur_reviews">{data.review_p}</div><div className="count_review">{data.review}</div></div> */}
                                    <div style={{ position: "relative", top: "-7px", left: "3px" }}><img src={Percentage} style={{ width: "45px" }} /><div className="off_per"><p>5%</p><p className="off_txt">off</p></div></div>
                                </div>
                            </div>




                        </Paper>
                    )}

                </Grid>
            </Grid>
            <Modal
                visible={openmodal}
                onCancel={CloseModal}
                footer={false}
                title={false}
                centered
                width={1000}
                className="lab_ad_modal"
            >
                <div className="lab_ad_div_inside">
                    <img src={Nurse_ad} style={{ width: "100%", height: "100%" }} />
                    <div className="lab_ad_bth">
                        <Button onClick={CloseModal}>Book Now</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) =>
(
    {
        GetPatientNurseSearch: state.PatientNurseSearch.GetPatientNurseSearch,
        GetNationalityforNurse: state.PatientNurseSearch.GetNationalityforNurse,
        GetMinCostNurse: state.PatientNurseSearch.GetMinCostNurse,
        GetMinExperienceNurse: state.PatientNurseSearch.GetMinExperienceNurse


    }
);
export default connect(mapStateToProps)(Nursehistory);