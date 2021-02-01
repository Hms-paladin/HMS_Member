import React, { useState } from "react";
import dalal from "../../images/PregnantMother/bg_mother.jpg";
import "../Pregnant_Mother/Pregnant_Mother.scss";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import car from "../../images/car_device.jpg";
import lina from '../../images/PregnantMother/lina.png'
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
function MotherDevice(props) {
  //     const [showDetails, ShowdetailsTrue] = useState(false);

  // const handleProfileClick = () => {
  //     alert("no no");
  //     ShowdetailsTrue(!showDetails);
  // };
  return (
    <React.Fragment>
      <h1 style={{ marginLeft: "55px" }}>Camera View</h1>
      <div
        className="nextvaccination"
        style={{ height: "100px", boxShadow: "0px 3px 10px #00000021" }}
      >
        <div className="vaccinationimg"></div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Hall cam</div>
          <div>Next Door</div>
        </div>
        <div className="time_dalal" style={{ height: "65px" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "18px" }}>Live</p>
            <p>View</p>
          </div>

          <PlayCircleOutlineRoundedIcon style={{ color: "#83AF40" }} />
          <VisibilityRoundedIcon
            style={{ color: "#2781EB", marginLeft: "22px" }}
          />
        </div>
      </div>

      <div
        className="nextvaccination"
        style={{ height: "100px", boxShadow: "0px 3px 10px #00000021" }}
      >
        <div className="vaccinationimg"></div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Kitchen cam</div>
          <div>Above Chimney</div>
        </div>
        <div className="time_dalal" style={{ height: "65px" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "18px", color: "#FD5353" }}>Offline</p>
            <p>View</p>
          </div>

          <PlayCircleOutlineRoundedIcon
            style={{ color: "#FD5353", marginLeft: "10px" }}
          />
          <VisibilityRoundedIcon
            style={{ color: "#2781EB", marginLeft: "30px" }}
          />
        </div>
      </div>

      <div
        className="nextvaccination"
        style={{ height: "100px", boxShadow: "0px 3px 10px #00000021" }}
      >
        <div className="vaccinationimg"></div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Baby cam</div>
          <div>Toyoto Camry</div>
        </div>
        <div className="time_dalal" style={{ height: "65px" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "18px" }}>Live</p>
            <p>View</p>
          </div>

          <PlayCircleOutlineRoundedIcon style={{ color: "#83AF40" }} />
          <VisibilityRoundedIcon
            style={{ color: "#2781EB", marginLeft: "22px" }}
          />
        </div>
      </div>
      <div
        className="nextvaccination"
        style={{ height: "100px", boxShadow: "0px 3px 10px #00000021" }}
      >
        <div className="vaccinationimg"></div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Car Rear View Mirror Cam</div>
          <div>Lexus LX570</div>
        </div>
        <div className="time_dalal" style={{ height: "65px" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "18px" }}>Live</p>
            <p>View</p>
          </div>

          <PlayCircleOutlineRoundedIcon style={{ color: "#83AF40" }} />
          <VisibilityRoundedIcon
            style={{ color: "#2781EB", marginLeft: "22px" }}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1>Lexus LX570</h1>
        <img
          src={car}
          style={{ width: "800px", height: "350px", left: "200px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "19%",
          fontSize: "22px",
          color: "#83AF40",
        }}
      >
        Live
        <PlayCircleOutlineRoundedIcon
          style={{ marginTop: "4px", marginLeft: "4px", fontSize: "28px" }}
        />
      </div>
      
      <h1 style={{ marginLeft: "55px" }}>GPS Kids Watch</h1>
      <div
        className="nextvaccination"
        style={{ height: "100px", boxShadow: "0px 3px 10px #00000021" }}
      >
        <div className="vaccinationimg">
        <div className="vaccinationimg_cont">
            <img src={lina} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Lina</div>
          <div  style={{color:'black'}}> 25 Jan 2020</div>
          <div>01:42 PM</div>
        </div>
        <div className="time_dalal" style={{ height: "65px" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "18px" }}>Live</p>
            <p style={{color:'#FD5353'}}>Track</p>
          </div>

          <PlayCircleOutlineRoundedIcon style={{ color: "#83AF40" }} />
          <GpsFixedIcon
            style={{ color: "#FD5353", marginLeft: "22px" }}
          />
        </div>
      </div>
      <div
        className="nextvaccination"
        style={{ height: "100px", boxShadow: "0px 3px 10px #00000021" }}
      >
        <div className="vaccinationimg">
        <div className="vaccinationimg_cont">
            <img src={lina} />
          </div>
        </div>
        <div className="vaccinationdetail">
          <div className="vaccinationhead">Saud</div>
          <div  style={{color:'black'}}> 25 Jan 2020</div>
          <div>08:42 PM</div>
        </div>
        <div className="time_dalal" style={{ height: "65px" }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "18px" }}>Live</p>
            <p style={{color:'#FD5353'}}>Track</p>
          </div>

          <PlayCircleOutlineRoundedIcon style={{ color: "#83AF40" }} />
          <GpsFixedIcon
            style={{ color: "#FD5353", marginLeft: "22px" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
export default MotherDevice;
