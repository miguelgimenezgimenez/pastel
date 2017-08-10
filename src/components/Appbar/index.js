import React, { Component } from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import theMovieDb from 'themoviedb-javascript-library';
import './style.css';

class Appbar extends Component {

  render() {
    return (
      <div className="navigation-bar">
        <div className="upper-nav">
          <div className="user">
            <button>Settings</button>
            <img
              className="avatar"
              width={40}
              height={40}
              src="../../images/avatar.png"
              alt="Image"
            />
          </div>
        </div>
        <div className="lower-nav">
          <Link
            style={{ textDecoration: 'none' }}
            activeClassName="selected"
            to="/session/all"
          >
            <div className="lower-nav-item ">Discover</div>
          </Link>
          <Link
            style={{ textDecoration: 'none' }}
            activeClassName="selected"
            to="/session/reward"
          >
            <div className="lower-nav-item">Favorites</div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Appbar;
