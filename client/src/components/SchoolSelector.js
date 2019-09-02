import React from 'react';

class SchoolSelector extends React.Component {
  state = {
    school_id: null
  }

  handleChange = e => {
    this.setState({school_id: e.target.value})
  }

  optionsForSelect = () => {
    return this.props.district.schools.map((school, i) => {
      return <option value={school.id} key={i}>{school.name}</option>
    })
  }

  render(){
    let resp;
    if (this.props.district){
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