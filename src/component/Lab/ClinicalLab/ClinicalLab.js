import React from 'react'
import Labelbox from '../../../helpers/labelbox/labelbox'
import Grid from '@material-ui/core/Grid';
import './ClinicalLab.scss'
import Button from '@material-ui/core/Button';
import Lab_AddMember from './AddMember'
import Lab_BookingConfirmation from './Lab_BookingConfirmation'
export default function Clinical_lab(props) {
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
    const ColorClick=(id)=>{
        alert(id)
        setcolor(!color)
    }
    // confirm open add member
    const[AddOpen,setAddOpen]=React.useState(false)
    const[HideAdrs,setHideAdrs]=React.useState(false)
    const ConfirmOpen=()=>
    {
        setAddOpen(true)
    }
    const ConfirmClose=()=>
    {
        setAddOpen(false)
    }
    // elipse function
    const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
   
    return(
        <div className="clinicallab_parent">
           <Grid container spacing={4}>
               <Grid item xs={12} md={8}>
           <div className="clinic_div">
               <div>
                   <label className="clinic">Best Clinical Lab</label>
                   <div style={{display:"flex"}}>
                       {HideAdrs?<label className="lab_adrs">Dalal,Al-Jabriya,PO Box 48001,54404 KUWAIT AL-JABRIYA</label>:<label className="lab_adrs">Jabriya</label>}
                       <span className="elipse" onClick={ElipseOpen}>...</span></div>
                </div>
               <label className="test_amt">50 KWD</label>
            </div>

                <div className="clinic_labdiv_parent">
                  <div>
                   <Labelbox type="select" placeholder={"General Test"} value="dfgh"/>
                   <div style={{display:"flex",width:"100%"}}>
                   <div style={{width:"50%",paddingRight:"10px"}}><Labelbox type="datepicker"/></div>
                   <div style={{width:"50%",paddingLeft:"10px"}}><Labelbox type="timepicker"/></div></div>
                   {AddOpen===false?<div><Button className="order_cancel">Cancel</Button><Button className="order_save"onClick={ConfirmOpen} >Confirm</Button></div>:null}
                   </div>

                   {/* testlist */}
                   <div className="clinic_lab_div">
                   {Test.map((data,index)=>
             
        
             <label className={color?"change_clinic_test" : "clinic_test"} onClick={()=>ColorClick(data.id)}>{data.test}</label>
             
                )}
             
                   </div>

              </div>
               </Grid>
              
           <Grid item xs={12} md={4} className="lab_addMember_secondgrid">
               {AddOpen?
               <div className="lab_booking_confirm">
                  <Lab_BookingConfirmation ConfirmClose={ConfirmClose}/>
               </div>:null}

           </Grid>
           </Grid>
       </div>

    )

}