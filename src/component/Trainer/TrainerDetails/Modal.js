import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import './Modal.scss'
import percentage from '../../../images/percentage.svg'
import {useHistory,useLocation} from 'react-router-dom'

export default function ProgramModal(props){
    let history = useHistory()
    let location=useLocation()
    const [HideAdrs,setHideAdrs]=useState(false)

    console.log("modalData", props)
    const SelectDetails=()=> {
      history.push({
        pathname: "/trainerbooking",
        state: {
          dataToChild:props.dataToChild,
          dataToC:props.dataToC
        }
      })
    }

 return(
     <div className="pro_modal_parent">
         <div className="p_title_head"><label>{props.dataToC.trainerName}</label><div onClick={()=>SelectDetails()}><Button>Select</Button></div></div>
         <div>
            <label className="type_fitness">{props.dataToC.trainingCategoryName}</label>
   
          </div>
          <div className="mem_h"><label>{props.dataToChild.tr_package_name}</label><label>{props.dataToChild.tr_cost} KWD</label></div>
          <div className="modal_sessions_cont">
              <label>{props.dataToChild.tr_session}</label>
              <div className="ses_text"><div>sessions</div><div>Mon - Thu - Sat</div></div>
              <div style={{position:"relative"}}>
                         <img src={percentage} style={{width:"70px"}}/>
                         <div className="tra_per_inside_div"><p>{props.dataToChild.dealValue+"%"}</p><p>off</p></div>
             </div>
          </div>
   
          <div className="p_det">
              <div>Programs Details</div>
              <p className="program_det_tra">{props.dataToChild.tr_package_details}</p>
                <div>Keywords :</div>
          </div>
     </div>
 )
}