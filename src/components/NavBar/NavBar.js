import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  AppBar, Toolbar, Typography, Button, IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {
  ExitToApp as ExitToAppIcon ,
  Menu as MenuIcon,
  NotificationsNone as NotificationsNoneIcon,
} from '@material-ui/icons';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  }
}));

const NavBar = (props) => {
  const {
    onSidebarOpen,
    notificationsHandler,
    notificationsOpened
  } = props
  const classes = useStyles();
  const [redirectTo, setRedirect] = useState()

  if (redirectTo) return <Redirect to="/login" />

  const handleSidebarButton = () => {
    onSidebarOpen()
  }

  const handleLogout = () => {
    setRedirect('/login')
  }

  const handleOpenNotifications = () => {
    notificationsHandler(!notificationsOpened)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleSidebarButton}>
          <MenuIcon />
        </IconButton>
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
  onSidebarOpen: PropTypes.func.isRequired,
}

export default NavBar
