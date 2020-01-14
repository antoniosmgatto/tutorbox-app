import React from 'react';
import { Container } from '@material-ui/core';
import { NavBar } from 'components';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(4),
    backgroundColor: "#F5F6F8",
    minHeight: "100vh",
  }
}));

const Videos = () => {
  const classes = useStyles()
  return (
    <div>
        <NavBar />

        <Container className={classes.container}>
          Video component
        </Container>
    </div>
  )
};

export default Videos;
