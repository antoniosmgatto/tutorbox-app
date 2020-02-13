import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  }
}))

const Unrestricted = props => {
  const { children } = props
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <Container>
        {children}
      </Container>
    </main>
  )
}

Unrestricted.propTypes = {
  children: PropTypes.any.isRequired
}

export default Unrestricted
