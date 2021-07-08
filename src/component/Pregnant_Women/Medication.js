import React, {useEffect, useState} from "react";
import dalal from "../../images/PregnantMother/bg_mother.jpg";
import "../Pregnant_Mother/Pregnant_Mother.scss";
import {connect,useDispatch} from 'react-redux'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import {GetParticularMedicationList} from '../../actions/ProfileActions'
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { useHistory } from "react-router";
function MedicationFilter(props) {
    const [showDetails, setShowdetailsTrue] = useState(props.showDetailsEnable)
    const [ParticularMedicationList,setParticularMedicationList]=useState([])
    const [morning,setmorning]=useState(false)
    const [afternoon,setafternoon]=useState(false)
    const [night,setnight]=useState(false)
let dispatch=useDispatch()
let history=useHistory()
const handleProfileClick = (name) => {
  // let status=false
    if(name==="morning"){
      setmorning(true)
      setafternoon(false)
      setnight(false)
    }
     else if(name==="afternoon"){
      setafternoon(true)
      setmorning(false)
      setnight(false)
    }
     else if(name==="night"){
      setnight(true)
      setmorning(false)
      setafternoon(false)
    }
    dispatch(GetParticularMedicationList(props.MedicationList.patientId,morning,afternoon,night))
  };
  useEffect(()=>{
    if(props.MedicationList.patientId){
    dispatch(GetParticularMedicationList(props.MedicationList.patientId,morning,afternoon,night))
  }
  },[props.MedicationList.patientId,showDetails,morning,afternoon,night])
  return (
    <React.Fragment>
       <div className="medication_list">  
      <h4 style={{ marginLeft: "55px" }}>Dalal Medication</h4>
      <div><Brightness6Icon onClick={()=>handleProfileClick("morning")} className={morning?"mor_iconchange":"mor_icon"}/>
      <BrightnessLowIcon onClick={()=>handleProfileClick("afternoon")} className={afternoon?"mor_iconchange":"mor_icon"}/>
      <Brightness3Icon onClick={()=>handleProfileClick("night")} className={night?"mor_iconchange":"mor_icon"}/></div>
      </div> 
      {props.ParticularMedication&&props.ParticularMedication.map((data)=>
      <div className="nextvaccination">
        <div className="vaccinationimg">
       
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead"  style={{color:'#83AF40'}}>{data.medicineName}</div>
          <div style={{color:'black'}}>{data.day +" "+ "Tablet"}</div>
          <div>{data.instruction}</div>
        </div>
        <div className="time_dalal">----</div>
      </div>
      )}
      
       
      
    </React.Fragment>
  );
}
const mapStateToProps = (state) =>
({
 ParticularMedication:state.GetProfileDetails.ParticularMedication
});

export default connect(mapStateToProps)(MedicationFilter);
