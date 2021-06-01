import {PARTICULAR_PRESCRIPTION_DETAILS} from "../utils/Constants";
import { apiurl } from "../utils/baseUrl.js";
import axios from "axios";
import moment from 'moment';
import { notification } from "antd";


export const GetparticularPharmacyPrescriptionDetails = (empCodeName,params) => async dispatch => {
 
  try {

      axios({
          method: "POST",
          url: apiurl + "particularPharmacyPrescriptionDetails",
          data: {
            employee_code: empCodeName,
            designation: params.designation.value===""?0:params.designation.value,
            department: params.department.value===""?0:params.department.value,
          },
        }).then((response) => {
          if (response.data.status === 1) {
            // console.log(response.data.data.length,"//")
              dispatch({type:PARTICULAR_PRESCRIPTION_DETAILS,payload:response.data.data})
            return Promise.resolve();
          }
        });
      
  } catch (err) {
      
  }
}


  export const getEmployeeCode = () => async (dispatch) => {
    const response = await axios.get(apiurl + "/get_employee_code");
    return dispatch({ type: GET_EMPLOYEE_CODE, payload: response.data.data });
  };


