import { GET_PRESCRIPTION_HISTORY_DETAILS, GET_PARTICULAR_PRESCRIPTION_DETAILS, GET_STATUS_LIST_FILTER } from "../utils/Constants";

const intialState = {
    GetPrescriptionHistoryDetails: [], GetParticularPrescriptionDetails: [], GetStatusListFilter: []
}

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PRESCRIPTION_HISTORY_DETAILS:
            return { ...state, GetPrescriptionHistoryDetails: payload }
        case GET_PARTICULAR_PRESCRIPTION_DETAILS:
            return { ...state, GetParticularPrescriptionDetails: payload }
        case GET_STATUS_LIST_FILTER:
            return { ...state, GetStatusListFilter: payload }
        default:
            return state;
    }
}