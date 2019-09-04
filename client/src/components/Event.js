import React from 'react';

const Event = ({event}) => {
  const eventStart = new Date(event.start);
  const shortMonth = eventStart.toLocaleString('default', { month: 'short' });
  const longMonth = eventStart.toLocaleString('default', { month: 'long' });
  const dateNumber = eventStart.getDate()
  const dateString = eventStart.toLocaleString('default', { weekday: 'long' })

  return (
    <div className="event-div">
      <div className="event-date">
        {eventStart.toLocaleString('default', { month: 'short' })}, 
        {eventStart.getDate()}
      </div>
      <div className="">
        {event.title}: {dateString}, {longMonth} {dateNumber}
      </div>
    </div>
  )
}

export default Event;