import { GET_PATIENT_BOOKED_APPOINTMENTLIST } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const GetMyAppointments = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientBookedAppointmentList',
            data:  data,
        })
        .then((response) => {
            dispatch({
                type:GET_PATIENT_BOOKED_APPOINTMENTLIST,
                payload:response.data.data[0].details
            })
        console.log("myAppointments",response.data.data);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}