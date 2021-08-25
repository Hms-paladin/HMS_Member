import { GET_DOCTOR_SERVICE_DROPDOWN } from "../utils/Constants.js";
const initalState = {
  getDoctorServiceDDL: [],
};

const masterDropdownReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_DOCTOR_SERVICE_DROPDOWN:
      return { ...state, getDoctorServiceDDL: action.payload };
    default:
      return state;
  }
}

export default masterDropdownReducer;