import { GET_SPECIALITY } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import { notification } from 'antd';
import moment from 'moment'

export const GetDoctorSpeciality = () => async data => {
    try {
        axios({
            method: 'GET',
            url: apiurl + 'get_mas_doctor_speciality',
        })
        .then((response) => {
            data({
                type:GET_SPECIALITY,
                payload: response.data.data
            })
        console.log("consolelog",response.data)
        })
        
    } catch (err) {
        
    }
}