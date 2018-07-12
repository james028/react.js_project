import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from '../components/header'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import ProjectListItem from '../components/projectlistitem'

import { arrayOfProjects } from '../propTypes';
import * as actions from '../action'
import * as selectors from '../selectors'

const styles = {
  self: {
    display: 'flex',
    justifyContent: 'center'
  }
};

class ProjectList extends Component {

  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    projects: arrayOfProjects,
    readProjectList: PropTypes.func.isRequired,
  };

  state = {
    loading: true,
  };

  componentDidMount() {
    const { readProjectList } = this.props;
    readProjectList().finally(() => {
      this.setState({ loading: false });
    });
  }


  render() {
    const { projects, classes } = this.props;
    return (
      <div className={classes.self}>
        <Header/>
        {projects.map((project) => (
          <ProjectListItem
            key={project.id}
            project={project}
          />
        ))}
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  return {
    projects: selectors.getProjectList(state),
  };
}

const mapDispatchToProps = {
  readProjectList: actions.readProjectList,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProjectList));
