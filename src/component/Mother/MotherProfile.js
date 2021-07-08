import React,{useState} from "react";
import '../Pregnant_Mother/Pregnant_Mother.scss'
import { Collapse } from 'antd';
import Grid from '@material-ui/core/Grid'
function ChildInformation(props) {
  const {Childinfo}=props
    return(
        <div>
            


            <div className="position_set">
        <div className="card_center">
          <div className="mini-box_background">
            <div className="round_text">
              <div style={{ color: "white",fontWeight:"bold" }}>Child Info</div>
            </div>
          </div>
        </div>
        <div className="card_center">
          {/* <Card className="pregnant_mother-card">dfvbdfgbf</Card> */}
          <div className="box_background">
            <div className="box_text">
              <Grid
                style={{ font: "normal normal 23px/22px Roboto" }}
                container
                spacing={3}
              >
                <Grid item xs={2}>
                  <div>Name</div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                  <div>{Childinfo[0]?.baby_name}</div>
                </Grid>
                <Grid item xs={2}>
                  <div>Age</div>
                </Grid>
                <Grid item xs={4}>
                  <div>{Childinfo[0]?.baby_age_inweek}</div>
                </Grid>
                <Grid item xs={2}>
                  <div>height</div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                  <div>-</div>
                </Grid>
                <Grid item xs={2}>
                  <div>Weight</div>
                </Grid>
                <Grid item xs={4}>
                  <div>-</div>
                </Grid>
                <Grid itme xs={12}>
                  <div style={{ font: "normal normal 15px/22px Roboto" }}>
                    Check your lovely {Childinfo[0]?.baby_name} Height and Weight{" "}
                    <span style={{ color: "#83AF40" }}>
                      @ Best Clinical Lab
                    </span>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="box_circle">
            <div className="round_text">
              <div className="box_circle_inner_div">
              <div style={{ fontWeight: "bold",fontSize:"43px" }}>{Childinfo[0]?.approximateDeliveryDay0fBaby}</div>
              <div> Days</div>
              <div>to go</div>
              </div> 
            </div>
          </div>
        </div>
      </div>
          
        </div>
    )
}

export default ChildInformation;