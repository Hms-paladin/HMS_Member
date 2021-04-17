import React from 'react'
import Calendar from  '../../../helpers/BookingsCalendar/Calendar'
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

                   
                    category="Two Member Program"
                    amt="160 KWD"
                    Name_of_type="Liverpool Club"
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