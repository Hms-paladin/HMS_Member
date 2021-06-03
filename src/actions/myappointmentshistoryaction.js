import { GET_PATIENT_BOOKED_APPOINTMENTLIST_HISTORY } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const GetMyAppointmentsHistory = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientBookedAppointmentList',
            data:  data,
        })
        .then((response) => {
            dispatch({
                type:GET_PATIENT_BOOKED_APPOINTMENTLIST_HISTORY,
                payload:response.data.data[0].details
            })
        console.log("myAppointmentsHistory",response.data.data[0].details);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}