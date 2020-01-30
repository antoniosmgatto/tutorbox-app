import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { getVideoStatusColor } from 'helpers'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 5,
    borderRadius: 3,
    color: theme.palette.common.white,
  }
}))

const getLabelFromStatus = status => {
  let label
  switch (status) {
    case 'finished':
      label = 'Finalizado'
      break
    default:
      throw new Error('Status not found')
  }
  return label
}

const VideoStatus = props => {
  const {status} = props
  const classes = useStyles()
  const label = getLabelFromStatus(status)
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
