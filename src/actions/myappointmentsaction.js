import { GET_PATIENT_BOOKED_APPOINTMENTLIST,GET_PATIENT_LIST,GET_DOCTOR_LIST,GET_MEMBER_QUEUE_DETAILS } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import moment from 'moment';

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

export const PatientList = () => async data => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/advanceFilterPatientList',
            data: {
                "patientId":localStorage.getItem("patientId"),
            },
        })
        .then((response) => {
            data({
                type:GET_PATIENT_LIST,
                payload: response.data.data
            })
        console.log("consolelog",response.data)
        })
        
    } catch (err) {
        
    }
}

export const DoctorList = () => async data => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/advanceFilterDoctorList',
            data: {
                "patientId":localStorage.getItem("patientId"),
            },
        })
        .then((response) => {
            data({
                type:GET_DOCTOR_LIST,
                payload: response.data.data
            })
        console.log("consolelog",response.data)
        })
        
    } catch (err) {
        
    }
}

export const cancelDoctorAppointment = (id) => async data => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/cancelDoctorAppointment',
            data:  {
                "booking_id":id
            },
        })
        .then((response) => {
            // data({
            //     type:GET_DOCTOR_LIST,
            //     payload: response.data.data
            // })
        console.log("consolelog",response.data)
        })
        
    } catch (err) {
        
    }
}

export const patientAppointmentAdvancedFilter = (MyAppoinments) => async data => {
    console.log(MyAppoinments.start_date.value,"data.start_date.value")
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientAppointmentAdvancedFilter',
            data: {
                "pageno":1,
                "limit":1,
                "patientId":localStorage.getItem("patientId"),
                "fromDate":MyAppoinments.start_date.value,
                "toDate":MyAppoinments.end_date.value,
                "doctorId":MyAppoinments.doctor_name.value,
            },
        })
        .then((response) => {
            data({
                type:GET_PATIENT_BOOKED_APPOINTMENTLIST,
                payload:response.data.data
            })
        console.log("consolelog",response.data)
        })
        
    } catch (err) {
        
    }
}

export const memberQueueDetailsForParticularBooking = (appointment_details) => async data => {

    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/memberQueueDetailsForParticularBooking',
            data: {

                "clinic_id":appointment_details.clinic_id,
                "currentDate":moment().format("YYYY-MM-DD"),
                "currentTime":moment().format('HH:m:s'),
                "doctor_id":appointment_details.doctor_id,
                "bookingId":appointment_details.bookingId
            },
        })
        .then((response) => {
            data({
                type:GET_MEMBER_QUEUE_DETAILS,
                payload:response.data.data
            })
        console.log("consolelog",response.data)
        })
        
    } catch (err) {
        
    }
}