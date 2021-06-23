import {
    DIET_COMPANY_LST,GET_MEAL_PLANS,
    CATEGORY_MEAL_PLAN,DIET_INSTRUCTIONS,
    DIET_BOOKING_LIST,
    DIET_BOOKING_HISTORY,
    ADD_MEAL_PLAN,
    ADD_REPEAT_MENU
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
	        "limit":"10",
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
            "dietvendorId":12,
	        "dietpackageId":packageId,
	        "dietfiltercategoryId":dietPlans,
	        "date":"2021-06-16"
        },
      });
    return dispatch({ type:ADD_MEAL_PLAN, payload: response.data.data });
};






export const  AddRepeatMenu= (data) => async (dispatch) => {
    try {
        axios({
            method: 'post',
            url: apiurl + 'Patient/getdietrepeatmenu',
            data:{
                "dietbookingid":data.dietbookingId,
                "dietvendorId":data.dietvendorId,
                "date":moment().format("YYYY-MM-DD")
            }   
        })
        .then((response) => {

            if(response.data.status===1){
             notification.success({
                 message:"This package repeatly added."
             })   
            dispatch({ type: ADD_REPEAT_MENU,payload: response.data.data })
            return Promise.resolve();
            }
        })
        
    } catch (err) {
    }
}