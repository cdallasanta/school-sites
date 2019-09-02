import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import ContactInfo from '../components/ContactInfo';
import Ad from '../components/Ad';
import BlogList from '../containers/BlogList';
import EventsList from '../containers/EventsList';

class SchoolContainer extends React.Component {
  state = {
    school_data: null
  }

  componentDidMount(){
    const school_id = this.props.match.params.id
    fetch(`http://localhost:3001/api/schools/${school_id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({school_data: data});
      })
  }

  loadedResponse = () => {
    if (!this.state.school_data){
      return "Loading school data"
    } else {
      return (
        <div>
          <h1>{this.state.school_data.name}</h1>
          <ContactInfo />
          <Ad size="banner" />
          <NavigationMenu />
          <BlogList blogs={this.school_data.blogs} />
          <EventsList eventss={this.school_data.eventss} />
        </div>
      )
    }
  }

  render(){
    return (
      this.loadedResponse()
    )
  }
}

export default SchoolContainer;