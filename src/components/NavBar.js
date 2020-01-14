import React, { useState } from 'react'
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  actions: {

  }
}));

const NavBar =() => {
  const classes = useStyles();
  const [redirectTo, setRedirect] = useState()

  if (redirectTo) return <Redirect to="/login" />

  const handleLogout = () => {
    setRedirect('/login')
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
