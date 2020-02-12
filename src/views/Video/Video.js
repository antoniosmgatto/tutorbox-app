import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Breadcrumbs, Link, Typography, Grid, Button } from '@material-ui/core'
import { Comments, AttributeEditor } from 'components'
import { Send } from '@material-ui/icons'
import {
  KnowledgePreview,
  TeamManager,
  VideoDetails,
} from './components'

const video = {
  id: 1,
  title: "Como criar uma Landing Page",
  status: "draft",
  project: {
    id: 1,
    name: "Lead Lovers App",
    client: {
      id: 1,
      name: "Lead Lovers"
    }
  },
  mainKnowledge: {
    id: 1,
    name: "Lançar Nota Fiscal",
    topics: [
      {
        id: 1,
        title: "Adicione os passos do tutorial e todas as informações complementares necessárias",
        items: [
          {
            id: 1,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: [
              {
                id: 10,
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                id: 11,
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                id: 12,
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ]
          },
          {
            id: 2,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: []
          },
          {
            id: 3,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: []
          },
          {
            id: 4,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: []
          },
        ]
      },
      {
        id: 2,
        title: "Que problema o usuário vai resolver no seu negócio depois que aprender esse conteúdo? Adicione exemplos reais",
        items: [{
          id: 1,
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: [{
            id: 10,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }]
        }, ]
      }
    ]
  },
  knowledges: [],
  team: [
    {
      id: 1,
      username: "antoniomgatto",
      displayName: "Antonio Gatto",
      role: "Tutormaker",
    },
    {
      id: 2,
      username: "jeamhansen",
      displayName: "Jean Hansen",
      role: "Gerente de Conta",
    }
  ],
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
  },
  {
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
  },
  {
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
