import { GET_PRESCRIPTION_HISTORY_DETAILS, GET_PARTICULAR_PRESCRIPTION_DETAILS, GET_STATUS_LIST_FILTER } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import { notification } from 'antd';
import moment from "moment";

export const GetPrescriptionHistoryDetails = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'patientPrescriptionHistoryDetails',
            data: {
                "patientId": 16,
                // localStorage.getItem("user_id")
                "filter": false,
                "statusIdList": "" || 0,
                "filterFromDate": "" || 0,
                "filterToDate": "" || 0,
                "limit": 10,
                "pageno": 1
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    dispatch({ type: GET_PRESCRIPTION_HISTORY_DETAILS, payload: response.data.data })
                }
                console.log(response.data.data, "response.data.data")
            })

    } catch (err) {
    }
}

export const GetParticularPrescriptionDetails = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'particularPharmacyPrescriptionDetails',
            data: {
                "prescriptionId": data
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    dispatch({ type: GET_PARTICULAR_PRESCRIPTION_DETAILS, payload: response.data.data })
                }
                console.log(response.data.data, "response.data.data")
            })

    } catch (err) {
    }
}

export const GetStatusListFilter = () => async data => {
    try {
        axios({
            method: 'GET',
            url: apiurl + 'statusListForFilter',
        })
            .then((response) => {
                data({
                    type: GET_STATUS_LIST_FILTER,
                    payload: response.data.data
                })
            })

    } catch (err) {

    }
}

export const DeletePrescriptionDetails = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'deletePresctiptMedicine',
            data: {
                "medicineId": data
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: 'Deleted Successfully',
                    });
                }
            })

    } catch (err) {
    }
}

export const CancelPrescriptionOrder = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'cancelPharmacyPresctiptionOrder',
            data: {
                "orderId": data
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: 'Order Cancelled ',
                    });
                }
            })

    } catch (err) {
    }
}

export const PatientPharmacyConfirmOrder = (particularDetails) => async dispatch => {
    console.log(particularDetails, "particularDetails")
    try {
        axios({
            method: 'POST',
            url: apiurl + 'patientPharmacyConfirmOrder',
            data: {
                "prescriptionId": particularDetails.prescriptionId || 0,
                "orderId": particularDetails.orderId || 0,
                "deliveryAddress": particularDetails.deliveryAddress || 0,
                "paidAmount": particularDetails.total_amount || 0,
                "paymentStatus": particularDetails.payment_status || 0
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: 'Order Successfully ',
                    });
                }
            })

    } catch (err) {
    }
}