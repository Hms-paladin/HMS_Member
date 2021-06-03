import React from 'react'
import Button from '@material-ui/core/Button';
import './RecordDelete.scss'
export default function DeleteRecord(props){
  return (
    <div className="record_delete">
    <div style={{textAlign:"center"}}>
     <div style={{fontSize:"25px",color:"#333",fontWeight:"bold",marginBottom:"8px"}}>Are you sure?</div>
     <div style={{color:"#595959",fontSize:"17px"}}>You want to delete this record</div>
     <div style={{marginTop:"25px"}}><Button className="order_cancel" onClick={()=>props.Close(true)}>Cancel</Button><Button className="order_save" onClick={()=>props.Close(true)}>OK</Button></div>
     </div>
    </div>
  );
};

