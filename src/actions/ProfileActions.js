import { GET_MEMBER_PROFILE,GET_PATIENT_HEALTHTIPS,GET_PATIENT_PERSCRIPTION} from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import moment from 'moment'
export const GetMemberProfile = () => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getPatientProfile',
            data:  {
                "patientId":16,
	            "currentDate": moment().format('YYYY-MM-DD'),
	            "currentTime": moment().format('HH:m:s'),
                // "currentDate":"2020-08-05",
	            // "currentTime":"10:00"
            }
        })
        .then((response) => {
            dispatch({ type: GET_MEMBER_PROFILE,payload: response.data.data })
        })
        
    } catch (err) {
    }
};


export const GetPatientHealthTips = (patientId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientHealthTipDetails',
            data:  {
                "patientTypeId":patientId
            }
        })
        .then((response) => {
            dispatch({ type: GET_PATIENT_HEALTHTIPS,payload: response.data.data })
        })
        
    } catch (err) {
    }
};

export const GetPatientPerscription = (patientId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientPrescriptionDetails',
            data:  { 
	           "patientId":patientId,
	           "currentDate":moment().format('YYYY-MM-DD HH:m:s')
            }
        })
        .then((response) => {
            dispatch({ type: GET_PATIENT_PERSCRIPTION,payload: response.data.data })
        })
        
    } catch (err) {
    }
};