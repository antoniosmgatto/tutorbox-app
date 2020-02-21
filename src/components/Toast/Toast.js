import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar, Slide } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const Toast = props => {
  const {
    autoHideDuration,
    message,
    onClose,
    open,
    severity,
  } = props

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    onClose()
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      TransitionComponent={Slide}
      onClose={handleClose}
    >
      <Alert
        severity={severity}
        variant="filled"
        onClose={handleClose} >
        {message}
      </Alert>
    </Snackbar>
  )
}

Toast.propTypes = {
  autoHideDuration: PropTypes.number,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  severity: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
}

Toast.defaultProps = {
  autoHideDuration: 3000,
  severity: 'info',
}

export default Toast
