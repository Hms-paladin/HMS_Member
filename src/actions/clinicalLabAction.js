import { GET_LAB_PACKAGE, GET_LAB_TEST, PATIENT_LAB_BOOKING, GET_LAB_BOOKING_LIST, CANCEL_BOOKING, BOOKING_RESCHEDULE } from "../utils/Constants";
import { newapiurl } from "../utils/baseUrl";
import axios from "axios";
import { notification } from "antd";
export const GetLabPackageType = (labid) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'patient/getLabpackageType',
            data: {
                LabId: labid
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: GET_LAB_PACKAGE, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}
export const GetLabTest = (labid, categoryid) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'patient/getLabtest',
            data: {
                labId: labid,
                labcategoryId: categoryid
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: GET_LAB_TEST, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}

export const PatientLabBooking = (params) => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'Patient/patientLabBooking',
            data: {
                // patientId: localStorage.getItem("userid"),
                patientId: "1",
                lab_vendor_id: params.Lab_vendor_id,
                test_date: params.TestDate,
                test_time: params.TestTime,
                total_amount: params.TotalAmt,
                paymentStatus: "1",
                isMember: params.isMember,
                tempMemberName: params.MemberName,
                test: params.test
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: PATIENT_LAB_BOOKING, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}

export const GetLabBookingList = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'Patient/getlabbookinglist',
            data: {
                patientId: "1",
                limit: 10,
                pageno: 1
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    dispatch({
                        type: GET_LAB_BOOKING_LIST, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}

export const CancelBooking = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'Patient/Cancellabbooking',
            data: {
                cancelstatus: "1",
                labbookingId: "1",
                patientId: "1"
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: "Cancelled Successfully",
                    });
                    dispatch({
                        type: CANCEL_BOOKING, payload: response.data.status
                    })
                    return Promise.resolve();
                }
            })

    }
    catch (err) { }
}

export const BookingReschedule = (reschedule_det) => async dispatch => {
    try {
        alert(reschedule_det.tempMemberName)
        axios({
            method: 'POST',
            url: newapiurl + 'Patient/patientLabBookingReschedule',
            data: {
                oldBookingId:reschedule_det.oldBookingId,
                patientId: reschedule_det.patientId,
                lab_vendor_id: reschedule_det.lab_vendor_id,
                test_date: reschedule_det.test_date,
                test_time: reschedule_det.test_time,
                total_amount: reschedule_det.total_amount,
                paymentStatus: "1",
                isMember: reschedule_det.isMember,
                tempMemberName: reschedule_det.tempMemberName,
                test:reschedule_det.test 
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: "Rescheduled Successfully",
                    });
                    dispatch({
                        type: BOOKING_RESCHEDULE, payload: response.data.status
                    })
                    return Promise.resolve();
                }
            })

    }
    catch (err) { }
}