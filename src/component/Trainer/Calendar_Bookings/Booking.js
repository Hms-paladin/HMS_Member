import React from 'react'
import Calendar from  '../../../helpers/BookingsCalendar/Calendar'
import Grid from '@material-ui/core/Grid'
import AvailableSlots from './AvailableSlots'
// import './BookingShedule.scss'
export default function BookingShedule(){
    return(
        <div className="booking_shedule_tra">
            <Grid container>
                <Grid item xs={12} md={5} className="bookings_cal_range">
                   <Calendar
                   heading="Booking"
                   SelectDate="enable"
                   category="Indoor-Fitness-Burn IT"
                   amt="160 KWD"
                   Name_of_type="Farah"
                   />
                </Grid>
                <Grid item xs={12} md={7} className="tra_booing_parent">
                <div className="tra_booking_confirm">
                  <AvailableSlots/>
                </div>
                </Grid>
           </Grid>
        </div>
    )
}