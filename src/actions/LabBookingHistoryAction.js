import {GET_LAB_BOOKING_HISTORY} from "../utils/Constants";
import { newapiurl } from "../utils/baseUrl";
import axios from "axios";
import { notification } from "antd";
export const GetLabBookingHistory = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'Patient/getlabbookinghistory',
            data: {
                    patientId:1,
                    limit:10,
                    pageno:1
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: GET_LAB_BOOKING_HISTORY, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}