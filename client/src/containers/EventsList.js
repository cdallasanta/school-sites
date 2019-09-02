import React from 'react';
import Event from '../components/Event';

class EventsList extends React.Component {
  renderEvents = () => {
    return this.props.events.map(e => {
      return <Event event={e} />
    })
  }

  render(){
    return this.renderEvents()
  }
}

export default EventsList;