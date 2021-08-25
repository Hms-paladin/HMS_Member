import React, { useEffect, useState } from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './AddMember.scss'
import Avatar from '../../../helpers/Upload/Upload'
import { GetRelationship,AddPatientDetails } from "../../../actions/ProfileActions"
import { connect, useDispatch } from "react-redux";
import ValidationLibrary from "../../../helpers/validationfunction"
import {Popconfirm,message} from 'antd';
import AvatarImage from '@material-ui/icons/Face';
// import {AddPatientDetails} from '../../../actions/ProfileActions'
import { Tabs,Upload} from 'antd';
function Lab_AddMember(props) {
    const dispatch = useDispatch();
    const [relationddl, setRelationddl] = useState([])
    const [fileList,setfilelist]=useState([])
    const [imageChanged,setimageChanged]=useState(false)
    const [imageUrl,setimageUrl]=useState("")
    const [AddMember, setAddMember] = useState({
        name: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        gender: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        date:{
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        mobileno: {
            value: "",
            validation: [{ name: "required" },{name:"mobile"}],
            error: null,
            errmsg: null,
        },
        relationship: {
            value: "",
            validation: [{ name: "required" }],
            error: null,
            errmsg: null,
        },
        height: {
            value: "",
            validation: [{ name: "required" },{name:"allowNumaricOnly1"}],
            error: null,
            errmsg: null,
        },
        weight: {
            value: "",
            validation: [{ name: "required" },{name:"allowNumaricOnly1"}],
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
            const patientId = localStorage.getItem("patientId")
            dispatch(AddPatientDetails(AddMember, patientId,fileList.fileList))
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

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      
    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng;
    }
    const uploadButton = (
        <div>
            <AvatarImage className="avatar_img" />
        </div>
    );
    const handleChange = info => {
        if (info.file.status === 'uploading') {
        //   this.setState({ loading: true });
        //   return;
        }
        if (info.file.status === 'done') {
    
            setfilelist(info)
          
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>{
           setimageUrl(imageUrl)
           setimageChanged(true)
            }) 
        }
      };

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

    console.log(relationddl, "props.GetRelationship")
    console.log(fileList.fileList,"fileList")
    
    return (
        <div className="add_labmem_parent">
            <div style={{ textAlign: "center" }}>
                {/* <Avatar/> */}
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >

                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
                <div className="Add_ph">Add Photo</div>
                {/* <div style={{fontSize:"11px",color:"red"}}>{AddMember.photo.error==true&&"Field Required"}</div> */}
            </div>
            <Labelbox type="text" labelname="Name"
                changeData={(data) => checkValidation(data, "name")}
                value={AddMember.name.value}
                error={AddMember.name.error}
                errmsg={AddMember.name.errmsg} />
            <div className="gender_date_div">
                <div style={{ width: "50%", paddingRight: "10px" }}>
                    <Labelbox type="select"
                        labelname="Gender" dropdown={[{ id: 'M', value: "Male" }, { id: 'F', value: "Female" }]}
                        changeData={(data) => checkValidation(data, "gender")}
                        value={AddMember.gender.value}
                        error={AddMember.gender.error}
                        errmsg={AddMember.gender.errmsg} />
                </div>
                <div style={{ width: "50%", marginBottom: "10px", paddingLeft: "10px" }}>
                    <Labelbox type="datepicker" labelname="Date of Birth" 
                    changeData={(data) => checkValidation(data, "date")}
                    value={AddMember.date.value}
                    error={AddMember.date.error}
                    errmsg={AddMember.date.errmsg} />
                </div></div>
            <Labelbox type="text"
                labelname="Mobile Number"
                changeData={(data) => checkValidation(data, "mobileno")}
                value={AddMember.mobileno.value}
                error={AddMember.mobileno.error}
                errmsg={AddMember.mobileno.errmsg} />
            <Labelbox type="select" labelname="Relationship" dropdown={relationddl}
                changeData={(data) => checkValidation(data, "relationship")}
                value={AddMember.relationship.value}
                error={AddMember.relationship.error}
                errmsg={AddMember.relationship.errmsg} />
            <div className="gender_date_div"><div style={{ width: "50%", display: "flex", paddingRight: "5px" }}><Labelbox type="text" labelname="Height"
                changeData={(data) => checkValidation(data, "height")}
                value={AddMember.height.value}
                error={AddMember.height.error}
                errmsg={AddMember.height.errmsg} />
                <div className="height_cms">Cms</div></div><div style={{ width: "50%", display: "flex", paddingLeft: "5px" }}>
                <Labelbox type="text" labelname="Weight" 
                changeData={(data) => checkValidation(data, "weight")}
                value={AddMember.weight.value}
                error={AddMember.weight.error}
                errmsg={AddMember.weight.errmsg} />
                        <div className="height_cms">Kgs</div></div></div>
            <div style={{ textAlign: "center", padding: "10px 10px" }}><Button className="nurse_cancel" onClick={cancel}>Cancel</Button><Button className="nurse_book_btn" onClick={submit}>Submit</Button></div>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    GetRelationship: state.GetProfileDetails.Relationship || [],
})
export default connect(mapStatetoProps)(Lab_AddMember);
