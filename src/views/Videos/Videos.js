import React from 'react';
import { Typography, Hidden, Button } from '@material-ui/core';
import { VideosList, VideosTable } from './components'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    display: 'flex',
    marginBottom: theme.spacing(4)
  },
  title: {
    flexGrow: 1,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

const videos = [
  { id: 1, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
]

const Videos = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleNewVideo = () => {
    history.push('/video/draft')
  }
  return (
    <section className={classes.root}>
      <header className={classes.header}>
        <Typography
          variant="h4"
          className={classes.title}
        >
          Vídeos
        </Typography>

        <div className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewVideo}
          >
            Novo Vídeo
          </Button>
        </div>
      </header>

      <Hidden mdUp>
        <VideosList videos={videos} />
      </Hidden>

      <Hidden smDown>
        <VideosTable videos={videos} />
      </Hidden>

    </section>
  )
};

export default Videos;
