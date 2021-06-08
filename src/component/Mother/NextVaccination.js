import React, { useState,useEffect} from "react";
import dalal from "../../images/PregnantMother/bg_mother.jpg";
import "../Pregnant_Mother/Pregnant_Mother.scss";
import stage1 from "../../images/Mother/stage1.png";
import stage2 from "../../images/Mother/stage2.png";
import stage3 from "../../images/Mother/stage3.png";
import stage4 from "../../images/Mother/stage4.png";
import stage5 from "../../images/Mother/stage5.png";
import stage6 from "../../images/Mother/stage6.png";
import stage7 from "../../images/Mother/stage7.png";
import stage8 from "../../images/Mother/stage8.png";
import stage0 from '../../images/Mother/stage0.png';
import moment from 'moment'
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
import {connect,useDispatch} from 'react-redux'
import {ParticularPatientVaccination} from '../../actions/ProfileActions'
import PersonIcon from '@material-ui/icons/Person';
function NextVaccinationMother(props) {
  let dispatch =useDispatch()
  const [vaccinationView,setvaccinationView]=useState([])
  const [vaccinationList,setVacinationList]=useState([])
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#82AE40");
  const override = css`

  height:20;
  width:10;
  radius:2;
  margin:2;

`;
  useEffect(()=>{
    if(props.patientId){
    dispatch(ParticularPatientVaccination(props.patientId))
    }
  },[props.patientId])
  useEffect(()=>{
    let Vaccination=[]
     if(props.particularVaccination.length>0){
      setLoading(false)
    }
    props.particularVaccination.map((data)=>{
      setVacinationList(data.vaccinationList)
      Vaccination.push({
         age_in_days:data.ageInDays,
         dob:data.dob,
         img:data.profileImage,
         name:data.patientName,
      })
    })
    setvaccinationView(Vaccination)

  },[props.particularVaccination])
  console.log("props",vaccinationView[0]?.img)

  return (
    <React.Fragment>
      {loading?<div><div className="fade_div"><FadeLoader color={color} loading={loading} css={override}/></div></div>:
      <>
      <div className="vaccination_pimg">
        <div className="vaccinationimg_cont">
        {vaccinationView[0]?.img===null?<PersonIcon style={{ fontSize: "2rem" }} className="profile_dummy_img" />:<img src={vaccinationView[0]?.img} />}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "22px" }}>{vaccinationView[0]?.name}</div>
        <div>Hepatitis B</div>
        <div style={{ color: "#666666" }}>{moment(vaccinationView[0]?.dob).format("DD-MMM-YYYY")}</div>
      </div>
      {vaccinationList.map((data)=>
      <div className="nextvaccination">
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={stage0} style={{background:'#83AF4030'}} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">{vaccinationView[0]?.age_in_days}</div>
          <div style={{ color: "black" }}>{data.vaccine}</div>
         
        </div>
        <div className="time_dalal" style={{color:'#83AF40'}}>{data.vaccinationCompletionStatus===false?"Pending":"Completed"}</div>
      </div>)}
      </>
      }
      {/* <div className="nextvaccination">
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={stage1} style={{background:'#83AF4030'}} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">2 Months</div>
          <div style={{ color: "black" }}>IPV, DTaP, Hepatities ...</div>
        </div>
        <div className="time_dalal" style={{color:'#83AF40'}}>Completed</div>
      </div>

      <div>
        <div className="nextvaccination" >
          <div className="vaccinationimg">
            <div className="vaccinationimg_cont">
              <img src={stage2} style={{background:'#83AF4030'}} />
            </div>
          </div>
          <div className="vaccinationdetail">
            <div className="vaccinationhead">4 Months</div>
            <div style={{ color: "black" }}>IPV, DTaP, Hepatities ...</div>
          </div>
          <div className="time_dalal"style={{color:'#83AF40'}}>Completed</div>
        </div>
        <div className="nextvaccination" >
          <div className="vaccinationimg">
            <div className="vaccinationimg_cont">
              <img src={stage3}  style={{background:'#83AF4030'}}/>
            </div>
          </div>
          <div className="vaccinationdetail">
            <div className="vaccinationhead">6 Months</div>
            <div style={{ color: "black" }}>OPV, IPV, DTaP, Hepatitis B, Hib, PCV13</div>
          </div>
          <div className="time_dalal"style={{color:'#83AF40'}}>Completed</div>
        </div>
        <div className="nextvaccination">
          <div className="vaccinationimg">
            <div className="vaccinationimg_cont">
              <img src={stage4} style={{background:'#83AF4030'}} />
            </div>
          </div>
          <div className="vaccinationdetail">
            <div className="vaccinationhead">9 Months</div>
            <div style={{ color: "black" }}>Measles and Meningococcal Conjugate Quadrivalent (MCV4)</div>
          </div>
          <div className="time_dalal"style={{color:'#83AF40'}}>Completed</div>
        </div>
        <div className="nextvaccination">
          <div className="vaccinationimg">
            <div className="vaccinationimg_cont">
              <img src={stage5}style={{background:'#83AF4030'}}/>
            </div>
          </div>
          <div className="vaccinationdetail">
            <div className="vaccinationhead">12 Months</div>
            <div style={{ color: "black" }}>OPV, MMR, PCV13, Meningococcal Conjugate Quadrivalent (MCV4)</div>
          </div>
          <div className="time_dalal"style={{color:'#83AF40'}}>Completed</div>
        </div>
      </div> */}

      {/* <div className="nextvaccination" >
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={stage6}style={{background:'#83AF4030'}} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">18 Months</div>
          <div style={{ color: "black" }}>OPV, DTaP, Hib, MMR, Varicella, Hepatities A</div>
        </div>
        <div className="time_dalal"style={{color:'#83AF40'}}>Completed</div>
      </div>
      <div className="nextvaccination" >
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={stage7}style={{background:'#83AF4030'}} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">24 Months</div>
          <div style={{ color: "black" }}>Hepatities A</div>
        </div>
        <div className="time_dalal"style={{color:'#83AF40'}}>Completed</div>
      </div>
      <div className="nextvaccination">
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={stage8}style={{background:'#83AF4030'}} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Primary School</div>
          <div style={{ color: "black" }}>OPV, DTap, MMR, Hepatitis B</div>
        </div>
        <div className="time_dalal">27 Nov 2020
        <div style={{color:'#C7C7C7',marginLeft:'20px'}} ><DateRangeIcon/></div>
        </div>
      </div> */}
    </React.Fragment>
  );
}
const mapStateToProps = (state) =>
({
  particularVaccination:state.GetProfileDetails.particularVaccination,
});

export default connect(mapStateToProps)(NextVaccinationMother);
