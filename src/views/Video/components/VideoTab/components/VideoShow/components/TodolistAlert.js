import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const TodolistAlert = props => {
  const { count } = props
  const classes = useStyles()
  return (
    <Alert
      className={classes.alert}
      severity="warning"
      variant="outlined"
    >
      { count } correções/ajustes foram adicionados
    </Alert>
  )
}

TodolistAlert.propTypes = {
  count: PropTypes.number.isRequired
}

export default TodolistAlert
