import React from "react";
import '../Pregnant_Mother/Editprofile.scss';
import Labelbox from '../../helpers/labelbox/labelbox'
import avatar from '../../images/PregnantMother/user.png'


function EditPreg_WomenModal(props) {
    return(
        <div>
            <div className="editprofile_cont">
              <div className="editprofile">
                  <div className="edit_header">Edit profile</div>
                  <div className="img_flex_row">
                      <img src={avatar}/>
                      <span>Update</span>
                   </div>
                  <div className="flex_row">
                    
                  <div className="lblbox"> <Labelbox type="text" labelname="Name"/>  </div>
                  <div className="lblbox"><Labelbox type="text" labelname="Date of Birth"/></div>

                  </div>
                 <div className="flex_row">
                    
                    <div className="lblbox"> <Labelbox type="text" labelname="Email"/>  </div>
                    <div className="lblbox"><Labelbox type="text" labelname="Insurance"/></div>
  
                    </div><div className="flex_row">
                    
                    <div className="lblbox"> <Labelbox type="text" labelname="Civil ID"/>  </div>
                    <div className="lblbox"><Labelbox type="text" labelname="Mobile"/></div>
  
                    </div>
                    <div className="flex_row">
                    
                    <div className="lblbox"> <Labelbox type="text" labelname="Expected Delivery Date"/>  </div>
                    <div className="lblbox"><Labelbox type="text" labelname="Baby Name"/></div>
  
                    </div>
                    <div className="flex_row">
                    
                    <div className="lblbox_txtarea"> <Labelbox type="textarea" labelname="Address"/>  </div>
                    
  
                    </div>

              </div>
            </div>
        </div>
    )}
    export default EditPreg_WomenModal;