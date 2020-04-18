import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Calendar from "./Calendar.js"
import Home from "./Home.js"
import Contact from "./Contact.js"
import About from "./About.js"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  return (
    <div id="app">
      <Router>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/city/"><Calendar /></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/contact" exact><Contact /></Route>
        </Switch>
      </Router>


    </div>
  )
}

export default App;
