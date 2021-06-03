import React from 'react';
import filter from '../../../images/filter.svg'
import './prescriptionhistory.scss'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Labelbox from '../../../helpers/labelbox/labelbox';
import { NavLink} from "react-router-dom";
import { findAllByDisplayValue } from '@testing-library/react';
function PrescriptionHistory(props){
    const [Open,Close]=React.useState(false)
    const [BtnOpen,setBtnOpen]=React.useState(false)
    const [BtnOpenOut,setBtnOpenOut]=React.useState(true)
    const [BtnDelivery,setBtnDelivery]=React.useState(true)
    const [BtnCancel,setBtnCancel]=React.useState(true)
    const [BtnPacked,setBtnPacked]=React.useState(true)
    function BtnClick(data){
        // setBtnOpen(clrchanged=>!clrchanged)
        if(data==="outDelivery"){
            setBtnOpenOut(!BtnOpenOut)
        }
        if(data==="Delivered"){
            setBtnDelivery(!BtnDelivery)
        }
        if(data==="Cancelled"){
            setBtnCancel(!BtnCancel)
        }
        if(data==="Packed"){
            setBtnPacked(!BtnPacked)
        }
        
    }
    function filterOpen(){
       Close(true)
    }
    function filterClose(){
        Close(false)
    }
    const Prescription=[
        {
            id:1,
            orderid:"PH38257",
            Date:"27 Feb 2021",
            status:"Pay",
            amt:"51 KWD",
            statusid:2
        },
        {
            id:2,
            orderid:"PH14557",
            Date:"23 Feb 2021",
            status:"Out for Delivery",
            amt:"80 KWD",
            statusid:3
        },
        {
            id:3,
            orderid:"PH34557",
            Date:"15 Feb 2021",
            status:"Packed",
            amt:"80 KWD",
            statusid:4
        },
        {
            id:4,
            orderid:"PH67457",
            Date:"10 Feb 2021",
            status:"Delivered",
            amt:"400 KWD",
            statusid:5
        },
        {
            id:5,
            orderid:"PH78557",
            Date:"22 Feb 2021",
            status:"Cancelled",
            amt:"800 KWD",
            statusid:6
        }
    ]
    return(
        <div className=" pres_div">
            {/* prescription history list */}
        <div className="pres_headdiv">
            <label className="pres_h">Prescription History</label> <img src={filter} style={{cursor:"pointer",width:"20px"}} onClick={filterOpen}/> 
            </div>
             {/* advance filter */}
             {Open &&(
                
            <div className="history_list">
             <div className="advance_flt_div"><label>Advance Filter</label><CloseIcon onClick={filterClose} style={{cursor:"pointer"}}/></div>
             <div style={{margin:"20px 0px"}}>
                 <Button className={BtnOpenOut?"flt_btns":"flt_btns_change"} onClick={()=>BtnClick("outDelivery")}>Out for Delivery</Button>
                 <Button className={BtnDelivery?"flt_btns":"flt_btns_change"} onClick={()=>BtnClick("Delivered")} >Delivered</Button>
                 <Button className={BtnCancel?"flt_btns":"flt_btns_change"} onClick={()=>BtnClick("Cancelled")}>Cancelled</Button>
                 <Button className={BtnPacked?"flt_btns":"flt_btns_change"} onClick={()=>BtnClick("Packed")}>Packed</Button>
             </div>
             <div style={{display:"flex"}}>
                 <div style={{marginRight:"20px"}}><Labelbox type="datepicker" labelname="From Date"/></div>
                 <div><Labelbox type="datepicker" labelname="To Date"/></div>
                 <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"12px 0px 0px 20px"}} ><Button className="pres_search">Search</Button></div>
             </div>
            </div>
            )}
            {/* advancefilter end */}
    
               {Prescription.map((data,index)=>
        <NavLink to={{pathname:data.statusid===4?"/orderpacking":"/orderdetails",
         aboutProps:{name:data.id}
        }}>
               <div className=" history_list">
                <div className="list_itemdiv"><label className="order_id">Order ID</label><label>{data.Date}</label></div>
                <div style={{color:"#939393",margin:"8px 0px 5px 0px"}}>{data.orderid}</div>
                <div className="list_itemdiv">
                    <div><label className="order_id">Amount</label><label className="pres_kwd">{data.amt}</label></div>
                    <div className={data.statusid===2?"pay":data.statusid===5?"delevered":data.statusid===6?"cancelled":null}>{data.status}</div>
                </div>     
            </div>
            </NavLink>
               )}
           


            {/* <NavLink to={"/orderpacking"}><div className=" history_list">
                <div className="list_itemdiv"><label className="order_id">Order ID</label><label>25 01 2021</label></div>
                <div style={{color:"#939393",margin:"8px 0px 5px 0px"}}>PH74567</div>
                <div className="list_itemdiv">
                    <div><label className="order_id">Amount</label><label className="pres_kwd">400 KWD</label></div>
                    <div>Packed</div>
                </div>     
            </div>
            </NavLink> */}
               {/* end */}


           
        </div>
    )
}
export default PrescriptionHistory;