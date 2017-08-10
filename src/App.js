import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Discover from './containers/Discover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute  component={Discover} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
