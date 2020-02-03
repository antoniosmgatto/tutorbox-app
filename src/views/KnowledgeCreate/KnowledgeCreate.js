import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Link, Typography, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Attachments, KnowledgeDetails } from './components'

const useStyles = makeStyles(theme => ({
  root: {},
  questionsPaper: {
    padding: theme.spacing(2),
    minHeight: 600,
  },
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
  attachments: [
    { id: 1, name: "PDF 1", documentType: "pdf", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
    { id: 2, name: "Image 1", documentType: "image", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
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
          <Paper
            className={classes.questionsPaper}
          >
            <Typography variant="h6" color="textSecondary">
              Adicione os passos do tutorial e todas as informações complementares necessárias
            </Typography>
          </Paper>
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
