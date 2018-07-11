import React, { Component, Fragment } from 'react'
import Header from '../components/header'
import ProjectList from '../containers/projectList'
import ProjectCreate from '../containers/projectCreate'
import ProjectEdit from '../containers/projectEdit'
import { Switch, Route, Link } from 'react-router-dom'

import * as urls from '../urls'

class Layout extends Component {
  render() {
    return (
      <div>
        <Fragment>
        <Header  />
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

export default Layout;
