import { GET_MEMBER_PROFILE,GET_PATIENT_HEALTHTIPS,GET_PATIENT_PERSCRIPTION} from "../utils/Constants";
import {ADD_PATIENT_DETAILS,UPDATE_PATIENT_DETAILS,DELETE_MEMBER,GET_RELATIONSHIP} from '../utils/Constants'
import {PARTICULAR_VACCINATION,GET_PERSCRIPTION,UPDATE_BASIC_DETAILS,GET_MEDICATION,GET_PARTICULAR_MEDICATION} from '../utils/Constants'
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
            data:  {
                "patientId":38,
	            "currentDate": moment().format('YYYY-MM-DD'),
	            "currentTime": moment().format('HH:m:s'),
                
                // "patientId":"16",
             	// "currentDate":"2020-08-05",
	            // "currentTime":"10:00"
            }
        })
        .then((response) => {
            dispatch({ type: GET_MEMBER_PROFILE,payload: response.data.data })
        })
        
    } catch (err) {
    }
};


export const GetPatientHealthTips = (patientId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientHealthTipDetails',
            data:  {
                "patientTypeId":patientId
            }
        })
        .then((response) => {
            dispatch({ type: GET_PATIENT_HEALTHTIPS,payload: response.data.data })
        })
        
    } catch (err) {
    }
};

export const GetPatientPerscription = (patientId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientPrescriptionDetails',
            data:  { 
	           "patientId":patientId,
	           "currentDate":moment().format('YYYY-MM-DD HH:m:s')
            }
        })
        .then((response) => {
            dispatch({ type: GET_PATIENT_PERSCRIPTION,payload: response.data.data })
        })
        
    } catch (err) {
    }
};
export const  AddPatientDetails= (data,patientId) => async (dispatch) => {
console.log("data",patientId)
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/addPatientmemberDetails',
            data:  { 
	           name:data.name.value,
               gender:data.gender.value,
               dob:data.date.value,
               relationId:data.relationship.value,
               heightcm:data.height.value,
               weightkg:data.weight.value,
               phoneno:data.mobileno.value,
               parentpatientId:patientId,
               uploadFile:""

            }
        })
        .then((response) => {

            if(response.data.status===1){
             notification.success({
                 message:"Patient added successfully"
             })   
            dispatch({ type: ADD_PATIENT_DETAILS,payload: response.data.data })
            dispatch(GetMemberProfile(patientId))
            return Promise.resolve();
            }
        })
        
    } catch (err) {
    }
};


export const  UpdatePatientDetails= (formdata,patientId) => async (dispatch) => {
    console.log(formdata,"formData")
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/editpatientdetails',
            data: formdata     
        })
        .then((response) => {

            if(response.data.status===1){
             notification.success({
                 message:"Patient details updated successfully"
             })   
            dispatch({ type: UPDATE_PATIENT_DETAILS,payload: response.data.data })
            dispatch(GetMemberProfile(patientId))
            return Promise.resolve();
            }
            else if(response.data.status===0){
                notification.error({
                    message:response.data.msg
                })  
            }
        })
        
    } catch (err) {
    }
};



export const  DeleteMember= (id,patientId) => async (dispatch) => {
    try {
        axios({
            method: 'delete',
            url: apiurl + 'Patient/deletepatientmember',
            data:{
                patientId:id
            }   
        })
        .then((response) => {

            if(response.data.status===1){
             notification.success({
                 message:"Member deleted successfully"
             })   
            dispatch({ type: DELETE_MEMBER,payload: response.data.data })
            dispatch(GetMemberProfile(patientId))
            return Promise.resolve();
            }
            else if(response.data.status===0){
                notification.error({
                    message:response.data.msg
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
            data:  {
	           "patientId":patient.patientId,
	           "patientDoB":patient.dob
            }
        })
        .then((response) => {
            dispatch({ type: PARTICULAR_VACCINATION,payload: response.data.data })
        })
        
    } catch (err) {
    }
};


export const GetPerscription = (patient) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/particularPatientVaccinationDetails",
            data:  {
	           "patientId":patient.patientId,
	           "patientDoB":patient.dob
            }
        })
        .then((response) => {
            dispatch({ type: GET_PERSCRIPTION,payload: response.data.data })
        })
        
    } catch (err) {
    }
};



export const  UpdateBasicPatientDetails= (formdata,patientId) => async (dispatch) => {
    console.log(formdata,"formData")
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/updateBasicPatientDetails',
            data: formdata     
        })
        .then((response) => {

            if(response.data.status===1){
             notification.success({
                 message:"Patient details updated successfully"
             })   
            dispatch({ type:UPDATE_BASIC_DETAILS,payload: response.data.data })
            dispatch(GetMemberProfile(patientId))
            return Promise.resolve();
            }
            else if(response.data.status===0){
                notification.error({
                    message:response.data.msg
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
            data:  {
               "patientId":"38",
               "currentDate":moment().format('YYYY-MM-DD'),
	           "morningSession":false,
	           "afternoonSession":false,
	           "nightSession":false
            }
        })
        .then((response) => {
            dispatch({ type: GET_MEDICATION,payload: response.data.data })
        })
        
    } catch (err) {
    }
};

export const GetParticularMedicationList = (patientId) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + "Patient/particularPatientMedicationList",
            data:  {
               "patientId":patientId,
               "currentDate":moment().format('YYYY-MM-DD'),
	           "morningSession":false,
	           "afternoonSession":false,
	           "nightSession":false
            }
        })
        .then((response) => {
            dispatch({ type: GET_PARTICULAR_MEDICATION,payload: response.data.data })
        })
        
    } catch (err) {
    }
};