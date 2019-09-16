import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SchoolSelector from './components/SchoolSelector';
import SchoolContainer from './containers/SchoolContainer';
import DistrictContainer from './containers/DistrictContainer';
import CalendarCont from './oldCalendar/Calendar';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/header';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={DistrictContainer} />
            <Route exact path="/districts/:dist_id/selector" component={SchoolSelector} />
            <Route exact path="/districts/:dist_id/schools/:school_id" component={SchoolContainer} />
            <Route exact path="/districts/:dist_id" component={DistrictContainer} />
            <Route exact path="/districts/:dist_id/calendar" component={CalendarCont} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
