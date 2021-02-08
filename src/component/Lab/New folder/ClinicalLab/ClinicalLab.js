import React from 'react'
import Labelbox from '../../../../helpers/labelbox/labelbox'
import Grid from '@material-ui/core/Grid';
import './ClinicalLab.scss'
import Button from '@material-ui/core/Button';
export default function Clicallab(props) {
    const Test=[
        {
            id:1,
            test:"Blood Test",
        },
        {
            id:2,
            test:"Root Test",
        },
        {
            id:3,
            test:"Cavity Test",
        },
        {
            id:4,
            test:"X ray-Teeth",
        },
        {
            id:5,
            test:"Blood Test",
        },
        {
            id:6,
            test:"Root Test"
        },
    ]
    const [color,setcolor]=React.useState(false)
    const ColorClick=()=>{
        setcolor(!color)
    }
    return(
        <div className="clinicallab_parent">
           <div className="clinic_div"><label className="clinic">Best Clinical Lab</label><label className="test_amt">50 KWD</label></div>
           <Grid container spacing={4}>
               <Grid item xs={6} md={6}>
                   <Labelbox type="select" placeholder={"General Test"}/>
                   <div style={{display:"flex",width:"100%"}}>
                   <div style={{width:"50%",paddingRight:"10px"}}><Labelbox type="datepicker"/></div>
                   <div style={{width:"50%",paddingLeft:"10px"}}><Labelbox type="timepicker"/></div></div>
                   <div><Button className="order_cancel">Cancel</Button><Button className="order_save" >Confirm</Button></div>
               </Grid>
          
           <Grid item xs={6} md={6}>
               {Test.map((data,index)=>
             
        
            <label className={color ?"change_clinic_test" : "clinic_test"} onClick={ColorClick}>{data.test}</label>
            
               )}
            
           </Grid>
           </Grid>
       </div>

    )

}