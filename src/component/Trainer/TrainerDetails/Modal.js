import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import './Modal.scss'
import percentage from '../../../images/percentage.svg'
import { NavLink, useHistory } from 'react-router-dom'
import { Redirect, Link } from "react-router-dom";
export default function ProgramModal({dataToChild, dataToC}) {
  let history = useHistory();

  const [HideAdrs, setHideAdrs] = useState(false)

  console.log("modalData", dataToChild, dataToC)
  function SelectDetails() {
    history.push({
      pathname: "/trainerbooking",
      state: {
        dataToChild,
        dataToC
      }
    })
  }

  return (
    <div className="pro_modal_parent">
      <div className="p_title_head"><label>{dataToC.trainerList.trainerName}</label>
        {/* <Link to={{ pathname: "/trainerbooking", state: {dataToChild,dataToC} }}><Button className="confirm_b_btn">Select</Button></Link> */}
        <div onClick={SelectDetails}><Button>Select</Button></div>
      </div>
      <div>
        <label className="type_fitness">{dataToC.trainerList.trainingCategoryName}</label>

      </div>
      <div className="mem_h"><label>{dataToChild.tr_package_name}</label><label>{dataToChild.tr_cost} KWD</label></div>
      <div className="modal_sessions_cont">
        <label>{dataToChild.tr_session}</label>
        <div className="ses_text"><div>sessions</div><div>Mon - Thu - Sat</div></div>
        <div style={{ position: "relative" }}>
          <img src={percentage} style={{ width: "70px" }} />
          <div className="tra_per_inside_div"><p>{"20" + "%"}</p><p>off</p></div>
        </div>
      </div>

      <div className="p_det">
        <div>Programs Details</div>
        <p className="program_det_tra">{dataToChild.tr_package_details}</p>
        <div>Keywords :</div>
      </div>
    </div>
  )
}