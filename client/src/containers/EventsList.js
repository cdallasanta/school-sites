import React from 'react';
import Event from '../components/Event';

class EventsList extends React.Component {
  renderEvents = () => {
    return this.props.events.map((e, i) => {
      return <Event event={e} key={i} />
    })
  }

  render(){
    return (
      <div>
        <h3>Events</h3>
        {this.renderEvents()}
      </div>
    )
  }
}

export default EventsList;