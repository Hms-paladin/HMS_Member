import { GET_LAB_PACKAGE, GET_LAB_TEST, PATIENT_LAB_BOOKING } from "../utils/Constants";
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
                patientId: localStorage.getItem("userid"),
                lab_vendor_id: params.LabId,
                test_date: params.TestDate,
                test_time: params.TestTime,
                total_amount: params.TotalAmt,
                paymentStatus: "1",
                isMember: params.isMember,
                tempMemberName: params.MemberName,
                test:params.test
            }
        })
            .then((response) => {
                if (response.data.status === 1) {
                    alert(response.data.status)
                    dispatch({
                        type: PATIENT_LAB_BOOKING, payload: response.data.data
                    })
                }
            })
    }
    catch (err) { }
}