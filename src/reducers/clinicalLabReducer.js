import {GET_LAB_PACKAGE,GET_LAB_TEST,PATIENT_LAB_BOOKING} from "../utils/Constants";
const initialState = {
    getLabPackage: [],
    getLabTest:[],
    postPatientLabBooking:[]
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_LAB_PACKAGE:
            return { ...state, getLabPackage: payload }
            case GET_LAB_TEST:
            return { ...state, getLabTest: payload }
            case PATIENT_LAB_BOOKING:
            return { ...state, postPatientLabBooking: payload }
        default:
            return state;
    }
}