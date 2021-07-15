import React,{useEffect,useState} from 'react'
import {NavLink} from "react-router-dom";
import {Modal} from 'antd'
import HistoryButton from '../../../images/history-button.svg'
import Nurse from '../../../images/b_lab.jpeg'
import './Lab_Bookings.scss'
import Lab_Reschedule from './Lab_Reschedule'
import { connect, useDispatch } from "react-redux";
import BookingHistoryModal from './Lab_BookingHistoryModal'
import { GetLabBookingList,CancelBooking } from "../../../actions/clinicalLabAction"
import moment from 'moment';
function Lab_Bookings(props){
    const dispatch = useDispatch();
    const [CancelOpen,setCancelOpen]=React.useState(false)
    const [ModalOpen,setModalOpen]=React.useState(false)
    const[HideAdrs,setHideAdrs]=React.useState(false)
    const[BookingList,setBookingList]=useState([])
    const[particularBookDet,setPartBookDet]=useState({})
    const CancelClick=()=>{
        setCancelOpen(!CancelOpen)
        dispatch(CancelBooking())
    }
     // elipse function
     const ElipseOpen=()=>{
        setHideAdrs(!HideAdrs)
    }
    const [ReOpen,setReOpen]=React.useState(false)
    const ReOpenClick=(bookid)=>{
        let Particular_BookDet = BookingList.find((item, index) => {
            return (bookid === item.labbookingId)
        })
        setReOpen(true)
        setPartBookDet(Particular_BookDet)
    }
    const ReOpenClose=()=>{
        setReOpen(false)
    }
    useEffect(()=>{
        dispatch(GetLabBookingList())
    },[])
    useEffect(()=>{
        let details=[];
        props.GetLabBookingList.map((data)=>{
            data.details.map((item)=>{
                details.push(item)
            })
        })
        setBookingList(details)
    },[props.GetLabBookingList])

    console.log(particularBookDet,"particularBookDet")
    return(
        <div className="lab_bookings_parentdiv">
             <div className="book_headdiv">
            <label className="book_h">Bookings</label><NavLink to="/Lab_bookinghistory"><img src={HistoryButton} style={{cursor:"pointer",width:"20px"}}/></NavLink>
            </div>
            {BookingList.map((data)=>{
                return(
                <div className="bookhistory_list_parent">
                <div className="bookhistory_list">
                   <div className="book_nurse_div">  
                     <img src={data.vendor_filename} className="book_nur_img" onClick={()=>setModalOpen(true)}/>
                     <div className="book_text_div">
                         <p className="book_h_name">{data.Lab}</p>
                         <div style={{display:"flex"}}>
                          {HideAdrs?<label className="lab_adrs">{data.vendor_address}</label>:<label className="lab_adrs">{data.vendor_address}</label>}
                          <span className="elipse" onClick={ElipseOpen}>...</span></div>
                         <p>{moment(data.test_date).format("DD-MM-YYYY")}</p>
                     </div>
                   </div> 
                  <div style={{width:"25%"}}>
                      <div className="duty_div"><p style={{color:"#AEADAD",fontSize:"13px"}}>{moment(data.test_time, "HH:mm").format("hh:mm A")}</p></div>
                      <div className="duty_snddiv"><label className="book_shedule" onClick={()=>ReOpenClick(data.labbookingId)}>Reschedule</label><label className={CancelOpen?"b_cancel_change":"b_cancel"} onClick={()=>CancelClick()}>Cancel</label></div>
                   </div>
                   </div> 
               {/* To click cancel button to open this part */}
               {CancelOpen?
               <div className="cancel_part_open">
                 <div className="cancel_part_div">
                     <div className="amt_process">Add 100 KWD to Wallet</div>
                     <div className="amt_process">Process Refund 100 KWD</div>
                 </div>
                 </div>
                 :null}
                 
              </div>)
            })}
            
           <Modal
           className="reshedule_modal"
           onCancel={ReOpenClose}
           visible={ReOpen}
           footer={false}
           centered
           >
            <Lab_Reschedule ReOpenClose={ReOpenClose} Part_Book_Det={particularBookDet}/>
           </Modal>
           <Modal
              title={false}
              visible={ModalOpen}
              footer={false}
              size={"lg"}
              {...props}
              centered
              className=""
              onCancel={()=>setModalOpen(false)}
             >
                 <BookingHistoryModal/>

             </Modal>
        </div>
    )
}
const mapStatetoProps = (state) => ({
    GetLabBookingList: state.clinicalLabReducer.getLabBookingList || [],
    CancelBooking:state.clinicalLabReducer.cancelBooking||[],
})
export default connect(mapStatetoProps)(Lab_Bookings);