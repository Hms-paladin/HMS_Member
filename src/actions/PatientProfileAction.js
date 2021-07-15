import { GET_PATIENT_PROFILE } from "../utils/Constants"
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import moment from 'moment'
export const GetPatientProfile = () => async dispatch => {
    try {
        // patientId:localStorage.getItem("user_id")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getPatientProfile',
            data: {
                "patientId": 38,
                "currentDate": moment().format('YYYY-MM-DD'),
                "currentTime": moment().format('HH:m:s'),
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: GET_PATIENT_PROFILE, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}