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
  're-editing': 'Visualizar correções',
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

  const handleNextMainAction = () => {
    let nextUrl
    if (['draft', 'pre-production', 'production', 'finished'].includes(state.status)) {
        setState(dummyVideoPerStatus(nextStage()))
        nextUrl = `/video/${nextStage()}`
    } else if (state.status === 'revision') {
        nextUrl = '/video/revisao'
    } else if (state.status === 're-editing') {
        nextUrl = '/video/ajustes'
    }
    history.push(nextUrl)
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
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Breadcrumbs>
          <Link
            color="inherit"
            href="/videos"
          >
            Vídeos
          </Link>
          <Typography>Detalhes do vídeo</Typography>
        </Breadcrumbs>
      </Grid>
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
        <div className={classes.mainActionWrapper}>
          { isVideoNotFinished() &&
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextMainAction}
              >
                {mainActionLabel}
            </Button>
          }
        </div>
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
  )
}

export default Video
