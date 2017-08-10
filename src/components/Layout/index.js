import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import Appbar from '../../components/Appbar';

class Layout extends Component {
  render() {
    return (
      <div>
        <Appbar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
