import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import './Modal.scss'
import percentage from '../../../images/percentage.svg'
import { NavLink } from 'react-router-dom'
export default function ProgramModal(){
    const [HideAdrs,setHideAdrs]=useState(false)
 return(
     <div className="pro_modal_parent">
         <div className="p_title_head"><label>Farah</label><NavLink to="/trainerbooking"><Button>Select</Button></NavLink></div>
         <div>
            <label className="type_fitness">Indoor Fitness</label>
   
          </div>
          <div className="mem_h"><label>Burn IT</label><label>160 KWD</label></div>
          <div className="modal_sessions_cont">
              <label>12</label>
              <div className="ses_text"><div>sessions</div><div>Mon - Thu - Sat</div></div>
              <div style={{position:"relative"}}>
                         <img src={percentage} style={{width:"70px"}}/>
                         <div className="tra_per_inside_div"><p>{"20"+"%"}</p><p>off</p></div>
             </div>
          </div>
   
          <div className="p_det">
              <div>Programs Details</div>
              <p className="program_det_tra">Lose weight, gain strength and tone muscles in 30 minutes. Inspired by High Intensity Interval Training (HIIT), 
                you use your own body weight and minimal equipment like elastic bands, 
                dumbbells and kettle bells. Burn It is for women who are ready for a new fitness challenge.</p>
                <div>Keywords :</div>
          </div>
     </div>
 )
}