import { GET_PARTICULAR_TRAINER_DETAILS, GET_SLOTS_TRAINER_BOOKING, PATIENT_TRAINER_BOOKING, PATIENT_TRAINING_BOOKING_DETAILS, GET_PATIENT_TRAINER_BOOKING_HISTORY, PATIENT_TRAINER_CANCEL, PATIENT_TRAINER_MYSCHEDULE, PATIENT_TRAINER_RESCHDULE,SPECIFIC_DATE_RESCHEDULE } from "../utils/Constants";
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
                if (response.data.status === 1) {
                    dispatch({
                        type: PATIENT_TRAINING_BOOKING_DETAILS,
                        payload: response.data.data[0].details
                    })
                    console.log("Trainer Details", response);
                }
                else {
                    notification.warning({
                        message: response.data.msg
                    })
                }
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
        console.log(moment(data.from_date).format("YYYY-MM-DD"), "dataaaaa")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientTrainerBooking',
            data: {
                // "patientId": localStorage.getItem("user_id"),
                "patientId": 38,
                "trainerId": data.trainerId,
                "packageId": data.packageId,
                "appointmentScheduleId": data.appointmentScheduleId,
                "fromDate": moment(data.from_date).format("YYYY-MM-DD"),
                "toDate": moment(data.to_date).format("YYYY-MM-DD"),
                "bookedDate": data.bookedDate,
                "amount": data.amount,
                "fromTime": data.from_time,
                "toTime": data.to_time,
                "isVIP": data.isVIP,
                "trainingMode": data.training_mode,
                "paymentStatus": data.payment_status,
                "isMember": data.IsMember,
                "tempMemberName": data.patientName
            }
        })
            .then((response) => {
                console.log(response.data.status, "statussssssss")
                if (response.data.status === 1) {
                    notification.success({
                        message: "Trainer Booked successfully"
                    })
                    dispatch({
                        type: PATIENT_TRAINER_BOOKING,
                        payload: response.data.data
                    })
                    return Promise.resolve();
                }
                else { alert("not inserted") }
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

export const PatientTrainerCancelBooking = (data) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientTrainerCancelBooking',
            data: {
                "trainerBookingId": data
            }
        })
            .then((response) => {
                if (response.data.status == 1) {
                    notification.success({
                        message: "Cancelled successfully"
                    })
                }
                if (response.data.status == 0) {
                    notification.warning({
                        message: response.data.msg
                    })
                }
                dispatch({
                    type: PATIENT_TRAINER_CANCEL,
                    payload: response.data.data
                })
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}

export const PatientTrainerScheduleDetails = (item) => async dispatch => {
        // let dt = new Date(moment(item.to_date).format("MMM") + "-" + moment(item.to_date).format("Y") + "-" + moment(item.to_date).getDate())
        // const copy = new Date(Number(dt))
        // copy.setDate(dt.getDate() + 50)
        console.log(item, "todayyy")
    try {
      
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientTrainerScheduleDetails',
            data: {
                "fromDate": moment(item.from_date).format("YYYY-MM-DD"),
                // "toDate": moment(item.to_date).format("YYYY-MM-DD"),
                "toDate": "2022-10-10",
                "trainerBookingId": item.trainerBookingId,
                "currentDate": moment().format("YYYY-MM-DD")

                // "fromDate": "2021-08-01",
                // "toDate": "2021-08-31",
                // "trainerBookingId": "398",
                // "currentDate": "2021-08-12"
            }
        })
            .then((response) => {
                if (response.data.status == 1) {
                    dispatch({
                        type: PATIENT_TRAINER_MYSCHEDULE,
                        payload: response.data.data
                    })
                }
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}

export const PatientTrainerReschedule = (RescheduleInfo) => async dispatch => {
    try {
        console.log(RescheduleInfo, "todayyy")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientTrainerBookingReschedule',
            data: RescheduleInfo
        })
            .then((response) => {
                if (response.data.status == 1) {
                    notification.success({
                        message: "Rescheduled successfully"
                    })
                    dispatch({
                        type: PATIENT_TRAINER_RESCHDULE,
                        payload: response.data.data
                    })
                }
                if (response.data.status == 0) {
                    notification.warning({
                        message: response.data.msg
                    })
                }
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}

export const SpecificDateReschedule = (RescheduleInfo) => async dispatch => {
    try {
        console.log(RescheduleInfo, "todayyy")
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientTrainerBookingSpecificDateReschedule',
            data: RescheduleInfo
        })
            .then((response) => {
                if (response.data.status == 1) {
                    notification.success({
                        message: "Rescheduled successfully"
                    })
                    dispatch({
                        type: SPECIFIC_DATE_RESCHEDULE,
                        payload: response.data.data
                    })
                }
                if (response.data.status == 0) {
                    notification.warning({
                        message: response.data.msg
                    })
                }
            })

    } catch (err) {
        console.log("actionerr", err)
    }
}
