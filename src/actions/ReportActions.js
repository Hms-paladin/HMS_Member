import { LAB_RESULT_MEMBERLIST, PARTICULAR_MEMBER_LABRESULT } from "../utils/Constants"
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
export const GetLabResultMemberList = () => async dispatch => {
    try {
        // patientId:localStorage.getItem("user_id")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/labResultMembersList',
            data: {
                patientId: localStorage.getItem("user_id")
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: LAB_RESULT_MEMBERLIST, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}
export const GetParticularMemLabResult = (patientid, IsSort, IsDateSort) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/particularMemberLabResults',
            data: {
                patientId: patientid,
                nameBasedSorting: IsSort ? IsSort : false,
                nameBasedSortingOrder: "ASC",
                dateBasedSorting: IsDateSort ? IsDateSort : false,
                dateBasedSortingOrder: "DESC",
                limit: 10,
                pageno: 1
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: PARTICULAR_MEMBER_LABRESULT, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}