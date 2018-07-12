import React, { Component, Fragment } from 'react'
import Header from '../components/header'
import ProjectList from '../containers/projectList'
import ProjectCreate from '../containers/projectCreate'
import ProjectEdit from '../containers/projectEdit'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import * as urls from '../urls'
import * as actions from '../action';
import * as selectors from '../selectors';

const styles = {};

class Layout extends Component {
  render() {

    if (!this.props.isLoggedIn) {
      return (
        <Redirect to={urls.LOGIN} />
      );  
    }
    
    return (
      <div>
        <Fragment>
        <Header  logout={this.props.logout} />
        <div >
          <Switch>
            <Route exact path={urls.PROJECT_LIST} component={ProjectList} />
            <Route path={urls.PROJECT_CREATE} component={ProjectCreate} />
            <Route path={urls.PROJECT_EDIT} component={ProjectEdit} />
          </Switch>
          homepage
        </div>
      </Fragment>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: selectors.isLoggedIn(state),
  };
}

const mapDispatchToProps = {
  logout: actions.logout,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Layout));
