import { PUT_FAVOURITE_ADD_REMOVE  } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";

export const PutFavouriteAddorRemoveAction = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/favouriteDoctorAddingandRemoving',
            data: data,
        })
        .then((response) => {
            dispatch({
                type:PUT_FAVOURITE_ADD_REMOVE,
                payload:response
            })
        console.log("Favourite Data",response, data);
        })
        
    } catch (err) {
        console.log("actionerr", err)
    }
}