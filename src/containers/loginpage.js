import React, { Component } from 'react'
import { withStyles, TextField, Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';


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
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.self}>
        <TextField 
        label="usernamea"
        />
        <TextField 
        label="password"
        />
        <Tooltip id="tooltip-left-start" title="Login" placement="bottom">
          <Button variant="contained" color="primary">Login</Button>
        </Tooltip>
      </form>
    )
  }
}

export default withStyles(styles)(LoginPage);
