import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const AlertDialog = props => {
  const {
    onPositiveClick,
    onNegativeClick,
    onClose,
    open,
    severity,
    title,
    text
  } = props


  const handlePositiveAction = () => {
    onPositiveClick()
    onClose()
  }

  const handleNegativeAction = () => {
    if (onNegativeClick !== undefined) {
      onNegativeClick()
    }
    onClose()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      {
        text &&
        <DialogContent>
          <DialogContentText><Alert severity={severity}>{text}</Alert></DialogContentText>
        </DialogContent>
      }
      <DialogActions>
        <Button color="primary" onClick={handleNegativeAction}>Não</Button>
        <Button color="primary" onClick={handlePositiveAction} autoFocus>Sim, eu quero</Button>
      </DialogActions>
    </Dialog>
  )
}

AlertDialog.defaultProps = {
  severity: 'warning'
}

AlertDialog.propTypes = {
  onPositiveClick: PropTypes.func.isRequired,
  onNegativeClick: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  severity: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default AlertDialog
