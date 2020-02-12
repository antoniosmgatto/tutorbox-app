import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  ListItem,
  ListItemText
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0
  }
}))

const Member = props => {
  const { member, ...otherProps } = props
  const classes = useStyles()
  return (
    <ListItem
      {...otherProps}
      className={classes.root}
      divider
    >
      <ListItemText
        primary={member.displayName}
        secondary={member.role}
        secondaryTypographyProps={{color: 'textSecondary'}}
      />
    </ListItem>
  )
}

Member.propTypes = {
  member: PropTypes.object.isRequired
}

export default Member
