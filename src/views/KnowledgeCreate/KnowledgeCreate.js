import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Link, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Attachments, KnowledgeDetails, items, Topics } from './components'

const useStyles = makeStyles(theme => ({
  root: {},
}))

const knowledge = {
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
            },
            {
              id: 11,
              text:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              id: 12,
              text:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
            {
              id: 13,
              text:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          ]
        },
        {
          id: 2,
          text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: []
        },
        {
          id: 3,
          text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: []
        },
        {
          id: 4,
          text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: []
        },
        {
          id: 5,
          text:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: []
        }
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
  ]
}

const KnowledgeCreate = props => {
  const classes = useStyles()
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/conhecimentos">
          Conhecimentos
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
        >
          <Topics topics={knowledge.topics} />
        </Grid>

        <Grid
          container
          justify="space-between"
          spacing={2}
          item
          md={4}
        >
          <Grid
            item
            xs={12}
          >
            <KnowledgeDetails knowledge={knowledge} />
          </Grid>

          <Grid
            item
            xs={12}
          >
            <Attachments attachments={knowledge.attachments} />
          </Grid>
        </Grid>

      </Grid>

    </>
  )
}

KnowledgeCreate.propTypes = {}

export default KnowledgeCreate
