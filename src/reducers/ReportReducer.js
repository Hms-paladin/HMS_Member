import { LAB_RESULT_MEMBERLIST } from "../utils/Constants"
const initialState = {
    getLabResultMemberList: [],
}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LAB_RESULT_MEMBERLIST:
            return { ...state, getLabResultMemberList: payload }
        default:
            return state;
    }
}