import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { VideoPlayer, FileInput } from 'components'
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  options: {
    display: 'flex',
    marginTop: theme.spacing(1)
  },
}))

const VideoShow = props => {
  const { file, onUpload, className, enableUpload, ...otherProps } = props
  const classes = useStyles()

  const handleUpload = file => {
    onUpload(file)
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <VideoPlayer
        className={classes.player}
        autoPlay={true}
        controls={true}
        fluid={true}
        sources={[{ src: file, type: 'video/mp4' }]}
      />
      <div className={classes.options}>
        { enableUpload && <FileInput
                            inputProps={{ accept: 'video/mp4' }}
                            buttonProps={{ variant: 'contained', startIcon: <CloudUploadIcon /> }}
                            onChange={handleUpload}
                          />
        }
      </div>
    </div>
  )
}

VideoShow.propTypes = {
  file: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
  enableUpload: PropTypes.bool
}

VideoShow.defaultProps = {
  enableUpload: false
}

export default VideoShow
