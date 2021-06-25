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

export const PatientLabBooking = () => async dispatch => {
    try {
        axios({
            method: 'POST',
            url: newapiurl + 'Patient/patientLabBooking',
            data: {
                patientId: "1",
                lab_vendor_id: "2",
                test_date: "2020-07-20",
                test_time: "09:30",
                total_amount: "8000",
                paymentStatus: "1",
                isMember: 2,
                tempMemberName: "Edwin",
                test:"l"
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