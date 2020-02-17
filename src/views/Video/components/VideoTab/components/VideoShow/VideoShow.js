import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { VideoPlayer, FileInput } from 'components'
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons'
import { TodolistAlert } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  player: {
    margin: theme.spacing(2, 0)
  },
  options: {
    display: 'flex',
  },
}))

const VideoShow = props => {
  const { video, onUpload, className, enableUpload, ...otherProps } = props
  const classes = useStyles()
  const showAlert = ['revision', 're-editing'].includes(video.status) && video.todolist.length > 0

  const handleUpload = file => {
    onUpload(file)
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <div>
        { showAlert && <TodolistAlert count={video.todolist.length} />  }
      </div>

      <VideoPlayer
        className={classes.player}
        autoPlay={true}
        controls={true}
        fluid={true}
        sources={[{ src: video.file, type: 'video/mp4' }]}
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
  video: PropTypes.object.isRequired,
  onUpload: PropTypes.func.isRequired,
  enableUpload: PropTypes.bool
}

VideoShow.defaultProps = {
  enableUpload: false
}

export default VideoShow
