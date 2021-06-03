import { GET_PRESCRIPTION_HISTORY_DETAILS, GET_PARTICULAR_PRESCRIPTION_DETAILS } from "../utils/Constants";

const intialState = {
    GetPrescriptionHistoryDetails: [], GetParticularPrescriptionDetails: []
}

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PRESCRIPTION_HISTORY_DETAILS:
            return { ...state, GetPrescriptionHistoryDetails: payload }
        case GET_PARTICULAR_PRESCRIPTION_DETAILS:
            return { ...state, GetParticularPrescriptionDetails: payload }
        default:
            return state;
    }
}