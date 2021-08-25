import { GET_MY_APPOINTMENT_PRESCRIPTION_HISTORY } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import { notification } from 'antd';
import moment from 'moment'

export const GetAppointmentPrescriptionHistory = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/particularBookingPrescriptionDetails',
            data: data
        })
        .then((response) => {
            dispatch({type:GET_MY_APPOINTMENT_PRESCRIPTION_HISTORY,payload:response.data.data})
        console.log("consolelog",response.data.data)
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}