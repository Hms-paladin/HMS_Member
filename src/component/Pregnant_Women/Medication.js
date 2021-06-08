import React, {useEffect, useState} from "react";
import dalal from "../../images/PregnantMother/bg_mother.jpg";
import "../Pregnant_Mother/Pregnant_Mother.scss";
import {connect,useDispatch} from 'react-redux'
import {GetParticularMedicationList} from '../../actions/ProfileActions'
import { useHistory } from "react-router";
function MedicationFilter(props) {
    const [showDetails, setShowdetailsTrue] = useState(props.showDetailsEnable)
    const [ParticularMedicationList,setParticularMedicationList]=useState([])
let dispatch=useDispatch()
let history=useHistory()
const handleProfileClick = () => {
    alert("no no");
    history.push("/MotherMedication")
    setShowdetailsTrue(false)
  console.log("fghj",showDetails)
  };
  useEffect(()=>{
    if(props.MedicationList.patientId){
    dispatch(GetParticularMedicationList(props.MedicationList.patientId))
  }
  
  },[props.MedicationList.patientId,showDetails])
  return (
    <React.Fragment>
       <div className="medication_list">  
      <h4 style={{ marginLeft: "55px" }}>Dalal Medication</h4>
      <div><button onClick={()=>handleProfileClick()}>1</button><button>2</button><button>3</button></div>
      </div> 
      {props.ParticularMedication&&props.ParticularMedication.map((data)=>
      <div className="nextvaccination">
        <div className="vaccinationimg">
       
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead"  style={{color:'#83AF40'}}>{data.medicineName}</div>
          <div style={{color:'black'}}>{data.numberOfDaysMedicineTaken + "Capsules"}</div>
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
