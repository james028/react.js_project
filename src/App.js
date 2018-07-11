import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as api from './api'
import * as urls from './urls';
import LoginPage from './containers/loginpage';
import Layout from './containers/layout';

window.zepp = api;

const styles = {

};

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <CssBaseline>
            <Switch>
              <Route exact path={urls.ROOT} component={Layout} />
              <Route path={urls.LOGIN} component={LoginPage} />
            </Switch>
          </CssBaseline>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
