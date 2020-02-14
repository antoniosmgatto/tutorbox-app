import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import { CloudUpload as CloudUploadIcon, NoteAdd as NoteAddIcon } from '@material-ui/icons'
import { FileInput } from 'components'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(12, 0)
  },
  message: {},
  button: {
    marginTop: theme.spacing(6)
  },
  scriptInfo: {
    marginTop: theme.spacing(8)
  }
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

  const handleFileUpload = file => {
    console.log("TODO", file, " upload the file")
    setState({...state, file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' })
  }

  return (
    <Grid
      container
      justify="center"
    >
      <Grid
        item
        md={8}
        xs={12}
      >
        <div
          className={classes.root}
        >

          { showCreateScriptButton ? (
            <>
              <Typography
                className={classes.message}
                variant="h4"
                component="p"
                color="textSecondary"
              >
                Crie o roteiro do vídeo
              </Typography>

              <Typography color="textSecondary"> Você será redirecionado para o Google Drive</Typography>

              <Button
                className={classes.button}
                variant="contained"
                startIcon={<NoteAddIcon />}
                onClick={handleCreateScriptClick}
              >
                Criar Roteiro
              </Button>

            </>
            ) : null
          }

           { showUploadVideoButton ? (
            <>
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
                buttonProps={{ variant: 'contained', startIcon: <CloudUploadIcon /> }}
                onChange={handleFileUpload}
              />
            </>
            ) : null
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
