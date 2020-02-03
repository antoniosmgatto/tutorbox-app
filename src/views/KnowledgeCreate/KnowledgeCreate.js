import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Link, Typography, Grid, Paper, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { formatDate } from 'helpers'
import { Image as ImageIcon, CloudUpload as CloudUploadIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {},
  questionsPaper: {
    padding: theme.spacing(2),
    minHeight: 600,
  },
  knowledgeDetailsPaper: {
    padding: theme.spacing(2),
  },
  attachmentsPaper: {
    padding: theme.spacing(2),
  },
  attachmentsSection: {
    minHeight: 320,
    display: 'flex',
    flexDirection: 'column',
  },
  attachmentsList: {
    flexGrow: 1,
  },
  listItem: {
    display: 'flex',
  },
  itemValue: {},
  uploadButtonWrapper: {
    marginTop: theme.spacing(1),
    textAlign: 'center'
  },
  uploadButton: {},
  attachmentInput: {
    display: 'none',
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
    { id: 1, name: "Image 1", documentType: "pdf", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
    { id: 2, name: "Image 1", documentType: "image", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
    { id: 2, name: "Image 1", documentType: "image", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
    { id: 2, name: "Image 1", documentType: "image", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
    { id: 2, name: "Image 1", documentType: "image", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
    { id: 2, name: "Image 1", documentType: "image", "url": "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?cs=srgb&dl=adorable-blur-breed-close-up-406014.jpg&fm=jpg" },
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
            <Paper
              className={classes.attachmentsPaper}
            >
              <section className={classes.attachmentsSection}>
                <header>
                  <Typography variant="h6" color="textSecondary">Anexos</Typography>
                </header>

                <List className={classes.attachmentsList}>
                    {
                      knowledge.attachments.map(attachment => (
                        <ListItem
                          divider={true}
                          disableGutters
                          key={attachment.id}
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <ImageIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText>{attachment.name}</ListItemText>
                        </ListItem>
                      ))
                    }
                </List>

                <div className={classes.uploadButtonWrapper}>
                  <input
                    id="attachment-input"
                    className={classes.attachmentInput}
                    accept="image/*"
                    type="file"
                  />

                  <label
                    htmlFor="attachment-input"
                  >
                    <Button
                      className={classes.uploadButton}
                      variant="outlined"
                      endIcon={<CloudUploadIcon/>}
                      multiple
                      component="span"
                    >
                      Anexar
                    </Button>
                  </label>
                </div>

              </section>

            </Paper>
          </Grid>
        </Grid>

      </Grid>

    </>
  )
}

KnowledgeCreate.propTypes = {}

export default KnowledgeCreate
