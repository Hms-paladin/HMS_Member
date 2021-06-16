import { LAB_RESULT_MEMBERLIST,PARTICULAR_MEMBER_LABRESULT } from "../utils/Constants"
const initialState = {
    getLabResultMemberList: [],
    getParticularMemLabResult:[],
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LAB_RESULT_MEMBERLIST:
            return { ...state, getLabResultMemberList: payload }
            case PARTICULAR_MEMBER_LABRESULT:
            return { ...state, getParticularMemLabResult: payload }
        default:
            return state;
    }
}