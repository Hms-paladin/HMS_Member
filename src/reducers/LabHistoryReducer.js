import {GET_LAB_LIST,GET_PARTICULAR_LAB_DETAILS} from "../utils/Constants"
const initialState={
    getLabList:[],
    getParticularLabDet:[],
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_LAB_LIST:
            return { ...state, getLabList: payload }
            case GET_PARTICULAR_LAB_DETAILS:
            return { ...state, getParticularLabDet: payload }
        default:
            return state;
    }
}