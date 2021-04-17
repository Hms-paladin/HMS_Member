import React from 'react'
import Calendar from  '../../../helpers/BookingsCalendar/Calendar'
import Grid from '@material-ui/core/Grid'
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
                    category="Two Member Program"
                    amt="160 KWD"
                    Name_of_type="Farah"

                   />
                </Grid>
               
           </Grid>
        </div>
    )
}