import { GET_PATIENT_PROFILE } from "../utils/Constants"
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
export const GetPatientProfile = () => async dispatch => {
    try {
        // patientId:localStorage.getItem("user_id")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getPatientProfile',
            data: {
                patientId: "1",
                currentDate: "2020-08-05",
                currentTime: "10:00"
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