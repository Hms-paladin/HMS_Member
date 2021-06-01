import { GET_PARTICULAR_DOCTOR_SEARCH, GET_PARTICULAR_DOCTOR_SEARCH_CLINICSLOTS } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const GetParticularDoctorDetails = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/particularDoctorDetails',
            data:  data,
        })
        .then((response) => {
            dispatch({
                type:GET_PARTICULAR_DOCTOR_SEARCH,
                payload:response.data.data[0]
            })
            dispatch({
                type:GET_PARTICULAR_DOCTOR_SEARCH_CLINICSLOTS,
                payload:response.data.data[0].clinicSlotsDetails
            })
        console.log("consolelog",response.data.data);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}