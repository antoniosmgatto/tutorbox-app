import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { useState } from 'react'
import { ScriptInput, VideoInput, VideoShow } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    minHeight: 443,
  },
}))

const VideoTab = props => {
  const { video } = props
  const [state, setState] = useState(video)
  const classes = useStyles()
  const showCreateScriptButton = state.scriptUrl === null
  const showUploadVideoButton = state.scriptUrl && state.file === null
  const showVideoPlayer = state.file !== null

  const handleCreateScriptClick = () => {
    console.log("TODO create script")
    setState({...state, scriptUrl: 'https://docs.google.com/document/d/1_8keuEp9yG3LNxqCgev2z_uGfEM5tB0mZON1qXoWhR4/edit?usp=sharing' })
  }

  const handleVideoUpload = file => {
    console.log("TODO", file, "uploaded the file")
    setState({...state, file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' })
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
          { showCreateScriptButton ? <ScriptInput onClick={handleCreateScriptClick} /> : null }

          { showUploadVideoButton ? <VideoInput onClick={handleVideoUpload} /> : null }

          { showVideoPlayer ? <VideoShow file={state.file} onUpload={handleVideoUpload} /> : null}
        </div>
      </Grid>
    </Grid>
  )
}

VideoTab.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoTab
