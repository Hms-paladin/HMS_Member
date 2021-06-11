import React, { useEffect, useState } from 'react';
import filter from '../../../images/filter.svg'
import './prescriptionhistory.scss'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Labelbox from '../../../helpers/labelbox/labelbox';
import { NavLink } from "react-router-dom";
import { findAllByDisplayValue } from '@testing-library/react';
import { useDispatch, connect } from "react-redux";
import { GetPrescriptionHistoryDetails, GetStatusListFilter } from '../../../actions/prescriptionhistoryaction'
import moment from 'moment';
import ValidationLibrary from "../../../helpers/validationfunction";



function PrescriptionHistory(props) {
    const dispatch = useDispatch();
    const [Open, Close] = React.useState(false)
    const [status, setStatus] = useState(false)
    const [BtnOpenOut, setBtnOpenOut] = React.useState(true)
    const [BtnDelivery, setBtnDelivery] = React.useState(true)
    const [BtnCancel, setBtnCancel] = React.useState(true)
    const [BtnPacked, setBtnPacked] = React.useState(true)
    const [prescriptionDetails, setPrescriptionDetails] = useState([])
    const [statuslist, setStatusList] = useState()
    const [medicine, setMedicine] = useState({
        fromdate: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },
        todate: {
            value: "",
            validation: [{ "name": "required" }],
            error: null,
            errmsg: null,
        },

    })

    useEffect(() => {
        dispatch(GetPrescriptionHistoryDetails())

    }, [])

    useEffect(() => {
        setPrescriptionDetails(props.GetPrescriptionHistoryDetails[0]?.details)
        setStatus(props.GetStatusListFilter)
    }, [props.GetPrescriptionHistoryDetails, props.GetStatusListFilter])

    function BtnClick(data) {
        // setBtnOpen(clrchanged=>!clrchanged)
        if (data === "outDelivery") {
            setStatusList(data)
            setBtnOpenOut(!BtnOpenOut)
        }
        if (data === "Delivered") {
            setStatusList(data)
            setBtnDelivery(!BtnDelivery)
        }
        if (data === "Cancelled") {
            setStatusList(data)
            setBtnCancel(!BtnCancel)
        }
        if (data === "Packed") {
            setStatusList(data)
            setBtnPacked(!BtnPacked)
        }

    }
    function filterOpen() {
        dispatch(GetStatusListFilter())
        Close(true)
    }
    function filterClose() {
        Close(false)
    }

    function checkValidation(data, key) {
        var errorcheck = ValidationLibrary.checkValidation(
            data,
            medicine[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: medicine[key].validation,
        };

        // if (data && key == "tot_leave") {
        //     medicine.exam_days.validation[1].params = data
        //     setMedicine((prevState) => ({
        //         ...prevState,
        //     }));
        // }

        // if (key === "leavetype" && data) {
        //     handleCancel()
        //     setEditBtn(false)
        //     let From_key = [
        //         "fromdate", "todate", "reasoncmt", "address", "contactperson", "fromtime", "totime", "client", "assignedby", "referred_by", "profess_course", "tot_leave", "exam_days", "other_days", "subject", "exam_date",
        //     ];

        //     From_key.map((data) => {
        //         try {
        //             medicine[data].error = null;
        //         } catch (error) {
        //             throw error;
        //         }
        //     });

        // }


        setMedicine((prevState) => ({
            ...prevState,
            [key]: dynObj,
        }));
    }

    const searchData = () => {
        dispatch(GetPrescriptionHistoryDetails(1, statuslist, medicine)).then(
            (response) => {
                // setPrescriptionDetails(props.GetPrescriptionHistoryDetails[0]?.details)

            }
        );
    }


    return (
        <div className=" pres_div">
            {/* prescription history list */}
            <div className="pres_headdiv">
                <label className="pres_h">Prescription History</label> <img src={filter} style={{ cursor: "pointer", width: "20px" }} onClick={filterOpen} />
            </div>
            {/* advance filter */}
            {Open && (

                <div className="history_list">
                    <div className="advance_flt_div"><label>Advance Filter</label><CloseIcon onClick={filterClose} style={{ cursor: "pointer" }} /></div>
                    <div style={{ margin: "20px 0px" }}>
                        <Button className={BtnOpenOut ? "flt_btns" : "flt_btns_change"} onClick={() => BtnClick("outDelivery")}>Out for Delivery</Button>
                        <Button className={BtnDelivery ? "flt_btns" : "flt_btns_change"} onClick={() => BtnClick("Delivered")} >Delivered</Button>
                        <Button className={BtnCancel ? "flt_btns" : "flt_btns_change"} onClick={() => BtnClick("Cancelled")}>Cancelled</Button>
                        <Button className={BtnPacked ? "flt_btns" : "flt_btns_change"} onClick={() => BtnClick("Packed")}>Packed</Button>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "20px" }}>
                            <Labelbox type="datepicker" labelname="From Date"
                                changeData={(data) => checkValidation(data, "fromdate")}
                                value={medicine.fromdate.value}
                                error={medicine.fromdate.error}
                                errmsg={medicine.fromdate.errmsg} /></div>

                        <div><Labelbox type="datepicker" labelname="To Date"
                            changeData={(data) => checkValidation(data, "todate")}
                            value={medicine.todate.value}
                            error={medicine.todate.error}
                            errmsg={medicine.todate.errmsg} /></div>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "12px 0px 0px 20px" }} ><Button className="pres_search" onClick={searchData}>Search</Button></div>
                    </div>
                </div>
            )}
            {/* advancefilter end */}

            {prescriptionDetails && prescriptionDetails.map((data, index) => {
                return (
                    <NavLink to={`/orderdetails/${data.prescriptionId}`}>

                        <div className=" history_list">
                            <div className="list_itemdiv"><label className="order_id">Order ID</label><label>{moment(data.prescript_date).format('DD-MMM-YYYY').split(',')}</label></div>
                            <div style={{ color: "#939393", margin: "8px 0px 5px 0px" }}>{data.orderNumber}</div>
                            <div className="list_itemdiv">
                                <div><label className="order_id">Amount</label><label className="pres_kwd">{data.total_amount}</label></div>
                                <div className={data.statusid === 2 ? "pay" : data.statusid === 5 ? "delevered" : data.statusid === 6 ? "cancelled" : null}>{data.status}</div>
                            </div>
                        </div>
                    </NavLink>
                )
            }
            )}



            {/* <NavLink to={"/orderpacking"}><div className=" history_list">
                <div className="list_itemdiv"><label className="order_id">Order ID</label><label>25 01 2021</label></div>
                <div style={{color:"#939393",margin:"8px 0px 5px 0px"}}>PH74567</div>
                <div className="list_itemdiv">
                    <div><label className="order_id">Amount</label><label className="pres_kwd">400 KWD</label></div>
                    <div>Packed</div>
                </div>     
            </div>
            </NavLink> */}
            {/* end
              // 
                    // <NavLink to={{
                    //     pathname: "/orderdetails",
                    //     aboutProps: { name: data.prescriptionId }
                    // }}> */}



        </div>
    )
}

const mapStateToProps = (state) =>
(
    console.log(state.prescriptionhistoryReducer.GetPrescriptionHistoryDetails, "states"),
    {
        GetPrescriptionHistoryDetails: state.prescriptionhistoryReducer.GetPrescriptionHistoryDetails,
        GetStatusListFilter: state.prescriptionhistoryReducer.GetStatusListFilter,


    }
);
export default connect(mapStateToProps)(PrescriptionHistory);