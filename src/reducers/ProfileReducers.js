import { GET_MEMBER_PROFILE,GET_PATIENT_HEALTHTIPS,GET_PATIENT_PERSCRIPTION} from "../utils/Constants.js";
const initalState = {
  ProfileDetails: [],healthTips:[],Perscription:[]
};

const GetProfileDetails= (state = initalState, action) => {
  switch (action.type) {
    case GET_MEMBER_PROFILE:
      return { ...state, ProfileDetails: action.payload };
    case GET_PATIENT_HEALTHTIPS:
        return {...state, healthTips: action.payload} 
    case GET_PATIENT_PERSCRIPTION:
        return {...state, Perscription:action.payload}     
    default:
      return state;
  }
}

export default GetProfileDetails;