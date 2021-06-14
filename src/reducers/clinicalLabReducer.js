import {GET_LAB_PACKAGE} from "../utils/Constants";
const initialState = {
    getLabPackage: [],
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_LAB_PACKAGE:
            return { ...state, getLabPackage: payload }
        default:
            return state;
    }
}