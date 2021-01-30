import React from "react";
import profile from "../../images/PregnantMother/PregnantMother.png";
import Grid from "@material-ui/core/Grid";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Card } from "@material-ui/core";
import Labelbox from '../../helpers/labelbox/labelbox'
import { useHistory } from 'react-router-dom';

function EditProfile_PregWomen(props) {
    const history = useHistory();
    // function ProfileHome(){
    //     alert("welcome")
    //     history.push("/PregnantMother_profile")
    // }
  return (
    <div>
      <Card style={{ marginTop: "25px" }}>
        <h3>Edit Profile</h3>
        <div style={{ marginTop: "15px" }}>
          <div style={{ float: "right" }}>Update</div>
          <div>
            <img
              style={{
                width: "123px",
                height: "123px",
                position: "relative",
                display: "block",
              }}
              src={profile}
            />

            <AddBoxIcon  onClick={() => history.push('/pregnantmotherprofile')} className="editprofile_icon"/>
          </div>
        </div>
        
    <Grid style={{marginTop:'10px'}} container spacing={3}>
        <Grid item xs={1}/>
          <Grid item xs={5}>
            <Labelbox type="text" labelname="Name"></Labelbox>
          </Grid>
          <Grid item xs={5}>
          <Labelbox type="datepicker"  labelname="Date of Birth"></Labelbox>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={1}/>
          <Grid item xs={5}>
            <Labelbox type="text"  labelname="Email"></Labelbox>
          </Grid>
          <Grid item xs={5}>
          <Labelbox type="number"  labelname="Insurance"></Labelbox>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={1}/>
          <Grid item xs={5}>
            <Labelbox type="text"  labelname="Civil Id"></Labelbox>
          </Grid>
          <Grid item xs={5}>
          <Labelbox type="number"  labelname="Mobile"></Labelbox>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={1}/>
          <Grid item xs={5}>
            <Labelbox type="datepicker"  labelname="Expected Delivery Date"></Labelbox>
          </Grid>
          <Grid item xs={5}>
          <Labelbox type="text"  labelname="Baby Name"></Labelbox>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={1}/>
          <Grid item xs={11}>
              <Labelbox type="textarea" labelname="Address">
              </Labelbox>
          </Grid>
        </Grid> 
      </Card>
    </div>
  );
}
export default EditProfile_PregWomen;
