import React,{useState, useEffect}  from "react";
import plus from '../../images/plus.png'
import historybtn from '../../images/history-button.svg'
import filter from '../../images/filter2.svg'
import { ReactSVG } from 'react-svg'
import { Button } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import Labelbox from "../../helpers/labelbox/labelbox";
import {DoctorName,PatientName,GetPerscriptionHistory} from '../../actions/ProfileActions'
import { useDispatch, connect } from "react-redux";
import Moment from 'moment';
import ValidationLibrary from '../../helpers/validationfunction'
import { Empty } from 'antd';
import PrescriptionView from './PrescriptionModal'
var hashHistory = require('react-router-redux')




                  

function PerscriptionHistory(props) {
    const dispatch = useDispatch();
    let history = useHistory()
    const HistoryPush=(url)=>{
      history.push(url);
      }
      const [Prescription,setPrescription]=useState(false)
      const [PrescriptionId,setPrescriptionId]=useState([])
      const [color,setcolor]=useState([])
  const OnClickPerscriptinView=(data)=>{
    setPrescriptionId(data)
    setPrescription(true)
  }
  const onResendState=(data)=>{
      setcolor(true)
    setPrescription(false)
  }


    const [showcancelForm,setShowForm] = useState(false)
    const [Doctorlist,setDoctorlist] = useState([])
    const [loading,setloading]=useState(true)
    const [PersFilter,setPersFilter]=useState({
        doctor:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        patient:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        from_date:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
        to_date:{
            value:"",
            validation:[],
            error:null,
            errmsg:null
        },
    })
    const opencancelForm = () => {
        setShowForm(!showcancelForm)
    }

   
    const [showfilterForm,setShowfilter] = useState(false)
    const [FilterTrue,setFilterTrue]=useState(false)
    const openfilter = () => {
        setShowfilter(!showfilterForm)
    }
    const QueueOpen = () => {
        setShowForm(false)
    }
    function checkValidation(data, key) {
      if(key==="patient"){
          dispatch(DoctorName(data))
      }
        var errorcheck = ValidationLibrary.checkValidation(
            data,
            PersFilter[key].validation
        );
        let dynObj = {
            value: data,
            error: !errorcheck.state,
            errmsg: errorcheck.msg,
            validation: PersFilter[key].validation,
        };
        setPersFilter((prevState)=>({
            ...prevState,
            [key]: dynObj,
        }))
    }
  
    const Submit=()=>{
        setFilterTrue(true)
        dispatch(GetPerscriptionHistory(FilterTrue,PersFilter)).then(()=>{
            // StateClear()
            setloading(false)
        })
        setPersFilter((prevState)=>({
            ...prevState,
        }))
    }
     useEffect(()=>{
       dispatch(PatientName())
       dispatch(GetPerscriptionHistory(FilterTrue,PersFilter)).then(()=>{
        setloading(false)
       })
       
     },[FilterTrue])
     useEffect(()=>{
       dispatch(DoctorName())
     },[props.DoctorName])    
    useEffect(()=>{
        // if(props.PerscriptionHistory[0]?.details.length>0){
        //     setloading(false)
        // }
        let Doctor=[]
        let Patient=[]
        props.Doctorname.map((data)=>{
            Doctor.push({value:data.doctorName,
            id:data.doctorId
            })
        })
        props.PatientNameList.map((data)=>{
            Patient.push({
            value:data.patientName,
            id:data.patientId
            })
        })
        setDoctorlist({Doctor,Patient})
     },[props.Doctorname,loading,props.PerscriptionHistory])
    //  const StateClear=()=>{
    //      const Key=["doctor","patient","from_date","to_date"]
    //      Key.map((data)=>{
    //         PersFilter[data].value=""
    //      })
    //  }
    return(
        <div>
        {Prescription===false?
        <div className="myappointments_layout">
          
            <div className="appointmentsheadflex">
                <div className="pres_history">Prescription History</div>
                <div className="appointment_icons">
                    <ReactSVG src={filter} onClick={openfilter}/>

                </div>
            </div>
           {showfilterForm && <div className="appointmentlistpaper">
                <div className="advfilterhead">Advance Filter</div>
                <div className="advfilterflex">
                    <div className="flexr1">
                    <Labelbox type="select" labelname="Patient Name"
                    dropdown={Doctorlist.Patient}
                    changeData={(data) => checkValidation(data, "patient")}
                    value={PersFilter.patient.value}
                    error={PersFilter.patient.error}
                    errmsg={PersFilter.patient.errmsg}
                    /></div>
                    <div className="flexr1"><Labelbox type="select" labelname="Doctor Name"
                    dropdown={Doctorlist.Doctor}
                    changeData={(data) => checkValidation(data, "doctor")}
                    value={PersFilter.doctor.value}
                    error={PersFilter.doctor.error}
                    errmsg={PersFilter.doctor.errmsg}
                    /></div>
                    <Labelbox type="datepicker" labelname="From Date"
                     changeData={(data) => checkValidation(data, "from_date")}
                     value={PersFilter.from_date.value}
                     error={PersFilter.from_date.error}
                     errmsg={PersFilter.from_date.errmsg}
                    />
                    <Labelbox type="datepicker" labelname="To Date"
                    changeData={(data) => checkValidation(data, "to_date")}
                    value={PersFilter.to_date.value}
                    error={PersFilter.to_date.error}
                    errmsg={PersFilter.to_date.errmsg}
                    />
                    <div className="applybtndiv"><Button className="applybtn" onClick={Submit}>Apply</Button></div>
                </div>
            </div>}
            {loading?
              <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
               imageStyle={{
               height: 60,
              }}
             description={<span>No Data Available</span>} /> :
            
            <>
            {props.PerscriptionHistory[0]?.details.map((data) => (                
            <div className={"appointmentlistpaper"} onClick={()=>OnClickPerscriptinView(data.presciptionId)}>
            <div className="listpaperflex">
                <div className="doctrname">{data.patientName}</div>
                <div className="appointdate">
                <span className="appointtime"></span>
                </div>
                </div>
               <div className="listpaperflex">
                   <div className="patname">{Moment(data.presciptionDate).format('DD MMM YYYY')}</div><div>{Moment(data.presciptionDate).format('hh:mm A')}</div></div>
            </div>
            ))}
            </>
           }
        </div>:
           <PrescriptionView PrescriptionId={PrescriptionId} onResendStatefun={onResendState}/>}

        </div>
    )}
    
const mapStateToProps = (state) =>
({
    myAppointments: state.doctorAppointmentReducer.getMyAppointmentsList || [],
    Doctorname: state.GetProfileDetails.Doctorname,
    PatientNameList:state.GetProfileDetails.PatientNameList,
    PerscriptionHistory:state.GetProfileDetails.PerscriptionHistory
});

export default connect(mapStateToProps)(PerscriptionHistory);