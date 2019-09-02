import React from 'react';

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

  render(){
    let resp;
    if (this.state.school_data){
      resp = this.state.school_data.name
    } else {
      resp = "Loading school data"
    }
    
    return (
      <div>
        {resp}
      </div>
    )
  }
}

export default SchoolContainer;