import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './App.css';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
    return (
      <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Listings' component={Listings}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
      </Router>
      </>
    );
    
  }

const appDiv = document.getElementById("app");
render (<App />, appDiv);