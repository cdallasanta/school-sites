import React from 'react';
import './stylesheets/App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import SchoolSelector from './components/SchoolSelector';
import SchoolContainer from './containers/SchoolContainer';
import DistrictContainer from './containers/DistrictContainer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={SchoolSelector} />
          <Route exact path="/districts/:id/selector" component={SchoolSelector} />
          <Route exact path="/districts/:id/schools/:id" component={SchoolContainer} />
          <Route exact path="/districts/:id" component={DistrictContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
