import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { getVideoStatusLabel, getVideoStatusColor } from 'helpers'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 5,
    borderRadius: 3,
    color: theme.palette.common.white,
  }
}))

const VideoStatus = props => {
  const {status} = props
  const classes = useStyles()
  const label = getVideoStatusLabel(status)
  const statusColor = getVideoStatusColor(status)
  return (
    <Typography
      variant="body1"
      component="span"
      className={classes.root}
      style={{ backgroundColor: statusColor }}
    >
      {label}
    </Typography>
  )
}

VideoStatus.propTypes = {
  status: PropTypes.string.isRequired
}

export default VideoStatus
