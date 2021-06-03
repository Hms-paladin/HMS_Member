import { GET_PATIENT_DOCTOR_SEARCH } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import { notification } from 'antd';
import moment from 'moment'

export const GetPatientDoctorSearch = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientDoctorSearch',
            data: data
        })
        .then((response) => {
            dispatch({type:GET_PATIENT_DOCTOR_SEARCH,payload:response.data.data[0].details})
        console.log("consolelog",response.data.data[0].details)
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}