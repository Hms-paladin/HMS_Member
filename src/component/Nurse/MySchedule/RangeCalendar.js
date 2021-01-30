import React,{useState} from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import dateFormat from 'dateformat'
import './RangeCalendar.scss'
export default function MyApp(){
    const Current_date = (dateFormat(new Date(), "ddd, dd mmm yyyy"))
    const [state, setState] =useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ])
      return(
          <div style={{boxShadow: "0px 3px 15px #00000033",borderRadius:"2px",margin:"10px 0px 10px"}}>
              <div className="curr_date">{Current_date}</div>
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