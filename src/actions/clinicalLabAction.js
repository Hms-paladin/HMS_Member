import { GET_LAB_PACKAGE, GET_LAB_TEST, PATIENT_LAB_BOOKING, GET_LAB_BOOKING_LIST } from "../utils/Constants";
import { newapiurl } from "../utils/baseUrl";
import axios from "axios";
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