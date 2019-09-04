import React from 'react';
import Ad from '../components/Ad';
import Footer from '../components/Footer';
import BlogList from '../containers/BlogList';
import EventsList from '../containers/EventsList';
import SchoolSelector from '../components/SchoolSelector';
import '../stylesheets/district.scss'

class DistrictContainer extends React.Component {
  state = {
    district_data: null
  }

  componentDidMount(){
    const district_id = this.props.match.params.dist_id
    fetch(`http://localhost:3001/api/districts/${district_id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({district_data: data});
      })
  }

  loadedResponse = () => {
    if (!this.state.district_data){
      return "Loading District data"
    } else {
      return (
        <div id="district-page">
          <header id="header">
            <h1>{this.state.district_data.name}</h1>
            <Ad size="banner" />
          </header>
          <div id="sidebar">
            <SchoolSelector schools={this.state.district_data.schools} dist_id={this.state.district_data.id} history={this.props.history}/>
            <Ad size="panel" />
            <Ad size="panel" />
          </div>
          <BlogList blogs={this.state.district_data.blogs} />
          <EventsList events={this.state.district_data.events} />
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

export default DistrictContainer;