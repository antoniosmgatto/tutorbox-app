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
    width: 320,
    margin: 'auto'
  },
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
                { children }
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
