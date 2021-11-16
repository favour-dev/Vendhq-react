
import React from "react";
import Nav from './Nav.js';
import './App.css';
import Banner from './Banner.js'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Location from './Location.js'
import Footer from './Footer.js'

const App = () => {
  return (
    <div className="app">
      <Nav/>
      {/* <Switch>
        <Route path='/' exact/>
      </Switch> */}
      <main className = "app-content">
      <Content/>
      </main>
      <Footer/>
    </div>
  )
};

const Content = () => (
  <div>
    <Banner/>
    <Location/>
  </div>
)

export default App;
