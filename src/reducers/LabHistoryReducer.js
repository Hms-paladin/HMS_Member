import {GET_LAB_LIST} from "../utils/Constants"
const initialState={
    getLabList:[],
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_LAB_LIST:
            return { ...state, getLabList: payload }
        default:
            return state;
    }
}