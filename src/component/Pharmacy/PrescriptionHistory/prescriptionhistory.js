import React from 'react';
import filter from '../../../images/filter.svg'
import './prescriptionhistory.scss'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Labelbox from '../../../helpers/labelbox/labelbox';
import { NavLink} from "react-router-dom";
function PrescriptionHistory(props){
    const [Open,Close]=React.useState(false)
    const [BtnOpen,setBtnOpen]=React.useState(true)
    function BtnClick(){
        setBtnOpen(clrchanged=>!clrchanged)

    }
    function filterOpen(){
       Close(true)
    }
    function filterClose(){
        Close(false)
    }
    function orderDetailspush(){
        alert("hai")
        props.history.push("/paymentreceive")
    }
    return(
        <div className=" pres_div">
            {/* prescription history list */}
        <div className="pres_headdiv">
            <label className="pres_h">PrescriptionHistory</label> <img src={filter} style={{cursor:"pointer",width:"20px"}} onClick={filterOpen}/> 
            </div>
             {/* advance filter */}
             {Open &&(
                
            <div className="history_list">
             <div className="advance_flt_div"><label>Advance Filter</label><CloseIcon onClick={filterClose} style={{cursor:"pointer"}}/></div>
             <div style={{margin:"20px 0px"}}>
                 <Button className={BtnOpen===true?"flt_btns":"flt_btns_change"} onClick={BtnClick}>Out for Delivery</Button>
                 <Button className={BtnOpen===true?"flt_btns":"flt_btns_change"} onClick={BtnClick}>Delivered</Button>
                 <Button className="flt_btns">Cancelled</Button>
                 <Button className="flt_btns">packed</Button>
             </div>
             <div style={{display:"flex"}}>
                 <div style={{marginRight:"20px"}}><Labelbox type="datepicker" labelname="From Date"/></div>
                 <div><Labelbox type="datepicker" labelname="To Date"/></div>
                 <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"12px 0px 0px 20px"}} ><Button className="pres_search">Search</Button></div>
             </div>
            </div>
            )}
            {/* advancefilter end */}
           <NavLink to={"/orderdetails"}><div className=" history_list">
                <div className="list_itemdiv"><label className="order_id">Order ID</label><label>25 01 2021</label></div>
                <div style={{color:"#939393",margin:"8px 0px 5px 0px"}}>PH74567</div>
                <div className="list_itemdiv">
                    <div><label className="order_id">Amount</label><label className="pres_kwd">50 KWD</label></div>
                    <div>Pay</div>
                </div>     
            </div>
            </NavLink>


            <NavLink to={"/orderpacking"}><div className=" history_list">
                <div className="list_itemdiv"><label className="order_id">Order ID</label><label>25 01 2021</label></div>
                <div style={{color:"#939393",margin:"8px 0px 5px 0px"}}>PH74567</div>
                <div className="list_itemdiv">
                    <div><label className="order_id">Amount</label><label className="pres_kwd">400 KWD</label></div>
                    <div>Packed</div>
                </div>     
            </div>
            </NavLink>
               {/* end */}


           
        </div>
    )
}
export default PrescriptionHistory;