import { LAB_RESULT_MEMBERLIST } from "../utils/Constants"
import { newapiurl } from "../utils/baseUrl";
import axios from "axios";
export const GetLabResultMemberList=()=>async dispatch=>{
    try{
        // patientId:localStorage.getItem("user_id")
        axios({
            method:'POST',
            url: newapiurl+'Patient/labResultMembersList',
            data:{
                patientId:"38"
            }
        })
        .then((response)=>{
            if(response.data.status===1){
                dispatch({
                    type:LAB_RESULT_MEMBERLIST,payload:response.data.data
                })
            }
        })
    }
    catch(err){}
}