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

  const toogleNotifications = () => {
    setOpenNotifications(!openNotifications)
  }

  const handleNotiticationsOpen = () => {
    setOpenNotifications(true)
  }

  const handleNotiticationsClose = () => {
    setOpenNotifications(false)
  }

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleSidebarButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tutorbox App
          </Typography>
          <div className={classes.actions}>
            <Button color="inherit" onClick={toogleNotifications}>
              <NotificationsNoneIcon />
            </Button>
            <Button color="inherit" onClick={handleLogout} >
              <ExitToAppIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Notifications
        open={openNotifications}
        onOpen={handleNotiticationsOpen}
        onClose={handleNotiticationsClose}
      />

      <Toolbar />
    </React.Fragment>
  )
}

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
}

export default Topbar
