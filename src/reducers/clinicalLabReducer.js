import {GET_LAB_PACKAGE,GET_LAB_TEST,PATIENT_LAB_BOOKING,GET_LAB_BOOKING_LIST,CANCEL_BOOKING,BOOKING_RESCHEDULE,TIME_VALIDATION} from "../utils/Constants";
const initialState = {
    getLabPackage: [],
    getLabTest:[],
    postPatientLabBooking:[],
    getLabBookingList:[],
    cancelBooking:'',
    bookingReschedule:'',
    timeValidation:''
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
            case CANCEL_BOOKING:
            return { ...state, cancelBooking: payload }
            case BOOKING_RESCHEDULE:
            return { ...state, bookingReschedule: payload }
            case TIME_VALIDATION:
            return { ...state, timeValidation: payload }
        default:
            return state;
    }
}