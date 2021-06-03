import { GET_DOCTOR_SERVICE_DROPDOWN } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const GetDoctorServiceDropdown = (doctorId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/doctorServiceDropDown',
            data:  {
                doctorId: doctorId
            }
        })
        .then((response) => {
            dispatch({
                type: GET_DOCTOR_SERVICE_DROPDOWN,
                payload: response.data.data
            })
        console.log("doctorServiceDDL",response.data.data);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
};
