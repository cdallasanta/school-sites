import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const myEventsList = []

const CalendarCont = props => {
  return (
    <div style={{
      "height": "80vh",
      "margin": "20px"}}>
      
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )
}

export default CalendarCont;