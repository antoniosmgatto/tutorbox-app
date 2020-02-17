import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Breadcrumbs, Link, Typography, Grid, Button } from '@material-ui/core'
import { Comments, AttributeEditor, SectionPaper, SectionTabs } from 'components'
import {
  KnowledgePreview,
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

const Video = props => {
  const {} = props
  const { status } = useParams()
  const classes = useStyles()
  const video = dummyVideoPerStatus(status)
  const [state, setState] = useState(video)
  const history = useHistory()
  const mainActionLabel = mainActionLabels[video.status]
  const isVideoNotFinished = () => video.status !== 'finished'
  const enableTabsForContent = () => !['draft', 'pre-production'].includes(video.status)

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
              <VideoDetails video={video} />
            </Grid>

            <Grid
              className={classes.team}
              item
            >
              <TeamManager team={video.team} />
            </Grid>
            <Grid
              className={classes.knowledges}
              item
            >
              <Knowledges knowledges={video.knowledges} />
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
                          'component': <VideoTab video={video} />,
                        },
                        {
                          'title': 'Conhecimento',
                          'component': <KnowledgePreview knowledge={video.mainKnowledge} />
                        }
                      ]
                    }
                  />
                ) : (
                  <SectionPaper title="Conhecimento">
                    <KnowledgePreview knowledge={video.mainKnowledge} />
                  </SectionPaper>
                )}
            </Grid>

            <Grid
              item
              xs={12}
              className={classes.comments}
            >
              <Comments comments={video.comments} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Video
