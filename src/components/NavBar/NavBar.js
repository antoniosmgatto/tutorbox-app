import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar, Toolbar, Typography, Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {
  ExitToApp as ExitToAppIcon ,
  NotificationsNone as NotificationsNoneIcon,
} from '@material-ui/icons';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  }
}));

const NavBar = ({
    notificationsHandler,
    notificationsOpened
  }) => {
  const classes = useStyles();
  const [redirectTo, setRedirect] = useState()

  if (redirectTo) return <Redirect to="/login" />

  const handleLogout = () => {
    setRedirect('/login')
  }

  const handleOpenNotifications = () => {
    notificationsHandler(!notificationsOpened)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Tutorbox App
        </Typography>
        <div className={classes.actions}>
          <Button color="inherit" onClick={handleOpenNotifications}>
            <NotificationsNoneIcon />
          </Button>
          <Button color="inherit" onClick={handleLogout} >
            <ExitToAppIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  notificationsHandler: PropTypes.func.isRequired,
  notificationsOpened: PropTypes.bool.isRequired,
}

export default NavBar
