import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as urls from '../urls'
import * as actions from '../action'


const styles = {
  self: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '50px auto'
  }
};

class LoginPage extends Component {

  state = {
    username: '',
    password: '',
    submitting: false
  };

  onChangeUsername = (e) => {
      this.setState({
        username: e.target.value
      })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  onSubmitLogin = () => {
      const { login } = this.props;
      const { username, password } = this.props;
      this.setState({
        submitting: true
      })
      login({username, password})
        .then(() => {
          this.props.history.replace(urls.PROJECT_LIST);
        })
        .catch(
          this.setState({
            username: '', password: '', submitting: false
          })
        );
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.self}>
        <TextField 
        label="username"
        onChange={this.onChangeUsername}
        value={this.state.username}
        />
        <TextField 
        label="password"
        onChange={this.onChangePassword}
        value={this.state.password}
        />
        <Tooltip id="tooltip-left-start" title="Login" placement="bottom">
          <Button 
          variant="contained" 
          color="primary"
          onClick={this.onSubmitLogin}
          >Login</Button>
        </Tooltip>
      </form>
    )
  }
}

const mapDispatchToProps =  {
  login: actions.login
}

export default withStyles(styles)(withRouter(connect(null, mapDispatchToProps)(LoginPage)));
