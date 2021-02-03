import React, {useState} from "react";
import dalal from "../../images/PregnantMother/bg_mother.jpg";
import "../Pregnant_Mother/Pregnant_Mother.scss";


function MotherMedication(props) {
    const [showDetails, ShowdetailsTrue] = useState(false);

const handleProfileClick = () => {
    alert("no no");
    ShowdetailsTrue(!showDetails);
  };
  return (
    <React.Fragment>
        
     
      <h1 style={{ marginLeft: "55px" }}>Medication</h1>
      <div className="nextvaccination" style={{ background: "#83AF4030" }}>
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={dalal}  onClick={handleProfileClick} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Dalal</div>
          <div  style={{color:'black'}}>Vitamin K</div>
          <div>1 Sachet</div>
        </div>
        <div className="time_dalal">9:00 AM</div>
      </div>
      {showDetails !== false ? (
          <div>
      <h1 style={{ marginLeft: "55px" }}>Dalal Medication</h1>
      <div className="nextvaccination">
        <div className="vaccinationimg">
       
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead"  style={{color:'#83AF40'}}>Tylenol</div>
          <div style={{color:'black'}}> 2 Capsules</div>
          <div>After Food</div>
        </div>
        <div className="time_dalal">8:30 AM</div>
      </div>
      <div className="nextvaccination">
        <div className="vaccinationimg">
       
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead" style={{color:'#83AF40'}}>B12 Injection</div>
          <div  style={{color:'black'}}>1 Vial</div>
          <div>After Food</div>
        </div>
        <div className="time_dalal">12:30 PM</div>
      </div>
      <div className="nextvaccination">
        <div className="vaccinationimg">
       
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead" style={{color:'#83AF40'}}>Rantidine</div>
          <div  style={{color:'black'}}> 2 Capsules</div>
          <div>After Food</div>
        </div>
        <div className="time_dalal">6:30 PM</div>
      </div>
      <div className="nextvaccination">
        <div className="vaccinationimg">
       
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead" style={{color:'#83AF40'}}>Volini</div>
          <div  style={{color:'black'}}> Apply on Skin</div>
          <div>After Food</div>
        </div>
        <div className="time_dalal">10:00 PM</div>
      </div>
      </div>
      ) : null}
   
      <div className="nextvaccination">
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={dalal} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Nasser</div>
          <div  style={{color:'black'}}>Vitamin C</div>
          <div>1 Sachet</div>
        </div>
        <div className="time_dalal">9:00 Am</div>
      </div>
      <div className="nextvaccination">
        <div className="vaccinationimg">
          <div className="vaccinationimg_cont">
            <img src={dalal} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Lina</div>
          <div  style={{color:'black'}}>Vitamin K</div>
          <div>1 Sachet</div>
        </div>
        <div className="time_dalal">2:00 PM</div>
      </div>
      
    </React.Fragment>
  );
}
export default MotherMedication;
