import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Link, Typography, Grid, Paper, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { formatDate } from 'helpers'
import { Attachments } from './components'

const useStyles = makeStyles(theme => ({
  root: {},
  questionsPaper: {
    padding: theme.spacing(2),
    minHeight: 600,
  },
  knowledgeDetailsPaper: {
    padding: theme.spacing(2),
  },
  listItem: {
    display: 'flex',
  },
  itemValue: {
    marginLeft: 'auto'
  }
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
            <Paper
              className={classes.knowledgeDetailsPaper}
            >
              <section>
                <header>
                  <Typography variant="h6" color="textSecondary">Detalhes</Typography>
                </header>

                <List>

                  <ListItem
                    divider={true}
                    className={classes.listItem}
                    disableGutters
                  >

                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="textSecondary"
                    >
                      Projeto
                    </Typography>

                    <Typography
                      className={classes.itemValue}
                      variant="body1"
                      component="span"
                    >
                      {knowledge.project.name}
                    </Typography>

                  </ListItem>

                  <ListItem
                    divider={true}
                    className={classes.listItem}
                    disableGutters
                  >

                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="textSecondary"
                    >
                      Cliente
                    </Typography>

                    <Typography
                      className={classes.itemValue}
                      variant="body1"
                      component="span"
                    >
                      {knowledge.project.client.name}
                    </Typography>

                  </ListItem>

                  <ListItem
                    divider={true}
                    className={classes.listItem}
                    disableGutters
                  >

                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="textSecondary"
                    >
                      Data de Criação
                    </Typography>

                    <Typography
                      className={classes.itemValue}
                      variant="body1"
                      component="span"
                    >
                      {formatDate(knowledge.createdAt, 'datetime')}
                    </Typography>

                  </ListItem>

                  <ListItem
                    divider={true}
                    className={classes.listItem}
                    disableGutters
                  >

                    <Typography
                      variant="subtitle1"
                      component="span"
                      color="textSecondary"
                    >
                      Última atualização
                    </Typography>

                    <Typography
                      className={classes.itemValue}
                      variant="body1"
                      component="span"
                    >
                      {formatDate(knowledge.updatedAt, 'datetime')}
                    </Typography>

                  </ListItem>

                </List>
              </section>
            </Paper>
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
