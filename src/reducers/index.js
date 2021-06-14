import { combineReducers } from "redux";
import doctorAppointmentReducer from "./doctorappointmentreducer";
import masterDropdownReducer from "./masterdropdownreducer";
import trainerListReducer from "./trainerlistreducer";
import ReportReducer from "./ReportReducer"
import LabHistoryReducer from "./LabHistoryReducer";
import clinicalLabReducer from "./clinicalLabReducer"

export default combineReducers({
   doctorAppointmentReducer,
   masterDropdownReducer,
   trainerListReducer,
   ReportReducer,
   LabHistoryReducer,
   clinicalLabReducer,
})

