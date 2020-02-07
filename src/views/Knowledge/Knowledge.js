import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Link, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Attachments, KnowledgeDetails, KnowledgeName, Topics } from './components'
import { Comments } from 'components'

const useStyles = makeStyles(theme => ({
  root: {},
  nameWrapper: {
    margin: theme.spacing(2, 0)
  }
}))

const knowledge = {
  name: "Lançar Nota Fiscal",
  project: {
    name: "Projeto 1",
    createdAt: new Date(),
    updatedAt: new Date(),
    client: {
      name: "Cliente 1"
    }
  },
  topics: [
    {
      id: 1,
      title:
        "Adicione os passos do tutorial e todas as informações complementares necessárias",
      items: [
        {
          id: 1,
          text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: [
            {
              id: 10,
              text:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ]
        },
      ]
    },
    {
      id: 2,
      title:
        "Que problema o usuário vai resolver no seu negócio depois que aprender esse conteúdo? Adicione exemplos reais",
      items: [
        {
          id: 1,
          text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: [
            {
              id: 10,
              text:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ]
        },
      ]
    }
  ],
  attachments: [
    {
      id: 1,
      name: "PDF 1",
      documentType: "pdf",
      url:
        "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg"
    },
    {
      id: 2,
      name: "Image 1",
      documentType: "image",
      url:
        "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg"
    }
  ],
  comments: [
    {
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
      comments: [
        {
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
        }
      ],
    },
  ]
}

const KnowledgeCreate = props => {
  const classes = useStyles()
  const [state, setState] = useState(knowledge)

  const handleNameUpdate = updatedName => {
    setState({...state, name: updatedName})
  }

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/conhecimentos">
          Conhecimentos
        </Link>
        <Typography>{state.name}</Typography>
      </Breadcrumbs>

      <KnowledgeName
        name={state.name}
        className={classes.nameWrapper}
        onSave={handleNameUpdate}
      />

      <Grid
        container
        spacing={2}
      >

        <Grid
          item
          sm={12}
          md={8}
        >
          <Topics topics={state.topics} />
        </Grid>

        <Grid
          item
          sm={12}
          md={4}
          container
          direction="column"
          spacing={2}
        >
          <Grid
            item
            className={classes.item}
          >
            <KnowledgeDetails knowledge={state} />
          </Grid>

          <Grid
            item
          >
            <Attachments attachments={state.attachments} />
          </Grid>
        </Grid>

        <Grid
          item
          md={8}
          sm={12}
        >

          <Comments
            comments={knowledge.comments}
          />

        </Grid>
      </Grid>
    </>
  )
}

KnowledgeCreate.propTypes = {}

export default KnowledgeCreate
