import React from 'react';
import { Typography, Hidden } from '@material-ui/core';
import { VideosList, VideosTable } from './components'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4)
  }
}));

const videos = [
  { id: 1, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 2, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 3, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 4, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 5, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 6, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 7, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 8, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 9, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 10, title: "Vídeo 1", status: "finished", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
]

const Videos = () => {
  const classes = useStyles()

  return (
    <section>
      <header>
        <Typography variant="h4" className={classes.title}>
          Vídeos
        </Typography>
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
