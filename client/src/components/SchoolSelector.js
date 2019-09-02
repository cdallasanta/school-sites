import React from 'react';

class SchoolSelector extends React.Component {
  state = {
    district: null,
    grade_level: "",
    school_id: ""
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
    this.setState({[e.target.name]: e.target.value})
  }

  schoolsForSelect = () => {
    const schools = this.state.district.schools.filter(s => s.grade_level === this.state.grade_level)

    return schools.map((school, i) => {
      return <option value={school.id} key={i}>{school.name}</option>
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/schools/${this.state.school_id}`)
  }

  dropdownForm = () => {
    return (
      <form>
        <div>
          <label htmlFor="grade_level">Select grade level: </label>
          <select value={this.state.grade_level} onChange={this.handleChange} name="grade_level">
            <option value=""></option>
            <option value="elementary">Elementary</option>
            <option value="k-8">K-8</option>
            <option value="middle">Middle</option>
            <option value="high">High</option>
          </select>
        </div>

        {this.state.grade_level !== "" ?
          <div>
            <label htmlFor="school_id">Select your school: </label>
            <select value={this.state.school_id} onChange={this.handleChange} name="school_id">
              <option value=""></option>
              {this.schoolsForSelect()}
            </select>
          </div>
          :
          null
        }

        <input type="submit" value="Select School" onClick={e=>this.handleSubmit(e)} />
      </form>
    )
  }

  render(){
    let resp;
    if (this.state.district){
      resp = this.dropdownForm();
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