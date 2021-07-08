import React, { useEffect, useState } from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './AddMember.scss'
import Avatar from '../../../helpers/Upload/Upload'
import { GetRelationship } from "../../../actions/ProfileActions"
import { connect, useDispatch } from "react-redux";
import ValidationLibrary from "../../../helpers/validationfunction"
function Lab_AddMember(props) {
    const dispatch = useDispatch();
    const [relationddl, setRelationddl] = useState([])
    const [AddMember, setAddMember] = useState({
        Name: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        Gender: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        DOB:{
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        MobileNo: {
            value: "",
            validation: [{ name: "required" },{name:"mobile"}],
            error: null,
            errmsg: null,
        },
        Relation: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        Height: {
            value: "",
            validation: [{ name: "required" },{name:"allowNumaricOnly1"}],
            error: null,
            errmsg: null,
        },
        Weight: {
            value: "",
            validation: [{ name: "required" },{name:"allowNumaricOnly1"}],
            error: null,
            errmsg: null,
        },
        photo:{
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        }
    })
    
    const checkValidation = (data, key) => {
        console.log(data, "kkkk")
        var errorcheck = ValidationLibrary.checkValidation(
            data,
            AddMember[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: AddMember[key].validation,
        };

        setAddMember((prevState) => ({
            ...prevState,
            [key]: dynObj,
        }));

    }

    function handleCancel() {
        let keys = Object.keys(AddMember)

        keys.map((data) => {
            AddMember[data].value = ""
        })
        setAddMember(prevState => ({
            ...prevState,
        }));
    }

    function cancel(){
        handleCancel()
        props.BookClose()
    }

    function submit(){
        var targetkeys = Object.keys(AddMember)
        for (var i in targetkeys) {
            var errorcheck = ValidationLibrary.checkValidation(
                AddMember[targetkeys[i]].value,
                AddMember[targetkeys[i]].validation
            )
            AddMember[targetkeys[i]].error = !errorcheck.state
            AddMember[targetkeys[i]].errmsg = errorcheck.msg
        }
        var filtererr = targetkeys.filter((data) => AddMember[data].error === true)
        if (filtererr.length > 0) { }
        else {
            handleCancel()
            props.BookClose()
        }
        setAddMember(prevState => ({
            ...prevState,
        }));
    }
    useEffect(() => {
        dispatch(GetRelationship())
    }, [])
    useEffect(() => {
        let ddl = []
        props.GetRelationship.map((data) => {
            ddl.push({
                id: data.PatientrealationshipId,
                value: data.realationship
            })
        })
        setRelationddl(ddl)
    }, [props.GetRelationship])
    console.log(relationddl, "props.GetRelationship")
    return (
        <div className="add_labmem_parent">
            <div style={{ textAlign: "center" }}>
                <Avatar/>
                <div className="Add_ph">Add Photo</div>
                <div style={{fontSize:"11px",color:"red"}}>{AddMember.photo.error==true&&"Field Required"}</div>
            </div>
            <Labelbox type="text" labelname="Name"
                changeData={(data) => checkValidation(data, "Name")}
                value={AddMember.Name.value}
                error={AddMember.Name.error}
                errmsg={AddMember.Name.errmsg} />
            <div className="gender_date_div">
                <div style={{ width: "50%", paddingRight: "10px" }}>
                    <Labelbox type="select"
                        labelname="Gender" dropdown={[{ id: 1, value: "Male" }, { id: 2, value: "Female" }]}
                        changeData={(data) => checkValidation(data, "Gender")}
                        value={AddMember.Gender.value}
                        error={AddMember.Gender.error}
                        errmsg={AddMember.Gender.errmsg} />
                </div>
                <div style={{ width: "50%", marginBottom: "10px", paddingLeft: "10px" }}>
                    <Labelbox type="datepicker" labelname="Date of Birth" 
                    changeData={(data) => checkValidation(data, "DOB")}
                    value={AddMember.DOB.value}
                    error={AddMember.DOB.error}
                    errmsg={AddMember.DOB.errmsg} />
                </div></div>
            <Labelbox type="text"
                labelname="Mobile Number"
                changeData={(data) => checkValidation(data, "MobileNo")}
                value={AddMember.MobileNo.value}
                error={AddMember.MobileNo.error}
                errmsg={AddMember.MobileNo.errmsg} />
            <Labelbox type="select" labelname="Relationship" dropdown={relationddl}
                changeData={(data) => checkValidation(data, "Relation")}
                value={AddMember.Relation.value}
                error={AddMember.Relation.error}
                errmsg={AddMember.Relation.errmsg} />
            <div className="gender_date_div"><div style={{ width: "50%", display: "flex", paddingRight: "5px" }}><Labelbox type="text" labelname="Height"
                changeData={(data) => checkValidation(data, "Height")}
                value={AddMember.Height.value}
                error={AddMember.Height.error}
                errmsg={AddMember.Height.errmsg} />
                <div className="height_cms">Cms</div></div><div style={{ width: "50%", display: "flex", paddingLeft: "5px" }}>
                <Labelbox type="text" labelname="Weight" 
                changeData={(data) => checkValidation(data, "Weight")}
                value={AddMember.Weight.value}
                error={AddMember.Weight.error}
                errmsg={AddMember.Weight.errmsg} />
                        <div className="height_cms">Kgs</div></div></div>
            <div style={{ textAlign: "center", padding: "10px 10px" }}><Button className="nurse_cancel" onClick={cancel}>Cancel</Button><Button className="nurse_book_btn" onClick={submit}>Submit</Button></div>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    GetRelationship: state.GetProfileDetails.Relationship || [],
})
export default connect(mapStatetoProps)(Lab_AddMember);
