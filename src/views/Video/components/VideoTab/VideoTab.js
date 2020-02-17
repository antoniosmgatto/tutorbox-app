import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import { FileInput } from 'components'
import { useState } from 'react'
import VideoPlayer from '../VideoPlayer'
import { ScriptInput, VideoInput } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
    minHeight: 443,
  },
  videoActions: {
    display: 'flex',
    marginTop: theme.spacing(1)
  },
  player: {}
}))

const VideoTab = props => {
  const { video } = props
  const [state, setState] = useState(video)
  const classes = useStyles()
  const showCreateScriptButton = state.scriptUrl === null
  const showUploadVideoButton = state.scriptUrl && state.file === null

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

           { showUploadVideoButton ? <VideoInput onClick={handleVideoUpload} /> : null
          }

          { video.file &&
            <>
              {console.log(video)}
              <VideoPlayer
                className={classes.player}
                autoPlay={true}
                controls={true}
                fluid={true}
                sources={[{ src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video/mp4' }]}
              />
              {/* <div className={classes.videoActions}>
                <FileInput
                  buttonProps={{ variant: 'contained', startIcon: <CloudUploadIcon /> }}
                  onChange={handleFileUpload}
                />
              </div> */}
            </>
          }
        </div>
      </Grid>
    </Grid>
  )
}

VideoTab.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoTab
