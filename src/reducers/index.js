import { combineReducers } from "redux";
import doctorAppointmentReducer from "./doctorappointmentreducer";
import masterDropdownReducer from "./masterdropdownreducer";
import trainerListReducer from "./trainerlistreducer";
import prescriptionhistoryReducer from './prescriptionhistoryreducer'

export default combineReducers({
   doctorAppointmentReducer,
   masterDropdownReducer,
   trainerListReducer,
   prescriptionhistoryReducer
})

