import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import HamburgerMenu from './hamburgermenu'
import './header.css'
import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
  } from '@material-ui/core';

  import * as urls from '../urls';


  const styles = {
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    sidebar: {
        width: '300px'
    },
  };

class Header extends PureComponent {

    state = {
        isDrawer: false
    };

    onClickOpen = () => {
        this.setState({
            isDrawer: true
        })
    }

    onClickClose = () => {
        this.setState({
            isDrawer: false
        })
    }

  render() {
      const { classes } = this.props;
    return (
        <AppBar position="static">
            <Toolbar className={classes.flex}>
                <IconButton
                    color="inherit"
                    aria-label="Menu"
                    onClick={this.onClickOpen}
                >
                <HamburgerMenu />
                <Link to={urls.ROOT}>Homepage</Link>
                </IconButton>
                <Typography variant="title" color="inherit" >
                    Zeppelin
                </Typography>
                <div>
                    <Button color="inherit">Logout</Button>
                </div>
            </Toolbar>
            <Drawer open={this.state.isDrawer} >
            <div onClick={this.onClickClose}>X</div>
                <div
                   className={classes.sidebar} 
                >
                    <List>
                    <ListItem button>
                        <ListItemText>
                            <Link to={urls.PROJECT_LIST}>Projects</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <Link to={urls.PROJECT_CREATE}>Projects 2</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText>
                        <Link to={urls.PROJECT_EDIT}>Projects 3</Link>
                        </ListItemText>
                    </ListItem>
                    </List>
                </div>
                </Drawer>
        </AppBar>
    )
  }
}

export default withStyles(styles)(Header);