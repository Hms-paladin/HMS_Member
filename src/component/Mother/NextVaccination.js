import React, { useState } from "react";
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
import DateRangeIcon from '@material-ui/icons/DateRange';
import { colors } from "@material-ui/core";
function NextVaccinationMother(props) {
  return (
    <React.Fragment>
      <div className="vaccinationimg">
        <div className="vaccinationimg_cont">
          <img src={dalal} />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "22px" }}>Dina</div>
        <div>Hepatitis B</div>
        <div style={{ color: "#666666" }}>27 Nov 2020</div>
      </div>
      <div className="nextvaccination">
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={stage0} style={{background:'#83AF4030'}} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">At Birth</div>
          <div style={{ color: "black" }}>BCG,Hep B</div>
         
        </div>
        <div className="time_dalal" style={{color:'#83AF40'}}>Completed</div>
      </div>
      <div className="nextvaccination">
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
      </div>

      <div className="nextvaccination" >
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
      </div>
    </React.Fragment>
  );
}
export default NextVaccinationMother;
