import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { ListItem, ListItemText, ListItemIcon, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  nav: {},
  icon: {
    width: 24,
    height: 24,
    minWidth: 'auto',
    marginRight: theme.spacing(2)
  },
  active: {
    color: theme.palette.primary.main,
    '& *': {
      color: theme.palette.primary.main
    }
  }
}))

const Nav = props => {
  const {items, className, ...otherOptions} = props
  const classes = useStyles()
  return (
    <List
      {...otherOptions}
      className={clsx(className, classes.nav)}
      component="nav"
    >
      {items.map(item => (
        <ListItem
          key={item.label}
          button
          component={NavLink}
          to={item.href}
          activeClassName={classes.active}
        >
          <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
}

Nav.propTypes = {
  items: PropTypes.array.isRequired
}

export default Nav
