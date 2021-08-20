import { GET_TRAINERLIST_PATIENT, GET_PARTICULAR_TRAINER_DETAILS, GET_SLOTS_TRAINER_BOOKING, PATIENT_TRAINER_BOOKING, PATIENT_TRAINING_BOOKING_DETAILS, GET_PATIENT_TRAINER_BOOKING_HISTORY, PATIENT_TRAINER_CANCEL, PATIENT_TRAINER_MYSCHEDULE,PATIENT_TRAINER_RESCHDULE } from "../utils/Constants";

const intialState = {
    getTrainerListPatient: [], getParticularTrainerDetails: [], getSlotsTrainerBooking: [], patientTrainerBooking: '',
    getPatientTrainerBookings: [], getPatientTrainerBookingHistory: [], cancelBooking: '', getMySchedule: [],
    getPatientTrainerReschedule:''
}

const trainerListReducer = (state = intialState, action) => {
    //const { type, payload } = action;
    switch (action.type) {
        case GET_TRAINERLIST_PATIENT:
            return { ...state, getTrainerListPatient: action.payload }
        case GET_PARTICULAR_TRAINER_DETAILS:
            return { ...state, getParticularTrainerDetails: action.payload }
        case GET_SLOTS_TRAINER_BOOKING:
            return { ...state, getSlotsTrainerBooking: action.payload }
        case PATIENT_TRAINER_BOOKING:
            return { ...state, patientTrainerBooking: action.payload }
        case PATIENT_TRAINING_BOOKING_DETAILS:
            return { ...state, getPatientTrainerBookings: action.payload }
        case GET_PATIENT_TRAINER_BOOKING_HISTORY:
            return { ...state, getPatientTrainerBookingHistory: action.payload }
        case PATIENT_TRAINER_CANCEL:
            return { ...state, cancelBooking: action.payload }
        case PATIENT_TRAINER_MYSCHEDULE:
            return { ...state, getMySchedule: action.payload }
        case PATIENT_TRAINER_RESCHDULE:
            return { ...state, getPatientTrainerReschedule: action.payload }
        default:
            return state;
    }
}

export default trainerListReducer;