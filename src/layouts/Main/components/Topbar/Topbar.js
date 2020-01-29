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
import { Notifications } from './components'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  }
}));

const Topbar = (props) => {
  const {onSidebarOpen} = props
  const classes = useStyles();
  const [redirectTo, setRedirect] = useState()
  const [openNotifications, setOpenNotifications] = useState(false)

  if (redirectTo) return <Redirect to="/login" />

  const handleSidebarButton = () => {
    onSidebarOpen()
  }

  const handleLogout = () => {
    setRedirect('/login')
  }

  const handleOpenNotifications = () => {
    setOpenNotifications(!openNotifications)
  }

  return (
    <div>
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

      <Notifications open={openNotifications} notificationsHandler={setOpenNotifications} />

    </div>
  )
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
}

export default Topbar
