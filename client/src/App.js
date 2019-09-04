import React from 'react';
import './stylesheets/App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import SchoolSelector from './components/SchoolSelector';
import SchoolContainer from './containers/SchoolContainer';
import DistrictContainer from './containers/DistrictContainer';
import CalendarCont from './containers/Calendar';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={SchoolSelector} />
          <Route exact path="/districts/:dist_id/selector" component={SchoolSelector} />
          <Route exact path="/districts/:dist_id/schools/:school_id" component={SchoolContainer} />
          <Route exact path="/districts/:dist_id" component={DistrictContainer} />
          <Route exact path="/districts/:dist_id/calendar" component={CalendarCont} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
