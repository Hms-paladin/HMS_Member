import { GET_LAB_LIST } from "../utils/Constants"
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
                currentDate: "2020-06-02",
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