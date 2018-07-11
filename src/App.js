import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as api from './api'
import * as urls from './urls';
import LoginPage from './containers/loginpage';
import Layout from './containers/layout';
import ProjectList from './containers/projectList'
import ProjectCreate from './containers/projectCreate'
import ProjectEdit from './containers/projectEdit'

window.zepp = api;

const styles = {

};

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route exact path={urls.ROOT} component={Layout} />
              <Route path={urls.LOGIN} component={LoginPage} />
              <Route exact path={urls.PROJECT_LIST} component={ProjectList} />
              <Route path={urls.PROJECT_CREATE} component={ProjectCreate} />
              <Route path={urls.PROJECT_EDIT} component={ProjectEdit} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
