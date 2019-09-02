import React from 'react';

class SchoolSelector extends React.Component {
  state = {
    district: null,
    school_id: null
  }

  componentDidMount(){
    const dist_id = this.props.match.params.id
    fetch(`http://localhost:3001/api/districts/${dist_id}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({district: data});
      })
  }

  handleChange = e => {
    this.setState({school_id: e.target.value})
  }

  optionsForSelect = () => {
    return this.state.district.schools.map((school, i) => {
      return <option value={school.id} key={i}>{school.name}</option>
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/schools/${this.state.school_id}`)
  }

  render(){
    let resp;
    if (this.state.district){
      resp = 
        <form>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={null}>Select your school</option>
            {this.optionsForSelect()}
          </select>
          <input type="submit" value="Select School" onClick={e=>this.handleSubmit(e)} />
        </form>
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