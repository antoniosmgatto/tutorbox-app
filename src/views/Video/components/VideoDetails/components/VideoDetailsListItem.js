import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, ListItem } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  label: {},
  value: {
    marginLeft: 'auto'
  }
}))

const VideoDetailsListItem = props => {
  const {label, value} = props
  const classes = useStyles()
  return (
    <ListItem
      className={classes.root}
      divider={true}
      disableGutters
    >

      <Typography
        className={classes.label}
        variant="subtitle1"
        component="span"
        color="textSecondary"
      >
        {label}
      </Typography>

      <Typography
        className={classes.value}
        variant="body1"
        component="span"
      >
        {value}
      </Typography>

    </ListItem>
  )
}

VideoDetailsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default VideoDetailsListItem
