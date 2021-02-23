import React from "react";
import Grid from '@material-ui/core/Grid';
import Labelbox from '../../../helpers/labelbox/labelbox'
import { Switch,Input,Slider,Progress} from 'antd';
import Button from '@material-ui/core/Button';
import Nurse from '../../../images/nurse.png'
import Nurse_2 from '../../../images/lab.png'
import search from '../../../images/search.svg'
import Sort from '../../../images/sort.svg'
import Percentage from '../../../images/percentage.svg'
import {NavLink} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import RangeCalendar from './RangeCalendar'
import './nursehistory.scss'
export default function Nursehistory(props){
    const errmsg=false;
    const { Search } = Input;
    const [toggleOpen,settoggleOpen]=React.useState(true)
    const toggleClick=()=>{
        settoggleOpen(false)
    }
    const Gender=[
        {
            id:1,
            gender:"Male"
        },
        {
            id:2,
            gender:"Female"
        }
    ]
    const changeDynamic=(data)=>{
        
    }
    const NurseHistory=[
        {
            id:1,
            name:"Rose",
            exp:5,
            age:27,
            duty:"Baby Care",
            review_p:4.2,
            review:"15 reviews",
            amt:480,
            img:<img src={Nurse} style={{width:"100%",height:"100%"}}/>
        },
        {
            id:2,
            name:"Reemy",
            exp:4,
            age:29,
            duty:"Elderly Care",
            review_p:4.5,
            amt:550,
            review:"12 reviews",
            img:<img src={Nurse_2} style={{width:"100%",height:"100%"}}/>
        }
    ]
    console.log(props.location,"location")
    console.log(props.path,"path")
    return(
      
    <Grid container className="nusre_hisparent">
        <Grid item xs={6} md={4}>
            <div className="filter_fstdiv">
                <div className="fli_head">Filter</div>
                <div className="mnth_cost"><label className="fli">Monthly Cost Range</label><label className="mnth_amt">500 KWD</label></div>
                <div> <Slider defaultValue={60}/></div>
                <div className="mnth_secondcost"><label className="mnth_samt">200 KWD</label><label className="mnth_samt">600 KWD</label></div>
                <div className="mnth_cost"><label className="fli">Experience</label><label className="mnth_amt">5 Years</label></div>
                <div> <Slider defaultValue={30}/></div>
                <div className="mnth_cost"><label className="mnth_samt">1 Year</label><label className="mnth_samt">25 Years</label></div>
                <div style={{marginTop:"15px"}}><Labelbox type="select" labelname="Nationality" errmsg={errmsg}/></div>
                <div className="mnth_cost" style={{marginTop:"15px"}}>
                   <div className="l_gender_div"><Labelbox type="select" labelname="Gender" errmsg={errmsg}
                   onChange={(data)=>changeDynamic(data,"gender")}
                    // value={Gender.gender}
                    // optionValue={Gender}
                    /></div>
                    <div><div className="fli">Duty Hours</div> <Switch checked={toggleOpen} onChange={settoggleOpen} unCheckedChildren={settoggleOpen&&"8 Hrs"} checkedChildren={toggleOpen&&"12 Hrs"}/></div>
                </div>
            </div>
            <div className="filter_fstdiv" style={{marginTop:"10px"}}>
                <div className="fli">Choose Date</div>
                <div style={{width:"100%"}}><RangeCalendar/></div>
                <div><NavLink to="/nursedetails"><Button className="apply_btn">Apply</Button></NavLink></div>
            </div>

        </Grid>
        <Grid item xs={12} md={8} className="snd_part_nurhis">
     
        <div style={{position:"relative"}}><Input type="search " placeholder={"Search"} className="srch_his"/><img src={search} style={{position:"absolute",top:"7px",right:"17px"}}/></div>
        <div className="nurse_dts"><div>
            <span  className="nur_age"><label>Age</label><img src={Sort} className="nur_his_sort"/></span>
            <span  className="nur_age"><label>Experience</label><img src={Sort}  className="nur_his_sort"/></span></div>
            <div><span className="nur_age"><label>Cost</label><img src={Sort}  className="nur_his_sort"/></span>
            <span className="nur_age"><label>Rating</label><img src={Sort}  className="nur_his_sort"/></span></div>
       </div>
        {NurseHistory.map((data,index)=>
         <Paper className="nurse_list_div">
           <div style={{width:"22%"}}><div style={{width:"100%",height:"100%",display:"flex"}}><div style={{width:"150px"}}><div style={{width:"100%",height:"100%"}}>{data.img}</div></div></div></div>
           <div className="scnd_chld">
               <p className="nur_name">{data.name}</p>
               <p>{data.age} Years/{data.exp} Yrs Exp</p>
               <p>{data.duty}</p>
            </div>
            <div className="trd_chld">
                <label className="permnth_amt">{data.amt} KWD / Month</label>
                <div style={{padding:"40px 0px 0px 25px",display:"flex",justifyContent:"flex-end"}}>
                    <div className="review_div"><div className="nur_reviews">{data.review_p}</div><div className="count_review">{data.review}</div></div>
                    <div style={{position:"relative",top:"-7px",left:"3px"}}><img src={Percentage} style={{width:"45px"}}/><div className="off_per"><p>5%</p><p className="off_txt">off</p></div></div>
                    </div>
               </div>                    

                    
         
         
        </Paper>  
        )}
    
   </Grid>
    </Grid>
    )
}