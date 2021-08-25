import { GET_LAB_LIST,GET_PARTICULAR_LAB_DETAILS } from "../utils/Constants"
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
export const GetLabList = () => async dispatch => {
    try {
        // patientId:localStorage.getItem("user_id")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getlabList',
            data: {
                Searchcontent: false,
                currentDate: "2021-07-14",
                Lab: "l",
                offerBasedSorting: false,
                offerBasedSortingOrder: "ASC",
                limit: 10,
                pageno: 1,
                lat: "13.072090",
                longitude: "80.201859"
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type:  GET_LAB_LIST, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}
export const GetParticularLabDetails = (labid) => async dispatch => {
    try {
        // patientId:localStorage.getItem("user_id")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getParticularLabdetails',
            data: {
                currentDate:"2020-07-02",
                labId:labid
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type:  GET_PARTICULAR_LAB_DETAILS, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}