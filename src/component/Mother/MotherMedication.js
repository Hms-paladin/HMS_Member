import React, {useState,useEffect} from "react";
import dalal from "../../images/PregnantMother/bg_mother.jpg";
import "../Pregnant_Mother/Pregnant_Mother.scss";
import {connect,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {GetMedicationList,GetParticularMedicationList} from '../../actions/ProfileActions'
import MedicationFilter from '../Pregnant_Women/Medication'
import moment from 'moment'
function MotherMedication(props) {
    const [showDetails, setShowdetailsTrue] = useState(false);
    const [MedicationList,setMedicationList]=useState([])
    const [PatientMedication,setPatientMedication]=useState([])
    let dispatch=useDispatch()
    let history=useHistory()
const handleProfileClick = (id) => {
  var PatientId=props.MedicationDetails.find((data)=>{
    return(
      data.patientId==id
    )
  })
  console.log("medd",PatientId)
  setPatientMedication(PatientId)
  setShowdetailsTrue(true);
  };
  useEffect(()=>{
    dispatch(GetMedicationList())
  },[MedicationList.patientId])
  useEffect(()=>{
  },[])

  useEffect(()=>{
    let MedicationData=[]
    let ParticularMedication=[]
    props.MedicationDetails.map((data)=>{
      MedicationData.push({
        name:data.patientName,
        age:data.age,
        date:data.presciptionDate,
        img:data.profileImage,
        patientId:data.patientId
      }) 
    })
    setMedicationList(MedicationData)
  },[props.MedicationDetails])
  console.log("ssss",props)
  return (
    <React.Fragment>
        
        {!showDetails?
         <div>
      <h1 style={{ marginLeft: "55px" }}>Medication</h1>
     
      {MedicationList.length>0&&MedicationList.map((data)=>
      <div className={"nextvaccination_medic"}  onClick={()=>handleProfileClick(data.patientId)}>
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={data.img}/>
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">{data.name}</div>
          <div  style={{color:'black'}}>{data.age+"Years"}</div>
          <div>{moment(data.date).format("DD-MMM-YYYY")}</div>
        </div>
        <div className="time_dalal">{moment(data.date).format("HH:MM")}</div>
      </div>
      )}
      </div>:
      <MedicationFilter MedicationList={PatientMedication} showDetailsEnable={showDetails}/>}
      
    </React.Fragment>
  );
}
const mapStateToProps = (state) =>
({
 MedicationDetails:state.GetProfileDetails.Medication,
 

});

export default connect(mapStateToProps)(MotherMedication);