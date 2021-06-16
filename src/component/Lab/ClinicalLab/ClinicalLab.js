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
import { GetLabTest } from "../../../actions/clinicalLabAction"
import moment from 'moment';
function Clinical_lab(props) {
    const dispatch = useDispatch();
    const [clinicalLab, setClinicalLab] = useState({
        packageType: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        testName: {
            value: "",
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
    const [params, setParams] = useState({ labid: location.state.labId, labname: location.state.Lab, vendor_adr: location.state.vendor_address })
    const [test, setTest] = useState([])
    const [costAmt, setCostAmt] = useState(0)
    const ColorClick = (id) => {

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
        setAddOpen(true)
    }
    const ConfirmClose = () => {
        setAddOpen(false)
    }
    // elipse function
    const ElipseOpen = () => {
        setHideAdrs(!HideAdrs)
    }

    const checkValidation = (data, key) => {
     console.log(data,"kkkk")

        // if (key === "Time") {
        //     console.log(moment(data, "HH:mm:ss").format("hh:mm:ss A"), "check")
            
        // }

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

        //   // only for multi select (start)

        //   let multipleIdList = [];

        //   if (multipleId) {
        //     multipleId.map((item) => {
        //       for (let i = 0; i < data.length; i++) {
        //         if (data[i] === item.value) {
        //           multipleIdList.push(item.id);
        //         }
        //       }
        //     });
        //     dynObj.valueById = multipleIdList.toString();
        //   }
        //   // (end)

        setClinicalLab((prevState) => ({
            ...prevState,
            [key]: dynObj,
        }));
    }

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
        let cost = 0;
        test.map((data) => {
            if (data.color == true) {
                cost = cost + data.cost;
            }
        })
        setCostAmt(cost)
    }, [color])

    console.log(clinicalLab, "clinicalLab")
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
                                value={clinicalLab.packageType.value} />
                            <div style={{ display: "flex", width: "100%" }}>
                                <div style={{ width: "50%", paddingRight: "10px" }}><Labelbox type="datepicker"
                                    placeholder={"Test Date"}
                                    changeData={(data) => checkValidation(data, "Date")}
                                    value={clinicalLab.Date.value}
                                    error={clinicalLab.Date.error}
                                    errmsg={clinicalLab.Date.errmsg} /></div>
                                <div style={{ width: "50%", paddingLeft: "10px" }}><Labelbox type="timepicker"
                                changeData={(data) => checkValidation(data, "Time")}
                                value={clinicalLab.Time.value}
                                error={clinicalLab.Time.error}
                                errmsg={clinicalLab.Time.errmsg} /></div></div>
                            {AddOpen === false ? <div><Button className="order_cancel">Cancel</Button><Button className="order_save" onClick={ConfirmOpen} >Confirm</Button></div> : null}
                        </div>

                        {/* testlist */}
                        <div className="clinic_lab_div">
                            {test.map((data, index) =>


                                //  <label className={color?"change_clinic_test" : "clinic_test"} onClick={()=>ColorClick(data.id)}>{data.test}</label>
                                <label className={data.color ? "change_clinic_test" : "clinic_test"} onClick={() => ColorClick(data.testId)}>{data.testName}</label>

                            )}

                        </div>

                    </div>
                </Grid>

                <Grid item xs={12} md={4} className="lab_addMember_secondgrid">
                    {AddOpen ?
                        <div className="lab_booking_confirm">
                            <Lab_BookingConfirmation ConfirmClose={ConfirmClose} />
                        </div> : null}

                </Grid>
            </Grid>
        </div>

    )

}
const mapStatetoProps = (state) => ({
    GetLabPackageType: state.clinicalLabReducer.getLabPackage || [],
    GetLabTest: state.clinicalLabReducer.getLabTest || [],
})
export default connect(mapStatetoProps)(Clinical_lab);
