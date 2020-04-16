import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";

import Calendar from "./Calendar.js"
import Home from "./Home.js"
import Footer from "./Footer.js"
import Contact from "./Contact.js"
import About from "./About.js"

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
        <Footer />
      </Router>


    </div>
  )
}

export default App;
