import React from 'react';
import { Hidden, Button, Grid } from '@material-ui/core';
import { VideosList, VideosTable } from './components'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom'
import { NoRecordMessage } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
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

  const handleVideoClick = video => {
    history.push(`/video/draft`)
  }

  return (
    <section className={classes.root}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
        >
          <div className={classes.actions}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNewVideo}
            >
              Novo vídeo
            </Button>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
        >
          { videos.length === 0 ? (
            <NoRecordMessage />
          ) : (
            <>
              <Hidden mdUp>
                <VideosList
                  videos={videos}
                  onVideoClick={handleVideoClick}
                />
              </Hidden>

              <Hidden smDown>
                <VideosTable
                  videos={videos}
                  onVideoClick={handleVideoClick}
                />
              </Hidden>
            </>
          )}
        </Grid>
      </Grid>
    </section>
  )
};

export default Videos;
