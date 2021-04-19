import React from 'react'
import Calendar from  '../../../helpers/BookingsCalendar/Calendar'
import Grid from '@material-ui/core/Grid'
export default function Trainer_Myschedule(props){
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
                <Grid item xs={12} md={5} className="bookings_cal_range">
                   <Calendar
                        heading="Myschedule"
                        category="Indoor-Fitness-Burn IT"
                        amt="160 KWD"
                        Name_of_type="Farah"
                        upcomingdays="enable"
                        MyShedule_dots="enable"
                   />
                </Grid>
               
           </Grid>
        </div>
    )
}