import {GET_PATIENT_PROFILE} from "../utils/Constants"
const initialState={
   getPatientProfile:[],
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PATIENT_PROFILE:
            return { ...state, getPatientProfile: payload }
        default:
            return state;
    }
}