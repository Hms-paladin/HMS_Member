import { GET_TRAINERLIST_PATIENT  } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const GetTrainerList = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientTrainerSearch',
            data: data,
        })
        .then((response) => {
            dispatch({
                type:GET_TRAINERLIST_PATIENT,
                payload:response.data.data[0].details
            })
        console.log("Trainer List",response, data);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}

