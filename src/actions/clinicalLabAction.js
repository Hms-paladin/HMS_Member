import {GET_LAB_PACKAGE,GET_LAB_TEST} from "../utils/Constants";
import { newapiurl } from "../utils/baseUrl";
import axios from "axios";
export const GetLabPackageType = (labid) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'patient/getLabpackageType',
            data: {
                LabId:labid
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: GET_LAB_PACKAGE, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}
export const GetLabTest = (labid,categoryid) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'patient/getLabtest',
            data: {
                labId:labid,
	            labcategoryId:categoryid
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: GET_LAB_TEST, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}