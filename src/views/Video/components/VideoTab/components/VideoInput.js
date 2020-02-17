import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons'
import { FileInput } from 'components'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  message: {},
  button: {
    marginTop: theme.spacing(6)
  },
}))

const VideoInput = props => {
  const { onClick, className, ...otherProps } = props
  const classes = useStyles()

  const handleClick = videoFile => {
    onClick(videoFile)
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <Typography
        className={classes.message}
        variant="h4"
        component="p"
        color="textSecondary"
      >
        Faça o upload do vídeo
      </Typography>

      <FileInput
        className={classes.button}
        inputProps={{ accept: 'video/mp4' }}
        buttonProps={{ variant: 'contained', startIcon: <CloudUploadIcon /> }}
        onChange={handleClick}
      />
    </div>
  )
}

VideoInput.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default VideoInput
