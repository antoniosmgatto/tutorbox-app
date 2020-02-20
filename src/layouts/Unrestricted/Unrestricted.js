import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Container, Grid, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  gridContainer: {
    height: '100vh',
  },
  paper: {
    padding: 0,
    width: '100%',
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    padding: theme.spacing(2),
    width: 320
  },
  header: {
    textAlign: 'center',
    padding: theme.spacing(4, 0)
  },
  childrenWrapper: {}
}))

const Unrestricted = props => {
  const { children } = props
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <Container>
        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            md={8}
            xs={12}
          >
            <Paper className={classes.paper}>
              <section className={classes.section}>
                <header className={classes.header}>
                  <Typography
                    variant="h2"
                    component="h1"
                  >
                    Tutorbox
                  </Typography>
                </header>

                <div className={classes.childrenWrapper}>
                  { children }
                </div>
              </section>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

Unrestricted.propTypes = {
  children: PropTypes.any.isRequired
}

export default Unrestricted
