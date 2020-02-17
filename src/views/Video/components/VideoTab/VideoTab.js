import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { ScriptInput, VideoInput, VideoShow } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up('md')]: {
      minHeight: 443
    }
  },
}))

const VideoTab = props => {
  const { video, onCreateScript, onVideoUpload } = props
  const classes = useStyles()
  const showCreateScriptButton = video.status === 'production' && video.scriptUrl === null
  const showUploadVideoButton = video.status === 'production' && video.scriptUrl && video.file === null
  const showVideo = video.file !== null
  const canUploadVideo = ['production', 're-editing'].includes(video.status)

  const handleCreateScript = () => {
    onCreateScript()
  }

  const handleVideoUpload = file => {
    onVideoUpload(file)
  }

  return (
    <Grid
      container
      justify="center"
    >
      <Grid
        item
        md={12}
        xs={12}
      >
        <div
          className={classes.root}
        >
          { showCreateScriptButton && <ScriptInput onClick={handleCreateScript} /> }

          { showUploadVideoButton && <VideoInput onClick={handleVideoUpload} /> }

          { showVideo && <VideoShow video={video} enableUpload={canUploadVideo} onUpload={handleVideoUpload} /> }
        </div>
      </Grid>
    </Grid>
  )
}

VideoTab.propTypes = {
  video: PropTypes.object.isRequired,
  onCreateScript: PropTypes.func.isRequired,
  onVideoUpload: PropTypes.func.isRequired,
}

export default VideoTab
