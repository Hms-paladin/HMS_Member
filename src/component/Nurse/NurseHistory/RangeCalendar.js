import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import dateFormat from 'dateformat'
import './RangeCalendar.scss'
import { addDays } from 'date-fns';
export default function RangeCalendar(props) {
  const Current_date = (dateFormat(new Date(), "ddd, dd mmm yyyy"))
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 30),
      key: 'selection'
    }
  ]);


  const chooseData = (item) => {
    console.log(item, "item")
    item.selection.endDate = addDays(item.selection.startDate, 29)
    setState([item.selection])

  }
  // props.addExperience(state)

  // console.log(state, "statestate")
  return (
    <div style={{ boxShadow: "0px 3px 15px #00000033", borderRadius: "2px", margin: "10px 0px 10px" }}>
      <div className="curr_date">{Current_date}</div>
      <DateRange
        onChange={item => chooseData(item)}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        months={1}
        ranges={state}
        direction="horizontal"
        style={{ width: "100%" }}
      />
    </div>
  )
}