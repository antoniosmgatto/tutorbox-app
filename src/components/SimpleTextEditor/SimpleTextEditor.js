import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  TextField,
  ClickAwayListener
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {},
  actions: {
    marginTop: theme.spacing(1)
  },
  saveButton: {
    marginRight: theme.spacing(1)
  }
}))

const ItemInput = props => {
  const { className, initialText, onSave, onClose, ...otherOptions } = props
  const classes = useStyles()
  const inputRef = useRef()
  const [text, setText] = useState(initialText)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = event => {
    setText(event.target.value)
  }

  const handlerSave = () => {
    onSave(text)
  }

  const handlerCancel = () => {
    onClose()
  }

  const handleClickAway = () => {
    onClose()
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={clsx(classes.root, className)} {...otherOptions}>
        <TextField
          className={classes.itemForm}
          fullWidth
          multiline
          rowsMax={3}
          variant="outlined"
          onChange={handleChange}
          placeholder="Digite aqui..."
          name="text"
          value={text}
          inputRef={inputRef}
        />
        <div className={classes.actions}>
          <Button
            className={classes.saveButton}
            variant="outlined"
            color="primary"
            onClick={handlerSave}
          >
            Salvar
          </Button>
          <Button onClick={handlerCancel}>Cancelar</Button>
        </div>
      </div>
    </ClickAwayListener>
  )
}

ItemInput.propTypes = {
  className: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  initialText: PropTypes.string
}

ItemInput.defaultProps = {
}

export default ItemInput
