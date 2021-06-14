import { GET_PATIENT_DOCTOR_SEARCH, GET_PARTICULAR_DOCTOR_SEARCH, GET_SPECIALITY,  GET_PARTICULAR_DOCTOR_SEARCH_CLINICSLOTS,  
    POST_PATIENT_DOCTOR_BOOKING, GET_PATIENT_BOOKED_APPOINTMENTLIST, GET_PATIENT_BOOKED_APPOINTMENTLIST_HISTORY,
    GET_RESCHEDULED_DOCTOR_APPOINTMENT, GET_RESCHEDULED_DOCTOR_APPOINTMENT_CLINICSLOTS, PUT_FAVOURITE_ADD_REMOVE,
    GET_MY_APPOINTMENT_PRESCRIPTION_HISTORY,GET_DOCTOR_LIST,GET_PATIENT_LIST,GET_MEMBER_QUEUE_DETAILS} from "../utils/Constants";

const intialState = {
    getparticularDoctorSearchDetails: [], getPatientDoctorSearchDetails:[], getDoctorSpecialityDetails:[], getparticularDoctorSearchClinicSlotsDetails: [], postPatientDoctorBooking: '',
    getMyAppointmentsList: [], getMyAppointmentsHistoryList: [], getReschduledDoctorAppointment: [], getReschduledDoctorAppointmentClinicSlots: [], getFavouriteAddorRemoveDetails: '',
    getAppointementPrescriptionHistory: [],PatientList:[],DoctorList:[],memberQueueDetailsForParticularBooking:[]}
const doctorAppointmentReducer = (state = intialState, action) => {
    //const { type, payload } = action;
    switch (action.type) {
        case GET_PARTICULAR_DOCTOR_SEARCH:
            return { ...state, getparticularDoctorSearchDetails: action.payload }
        case GET_PARTICULAR_DOCTOR_SEARCH_CLINICSLOTS:
            return { ...state, getparticularDoctorSearchClinicSlotsDetails: action.payload }
        case POST_PATIENT_DOCTOR_BOOKING:
            return { ...state, postPatientDoctorBooking: action.payload }
        case GET_PATIENT_DOCTOR_SEARCH:
            return { ...state, getPatientDoctorSearchDetails: action.payload }
        case GET_SPECIALITY:
            return { ...state, getDoctorSpecialityDetails: action.payload }
        case GET_PATIENT_BOOKED_APPOINTMENTLIST:
            return { ...state, getMyAppointmentsList: action.payload }
        case GET_PATIENT_BOOKED_APPOINTMENTLIST_HISTORY:
            return { ...state, getMyAppointmentsHistoryList: action.payload }
        case GET_RESCHEDULED_DOCTOR_APPOINTMENT:
            return { ...state, getReschduledDoctorAppointment: action.payload }
        case GET_RESCHEDULED_DOCTOR_APPOINTMENT_CLINICSLOTS:
            return { ...state, getReschduledDoctorAppointmentClinicSlots: action.payload }
        case PUT_FAVOURITE_ADD_REMOVE:
            return { ...state, getFavouriteAddorRemoveDetails: action.payload }
        case GET_MY_APPOINTMENT_PRESCRIPTION_HISTORY:
            return { ...state, getAppointementPrescriptionHistory: action.payload }
        case GET_DOCTOR_LIST:
            return { ...state, DoctorList: action.payload }
        case GET_PATIENT_LIST:
            return { ...state, PatientList: action.payload }  
        case GET_MEMBER_QUEUE_DETAILS:
            return { ...state, PatientList: action.payload }     
            
        default:
            return state;
    }
}

export default doctorAppointmentReducer;