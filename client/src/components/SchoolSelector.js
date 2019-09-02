import React from 'react';

class SchoolSelector extends React.Component {
  state = {
    school_id: null
  }

  handleChange = e => {
    this.setState({school_id: e.target.value})
  }

  optionsForSelect = () => {
    return this.props.district.schools.map(school => {
      return <option value={school.id} >{school.name}</option>
    })
  }

  render(){
    let resp;
    if (this.state.district){
      resp = <select value={this.state.value} onChange={this.handleChange}>
          {this.optionsForSelect()}
        </select>
    } else {
      resp = "Loading schools"
    }
    
    return (
      <div>
        {resp}
      </div>
    )
  }
}

export default SchoolSelector;