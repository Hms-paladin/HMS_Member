import { GET_PATIENT_NURSE_SEARCH, GET_NATIONALITY_NURSE, GET_MIN_EXPERIENCE_NURSE, GET_MIN_COST_NURSE } from "../utils/Constants";

const intialState = {
    GetPatientNurseSearch: [], GetNationalityforNurse: [], GetMinCostNurse: [], GetMinExperienceNurse: []
}

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PATIENT_NURSE_SEARCH:
            return { ...state, GetPatientNurseSearch: payload }
        case GET_NATIONALITY_NURSE:
            return { ...state, GetNationalityforNurse: payload }
        case GET_MIN_COST_NURSE:
            return { ...state, GetMinCostNurse: payload }
        case GET_MIN_EXPERIENCE_NURSE:
            return { ...state, GetMinExperienceNurse: payload }
        default:
            return state;
    }
}