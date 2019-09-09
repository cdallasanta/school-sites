import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

class CalendarCont extends React.Component {
  state = {
    events: []
  }
  
  componentDidMount(){
    // TODO static url right now for testing, probably move this to props? or something
    fetch(`/api/districts/1/schools/1`)
      .then(resp => resp.json())
      .then(data => {
        let events = []
        data.events.map(e => {
          return events.push({
            title: e.title,
            start: new Date(Date.parse(e.start)),
            end: new Date(Date.parse(e.end)),
            allDay: e.allDay
          })
        })
        this.setState({events: events}, () => console.log("state updated"));
      })
  }

  render(){
    return (
      <div style={{
        "height": "80vh",
        "margin": "20px"}}>
  
        <Calendar
          localizer={localizer}
          events={this.state.events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    )
  }
}

export default CalendarCont;