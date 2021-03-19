import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import './Modal.scss'
import percentage from '../../../images/percentage.svg'
import { NavLink } from 'react-router-dom'
export default function ProgramModal(){
    const [HideAdrs,setHideAdrs]=useState(false)
 return(
     <div className="pro_modal_parent">
         <div className="p_title_head"><label>Liverpool Club</label><NavLink to="/myschedule"><Button>Select</Button></NavLink></div>
         <div>
             {HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">Adailia</label>}
             <span className="elipse" onClick={()=>setHideAdrs(!HideAdrs)}>...</span>
          </div>
          <div className="mem_h"><label>Two Member Program</label><label>80 KWD</label></div>
          <div className="modal_sessions_cont">
              <label>12</label>
              <div className="ses_text"><div>sessions</div><div>Sat-Thu</div></div>
              <div style={{position:"relative"}}>
                         <img src={percentage} style={{width:"55px"}}/>
                         <div className="per_inside_div"><p>{"20"+"%"}</p><p>off</p></div>
             </div>
          </div>
          <div className="w_hrs">
              <div>Working Hours</div>
              <div><label>Saturday-Thursday</label><label>04:00 PM-07:00 PM</label></div>
          </div>
          <div className="p_det">
              <div>Programs Details</div>
              <div><label>Requirements:</label><label>5 to 14 years 0ld</label></div>
              <div><label>Course details:</label><label>4 sessions per week, 12 total sessions</label></div>
          </div>
     </div>
 )
}