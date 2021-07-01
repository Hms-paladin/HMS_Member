import {GET_LAB_PACKAGE,GET_LAB_TEST,PATIENT_LAB_BOOKING,GET_LAB_BOOKING_LIST} from "../utils/Constants";
const initialState = {
    getLabPackage: [],
    getLabTest:[],
    postPatientLabBooking:[],
    getLabBookingList:[]
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
            case GET_LAB_BOOKING_LIST:
            return { ...state, getLabBookingList: payload }
        default:
            return state;
    }
}