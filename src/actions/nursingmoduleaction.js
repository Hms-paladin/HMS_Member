import { GET_PATIENT_NURSE_SEARCH, GET_NATIONALITY_NURSE, GET_MIN_EXPERIENCE_NURSE, GET_MIN_COST_NURSE } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import { notification } from 'antd';
import moment from "moment";

export const GetPatientNurseSearch = (cost, experience, nurseField, toggleOpen, dateRange, searchdata) => async dispatch => {
    let d = new Date()
    try {
        axios({
            method: 'POST',
            url: apiurl + 'patientNurseSearch',
            data: {
                "withoutFilter": true,
                "currentDate": moment(d).format("YYYY-MM-DD"),
                "advanceFilter": false,
                "typeSearch": false,
                "searchContent": searchdata || "",
                "eightHour": toggleOpen ? "false" : "true",
                "costFilter": false,
                "experienceFilter": false,
                "minCost": cost.minCost || 0,
                "maxCost": cost.maxCost || 0,
                "minExp": experience.minExp || 0,
                "maxExp": experience.maxExp || 0,
                "genderFilter": false,
                "gender": nurseField.gender.value === 1 ? "Male" : "Female",
                "nationalityFilter": false,
                "nationalityId": nurseField.nationality.value || 0,
                "dateFilter": false,
                "fromDate": moment(dateRange[0].startDate).format("YYYY-MM-DD") || 0,
                "toDate": moment(dateRange[0].endDate).format("YYYY-MM-DD") || 0,
                "costBasedSorting": false,
                "costBasedSortingOrder": "ASC",
                "expBasedSorting": false,
                "expBasedSortingOrder": "ASC",
                "ageBasedSorting": false,
                "ageBasedSortingOrder": "ASC",
                "pageno": 1,
                "limit": 10
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    dispatch({ type: GET_PATIENT_NURSE_SEARCH, payload: response.data.data })
                }
                console.log(response.data.data, "response.data.data")
            })

    } catch (err) {
    }
}


export const GetNationalityforNurse = () => async dispatch => {
    try {
        axios({
            method: 'GET',
            url: apiurl + 'getNationalityForNurse',
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({ type: GET_NATIONALITY_NURSE, payload: response.data.data })
                }
            })

    } catch (err) {

    }
}


export const GetMinCostNurse = () => async dispatch => {
    try {
        axios({
            method: 'GET',
            url: apiurl + 'minMaxCostForNurse',
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({ type: GET_MIN_COST_NURSE, payload: response.data.data })
                }
            })

    } catch (err) {

    }
}


export const GetMinExperienceNurse = () => async dispatch => {
    try {
        axios({
            method: 'GET',
            url: apiurl + 'minMaxExperienceForNurse',
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({ type: GET_MIN_EXPERIENCE_NURSE, payload: response.data.data })
                }
            })

    } catch (err) {

    }
}
