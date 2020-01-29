import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from './components'
import { makeStyles } from '@material-ui/styles'
import {
  Avatar,
  Divider,
  SwipeableDrawer,
  Typography
} from '@material-ui/core'
import {
  VideoLibrary as VideoLibraryIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 250,
    height: "100vh",
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content"
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const menuItems = [
  {
    label: 'Vídeos',
    href: '/videos',
    icon: <VideoLibraryIcon />,
  }
]

const Sidebar = props => {
  const classes = useStyles()
  return (
    <SwipeableDrawer
      {...props}
      anchor="left"
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.root}>

        <div className={classes.header}>
          <Avatar className={classes.avatar}>A</Avatar>
          <Typography variant="h6" component="span">Antonio Gatto</Typography>
          <Typography variant="subtitle2" color="textSecondary">@antoniomgatto</Typography>
        </div>

        <Divider className={classes.divider} />

        <Nav items={menuItems} />

      </div>
    </SwipeableDrawer>
  )
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Sidebar
