import { combineReducers } from "redux";
import doctorAppointmentReducer from "./doctorappointmentreducer";
import masterDropdownReducer from "./masterdropdownreducer";
import trainerListReducer from "./trainerlistreducer";
import GetProfileDetails from './ProfileReducers'
import DietReducer from './DietHistoryReducers'
import prescriptionhistoryReducer from './prescriptionhistoryreducer';
import ReportReducer from "./ReportReducer"
import LabHistoryReducer from "./LabHistoryReducer";
import PatientNurseSearch from './nursingmodulereducer';

export default combineReducers({
   doctorAppointmentReducer,
   masterDropdownReducer,
   trainerListReducer,
   GetProfileDetails,
   DietReducer,
   prescriptionhistoryReducer,
   GetProfileDetails,
   ReportReducer,
   LabHistoryReducer,
   PatientNurseSearch
})

