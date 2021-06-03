import React from "react"
import Thumb from '../../../images/thumb.svg'
import Tr_Image1 from '../../../images/tr_cat_image.png'
import percentage from '../../../images/percentage.svg'
import StarIcon from '@material-ui/icons/Star';
import Tra_ad from '../../../images/tra_ad.png'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './TrainingDetails.scss'
// import Tra_ad from "../../../images/doctorappoinment.png";
import Dialog from '@material-ui/core/Dialog';
import ProgramModal from './Modal'
import SliderComp from '../../../helpers/Slider/Slider'
export default function Training_Details(){
    const [proceed,setproceed]=React.useState(false)
    const [Duties,setDuties]=React.useState(false)
    const [HideAdrs,setHideAdrs]=React.useState(false)
    const [visible,setvisible]=React.useState(false)
    const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    function ProceedClick(){
        setproceed(true)
    }
    function DutiesClick(){
        setDuties(true)
    }
    return(
        <div style={{width:"100%"}} className="nurse_de_parent">
        <div className="nursede_parent">
            <div style={{height:"40vh",width:"100%"}}>
            <img src={Tra_ad} className="Pro_tra_img"/>
            </div>
        </div>
        <Grid container>
            <Grid item sm={4} md={4} className="nurse_de_fstgrid">
            <div><img src={Tr_Image1} style={{width:"125px",marginBottom:"10px",border:"1px solid #fff",borderRadius:"50%"}}/></div>
            <div className="nurse_de_fstdiv"><div className="nurse_de_fstitems"><div className="nurse_star_rating"><label>4.0</label><StarIcon/></div></div>
            <div className="nurs_review">161 Reviews</div>
            <div style={{marginTop:"23px"}}><img src={Thumb} style={{width:"25px"}}/><label className="review_per">93%</label><label>(15 reviews)</label></div>
            </div>
            </Grid>
            <Grid item sm={4} md={4} className="grid_seconditem">
                <div style={{textAlign:"center"}}>
            <div className="nurs_de_name">Liverpool Club</div>
               <div><StarIcon className="star_fill"/><StarIcon className="star_fill"/><StarIcon className="star_fill"/><StarIcon className="star_fill"/><StarIcon className="start_emp_fill"/></div> 
               <div>{HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">Adailia</label>}
                                   <span className="elipse" onClick={ElipseOpen}>...</span></div>
               </div>
            </Grid>
            <Grid item sm={12} md={12} className="cmy_sup">
            <SliderComp>
           
           {[...Array(5)].map((img,index)=>(
                <div ><div>Dalal</div><div>"Nice place,good work out! The center is very well equipped to satisfy any fitness enthusiast".</div></div>
           ))}
            </SliderComp>  
            </Grid>
            </Grid>
            {/* Training Programs */}
            <Grid container className="grid_program_cont">
        
            
            <Grid item sm={12} md={12}>
                 <div className="pro_head">Programs</div>
                 <div className="parent_pro_div">
                 {[...Array(5)].map((img,index)=>(
                <Paper className="program_div" onClick={()=>setvisible(true)}>
                     <div style={{position: "absolute",top:"-25px",right:"-10px"}}>
                         <img src={percentage} style={{width:"55px"}}/>
                         <div className="per_in_div"><p>{"20"+"%"}</p><p>off</p></div>
                      </div>
                      <div>
                    <div>Two  Member Program</div>
                    <div class="session_cont">10</div>
                    <div>Sessions</div>
                    <div>70 KWD</div>
                    </div>
                </Paper>
                 ))}
                 </div>
              
            </Grid>
        </Grid>
       {/* program modal */}
       <Dialog
        open={visible}
        onClose={()=>setvisible(false)}
        maxWidth={"md"}
        fullWidth={true}
        className={"program_modal"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <ProgramModal/>
    </Dialog>
       
        </div>
    )
}