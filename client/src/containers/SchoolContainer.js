import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import ContactInfo from '../components/ContactInfo';
import Ad from '../components/Ad';
import Footer from '../components/Footer';
import BlogList from '../containers/BlogList';
import EventsList from '../containers/EventsList';
import '../stylesheets/school.scss'

class SchoolContainer extends React.Component {
  state = {
    school_data: null
  }

  componentDidMount(){
    const dist_id = this.props.match.params.dist_id
    const school_id = this.props.match.params.school_id
    fetch(`http://localhost:3001/api/districts/${dist_id}/schools/${school_id}`)
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
        <div id="school-page">
          <header id="header">
            <h1>{this.state.school_data.name}</h1>
            <ContactInfo contact={this.state.school_data.site_rep} />
            <Ad size="banner" />
          </header>
          <div id="sidebar">
            <NavigationMenu
              school={this.state.school_data}
              district_id={this.state.school_data.district.id} />
            <Ad size="panel" />
            <Ad size="panel" />
          </div>
          <content>
            <BlogList blogs={this.state.school_data.blogs} />
            <EventsList events={this.state.school_data.events} />
          </content>
          <Footer />
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