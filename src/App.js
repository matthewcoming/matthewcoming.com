import React from 'react';
import 'react-web-tabs/dist/react-web-tabs.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import HomePage from './HomePage'
import Fun from './Fun'

function App() {
  console.log("Please pay no attention to ALLL these eerrrors");
  return (
    <Router>
      <div>
        <div className="topnav">
          {/*eslint-disable-next-line*/}
          <a href="https://github.com/matthewcoming/Mattoc" className="fab fa-github" />
          <a className="fas fa-file-user" href="https://kipja.com/res/Matthew_Coming.pdf">Resume</a>
          <a href="/fun">Three.JS demo</a>
        </div>
        <Switch>
          <Route path="/fun">
            <Fun />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
