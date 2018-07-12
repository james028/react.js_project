import React, { Component } from 'react';
import './App.css';
import { withStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import * as api from './api'
import * as urls from './urls';
import LoginPage from './containers/loginpage';
import Layout from './containers/layout';
import ProjectList from './containers/projectList'
import ProjectCreate from './containers/projectCreate'
import ProjectEdit from './containers/projectEdit'
import reducer from './reducers'

window.zepp = api;

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const styles = {

};

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
              <Switch>
                <Route exact path={urls.ROOT} component={Layout} />
                <Route path={urls.LOGIN} component={LoginPage} />
                <Route path={urls.PROJECT_LIST} component={ProjectList} />
                <Route path={urls.PROJECT_CREATE} component={ProjectCreate} />
                <Route path={urls.PROJECT_EDIT} component={ProjectEdit} />
              </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
