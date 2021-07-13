import { GET_MEMBER_PROFILE, GET_PATIENT_HEALTHTIPS, GET_PATIENT_PERSCRIPTION } from "../utils/Constants";
import { ADD_PATIENT_DETAILS, UPDATE_PATIENT_DETAILS, DELETE_MEMBER, GET_RELATIONSHIP } from '../utils/Constants'
import { GET_DOCTOR_NAME, GET_PATIENT_NAME, GET_PRESCRIPTION_HISTORY } from '../utils/Constants'
import { PARTICULAR_PRESCRIPTION_HISTORY } from '../utils/Constants'
import { PARTICULAR_VACCINATION, GET_PERSCRIPTION, UPDATE_BASIC_DETAILS, GET_MEDICATION, GET_PARTICULAR_MEDICATION } from '../utils/Constants'
import { apiurl } from "../utils/baseUrl";
import axios from "axios";
import moment from 'moment'
import { notification } from "antd";
import Nurse from "../images/nurse.png"
export const GetMemberProfile = () => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getPatientProfile',
            data: {
                "patientId": 38,
                "currentDate": moment().format('YYYY-MM-DD'),
                "currentTime": moment().format('HH:m:s'),

                // "patientId":"16",
                // "currentDate":"2020-08-05",
                // "currentTime":"10:00"
            }
        })
            .then((response) => {
                dispatch({ type: GET_MEMBER_PROFILE, payload: response.data.data })
                var DataItem = []
                const MemberDetails = response.data.data[0].patientmemberDetails
                var MemberData = []
                response.data.data.map((data) => {
                    DataItem.push({
                        name: data.name, patientId: data.patientId,
                        gendar: data.gender, address: data.address,
                        height: data.height, weight: data.weight
                    })
                })
                MemberDetails.map((data) => {
                    MemberData.push(data)
                })

                if (response.data.data) {
                    localStorage.setItem("name", DataItem[0].name)
                    localStorage.setItem("patientId", DataItem[0].patientId)
                    localStorage.setItem("gender", DataItem[0].gendar)
                    localStorage.setItem("address", DataItem[0].address)
                    localStorage.setItem("height", DataItem[0].height)
                    localStorage.setItem("weight", DataItem[0].weight)
                    localStorage.setItem("MemberDetails", JSON.stringify(MemberData))
                }
                console.log("responsecheck", MemberData)
            })

    } catch (err) {
    }
};


export const GetPatientHealthTips = (patientId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientHealthTipDetails',
            data: {
                "patientTypeId": patientId
            }
        })
            .then((response) => {
                dispatch({ type: GET_PATIENT_HEALTHTIPS, payload: response.data.data })
            })

    } catch (err) {
    }
};

export const GetPatientPerscription = (patientId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientPrescriptionDetails',
            data: {
                "patientId": patientId,
                "currentDate": moment().format('YYYY-MM-DD HH:m:s')
            }
        })
            .then((response) => {
                dispatch({ type: GET_PATIENT_PERSCRIPTION, payload: response.data.data })
            })

    } catch (err) {
    }
};
export const AddPatientDetails = (data, patientId, uploaddata, imageChanged) => async (dispatch) => {
    console.log("dataaaaaaa", data,patientId,uploaddata)
    var formdata = new FormData()
    formdata.set("name", data.name.value)
    formdata.set("gender", data.gender.value)
    formdata.set("dob", data.date.value)
    formdata.set("relationId", data.relationship.value)
    formdata.set("heightcm", data.height.value)
    formdata.set("weightkg", data.weight.value)
    formdata.set("phoneno", data.mobileno.value)
    formdata.set("parentpatientId", patientId)
    // if(imageChanged===true){
    //  for(var i=0 ; i>= uploaddata.length;i++)  { 
    // formdata.append("uploadFile",uploaddata[i].originFileObj)
    //  }  
    // }else{
    formdata.append("uploadFile", uploaddata)
    // }
    console.log(formdata,"formdata")
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/addPatientmemberDetails',
            data: formdata
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: "Patient added successfully"
                    })
                    dispatch({ type: ADD_PATIENT_DETAILS, payload: response.data.data })
                    dispatch(GetMemberProfile(patientId))
                    return Promise.resolve();
                }
            })

    } catch (err) {
    }
};


export const UpdatePatientDetails = (ProfileDetails, patientId) => async (dispatch) => {
    var formdata = new FormData();

    // uploadFile:""
    formdata.set("name", ProfileDetails.name.value || "")
    formdata.set("dob", ProfileDetails.dob.value || "")
    formdata.set("email", ProfileDetails.email.value || "")
    formdata.set("gender", ProfileDetails.gender.value || "")
    formdata.set("phone_no", ProfileDetails.mobile.value || "")
    formdata.set("address", ProfileDetails.address.value || "")
    formdata.set("expected_del_date", ProfileDetails.D_date.value || "")
    formdata.set("modifiedby", 0)
    formdata.set("userType", 0)
    formdata.set("id", patientId)
    formdata.set("babyName", ProfileDetails.babyname.value || "")
    formdata.append("uploadFile", "")
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/editpatientdetails',
            data: formdata
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: "Patient details updated successfully"
                    })
                    dispatch({ type: UPDATE_PATIENT_DETAILS, payload: response.data.data })
                    dispatch(GetMemberProfile(patientId))
                    return Promise.resolve();
                }
                else if (response.data.status === 0) {
                    notification.error({
                        message: response.data.msg
                    })
                }
            })

    } catch (err) {
    }
};



export const DeleteMember = (id, patientId) => async (dispatch) => {
    try {
        axios({
            method: 'delete',
            url: apiurl + 'Patient/deletepatientmember',
            data: {
                patientId: id
            }
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: "Member deleted successfully"
                    })
                    dispatch({ type: DELETE_MEMBER, payload: response.data.data })
                    dispatch(GetMemberProfile(patientId))
                    return Promise.resolve();
                }
                else if (response.data.status === 0) {
                    notification.error({
                        message: response.data.msg
                    })
                }
            })

    } catch (err) {
    }
}


export const GetRelationship = () => async (dispatch) => {
    const response = await axios.get(apiurl + "/getpatientrelation");
    return dispatch({ type: GET_RELATIONSHIP, payload: response.data.data });
};



export const ParticularPatientVaccination = (patient) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/particularPatientVaccinationDetails",
            data: {
                "patientId": patient.patientId,
                "patientDoB": patient.dob
            }
        })
            .then((response) => {
                dispatch({ type: PARTICULAR_VACCINATION, payload: response.data.data })
            })

    } catch (err) {
    }
};


export const GetPerscription = (patient) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/particularPatientVaccinationDetails",
            data: {
                "patientId": patient.patientId,
                "patientDoB": patient.dob
            }
        })
            .then((response) => {
                dispatch({ type: GET_PERSCRIPTION, payload: response.data.data })
            })

    } catch (err) {
    }
};



export const UpdateBasicPatientDetails = (FamilyProfile, patientId, PatientMemberId) => async (dispatch) => {
    console.log(formdata, "formData")
    var formdata = new FormData();
    formdata.set("name", FamilyProfile.name.value)
    formdata.set("dob", FamilyProfile.date.value)
    formdata.set("height", FamilyProfile.height.value)
    formdata.set("gender", FamilyProfile.gender.value)
    formdata.set("heightUnit", "CM")
    formdata.set("weight", FamilyProfile.weight.value)
    formdata.set("weightUnit", "Kg")
    formdata.set("bmi", "")
    formdata.set("intakeCal", "")
    formdata.set("durationDays", "")
    formdata.set("anyMedication", "")
    formdata.set("anyDisease", "")
    formdata.set("anySurgery", "")
    formdata.set("anyGoals", "")
    formdata.set("goalWeight", "")
    formdata.set("goalWeightUnit", "")
    formdata.set("parrentPatientId", patientId)
    formdata.set("patientId", PatientMemberId)
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/updateBasicPatientDetails',
            data: formdata
        })
            .then((response) => {

                if (response.data.status === 1) {
                    notification.success({
                        message: "Patient details updated successfully"
                    })
                    dispatch({ type: UPDATE_BASIC_DETAILS, payload: response.data.data })
                    dispatch(GetMemberProfile(patientId))
                    return Promise.resolve();
                }
                else if (response.data.status === 0) {
                    notification.error({
                        message: response.data.msg
                    })
                }
            })

    } catch (err) {
    }
};


export const GetMedicationList = (patient) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/medicationPatientList",
            data: {
                "patientId": "38",
                "currentDate": moment().format('YYYY-MM-DD'),
                "morningSession": false,
                "afternoonSession": false,
                "nightSession": false
            }
        })
            .then((response) => {
                dispatch({ type: GET_MEDICATION, payload: response.data.data })
            })

    } catch (err) {
    }
};

export const GetParticularMedicationList = (patientId, morning, afternoon, night) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/particularPatientMedicationList",
            data: {
                "patientId": patientId,
                "currentDate": moment().format('YYYY-MM-DD'),
                "morningSession": morning,
                "afternoonSession": afternoon,
                "nightSession": night
            }
        })
            .then((response) => {
                dispatch({ type: GET_PARTICULAR_MEDICATION, payload: response.data.data })
            })

    } catch (err) {
    }
};

export const DoctorName = (id) => async (dispatch) => {

    const response = await axios({
        method: "post",
        url: apiurl + "Patient/doctorListForPrescriptionFilter",
        data: {
            "selectedPatientId": id
        },
    });
    return dispatch({ type: GET_DOCTOR_NAME, payload: response.data.data });
};

export const PatientName = () => async (dispatch) => {
    const response = await axios({
        method: "post",
        url: apiurl + "Patient/patientListForPrescriptionFilter",
        data: {
            "patientId": "38"
        },
    });
    return dispatch({ type: GET_PATIENT_NAME, payload: response.data.data });
};

export const GetPerscriptionHistory = (FilterTrue, data) => async (dispatch) => {
    // alert(FilterTrue)
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/patientPrescriptionHistory",
            data: {
                "patientId": "38",
                "currentDate": moment().format('YYYY-MM-DD'),
                "advanceFilter": FilterTrue,
                "doctorId": data.doctor.value || "",
                "fromDate": data.from_date.value || "",
                "toDate": data.to_date.value || "",
                "pageno": 1,
                "limit": 20
            }
        })
            .then((response) => {
                dispatch({ type: GET_PRESCRIPTION_HISTORY, payload: response.data.data })
            })

    } catch (err) {
    }
};


export const ParticularPerscriptionHistory = (PrescriptionId) => async (dispatch) => {
    // alert(FilterTrue)
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/particularPatientPrescriptionHistoryDetails",
            data: {
                "prescriptionId": PrescriptionId,
                "currentDate": moment().format('YYYY-MM-DD')
            }
        })
            .then((response) => {
                dispatch({ type: PARTICULAR_PRESCRIPTION_HISTORY, payload: response.data.data })
            })

    } catch (err) {
    }
};