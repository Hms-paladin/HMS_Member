import {
    DIET_COMPANY_LST,GET_MEAL_PLANS,
    CATEGORY_MEAL_PLAN,DIET_INSTRUCTIONS,
    DIET_BOOKING_LIST,
    DIET_BOOKING_HISTORY,
    ADD_MEAL_PLAN,
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
export const CategoryMealPlans  = () => async (dispatch) => {
    const response = await axios({
        method: "get",
        url: apiurl + "Patient/getcategorymealplan",
      });
    return dispatch({ type: CATEGORY_MEAL_PLAN, payload: response.data.data });
};

export const DietInstructions  = () => async (dispatch) => {
    const response = await axios({
        method: "get",
        url: apiurl + "Patient/getdietinstructions",
      });
    return dispatch({ type: DIET_INSTRUCTIONS, payload: response.data.data });
};

export const DietBookingList  = () => async (dispatch) => {
    const response = await axios({
        method: "post",
        url: apiurl + "Patient/getdietbookinglist",
        data: {
            "patientId":"38",
            "limit":"10",
            "pageno":1
        },
      });
    return dispatch({ type: DIET_BOOKING_LIST, payload: response.data.data });
};

export const DietBookingHistory  = () => async (dispatch) => {
    const response = await axios({
        method: "post",
        url: apiurl + "Patient/getdietbookinghistory",
        data: {
            "patientId":"38",
            "limit":"10",
            "pageno":1
        },
      });
    return dispatch({ type: DIET_BOOKING_HISTORY, payload: response.data.data });
};

export const DietAddMealPlan  = (DietVendorId,packageId,dietPlans) => async (dispatch) => {
    const response = await axios({
        method: "post",
        url: apiurl + "Patient/addmealplan",
        data: {
            // "dietvendorId":DietVendorId,
	        // "dietpackageId":packageId,
	        // "dietfiltercategoryId":dietPlans,
	        // "date":"2021-06-16"
            "dietvendorId":"12",
	"dietpackageId":"5",
	"dietfiltercategoryId":[1,2],
	"date":"2021-06-16"
        },
      });
    return dispatch({ type:ADD_MEAL_PLAN, payload: response.data.data });
};