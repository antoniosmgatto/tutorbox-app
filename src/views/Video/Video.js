import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Breadcrumbs, Link, Typography, Grid, Button } from '@material-ui/core'
import { Comments, AttributeEditor } from 'components'
import {
  KnowledgePreview,
  TeamManager,
  VideoDetails,
  Knowledges,
} from './components'
import { dummyVideoPerStatus, getVideoStatusLabel } from 'helpers'
import { useHistory, useParams } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {},
  titleWrapper: {
    padding: theme.spacing(1, 0),
  },
  mainActionWrapper: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end'
    }
  },
  knowledgeResume: {},
  comments: {}
}))

const stages = [
  'draft',
  'pre-production',
  'production',
  'revision',
  're-editing',
  'finished',
]

const mainActionLabels = {
  'draft': 'Solicitar vídeo',
  'pre-production': 'Iniciar produção',
  'production': 'Enviar para revisão',
  'revision': 'Revisar',
  're-editing': 'Enviar para revisão',
  'finished': '',
}

const Video = props => {
  const {} = props
  const { status } = useParams()
  const classes = useStyles()
  const video = dummyVideoPerStatus(status)
  const [state, setState] = useState(video)
  const history = useHistory()
  const mainActionLabel = mainActionLabels[video.status]
  const isVideoNotFinished = () => video.status !== 'finished'

  const nextStage = () => {
    const index = stages.indexOf(video.status)
    return stages[index + 1]
  }

  const handleNextStageClick = () => {
    const nextUrl = `/video/${nextStage()}`
    history.push(nextUrl)
  }

  const handleUpdateTitle = updatedTitle => {
    setState({...state, title: updatedTitle})
  }

  return (
    <div className={classes.root}>

      <Breadcrumbs>
        <Link
          color="inherit"
          href="/videos"
        >
          Vídeos
        </Link>
        <Typography>Novo</Typography>
      </Breadcrumbs>

      <Grid
        container
        spacing={2}
      >

        <Grid
          item
          md={8}
          xs={12}
        >
          <AttributeEditor
            className={classes.titleWrapper}
            value={state.title}
            onSave={handleUpdateTitle}
          />
        </Grid>

        <Grid
          item
          md={4}
          xs={12}
        >
          { isVideoNotFinished() &&
            <div className={classes.mainActionWrapper}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextStageClick}
                >
                  {mainActionLabel}
              </Button>
            </div>
          }
        </Grid>

        <Grid
          item
          md={8}
          xs={12}
          className={classes.knowledgeResume}
        >
          <KnowledgePreview knowledge={video.mainKnowledge} />
        </Grid>

        <Grid
          item
          md={4}
          xs={12}
          container
          direction="column"
          spacing={2}
        >
          <Grid
            item
          >
            <VideoDetails video={video} />
          </Grid>

          <Grid
            item
          >
            <TeamManager team={video.team} />
          </Grid>
          <Grid
            item
          >
            <Knowledges knowledges={video.knowledges} />
          </Grid>
        </Grid>
        <Grid
          item
          md={8}
          xs={12}
          className={classes.comments}
        >
          <Comments comments={video.comments} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Video
