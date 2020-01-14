import React from 'react'
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  actions: {

  }
}));

const NavBar =() => {
  const classes = useStyles();
  const handleLogout = () => {
    //TODO
    console.log('Logout button  clicked')
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Tutorbox App
        </Typography>
        <div className={classes.actions}>
          <Button color="inherit" onClick={handleLogout} >
            <ExitToAppIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
