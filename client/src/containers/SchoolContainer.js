import React from 'react';
import NavigationMenu from '../components/NavigationMenu';

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
          <NavigationMenu />
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