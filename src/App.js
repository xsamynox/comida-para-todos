import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from '../src/views/home'
import aboutUs from '../src/views/aboutUs'
import campaigns from '../src/views/campaigns'
import collaborators from '../src/views/collaborators'
import contact from '../src/views/contact'
import donate from '../src/views/donate'
import transparency from '../src/views/transparency'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutUs">
        </Route>
        <Route exact path="/projects">
        </Route>
        <Route exact path="/campaings">
        </Route>
        <Route exact path="/collaborators">
        </Route>
        <Route exact path="/transparency">
        </Route>
        <Route exact path="/contact">
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
