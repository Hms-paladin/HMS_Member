import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from "react-router-dom";
import Labelbox from '../../../helpers/labelbox/labelbox'
import Grid from '@material-ui/core/Grid';
import './ClinicalLab.scss'
import Button from '@material-ui/core/Button';
import Lab_AddMember from './AddMember'
import Lab_BookingConfirmation from './Lab_BookingConfirmation'
import { connect, useDispatch } from "react-redux";
import ValidationLibrary from "../../../helpers/validationfunction"
import { GetLabTest, GetTimeValidation } from "../../../actions/clinicalLabAction"
import dateFormat from 'dateformat';
import { DatePicker, notification } from "antd";
import moment from 'moment';
function Clinical_lab(props) {
    const dispatch = useDispatch();
    const [lab_vendor_id, setVendorId] = useState(0);
    const [time, setTime] = useState("")
    const [testName, setTestName] = useState([])
    const [clinicalLab, setClinicalLab] = useState({
        packageType: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        testName: {
            value: [],
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
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
        },
    })
    const [color, setcolor] = React.useState(false)
    const [ddlPackType, setPackType] = useState([])
    const location = useLocation()
    const [params, setParams] = useState({
        labid: location.state.labId,
        labname: location.state.Lab,
        vendor_adr: location.state.vendor_address,
        vendor_filename: location.state.vendor_filename
    })
    const [test, setTest] = useState([])
    const [costAmt, setCostAmt] = useState(0)
    const [booking, setBooking] = useState([])
    var [test_category, setTestCat] = useState("");
    const [val, setVal] = useState(0)
    const ColorClick = (id, name) => {

        let cost;
        test.map((data) => {
            if (data.testId == id) {
                data.color = (!data.color)
            }
        })


        // let cost = test.find((data, index) => {
        //     return (data.color == true)
        // })

        setcolor(!color)
    }
    // confirm open add member
    const [AddOpen, setAddOpen] = React.useState(false)
    const [HideAdrs, setHideAdrs] = React.useState(false)
    const ConfirmOpen = () => {
        var targetkeys = Object.keys(clinicalLab)
        for (var i in targetkeys) {
            var errorcheck = ValidationLibrary.checkValidation(
                clinicalLab[targetkeys[i]].value,
                clinicalLab[targetkeys[i]].validation
            )
            clinicalLab[targetkeys[i]].error = !errorcheck.state
            clinicalLab[targetkeys[i]].errmsg = errorcheck.msg
        }
        var filtererr = targetkeys.filter((data) => clinicalLab[data].error === true)
        if (filtererr.length > 0) { }
        else if (val == 0) { }
        else {
            let data = []
            data.push({
                Lab_vendor_id: params.labid,
                LabName: params.labname,
                LabAddr: params.vendor_adr,
                Lab_filename: params.vendor_filename,
                PackageType: test_category.toString(),
                TestName: clinicalLab.testName.value,
                TestDate: moment(clinicalLab.Date.value).format("YYYY-MM-DD"),
                // TestTime: moment(clinicalLab.Time.value, "HH:mm").format("hh:mm A"),
                TestTime: time,
                cost: costAmt,
                PatientName: "",
                IsMember: 2,
                testItems: testName
            })
            setBooking(data)
            setAddOpen(true)
            handleCancel()
            // setVal(0)
        }
        setClinicalLab(prevState => ({
            ...prevState,
        }));

    }
    const ConfirmClose = () => {
        setAddOpen(false)
    }
    // elipse function
    const ElipseOpen = () => {
        setHideAdrs(!HideAdrs)
    }

    const checkValidation = (data, key) => {
        console.log(data, "kkkk")
        let pack_type;
        if (key == "packageType") {
            pack_type = ddlPackType.find((item, index) => {
                return (data === item.id)
            })
            setTestCat(pack_type.value);
        }

        // if(key=="Date"){
        //     let vendor_id;
        //     var dateObj = new Date(data.toString())
        //     var weekday = dateObj.toLocaleString("default", { weekday: "long" })
        //     let working_hours=location.state.Labworkinghours;
        //     console.log(working_hours,"weekday")
        //     working_hours.map((data)=>{
        //         if(weekday==data.wh_weekday){
        //             vendor_id=data.LobworkinghrsId;
        //             console.log(weekday,vendor_id,"vendorid")
        //             setVendorId(vendor_id);
        //         }
        //     })
        // }

        if (key == "Time") {
            let timee = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
            setTime(timee)
        }
        var errorcheck = ValidationLibrary.checkValidation(
            data,
            clinicalLab[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: clinicalLab[key].validation,
        };

        setClinicalLab((prevState) => ({
            ...prevState,
            [key]: dynObj,
        }));
    }

    useEffect(() => {
        let time = clinicalLab.Time.value
        let date = clinicalLab.Date.value
        if (time != "" && date != "") {
            let timee = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
            console.log(date, timee, "pppppppp")
            dispatch(GetTimeValidation(params.labid, date, timee))
        }
    }, [clinicalLab.Time.value, clinicalLab.Date.value])

    useEffect(() => {
        let packtype = []
        props.GetLabPackageType.map((data) => {
            packtype.push({
                id: data.labTestCategoryId,
                value: data.lab_test_category
            })
        })
        setPackType(packtype)
    }, [props.GetLabPackageType])

    useEffect(() => {
        let id = params.labid;
        let packtype = clinicalLab.packageType.value;
        dispatch(GetLabTest(id, packtype))
        setCostAmt(0)
    }, [clinicalLab.packageType.value])

    useEffect(() => {
        let testdet = []
        props.GetLabTest.map((data) => {
            testdet.push({
                testId: data.testId,
                testName: data.testName,
                cost: data.cost,
                color: false
            })
        })
        setTest(testdet)
    }, [props.GetLabTest])

    useEffect(() => {
        let status = props.GetTimeValidation
        console.log(status, "status")
        setVal(status)
    }, [props.GetTimeValidation])

    useEffect(() => {
        let cost = 0;
        let tests = [];
        let test_items = [];
        let count = countTrue()
        test.map((data) => {
            if (data.color == true) {
                cost = cost + data.cost;
                tests.push({ lab_test_id: data.testId, test_amount: data.cost });
                test_items.push(data.testName)
                clinicalLab["testName"].value = tests;
                setTestName(test_items)
            }
            if (count == 0) { clinicalLab["testName"].value = [] }
            if (count > 0) { checkValidation(tests, "testName") }
        })
        setCostAmt(cost)

    }, [color])

    function countTrue() {
        var count = 0;
        test.map((data) => {
            if (data.color === true) {
                count++
            }
        })
        return count;
    }

    function handleCancel() {
        let keys = [
            "packageType", "testName", "Date", "Time"
        ]

        keys.map((data) => {
            clinicalLab[data].value = ""
            if (data == "testName") { clinicalLab[data].value = [] }
        })
        setClinicalLab(prevState => ({
            ...prevState,
        }));
        setTest([])
    }


    console.log(booking, "booking")
    console.log(clinicalLab, "clinicalLab")
    console.log(val, "val")

    return (
        <div className="clinicallab_parent">
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <div className="clinic_div">
                        <div>
                            <label className="clinic">{params.labname}</label>
                            <div style={{ display: "flex" }}>
                                {HideAdrs ? <label className="lab_adrs">{params.vendor_adr}</label> : <label className="lab_adrs">{params.vendor_adr}</label>}
                                <span className="elipse" onClick={ElipseOpen}>...</span></div>
                        </div>
                        <label className="test_amt">{costAmt + " KWD"}</label>
                    </div>

                    <div className="clinic_labdiv_parent">
                        <div>
                            <Labelbox type="select" placeholder={"General Test"} dropdown={ddlPackType}
                                changeData={(data) => checkValidation(data, "packageType")}
                                value={clinicalLab.packageType.value}
                                error={clinicalLab.packageType.error}
                                errmsg={clinicalLab.packageType.errmsg} />
                            <div style={{ display: "flex", width: "100%" }}>
                                <div style={{ width: "50%", paddingRight: "10px" }}><Labelbox type="datepicker"
                                    placeholder={"Test Date"}
                                    changeData={(data) => checkValidation(data, "Date")}
                                    value={clinicalLab.Date.value}
                                    error={clinicalLab.Date.error}
                                    errmsg={clinicalLab.Date.errmsg} /></div>
                                <div style={{ width: "50%", paddingLeft: "10px" }}><Labelbox type="timepicker"
                                    placeholder={"Test Time"}
                                    changeData={(data) => checkValidation(data, "Time")}
                                    value={clinicalLab.Time.value}
                                    error={clinicalLab.Time.error}
                                    errmsg={clinicalLab.Time.errmsg} />
                                </div></div>
                            {AddOpen === false ? <div><Button className="order_cancel" onClick={() => handleCancel()} >Cancel</Button><Button className="order_save" onClick={() => ConfirmOpen()} >Confirm</Button></div> : null}
                        </div>

                        {/* testlist */}
                        <div className="clinic_lab_div">
                            {test.map((data, index) =>
                                //  <label className={color?"change_clinic_test" : "clinic_test"} onClick={()=>ColorClick(data.id)}>{data.test}</label>
                                <label className={data.color ? "change_clinic_test" : "clinic_test"} onClick={() => ColorClick(data.testId)}>{data.testName}</label>

                            )}
                            <div style={{ color: "red", fontSize: "11px" }}>{clinicalLab.testName.error == true && "Atleast one Required"}</div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={4} className="lab_addMember_secondgrid">
                    {AddOpen ?
                        <div className="lab_booking_confirm">
                            <Lab_BookingConfirmation ConfirmClose={ConfirmClose} Params={booking} />
                        </div> : null}

                </Grid>
            </Grid>
        </div>

    )

}
const mapStatetoProps = (state) => ({
    GetLabPackageType: state.clinicalLabReducer.getLabPackage || [],
    GetLabTest: state.clinicalLabReducer.getLabTest || [],
    GetTimeValidation: state.clinicalLabReducer.timeValidation || [],
})
export default connect(mapStatetoProps)(Clinical_lab);
