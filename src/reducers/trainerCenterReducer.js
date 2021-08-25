import {GET_TRAININGLIST_CENTER} from "../utils/Constants"
const initialState={getTrainerListForCenter:[]}
const TrainerCenterReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_TRAININGLIST_CENTER:
            return{...state,getTrainerListForCenter:action.payload}
        default:
        return state;
    }
}
export default TrainerCenterReducer;