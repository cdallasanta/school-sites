import React from 'react';
import './App.css';
import SchoolSelector from './components/SchoolSelector';

class App extends React.Component {
  state = {
    district: null
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/districts/1")
      .then(resp => {
        debugger;
        this.setstate({district: resp})
      })
  }

  render(){
    return (
      <div className="App">
        <SchoolSelector district={this.props.district} />
      </div>
    );
  }
}

export default App;
