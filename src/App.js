// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Nav from './Nav';
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
