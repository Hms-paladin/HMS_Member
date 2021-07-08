import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Labelbox from '../../../helpers/labelbox/labelbox'
import Diet_BookingConfirmation from '../AddMember/Diet_BookingConfirmation'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { InsertDietBookings } from '../../../actions/DietHistoryActions'
import moment from 'moment'
import Goal from '../../../images/goal.svg'
import './GoalWeight.scss'
import ValidationLibrary from '../../../helpers/validationfunction'
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { findAllByDisplayValue } from '@testing-library/react';
export default function GoalWeight(props){
    let dispatch=useDispatch()
    let history=useHistory()
    let params=useParams()
    console.log("params",params)
    const [feet,setfeet]=React.useState(true)
    const [cms,setcms]=React.useState(false)
    const [kgs,setkgs]=React.useState(false)
    const [lbs,setlbs]=React.useState(true)

    const [DietInstuction,setDietInstuction]=useState({
        medication:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        disease:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        surgery:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        habits:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        height:{
            value:"",
        },
        weight:{
            value:"",
        }

    })
    function BtnClick(data){
        
        if(data==="feet"||data==="lbs"){
            setfeet(true) 
            setcms(false)
            setlbs(true) 
            setkgs(false)
        }
        if(data==="cms"||data==="kgs"){
            setcms(true) 
            setfeet(false)
            setlbs(false) 
            setkgs(true)
        }
        
    }
    const [hide,sethide]=React.useState(true)
    const[AddOpen,setAddOpen]=React.useState(false)
    const [GetData,setGetData]=useState("")
    const [MealDataId,setMealDataId]=useState([])
    const [BmiResult,setBmiResult]=useState("")
    const [checkmember,setcheckmember]=useState(false)
    const [FamilyMember,setFamilyMember]=useState("")
    const DietCompany=props.location.state.DietCompany
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
  useEffect(()=>{
    const Session=props.location.state.Meals
  var Data=[]
     Session.map((data)=>{
        Data.push({
            from_date:moment(data.from_date).format("DD-MMM-YYYY"),
            to_date:moment(data.to_date).format("DD-MMM-YYYY"),
            packageId:data.dietpackageId,
            packagename:data.diet_package_name,
            duration:data.diet_duration,
            amount:data.diet_price,
        })
     })
     setGetData(Data)
     setMealDataId(props.location.state.sessionId)
    //  checkmember?FamilyMember.name
     if(checkmember){
        DietInstuction.height.value= FamilyMember.height
        DietInstuction.weight.value= FamilyMember.weight
     }
     else{
        DietInstuction.height.value=localStorage.getItem("height")
        DietInstuction.weight.value=localStorage.getItem("weight")
     }
     console.log(localStorage.getItem("address"),"props")
 
  },[checkmember,FamilyMember])
  function checkValidation(data, key) {
    var errorcheck = ValidationLibrary.checkValidation(
        data,
        DietInstuction[key].validation
    );
    let dynObj = {
        value: data,
        error: !errorcheck.state,
        errmsg: errorcheck.msg,
        validation: DietInstuction[key].validation,
    };
    setDietInstuction((prevState)=>({
        ...prevState,
        [key]: dynObj,
    }))
}
const BookingData=()=>{
    var VendorId=props.location.state.DietCompany[0].dietvendorId
    var Apidata={
        "heightcm":DietInstuction.height.value,
        "height_unit":feet?"feet":cms?"cms":"",
        "weightkg":DietInstuction.weight.value,
        "weight_unit":kgs?"kg":lbs?"lbs":"",
        "goal_weight":"34",
        "goal_weight_unit":kgs?"kg":lbs?"lbs":"",
        "bmi":BmiResult,
        "intake_calsday":localStorage.getItem("gender")==="Male"?2500:2000,
        "durationdays":GetData[0].duration,
        "anymedication":DietInstuction.medication.value,
        "anydisease":DietInstuction.medication.value,
        "anysurgery":DietInstuction.medication.value,
        "anygoals":DietInstuction.medication.value,
        "patientId":localStorage.getItem("patientId"),
        "diet_vendor_id":VendorId,
        "diet_package_id":GetData[0].packageId,
        "from_date":moment(GetData[0].from_date).format("YYYY-MM-DD"),
        "to_date":moment(GetData[0].to_date).format("YYYY-MM-DD"),
        "instructions":"lesssalt",
        "amount":GetData[0].amount,
        "payment_status":"1",
        "cancel_status":"0",
        "menuitem" :MealDataId
    }
    dispatch(InsertDietBookings(Apidata)).then(()=>{
        // history.push("/paymentmethod")
    })
    setDietInstuction((prevState)=>({
        ...prevState,
    }))
}
 const CalculateBmi=()=>{

     if(DietInstuction.height.value&&DietInstuction.weight.value){
         let height=DietInstuction.height.value
         let weight=DietInstuction.weight.value
        var bmi = (weight / (height * height)) * 703;
        bmi = bmi.toFixed(2); 
        return bmi;
     }
 }
 function getBMIResults(bmi){
    let bmiResults =""

    
    if (bmi <= 18.5){
      bmiResults = 'You are underweight';
    } 
    else if (bmi <= 24.9) {
      bmiResults = 'You are normal weight';
    }
    else if (bmi <= 29.9){
      bmiResults = 'You are overweight';
    }
    else if (bmi >= 30) {
      bmiResults = 'You are obesity';
    } else{
      bmiResults = "You are severly underweight";
    }

    return bmiResults;
  }
//   const GoalWeightCalculate=(bmi)=>{
//       let Weight=''
//       if(lbs){
//         Weight= 5 * bmi +(bmi/5)*(DietInstuction.height.value-60)
//       }
//       else if(kgs){
//         Weight= 2.2* bmi +(3.5*bmi)*(DietInstuction.height.value-1.5)  
//       }
//       console.log("Weight",Weight)
//   }
    const bmi=CalculateBmi()
    const Results=getBMIResults(bmi)
    // const GoalWeight=GoalWeightCalculate(bmi)
    const ReceiveData=(data,memberTrue)=>{
        setFamilyMember(data)
        setcheckmember(memberTrue)
       alert(data.name)
       

    }
    console.log("propsddd",FamilyMember,checkmember)

    return(
        <div>
            <div className="goal_weight_parent">
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    
                    <div className="goalw_h">Goal Weight Calculator</div>
                    <div className="g_wt_div">
                    <Grid container spacing={5}>
                     <Grid item xs={6} md={6}>
                       <p className="g_hname">{checkmember?FamilyMember.name:localStorage.getItem("name")}</p>
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
                            <span style={{width:"80px"}}><Labelbox type="text" 
                            labelname={feet?"Feet":cms?"Cms":null}
                            changeData={(data) => checkValidation(data, "height")}
                           value={DietInstuction.height.value}
                            /></span>
                            <span style={{width:"80px"}}>
                            <Labelbox type="text" labelname={kgs?"Kgs":lbs?"Lbs":null}
                              changeData={(data) => checkValidation(data, "weight")}
                              value={DietInstuction.weight.value}
                            /></span>
                        </div>
                        <div  className="g_wt_cal_parent">
                            <div className="g_wei_parent">
                                <div className="goalweight_img" onClick={CalculateBmi}/>
                                <div className="img_itxt">
                                    <span><label style={{fontSize:"15px"}}>{bmi?bmi:"0.0"}</label><label style={{fontSize:"10px"}}>kg/m</label></span>
                                    <div>BMI</div>
                                </div>
                            </div>
                            <p className="g_owt_head">{Results}</p>
                            {/* <p>You are 4Kgs above normal weight</p> */}
                            <span className="g_wt_cal"><label>Goal Weight</label><label className="star_la_gwt">*</label><Labelbox type="text"/><label className="g_wt_kgs">{kgs?"kgs":lbs?"lbs":""}</label></span>
                        </div>
                        </div>:""}

                        <div className="mnth_cost"><label className="fli">Duration Days</label><label className="mnth_amt">{GetData[0]?.duration} Days</label></div>
                        <div> 
                                 
                            <Slider
                   defaultValue={80}
                   getAriaValueText={valuetext}
                   aria-labelledby="discrete-slider-always"
                   step={10}
                    valueLabelDisplay="on"
                    />
                            </div>
                        <div className="mnth_cost"><label className="fli">Intake Calories / Days</label><label className="mnth_amt">{localStorage.getItem("gender")==="Male"?2500+" "+"Cal":2000+" "+"Cal"}</label></div>
                        <div> 
                            <Slider
                   defaultValue={50}
                   getAriaValueText={valuetext}
                   aria-labelledby="discrete-slider-always"
                   step={10}
                    valueLabelDisplay="on"
                    />
                            </div>
                        
                     </Grid>
                     {/* textbox and labels */}
                     <Grid item xs={6} md={6} className="snd_gwt_part">
                        <Labelbox type="text" labelname="Any Medication"
                           changeData={(data) => checkValidation(data, "medication")}
                           value={DietInstuction.medication.value}
                           error={DietInstuction.medication.error}
                           errmsg={DietInstuction.medication.errmsg}
                        />
                        <Labelbox type="text" labelname="Any Disease"
                          changeData={(data) => checkValidation(data, "disease")}
                          value={DietInstuction.disease.value}
                          error={DietInstuction.disease.error}
                          errmsg={DietInstuction.disease.errmsg}
                        />
                        <Labelbox type="text" labelname="Any Surgery"
                         changeData={(data) => checkValidation(data, "surgery")}
                         value={DietInstuction.surgery.value}
                         error={DietInstuction.surgery.error}
                         errmsg={DietInstuction.surgery.errmsg}
                        />
                        <Labelbox type="text" labelname="Any Habits"
                         changeData={(data) => checkValidation(data, "habits")}
                         value={DietInstuction.habits.value}
                         error={DietInstuction.habits.error}
                         errmsg={DietInstuction.habits.errmsg}
                        />
                     </Grid>

                    </Grid>
                    </div>
                </Grid>
                {/* add member */}
                <Grid item xs={12} md={4}>
               <div className="diet_booking_confirm">
                  <Diet_BookingConfirmation ConfirmClose={ConfirmClose} GetData={GetData} sessionId={MealDataId} DietCompany={DietCompany} BookingData={BookingData}  FindGoalWeight={ReceiveData}/>
               </div>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}