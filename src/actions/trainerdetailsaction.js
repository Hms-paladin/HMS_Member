import { GET_PARTICULAR_TRAINER_DETAILS, GET_SLOTS_TRAINER_BOOKING, PATIENT_TRAINER_BOOKING, PATIENT_TRAINING_BOOKING_DETAILS,GET_PATIENT_TRAINER_BOOKING_HISTORY } from "../utils/Constants";
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import moment from "moment";
import { notification } from "antd";

export const GetParticularTrainerDetails = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getParticularTrainerDetails',
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: GET_PARTICULAR_TRAINER_DETAILS,
                    payload: response.data.data[0]
                })
                console.log("Trainer Details", response, data);
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}


export const PatientTrainingBookingDetials = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getPatientTrainerBookingDetails',
            data:
            {
                "patientId": "38",
                "pageno": 1,
                "limit": 10,
            }
        })
            .then((response) => {
                dispatch({
                    type: PATIENT_TRAINING_BOOKING_DETAILS,
                    payload: response.data.data[0].details
                })
                console.log("Trainer Details", response);
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}

export const GetSlotsTrainerBooking = (slots) => async dispatch => {
    try {
        console.log(slots, "slots")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getSlotsForTrainerBooking',
            data: {
                "appointmentScheduleId": slots[0].appoint_id,
                "fromDate": moment(slots[0].sd).format("YYYY-MM-DD"),
                "toDate": moment(slots[0].ed).format("YYYY-MM-DD")
            }
        })
            .then((response) => {
                dispatch({
                    type: GET_SLOTS_TRAINER_BOOKING,
                    payload: response.data.data
                })
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}
export const PatientTrainerBooking = (data) => async dispatch => {
    try {
        console.log(data, "dataaaaa")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientTrainerBooking',
            data: {
                "patientId": localStorage.getItem("user_id"),
                "trainerId": data.trainerId,
                "packageId": data.packageId,
                "appointmentScheduleId": data.appointmentScheduleId,
                "fromDate": data.from_date,
                "toDate": data.to_date,
                "bookedDate": data.bookedDate,
                "amount": data.cost,
                "fromTime": data.from_time,
                "toTime": data.to_time,
                "isVIP": data.isVIP,
                "trainingMode": data.trainingMode,
                "paymentStatus": data.paymentStatus,
                "isMember": data.IsMember,
                "tempMemberName": data.tempMemberName
            }
        })
            .then((response) => {
                if (response.data.status) {
                    notification.success({
                        message: "Trainer Booked successfully"
                    })
                    dispatch({
                        type: PATIENT_TRAINER_BOOKING,
                        payload: response.data.data
                    })
                    return Promise.resolve();
                }
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}

export const PatientTrainingBookingHistoryDetials = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getPatientTrainerBookingHistoryDetails',
            data: {
                "patientId": "38",
                "pageno": 1,
                "limit": 10,
            }
        })
            .then((response) => {
                dispatch({
                    type: GET_PATIENT_TRAINER_BOOKING_HISTORY,
                    payload: response.data.data[0].details
                })
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}
