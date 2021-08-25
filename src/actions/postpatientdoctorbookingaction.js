import { POST_PATIENT_DOCTOR_BOOKING } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const PostDoctorBooking = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientDoctorBooking',
            data:  data,
        })
        .then((response) => {
            dispatch({
                type:POST_PATIENT_DOCTOR_BOOKING,
                payload:response.data.data
            })
        console.log("doctorBooking",response.data);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}