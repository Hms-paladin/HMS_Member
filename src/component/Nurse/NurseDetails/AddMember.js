import React from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import Button from '@material-ui/core/Button';
import './AddMember.scss'
import Avatar from './Upload'
export default function AddMember(props){
    return(
        <div className="add_mem_parent">
            <div style={{textAlign:"center"}}><Avatar/>
            <div>Add Photo</div>
            </div>
            <Labelbox type="text" labelname="Name"/>
            <div className="gender_date_div"><div style={{width:"50%"}}><Labelbox type="select" labelname="Gender"/></div><div style={{width:"50%"}}><Labelbox type="datepicker" labelname="Date of Birth"/></div></div>
            <Labelbox type="text" labelname="Mobile Number"/>
            <Labelbox type="select" labelname="Relationship"/>
            <div className="gender_date_div"><div style={{width:"50%",display:"flex"}}><Labelbox type="text" labelname="Height"/><div className="height_cms">Cms</div></div><div style={{width:"50%",display:"flex"}}><Labelbox type="text" labelname="Weight"/><div className="height_cms">Kgs</div></div></div>
            <div style={{textAlign:"center",padding:"10px 10px"}}><Button className="nurse_cancel" onClick={()=>props.BookClose()}>Cancel</Button><Button className="nurse_book_btn"  onClick={()=>props.BookClose()}>Submit</Button></div>
        </div>
    )
}
