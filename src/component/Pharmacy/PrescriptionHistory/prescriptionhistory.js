import React, { useEffect, useState } from 'react';
import filter from '../../../images/filter.svg'
import './prescriptionhistory.scss'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Labelbox from '../../../helpers/labelbox/labelbox';
import { NavLink } from "react-router-dom";
import { findAllByDisplayValue } from '@testing-library/react';
import { useDispatch, connect } from "react-redux";
import { GetPrescriptionHistoryDetails } from '../../../actions/prescriptionhistoryaction'
import moment from 'moment';


function PrescriptionHistory(props) {
    const dispatch = useDispatch();
    const [Open, Close] = React.useState(false)
    const [BtnOpen, setBtnOpen] = React.useState(false)
    const [BtnOpenOut, setBtnOpenOut] = React.useState(true)
    const [BtnDelivery, setBtnDelivery] = React.useState(true)
    const [BtnCancel, setBtnCancel] = React.useState(true)
    const [BtnPacked, setBtnPacked] = React.useState(true)
    const [prescriptionDetails, setPrescriptionDetails] = useState([])

    useEffect(() => {
        dispatch(GetPrescriptionHistoryDetails())
    }, [])

    useEffect(() => {
        setPrescriptionDetails(props.GetPrescriptionHistoryDetails[0]?.details)
    }, [props.GetPrescriptionHistoryDetails])


    function BtnClick(data) {
        // setBtnOpen(clrchanged=>!clrchanged)
        if (data === "outDelivery") {
            setBtnOpenOut(!BtnOpenOut)
        }
        if (data === "Delivered") {
            setBtnDelivery(!BtnDelivery)
        }
        if (data === "Cancelled") {
            setBtnCancel(!BtnCancel)
        }
        if (data === "Packed") {
            setBtnPacked(!BtnPacked)
        }

    }
    function filterOpen() {
        Close(true)
    }
    function filterClose() {
        Close(false)
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
                        <div style={{ marginRight: "20px" }}><Labelbox type="datepicker" labelname="From Date" /></div>
                        <div><Labelbox type="datepicker" labelname="To Date" /></div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "12px 0px 0px 20px" }} ><Button className="pres_search">Search</Button></div>
                    </div>
                </div>
            )}
            {/* advancefilter end */}
            {prescriptionDetails && prescriptionDetails.map((data, index) => {
                console.log(data.prescriptionId, "details")
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

    }
);
export default connect(mapStateToProps)(PrescriptionHistory);