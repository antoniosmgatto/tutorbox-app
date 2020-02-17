import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, Button } from '@material-ui/core'
import { NoteAdd as NoteAddIcon } from '@material-ui/icons'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  message: {},
  button: {
    marginTop: theme.spacing(6)
  },
}))

const ScriptInput = props => {
  const { onClick, className, ...otherProps } = props
  const classes = useStyles()

  const handleClick = () => {
    onClick()
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <Typography
        className={classes.message}
        variant="h4"
        component="p"
        color="textSecondary"
      >
        Crie o roteiro do vídeo
      </Typography>

      <Typography color="textSecondary"> Você será redirecionado para o Google Drive</Typography>

      <Button
        className={classes.button}
        variant="contained"
        startIcon={<NoteAddIcon />}
        onClick={handleClick}
      >
        Criar Roteiro
      </Button>
    </div>
  )
}

ScriptInput.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ScriptInput
