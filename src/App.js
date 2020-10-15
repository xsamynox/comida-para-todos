import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from './views/home';
import AboutUs from './views/aboutUs';
import Projects from './views/projects';
import Campaigns from './views/campaigns';
import Collaborators from './views/collaborators';
import Contact from './views/contact';
import Donate from './views/donate';
import Transparency from './views/transparency';
import './App.css';
import UrbanGardens from './views/urbanGardens';
import Foods from './views/foods';
import Class from './views/class';
import Skills from './views/skill'
import AboutUs2 from './views/aboutUs2';
import BeVolunteer from './views/beVolunteer';
import SchoolProj from './views/schoolProject';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={() => <Home />}
        />
        <Route
          exact path="/team"
          render={() => <AboutUs />}
        />
        <Route
          exact path="/aboutus"
          render={() => <AboutUs2 />}
        />
        <Route
          exact path="/foodbank"
          render={() => <Projects />}
        />
        <Route
          exact path="/schoolproj"
          render={() => <SchoolProj />}
        />
        <Route
          exact path="/campaings"
          render={() => <Campaigns />}
        />
        <Route
          exact path="/collaborators"
          render={() => <Collaborators />}
        />
        <Route
          exact path="/transparency"
          render={() => <Transparency />}
        />
        <Route
          exact path="/contact"
          render={() => <Contact />}
        />
        <Route
          exact path="/donate"
          render={() => <Donate />}
        />
        <Route
          exact path="/donate/bevolunteer"
          render={() => <BeVolunteer />}
        />
        <Route
          exact path="/donate/urbangarden"
          render={() => <UrbanGardens />}
        />
        <Route
          exact path="/donate/foods"
          render={() => <Foods />}
        />
        <Route
          exact path="/donate/class"
          render={() => <Class />}
        />
        <Route
          exact path="/donate/hability"
          render={() => <Skills />}
        />
      </Switch>
    </Router >
  );
}

export default App;
