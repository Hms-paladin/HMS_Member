import { GET_PARTICULAR_TRAINER_DETAILS  } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const GetParticularTrainerDetails = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getParticularTrainerDetails',
            data: data,
        })
        .then((response) => {
            dispatch({
                type:GET_PARTICULAR_TRAINER_DETAILS,
                payload:response.data.data[0]
            })
        console.log("Trainer Details",response, data);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}