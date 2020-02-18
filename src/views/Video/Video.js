import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Breadcrumbs, Link, Typography, Grid, Button } from '@material-ui/core'
import { Comments, AttributeEditor, SectionPaper, SectionTabs, KnowledgePreview } from 'components'
import {
  TeamManager,
  VideoDetails,
  Knowledges,
  VideoTab,
} from './components'
import { dummyVideoPerStatus } from 'helpers'
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
  leftColumn: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingRight: theme.spacing(1)
    }
  },
  rightColumn: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(1)
    }
  },
  team: {
    paddingTop: theme.spacing(2)
  },
  knowledges: {
    paddingTop: theme.spacing(2)
  },
  comments: {
    paddingTop: theme.spacing(2)
  }
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

const Video = _props => {
  const { status } = useParams()
  const classes = useStyles()
  const [state, setState] = useState(dummyVideoPerStatus(status))
  const history = useHistory()
  const mainActionLabel = mainActionLabels[state.status]
  const isVideoNotFinished = () => state.status !== 'finished'
  const enableTabsForContent = () => !['draft', 'pre-production'].includes(state.status)

  const nextStage = () => {
    const index = stages.indexOf(state.status)
    return stages[index + 1]
  }

  const handleNextStage = () => {
    const nextUrl = `/video/${nextStage()}`
    history.push(nextUrl)
    setState(dummyVideoPerStatus(nextStage()))
  }

  const handleUpdateTitle = updatedTitle => {
    setState({...state, title: updatedTitle})
  }

  const handleCreateScript = () => {
    console.log("TODO create script")
    setState({...state, scriptUrl: 'https://docs.google.com/document/d/1_8keuEp9yG3LNxqCgev2z_uGfEM5tB0mZON1qXoWhR4/edit?usp=sharing' })
  }

  const handleVideoUpload = file => {
    console.log("TODO", file, "uploaded the file")
    setState({...state, file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' })
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
                onClick={handleNextStage}
                >
                  {mainActionLabel}
              </Button>
            </div>
          }
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="row-reverse"
          spacing={0}
        >

          <Grid
            className={classes.rightColumn}
            item
            md={4}
            xs={12}
            container
            direction="column"
          >
            <Grid
              item
            >
              <VideoDetails video={state} />
            </Grid>

            <Grid
              className={classes.team}
              item
            >
              <TeamManager team={state.team} />
            </Grid>
            <Grid
              className={classes.knowledges}
              item
            >
              <Knowledges knowledges={state.knowledges} />
            </Grid>
          </Grid>

          <Grid
            className={classes.leftColumn}
            item
            md={8}
            xs={12}
            container
          >
            <Grid
              item
              xs={12}
            >
              { enableTabsForContent() ? (
                  <SectionTabs
                    tabs={
                      [
                        {
                          'title': 'Vídeo',
                          'component': <VideoTab video={state} onCreateScript={handleCreateScript} onVideoUpload={handleVideoUpload} />,
                        },
                        {
                          'title': 'Conhecimento',
                          'component': <KnowledgePreview knowledge={state.mainKnowledge} />
                        }
                      ]
                    }
                  />
                ) : (
                  <SectionPaper title="Conhecimento">
                    <KnowledgePreview knowledge={state.mainKnowledge} />
                  </SectionPaper>
                )}
            </Grid>

            <Grid
              item
              xs={12}
              className={classes.comments}
            >
              <Comments comments={state.comments} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Video
