import { combineReducers } from "redux";
import doctorAppointmentReducer from "./doctorappointmentreducer";
import masterDropdownReducer from "./masterdropdownreducer";
import trainerListReducer from "./trainerlistreducer";
import prescriptionhistoryReducer from './prescriptionhistoryreducer';
import GetProfileDetails from './ProfileReducers';
import ReportReducer from "./ReportReducer"
import LabHistoryReducer from "./LabHistoryReducer";
import PatientNurseSearch from './nursingmodulereducer';

export default combineReducers({
   doctorAppointmentReducer,
   masterDropdownReducer,
   trainerListReducer,
   prescriptionhistoryReducer,
   GetProfileDetails,
   ReportReducer,
   LabHistoryReducer,
   PatientNurseSearch
})

