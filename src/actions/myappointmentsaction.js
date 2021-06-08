import { GET_PATIENT_BOOKED_APPOINTMENTLIST,GET_PATIENT_LIST,GET_DOCTOR_LIST } from "../utils/Constants";
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

export const PatientList = () => async data => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/advanceFilterPatientList',
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

export const patientAppointmentAdvancedFilter = (id) => async data => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientAppointmentAdvancedFilter',
            data: {
                "pageno":1,
                "limit":1,
                "patientId":"1",
                "fromDate":"2020-06-01",
                "toDate":"2020-07-22",
                "doctorId":"1"
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