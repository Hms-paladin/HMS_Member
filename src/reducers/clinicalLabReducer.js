import {GET_LAB_PACKAGE,GET_LAB_TEST} from "../utils/Constants";
const initialState = {
    getLabPackage: [],
    getLabTest:[]
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_LAB_PACKAGE:
            return { ...state, getLabPackage: payload }
            case GET_LAB_TEST:
            return { ...state, getLabTest: payload }
        default:
            return state;
    }
}