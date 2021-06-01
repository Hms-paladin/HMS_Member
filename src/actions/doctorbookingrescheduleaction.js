import { GET_RESCHEDULED_DOCTOR_APPOINTMENT, GET_RESCHEDULED_DOCTOR_APPOINTMENT_CLINICSLOTS } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const GetRescheduleDoctorBooking = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/rescheduleDoctorAppointment',
            data: data,
        })
        .then((response) => {
            dispatch({
                type:GET_RESCHEDULED_DOCTOR_APPOINTMENT,
                payload:response.data.data
            })
            dispatch({
                type:GET_RESCHEDULED_DOCTOR_APPOINTMENT_CLINICSLOTS,
                payload:response.data.data[0]
            })
        console.log("Reschedule Doctor Booking",response.data.data[0].clinicSlotsDetails);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}