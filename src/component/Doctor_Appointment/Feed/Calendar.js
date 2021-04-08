import React,{useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import dateFormat from 'dateformat'
 import './Calendar.scss'
export default function RangeCalendar(){
    const Current_date = (dateFormat(new Date(), "ddd, dd mmm yyyy"))
    const [state, setState] =useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ])
      return(
   <div className="doc_calendar_root_div">    


   
          
<DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
//  ranges={state}
style={{width:"100%"}}
/>
</div>
      )
  }