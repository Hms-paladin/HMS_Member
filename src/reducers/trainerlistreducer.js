import { GET_TRAINERLIST_PATIENT, GET_PARTICULAR_TRAINER_DETAILS  } from "../utils/Constants";

const intialState = {
    getTrainerListPatient: [], getParticularTrainerDetails: []
}

const trainerListReducer = (state = intialState, action) => {
    //const { type, payload } = action;
    switch (action.type) {
        case GET_TRAINERLIST_PATIENT:
            return { ...state, getTrainerListPatient: action.payload }
        case GET_PARTICULAR_TRAINER_DETAILS:
            return { ...state, getParticularTrainerDetails: action.payload }
        default:
            return state;
    }
}

export default trainerListReducer;