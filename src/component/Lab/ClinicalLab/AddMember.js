import React from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './AddMember.scss'
import Avatar from '../../Nurse/NurseDetails/Upload'
export default function Lab_AddMember(props){
    return(
        <div className="add_labmem_parent">
            <div style={{textAlign:"center"}}><Avatar/>
            <div className="Add_ph">Add Photo</div>
            </div>
            <Labelbox type="text" labelname="Name"/>
            <div className="gender_date_div">
                <div style={{width:"50%",paddingRight:"10px"}}>
                <Labelbox type="select" labelname="Gender"/>
                </div>
                <div style={{width:"50%",marginBottom:"10px",paddingLeft:"10px"}}>
                    <Labelbox type="datepicker" labelname="Date of Birth"/>
                </div></div>
            <Labelbox type="text" labelname="Mobile Number"/>
            <Labelbox type="select" labelname="Relationship"/>
            <div className="gender_date_div"><div style={{width:"50%",display:"flex",paddingRight:"5px"}}><Labelbox type="text" labelname="Height"/><div className="height_cms">Cms</div></div><div style={{width:"50%",display:"flex",paddingLeft:"5px"}}><Labelbox type="text" labelname="Weight"/><div className="height_cms">Kgs</div></div></div>
            <div style={{textAlign:"center",padding:"10px 10px"}}><Button className="nurse_cancel" onClick={()=>props.BookClose()}>Cancel</Button><Button className="nurse_book_btn"  onClick={()=>props.BookClose()}>Submit</Button></div>
        </div>
    )
}
