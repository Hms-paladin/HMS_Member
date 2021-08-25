import { GET_TRAININGLIST_CENTER } from "../utils/Constants"
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import moment from "moment";
import { notification } from "antd";
export const getTrainerListForCenter = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getTrainingListForTrainingCenter',
            data: {
                "typesearch": false,
                "searchContent": "cricket"
            }
        })
        .then((response)=>{
            dispatch({
                type:GET_TRAININGLIST_CENTER,
                payload:response.data.data
            })
            console.log(response,'TrainerList')
        })
      
    }
    catch (err) { }
}