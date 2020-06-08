import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main';
import Siddi from './siddi';
import Baluchi from './baluchis';
import Christian from './christians';
import Shias from './shias';
import Ahmadi from './ahmadis';
import Sikhs from './sikhs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
    <Router> 
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/siddi" component={Siddi} />
        <Route path="/baluchis" component={Baluchi} />
        <Route path="/christians" component={Christian} />
        <Route path="/shias" component={Shias} />
        <Route path="/sikhs" component={Sikhs} />
        <Route path="/ahmadis" component={Ahmadi} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
