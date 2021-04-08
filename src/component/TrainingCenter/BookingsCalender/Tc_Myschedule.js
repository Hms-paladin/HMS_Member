import React from 'react'
import Calendar from  '../BookingsCalender/Calendar'
import Grid from '@material-ui/core/Grid'
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {Tag,Modal} from 'antd'
import ConfirmationModal from '../AddMember/ConfirmationModal'
import CloseIcon from '@material-ui/icons/Close';
export default function Tc_Myschedule(props){
      // modal functions
  const [modalOpen,setmodalOpen]=React.useState(false)
  const ModalOpenClick=()=>{
     setmodalOpen(true)
  }
  const ModalCloseClick=()=>{
     setmodalOpen(false)
  }
    return(
        <div className="booking_shedule_tra">
            <Grid container>
                <Grid item xs={12} md={5}>
                   <Calendar
                    heading="Myschedule"
                    MyShedule_dots="enable"
                   />
                </Grid>
               
           </Grid>
        </div>
    )
}