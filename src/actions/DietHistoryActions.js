import {
    DIET_COMPANY_LST,GET_MEAL_PLANS,
    CATEGORY_MEAL_PLAN,DIET_INSTRUCTIONS
} from '../utils/Constants'
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import moment from 'moment'
import { notification } from "antd";
import Nurse from "../images/nurse.png"
export const GetDietCompanyDetails = (searchValue,searchTrue) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getdietcompanylist',
            data:  {    
	        "Searchcontent":searchTrue,
	        "dietcompanyName":searchValue,
	        "limit":"1",
	        "pageno":"1"
            }
        })
        .then((response) => {
            console.log("responsecheck",response)
            dispatch({ type: DIET_COMPANY_LST,payload: response.data.data })
        })
        
    } catch (err) {
    }
};

export const GetMealPlans  = (id) => async (dispatch) => {
    const response = await axios({
        method: "post",
        url: apiurl + "Patient/getParticularCompanydietplan",
        data: {
            "dietvendorId":id
        },
      });
    return dispatch({ type: GET_MEAL_PLANS, payload: response.data.data });
};
export const CategoryMealPlans  = (id) => async (dispatch) => {
    const response = await axios({
        method: "get",
        url: apiurl + "Patient/getcategorymealplan",
      });
    return dispatch({ type: CATEGORY_MEAL_PLAN, payload: response.data.data });
};

export const DietInstructions  = (id) => async (dispatch) => {
    const response = await axios({
        method: "get",
        url: apiurl + "Patient/getdietinstructions",
      });
    return dispatch({ type: DIET_INSTRUCTIONS, payload: response.data.data });
};