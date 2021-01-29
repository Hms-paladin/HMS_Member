import React from "react";
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../../helpers/labelbox/labelbox'
import { Switch,Input,Slider,Progress} from 'antd';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/nurse.png'
import Percentage from '../../../images/percentage.svg'
import Paper from '@material-ui/core/Paper';
import RangeCalendar from './RangeCalendar'
import './nursehistory.scss'
export default function Nursehistory(){
    const errmsg=false;
    const { Search } = Input;
    const [toggleOpen,settoggleOpen]=React.useState(true)
    const toggleClick=()=>{
        settoggleOpen(false)
    }
    return(
    <Grid container className="nusre_hisparent" spacing={3}>
        <Grid item xs={6} md={4} className="d">
            <div className="filter_fstdiv">
                <div className="fli_head">Filter</div>
                <div className="mnth_cost"><label className="fli">Monthly Cost Range</label><label className="mnth_amt">500 KWD</label></div>
                <div> <Slider defaultValue={30}/></div>
                <div className="mnth_secondcost"><label className="mnth_samt">200 KWD</label><label className="mnth_samt">600 KWD</label></div>
                <div className="mnth_cost"><label className="fli">Experience</label><label className="mnth_amt">5 Years</label></div>
                <div> <Slider defaultValue={30}/></div>
                <div className="mnth_cost"><label className="mnth_samt">1 Year</label><label className="mnth_samt">25 Years</label></div>
                <div style={{marginTop:"15px"}}><Labelbox type="select" labelname="Nationality" errmsg={errmsg}/></div>
                <div className="mnth_cost" style={{marginTop:"15px"}}>
                    <Labelbox type="select" labelname="Gender" errmsg={errmsg}/>
                    <div><div className="fli">Duty Hours</div> <Switch checked={toggleOpen} onChange={settoggleOpen} unCheckedChildren={settoggleOpen&&"8 Hrs"} checkedChildren={toggleOpen&&"12 Hrs"}/></div>
                </div>
            </div>
            <div className="filter_fstdiv" style={{marginTop:"10px"}}>
                <div className="fli">Choose Date</div>
                <div style={{width:"100%"}}><RangeCalendar/></div>
                <div><Button className="apply_btn">Apply</Button></div>
            </div>

        </Grid>
        <Grid item xs={12} md={8} spacing={2}>
        <Input type="search " placeholder={"Search"} className="srch_his"/>
        <div className="nurse_dts"><div><label className="nur_age">Age</label><label>Experience</label></div><div><label className="nur_age">Cost</label><label>Rating</label></div></div>
         <Paper className="nurse_list_div">
           <div style={{width:"22%"}}><div style={{width:"100%",height:"100%",display:"flex"}}><div style={{width:"150px"}}><div style={{width:"100%",height:"100%"}}><img src={Nurse} style={{width:"100%",height:"100%"}}/></div></div></div></div>
           <div className="scnd_chld">
               <div className="nur_name">Rose</div>
               <div>27 Years/5 Yrs Exp</div>
               <div>Baby Care</div>
            </div>
            <div className="trd_chld">
                <label className="permnth_amt">480 KWD / Month</label>
                <div style={{padding:"40px 0px 0px 25px",display:"flex",justifyContent:"flex-end"}}>
                    <div className="review_div"><div className="nur_reviews">4.0</div><div className="count_review">15 Reviews</div></div>
                    <div style={{position:"relative",top:"-7px",left:"3px"}}><img src={Percentage} style={{width:"45px"}}/><div className="off_per"><p>5%</p><p className="off_txt">off</p></div></div>
                    </div>
               </div>                    

                    
         
         
        </Paper>  
    
   </Grid>
    </Grid>
    )
}