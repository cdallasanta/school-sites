import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const myEventsList = []

class CalendarCont extends React.Component {
  state = {
    events: null
  }
  
  componentDidMount(){
    // TODO static url right now for testing, probably move this to props? or something
    fetch(`http://localhost:3001/api/districts/1/schools/1`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({events: data.events});
      })
  }

  render(){
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
}

export default CalendarCont;