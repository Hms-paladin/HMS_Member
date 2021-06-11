import { GET_MEMBER_PROFILE,GET_PATIENT_HEALTHTIPS,
  GET_PATIENT_PERSCRIPTION,
  UPDATE_PATIENT_DETAILS,
  GET_RELATIONSHIP,
  PARTICULAR_VACCINATION,
  UPDATE_BASIC_DETAILS,
  GET_MEDICATION,
  GET_PARTICULAR_MEDICATION,
  GET_DOCTOR_NAME,
  GET_PATIENT_NAME,
  GET_PRESCRIPTION_HISTORY,
  PARTICULAR_PRESCRIPTION_HISTORY
} from "../utils/Constants.js";
const initalState = {
  ProfileDetails: [],healthTips:[],Perscription:[],UpdatePatientDetails:[],
  Relationship:[],particularVaccination:[],UpdateBasic_Details:[],Medication:[],
  ParticularMedication:[],Doctorname:[],PatientNameList:[],PerscriptionHistory:[],
  ParticularPerscription:[]
};

const GetProfileDetails= (state = initalState, action) => {
  switch (action.type) {
    case GET_MEMBER_PROFILE:
      return { ...state, ProfileDetails: action.payload };
    case GET_PATIENT_HEALTHTIPS:
        return {...state, healthTips: action.payload} 
    case GET_PATIENT_PERSCRIPTION:
        return {...state, Perscription:action.payload} 
    case UPDATE_PATIENT_DETAILS:
      return {...state,UpdatePatientDetails:action.payload}
    case GET_RELATIONSHIP:
      return {...state,Relationship:action.payload} 
    case PARTICULAR_VACCINATION:
      return {...state,particularVaccination:action.payload}  
    case UPDATE_BASIC_DETAILS:
      return {...state,UpdateBasic_Details:action.payload} 
    case GET_MEDICATION:
      return {...state,Medication:action.payload} 
    case GET_PARTICULAR_MEDICATION:
      return {...state,ParticularMedication:action.payload}  
    case GET_DOCTOR_NAME:
      return {...state,Doctorname:action.payload}  
    case GET_PATIENT_NAME:
      return {...state,PatientNameList:action.payload}
    case GET_PRESCRIPTION_HISTORY:
      return {...state,PerscriptionHistory:action.payload}
    case PARTICULAR_PRESCRIPTION_HISTORY:
      return {...state,ParticularPerscription:action.payload}                 
    default:
      return state;
  }
}

export default GetProfileDetails;