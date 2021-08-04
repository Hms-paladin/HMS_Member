import {BOOKROOM_LIST,PARTICULAR_ROOM_LIST,
      ROOM_DETAILS,GET_BOOKINGS_HISTORY
    } from '../utils/Constants'
import { apiurl } from "../utils/baseUrl";
import { GET_ROOM_BOOKINGS } from '../utils/Constants'
import axios from "axios";
import moment from 'moment'
import { notification } from "antd";
export const BookRoomDetails = (from,to,searchValue) => async (dispatch) => {
    console.log("setSearchKey",from,to)
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/patientRoomSearch',
            data:  {    
	            "currentDate":from&&to?"":"2020-07-20",
	            "typesearch":searchValue?true:false,
	            "searchContent":searchValue,
	            "dateFilter":from&&to?true:false,
	            "fromDate":from || "",
	            "toDate":to || "",
	            "limit":10,
	            "pageno":1
            }
        })
        .then((response) => {
            console.log("responsecheck",response)
            dispatch({ type: BOOKROOM_LIST,payload: response.data.data[0].details })
        })
        
    } catch (err) {
    }
};

export const ParticularHospitalDetails = (data) => async (dispatch) => {
    console.log("setSearchKey",data.roomVendorId)
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/particularHospitalRoomList',
            data:  {    
                "roomVendorId":data.roomVendorId,
                "currentDate":moment().format("YYYY-MM-DD"),
                "typesearch":false,
                "searchContent":"",
                "costFilter":false,
                "minCost":10,
                "maxCost":190,
                "dateFilter":false,
                "fromDate":"",
                "toDate":"",
                "costBasedSorting":false,
                "costBasedSortingOrder":"",
                "limit":100,
                "pageno":1
            }
        })
        .then((response) => {
            dispatch({ type: PARTICULAR_ROOM_LIST,payload: response.data.data[0].details })
        })
        
    } catch (err) {
    }
};


export const ParticularRoomDetails = (data) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getParticularRoomDetails',
            data:  {    
                "currentDate":moment().format("YYYY-MM-DD"),
                "roomId":data.roomId
            }
        })
        .then((response) => {
    console.log("roomId",response)

            dispatch({ type: ROOM_DETAILS,payload: response.data.data })
        })
        
    } catch (err) {
    }
};

export const GetRoomBookingDetails = (data) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getRoomBookingDetails',
            data:  {    
                "patientId":38,
	            "limit":10,
	            "pageno":1
            }
        })
        .then((response) => {
            dispatch({ type:GET_ROOM_BOOKINGS,payload: response.data.data })
        })
        
    } catch (err) {
    }
};

export const GetRoomBookingHistoryDetails = (data) => async (dispatch) => {
    try {
        axios({
            method: 'POST',
            url: apiurl + 'Patient/getRoomBookingHistoryDetails',
            data:  {    
                "patientId":38,
	            "limit":10,
	            "pageno":1
            }
        })
        .then((response) => {
            dispatch({ type:GET_BOOKINGS_HISTORY,payload: response.data.data[0].details})
        })
        
    } catch (err) {
    }
};