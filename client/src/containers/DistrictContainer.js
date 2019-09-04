import React from 'react';

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

  render(){
    let resp;
    if (this.state.district_data){
      resp = this.state.district_data.name
    } else {
      resp = "Loading district data"
    }
    
    return (
      <div>
        {resp}
      </div>
    )
  }
}

export default DistrictContainer;