import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { NavBar } from 'components';
import { VideosTable } from './components/VideosTable'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4)
  }
}));

const videos = [
  { id: 1, title: " Vídeo 1", status: "Finalizado" },
  { id: 2, title: " Vídeo 2", status: "Finalizado" },
  { id: 3, title: " Vídeo 3", status: "Finalizado" },
  { id: 4, title: " Vídeo 4", status: "Finalizado" },
  { id: 5, title: " Vídeo 5", status: "Finalizado" },
  { id: 6, title: " Vídeo 6", status: "Finalizado" },
  { id: 7, title: " Vídeo 7", status: "Finalizado" },
  { id: 8, title: " Vídeo 8", status: "Finalizado" },
  { id: 9, title: " Vídeo 9", status: "Finalizado" },
]

const Videos = () => {
  const classes = useStyles()
  return (
    <div>
        <NavBar />

        <Container className={classes.container}>
          <Typography variant="h4" className={classes.title}>
            Vídeos
          </Typography>
          <VideosTable videos={videos} />
        </Container>
    </div>
  )
};

export default Videos;
