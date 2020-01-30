import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, colors } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 5,
    borderRadius: 3,
    color: theme.palette.common.white,
    backgroundColor: colors.green['500'],
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
  return (
    <Typography variant="body1" component="span" className={classes.root} >{label}</Typography>
  )
}

VideoStatus.propTypes = {
  status: PropTypes.string.isRequired
}

export default VideoStatus
