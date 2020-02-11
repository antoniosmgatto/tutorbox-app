import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Breadcrumbs, Link, Typography, Grid, Button } from '@material-ui/core'
import { Comments, AttributeEditor } from 'components'
import { Send } from '@material-ui/icons'

const video = {
  id: 1,
  title: "Como criar uma Landing Page",
  status: "finished",
  project: {
    name: "Lead Lovers App"
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  comments: [{
    id: 1,
    author: {
      id: 1,
      displayName: "Antonio Gatto",
      username: "@antoniomgatto"
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: [],
  }, {
    id: 2,
    author: {
      id: 2,
      displayName: "Jean Hansen",
      username: "@jeanhansen"
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: [],
  }, {
    id: 3,
    author: {
      id: 1,
      displayName: "Antonio Gatto",
      username: "@antoniomgatto"
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: [{
      id: 4,
      author: {
        id: 2,
        displayName: "Jean Hansen",
        username: "@jeanhansen"
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      text: "@antoniomgatto Lorem Ipsum has been the industry's standard dummy text.",
      comments: [],
    }],
  }, ]
}

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

const Video = props => {
  const {} = props
  const classes = useStyles()
  const [state, setState] = useState(video)

  const handleSendToPreProduction = () => {
    console.log('send video to pre production')
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
          <div className={classes.mainActionWrapper}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Send />}
              onClick={handleSendToPreProduction}
              >
                Pré-Produção
            </Button>
          </div>
        </Grid>

        <Grid
          item
          md={8}
          xs={12}
          className={classes.knowledgeResume}
        >
          Knowledge view
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
            Vídeo Details
          </Grid>

          <Grid
            item
          >
            Team
          </Grid>
          <Grid
            item
          >
            Related knowledges
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

Video.propTypes = {}

export default Video
