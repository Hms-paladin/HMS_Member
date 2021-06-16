import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../../helpers/labelbox/labelbox'
import { Switch, Input, Modal } from 'antd';
import Button from '@material-ui/core/Button';
import InfiniteScroll from 'react-infinite-scroll-component';
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
    const [nurseCost, setNurseCost] = useState()
    const [nurseExp, setNurseExp] = useState()
    const [increament, setIncreament] = useState(10)
    // const [item, setItem] = useState({
    //     items: props.GetPatientNurseSearch[0]?.details,
    //     hasMore: true
    // })
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

    const [openmodal, setopenmodal] = React.useState(true)

    useEffect(() => {
        dispatch(GetPatientNurseSearch())
        dispatch(GetNationalityforNurse())
        dispatch(GetMinExperienceNurse())
        dispatch(GetMinCostNurse())
        dispatch(GetPatientNurseSearch())
    }, [])
    // console.log(cost, experience, nurseField, toggleOpen, dateRange, searchdata, "nurse")

    useEffect(() => {
        setCost(props.GetMinCostNurse[0])
        setExperience(props.GetMinExperienceNurse[0])
    }, [props.GetMinCostNurse, props.GetMinExperienceNurse])

    useEffect(() => {
        loopingRows()
    }, [props.GetPatientNurseSearch, increament])

    const loopingRows = () => {

        let rows = []
        for (let i = 0; i < increament; i++) {
            rows.push(props.GetPatientNurseSearch[0]?.details[i])
        }
        setNurseDetails(rows)
    }


    useEffect(() => {
        let NationalityforNurse = [];
        props.GetNationalityforNurse.map((data) =>
            NationalityforNurse.push({ id: data.nationalityid, value: data.nationality })
        );
        setNationality({ NationalityforNurse });
    }, [props.GetNationalityforNurse])

    const fetchMoreData = () => {
        console.log(increament <= props.GetPatientNurseSearch[0]?.details,"testing")
        if (nurseCost === 0 && nurseExp === 0 && nurseField.nationality.value === "" && nurseField.gender.value === "") {
            setTimeout(() => {
                if (increament <= props.GetPatientNurseSearch[0]?.details) {
                    setIncreament(increament + 10)
                    loopingRows()
                }
            }, 500);
        }
        console.log(nurseCost, nurseExp, nurseField.nationality.value, nurseField.gender.value, "checking")

    };

    const CloseModal = () => {
        setopenmodal(false)
    }

    function Expvaluetext(value) {
        setNurseExp(value)
        return `${value}`;
    }

    function Costvaluetext(value) {
        setNurseCost(value)
        console.log(value, "cost")
        return `${value}`;
    }

    const onSearch = e => {
        setSearchdata(e.target.value)
    }

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
        var searchrows = []
        props.GetPatientNurseSearch[0]?.details.filter((val, index) => {
            // || val.experience <= nurseExp || val.nationality_id === nurseField.nationality.value || val.gender === (nurseField.gender.value === 1 ? "Male" : "Female")

            if (val.Cost <= nurseCost || val.experience <= nurseExp || val.nationality_id === nurseField.nationality.value || val.gender === (nurseField.gender.value === 1 ? "Male" : "Female")) {
                searchrows.push(val)
            }
            // else {
            //     alert("tset")
            //     if (val.name === searchdata) {
            //         searchrows.push(val)
            //     }
            // }
        })
        console.log(searchrows, "onchange")
        setNurseDetails(searchrows)
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
                                    defaultValue={0}
                                    getAriaValueText={Costvaluetext}
                                    aria-labelledby="discrete-slider-always"
                                    step={10}
                                    valueLabelDisplay="on"
                                    max={5000}
                                />
                            </div>
                            <div className="mnth_secondcost"><label className="mnth_samt">200 KWD</label><label className="mnth_samt">{nurseCost} KWD</label></div>
                            <div className="mnth_cost"><label className="fli">Experience</label><label className="mnth_amt">5 Years</label></div>
                            <div>
                                <Slider
                                    defaultValue={0}
                                    getAriaValueText={Expvaluetext}
                                    aria-labelledby="discrete-slider-always"
                                    step={1}
                                    valueLabelDisplay="on"
                                    max={10}
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

                    <div style={{ position: "relative" }}><Input type="search " placeholder={"Search"} onChange={onSearch} className="srch_his" /><img src={search} onClick={searchNurse} style={{ position: "absolute", top: "7px", right: "17px", cursor: "pointer" }} /></div>
                    <div className="nurse_dts"><div>
                        <span className="nur_age"><label>Age</label><img src={Sort} className="nur_his_sort" /></span>
                        <span className="nur_age"><label>Experience</label><img src={Sort} className="nur_his_sort" /></span></div>
                        <div><span className="nur_age"><label>Cost</label><img src={Sort} className="nur_his_sort" /></span>
                            <span className="nur_age"><label>Rating</label><img src={Sort} className="nur_his_sort" /></span></div>
                    </div>

                    <InfiniteScroll
                        dataLength={nurseDetails && nurseDetails.length}
                        next={() => fetchMoreData()}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        height={500}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {console.log(nurseDetails, "nursnurseDetailseDetails")}
                        {nurseDetails && nurseDetails?.map((data, index) =>

                            <Paper className="nurse_list_div" key={index}>
                                <div style={{ width: "22%" }}><div style={{ width: "100%", height: "100%", display: "flex" }}><div style={{ width: "150px" }}>
                                    <NavLink to={`/nursedetails/${index}`}> <div style={{ width: "100%", height: "100%" }}><img className="NurseProfile" src={data?.profile_name}></img></div></NavLink>
                                </div></div></div>
                                <div className="scnd_chld">
                                    <p className="nur_name">{data?.name}</p>
                                    <p>{data?.age} Years/{data?.exp} Yrs Exp</p>
                                    <p>{data?.skills}</p>
                                </div>
                                <div className="trd_chld">
                                    <label className="permnth_amt">{data?.Cost} KWD / Month</label>
                                    <div style={{ padding: "40px 0px 0px 25px", display: "flex", justifyContent: "flex-end" }}>
                                        {/* <div className="review_div"><div className="nur_reviews">{data.review_p}</div><div className="count_review">{data.review}</div></div> */}
                                        <div style={{ position: "relative", top: "-7px", left: "3px" }}><img src={Percentage} style={{ width: "45px" }} /><div className="off_per"><p>5%</p><p className="off_txt">off</p></div></div>
                                    </div>
                                </div>
                            </Paper>
                        )}


                        {/* {this.state.items.map((i, index) => (
                            <div style={style} key={index}>
                                div - #{index}
                            </div>
                        ))} */}
                    </InfiniteScroll>


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