import { GET_PRESCRIPTION_HISTORY_DETAILS, GET_PARTICULAR_PRESCRIPTION_DETAILS } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

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