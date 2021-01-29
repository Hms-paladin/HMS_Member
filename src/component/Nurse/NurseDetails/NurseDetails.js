import React from "react"
import Nurse from '../../../images/nurse.png'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Nurse_circle from '../../../images/nursecircle.png'
import Thumb from '../../../images/thumb.svg'
import Flag from '../../../images/flag.svg'
import Qualification from '../../../images/qualification.svg'
import Language from '../../../images/language.svg'
import Skills from '../../../images/skills.svg'
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';
import BookingConfirmation from './BookingConfirmation'
import DesignDuties from './DesignDuties'
import './NurseDetails.scss'
export default function NurseDetails(){
    const [proceed,setproceed]=React.useState(false)
    const [Duties,setDuties]=React.useState(false)
    function ProceedClick(){
        setproceed(true)
    }
    function DutiesClick(){
        setDuties(true)
    }
    return(
        <div style={{width:"100%"}} className="nurse_de_parent">
        <div className="nursede_parent">
            <div style={{height:"250px",width:"100%"}}>
            <img src={Nurse} style={{width:"100%",height:"100%"}}/>
            </div>
        </div>
        <Grid container>
            <Grid item sm={4} md={4} className="nurse_de_fstgrid">
            <div><img src={Nurse_circle} style={{width:"125px"}}/></div>
            <div className="nurse_de_fstdiv"><div className="nurse_de_fstitems"><div className="nurse_star_rating"><label>4.0</label><StarIcon/></div></div>
            <div className="nurs_review">161 Reviews</div>
            <div style={{marginTop:"23px"}}><img src={Thumb} style={{width:"25px"}}/><label className="review_per">93%</label><label>(15 reviews)</label></div>
            </div>
            </Grid>
            <Grid item sm={4} md={4} className="grid_seconditem">
                <div style={{textAlign:"center"}}>
            <div className="nur_name">Rose</div>
               <div><StarIcon className="star_fill"/><StarIcon className="star_fill"/><StarIcon className="star_fill"/><StarIcon className="star_fill"/><StarIcon className="start_emp_fill"/></div> 
               <div style={{fontSize:"20px",fontWeight:"600"}}>27 Years / Female</div>
               <div style={{color:"#666666",fontSize:"20px"}}>Wellness company</div>
               <div>Jabriya</div>
               </div>
            </Grid>
            <Grid item sm={4} md={4} className="nurse_thirdgrid">
            <div className="mnth_kwd">480 KWD / Month</div><div className="exp_yrs">5 Years</div>
            </Grid>
            <Grid item sm={12} md={12} className="cmy_sup">
                <div ><div>Dalal</div><div>"I appreciate your timely support when I was in agony and facing a lot of anxiety.My heartfelt thank to wellness company".</div></div>
            </Grid>
            </Grid>
            {/* nurse information */}
            <Grid container className="nurse_duties_container">
            <Grid item sm={6} md={6}>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Flag} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Nationality</p><p>India</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Qualification} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Qualification</p><p>B.Sc.Nursing</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Language} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Languages</p><p>English,Malayalam,Arabic</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Skills} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Skills</p><p>Baby Care,Elderly Care</p></div></div>
                <div className="nurse_detl"><div className="nurse_de_icons"><img src={Flag} style={{width:"35px"}}/></div><div><p className="nurse_dehead">Duty Hours</p><p>12:00 Hrs</p></div></div>
            </Grid>
            {/* design duties */}
            
            <Grid item sm={6} md={6}>
                {proceed===false?
                <DesignDuties ProceedClick={ProceedClick} />:
                <div className="booking_confr"><BookingConfirmation DesignDuties={DutiesClick} Duties={Duties}/></div>}
                
            </Grid>
        </Grid>

       
        </div>
    )
}