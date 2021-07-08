import React,{useEffect, useState} from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './AddMember.scss'
import Avatar from '../../../helpers/Upload/Upload'
import ValidationLibrary from '../../../helpers/validationfunction'
import { GetRelationship,AddPatientDetails} from '../../../actions/ProfileActions'
import { useHistory } from 'react-router-dom';
import { useDispatch,connect} from 'react-redux'
function Diet_AddMember(props){
    let dispatch=useDispatch()
    let history=useHistory()
    const [relationship,setRelation]=useState([])
    const [Familymember,setFamilymember]=useState([])
    const [MemberDetails,setMemberDetails]=useState({
        name:{
            value:"",
            validation:[{name:"required"}],
            error:null,
            errmsg:null
        },
        gender:{
            value:"",
            validation:[{name:"required"}],
            error:null,
            errmsg:null
        },
        date:{
            value:"",
            validation:[{name:"required"}],
            error:null,
            errmsg:null
        },
        mobileno:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        relationship:{
            value:"",
            validation:[{name:"required"}],
            error:null,
            errmsg:null
        },
        height:{
            value:"",
            validation:[{name:"required"}],
            error:null,
            errmsg:null
        },
        weight:{
            value:"",
            validation:[{name:"required"}],
            error:null,
            errmsg:null
        },
    })
    function checkValidation(data, key) {

        var errorcheck = ValidationLibrary.checkValidation(
            data,
            MemberDetails[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: MemberDetails[key].validation,
        };
        setMemberDetails((prevState)=>({
            ...prevState,
            [key]: dynObj,
        }))
    }
    const Submit=()=>{
        const vendorId=localStorage.getItem("patientId")
        var mainvalue = {};
        var targetkeys = Object.keys(MemberDetails);
        for (var i in targetkeys) {
            var errorcheck = ValidationLibrary.checkValidation(
                MemberDetails[targetkeys[i]].value,
                MemberDetails[targetkeys[i]].validation
            );
            MemberDetails[targetkeys[i]].error = !errorcheck.state;
            MemberDetails[targetkeys[i]].errmsg = errorcheck.msg;
            mainvalue[targetkeys[i]] = MemberDetails[targetkeys[i]].value;
        }
        var filtererr = targetkeys.filter((obj) => MemberDetails[obj].error == true);
        if(filtererr.length>0){
            
        }else{
            dispatch(AddPatientDetails(MemberDetails,vendorId)).then(()=>{   
              props.BookClose()
            })

        }
        setMemberDetails((prevState)=>({
            ...prevState,
        }))
    }
    useEffect(()=>{
      dispatch(GetRelationship())
    },[])
    useEffect(()=>{
        let relation=[]
        props.Relationship.map((data)=>{
            relation.push({
                id:data.PatientrealationshipId,value:data.realationship
            })
        })
        setRelation(relation)
       
      },[props.Relationship])
    return(
        <div className="add_labmem_parent">
            <div style={{textAlign:"center"}}><Avatar/>
            <div className="Add_ph">Add Photo</div>
            </div>
            <Labelbox type="text" labelname="Name"
             changeData={(data) => checkValidation(data, "name")}
             value={MemberDetails.name.value}
             error={MemberDetails.name.error}
             errmsg={MemberDetails.name.errmsg}
            />
            <div className="gender_date_div">
                <div style={{width:"50%",paddingRight:"10px"}}>
                <Labelbox type="select" labelname="Gender"
                dropdown={[{id:1,value:"Male"},{id:2,value:"Female"}]}
                changeData={(data) => checkValidation(data, "gender")}
                value={MemberDetails.gender.value}
                error={MemberDetails.gender.error}
                errmsg={MemberDetails.gender.errmsg}
                />
                </div>
                <div style={{width:"50%",marginBottom:"10px",paddingLeft:"10px"}}>
                    <Labelbox type="datepicker" labelname="Date of Birth"
                     changeData={(data) => checkValidation(data, "date")}
                     value={MemberDetails.date.value}
                     error={MemberDetails.date.error}
                     errmsg={MemberDetails.date.errmsg}
                    />
                </div></div>
            <Labelbox type="text" labelname="Mobile Number"
            changeData={(data) => checkValidation(data, "mobileno")}
            value={MemberDetails.mobileno.value}
            error={MemberDetails.mobileno.error}
            errmsg={MemberDetails.mobileno.errmsg}
            />
            <Labelbox type="select" labelname="Relationship"
             dropdown={relationship}
             changeData={(data) => checkValidation(data, "relationship")}
             value={MemberDetails.relationship.value}
             error={MemberDetails.relationship.error}
             errmsg={MemberDetails.relationship.errmsg}
            />
            <div className="gender_date_div"><div style={{width:"50%",display:"flex",paddingRight:"5px"}}>
                <Labelbox type="text" labelname="Height"
                 changeData={(data) => checkValidation(data, "height")}
                 value={MemberDetails.height.value}
                 error={MemberDetails.height.error}
                 errmsg={MemberDetails.height.errmsg}
                />
                <div className="height_cms">Cms</div></div>
                <div style={{width:"50%",display:"flex",paddingLeft:"5px"}}>
                <Labelbox type="text" labelname="Weight"
                 changeData={(data) => checkValidation(data, "weight")}
                 value={MemberDetails.weight.value}
                 error={MemberDetails.weight.error}
                 errmsg={MemberDetails.weight.errmsg}
                /><div className="height_cms">Kgs</div>
                </div>
            </div>
            <div style={{textAlign:"center",padding:"10px 10px"}}><Button className="nurse_cancel" onClick={()=>props.BookClose()}>Cancel</Button><Button className="nurse_book_btn"  onClick={Submit}>Submit</Button></div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    Relationship:state.GetProfileDetails.Relationship,
})
export default connect(mapStateToProps)(Diet_AddMember);