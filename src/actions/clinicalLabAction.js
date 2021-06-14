import {GET_LAB_PACKAGE} from "../utils/Constants";
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