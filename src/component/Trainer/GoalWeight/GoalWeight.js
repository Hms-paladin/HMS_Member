import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Labelbox from '../../../helpers/labelbox/labelbox'
import Trainer_BookingConfirmation from '../AddMember/Trainer_BookingConfirmation'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Goal from '../../../images/goal.svg'
import './GoalWeight.scss'
import Slider from '@material-ui/core/Slider';
export default function GoalWeight_Trainer(props){
    console.log(props,"propsssss")
    const [feet,setfeet]=React.useState(true)
    const [cms,setcms]=React.useState(false)
    const [kgs,setkgs]=React.useState(true)
    const [lbs,setlbs]=React.useState(false)
    function BtnClick(data){
        
        if(data==="feet"){
            setfeet(!feet) 
            setcms(false) 
        }
        if(data==="cms"){
            setcms(!cms) 
            setfeet(false)
        }
        if(data==="kgs"){
            setkgs(!kgs) 
            setlbs(false)
        }
        if(data==="lbs"){
            setlbs(!lbs) 
            setkgs(false)
        }
    }
    const [hide,sethide]=React.useState(true)
    const[AddOpen,setAddOpen]=React.useState(false)
    const OpenExpand=()=>{
        sethide(!hide)
    }
    const ConfirmOpen=()=>
    {
        setAddOpen(true)
    }
    const ConfirmClose=()=>
    {
        setAddOpen(false)
    }
        
function valuetext(value) {
    return `${value}`;
  }
    return(
        <div>
            <div className="goal_weight_parent">
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    
                    <div className="goalw_h">Goal Weight Calculator</div>
                    <div className="g_wt_div">
                    <Grid container spacing={5}>
                     <Grid item xs={6} md={6}>
                       <p className="g_hname">Dalal</p>
                        <div className="g_wt_labeles">
                            <label>Goal Weight Calculator</label>
                            {hide?<ExpandLessIcon onClick={OpenExpand} className="expand_gwt"/>:
                            <ExpandMoreIcon onClick={OpenExpand} className="expand_gwt"/>}
                        </div>
                        {hide?
                        <div>
                        <div className="g_wt_labels">
                            <span>
                            <label  className="h_labels">Height</label>
                            <label className={feet?"feet_change":"feet"} onClick={()=>BtnClick("feet")}>Feet</label>
                            <label className={cms?"h_subunit_change":"h_subunit"} onClick={()=>BtnClick("cms")}>Cms</label>
                            </span>
                            <span><label className="h_labels">Weight</label>
                            <label className={kgs?"feet_change":"feet"} onClick={()=>BtnClick("kgs")}>Kgs</label>
                            <label className={lbs?"h_subunit_change":"h_subunit"} onClick={()=>BtnClick("lbs")}>Lbs</label></span>
                        </div>
                        <div className="g_wt_labels">
                            <span style={{width:"80px"}}><Labelbox type="text" labelname={feet?"Feet":cms?"Cms":null}/></span>
                            <span style={{width:"80px"}}><Labelbox type="text" labelname={kgs?"Kgs":lbs?"Lbs":null}/></span>
                        </div>
                        <div  className="g_wt_cal_parent">
                            <div style={{position:"relative"}}>
                                <img src={Goal} style={{width:"150px"}}/>
                                <div className="img_itxt">
                                    <span><label style={{fontSize:"15px"}}>26.4</label><label style={{fontSize:"10px"}}>kg/m</label></span>
                                    <div>BMI</div>
                                </div>
                            </div>
                            <p className="g_owt_head">OVER WEIGHT</p>
                            <p>You are 4Kgs above normal weight</p>
                            <span className="g_wt_cal"><label>Goal Weight</label><label className="star_la_gwt">*</label><Labelbox type="text"/><label className="g_wt_kgs">kgs</label></span>
                        </div>
                        </div>:""}

                        <div className="mnth_cost"><label className="fli">Duration Days</label><label className="mnth_amt">30 Days</label></div>
                        <div> 
                            <Slider
                   defaultValue={30}
                   getAriaValueText={valuetext}
                   aria-labelledby="discrete-slider-always"
                   step={10}
                    valueLabelDisplay="on"
                    />
                            </div>
                        <div className="mnth_cost"><label className="fli">Intake Calories / Days</label><label className="mnth_amt">1200 Cal</label></div>
                        <div> 
                            
                            <Slider
                   defaultValue={60}
                   getAriaValueText={valuetext}
                   aria-labelledby="discrete-slider-always"
                   step={10}
                    valueLabelDisplay="on"
                    />
                            </div>
                        
                     </Grid>
                     {/* textbox and labels */}
                     <Grid item xs={6} md={6} className="snd_gwt_part">
                        <Labelbox type="text" labelname="Any Medication"/>
                        <Labelbox type="text" labelname="Any Disease"/>
                        <Labelbox type="text" labelname="Any Surgery"/>
                        <Labelbox type="text" labelname="Any Habits"/>
                     </Grid>

                    </Grid>
                    </div>
                </Grid>
                {/* add member */}
                <Grid item xs={12} md={4}>
               <div className="diet_booking_confirm">
                  <Trainer_BookingConfirmation ConfirmClose={ConfirmClose} BookingDet={props.location.state}/>
               </div>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}