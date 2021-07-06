import {GET_LAB_BOOKING_HISTORY} from "../utils/Constants";
const initialState = {
    getLabBookingHistory: [],
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
            case GET_LAB_BOOKING_HISTORY:
            return { ...state, getLabBookingHistory: payload }
        default:
            return state;
    }
}