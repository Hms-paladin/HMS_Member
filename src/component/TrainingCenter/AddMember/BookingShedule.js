import React from 'react'
import Calendar from  '../BookingsCalender/Calendar'
import Grid from '@material-ui/core/Grid'
import Tra_Bookings from './Booking'
import './BookingShedule.scss'
export default function BookingShedule(){
    return(
        <div className="booking_shedule_tra">
            <Grid container>
                <Grid item xs={12} md={5}>
                   <Calendar
                   heading="Booking"
                   SelectDate="enable"
                   />
                </Grid>
                <Grid item xs={12} md={7} className="tra_booing_parent">
                <div className="tra_booking_confirm">
                  <Tra_Bookings/>
                </div>
                </Grid>
           </Grid>
        </div>
    )
}