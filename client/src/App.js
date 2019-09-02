import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import SchoolSelector from './components/SchoolSelector';
import SchoolContainer from './containers/SchoolContainer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={SchoolSelector} />
          <Route exact path="/districts/1/selector" component={SchoolSelector} />
          <Route exact path="/schools/1" component={SchoolContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
