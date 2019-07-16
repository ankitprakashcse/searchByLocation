import React from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import ActivityDetails from './Component/Activity/ActivityDetails';


import './App.css';
import HomePage from './Component/HomePage/HomePage';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={withRouter(HomePage)} />
          <Route path="/:id" exact component={ActivityDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
