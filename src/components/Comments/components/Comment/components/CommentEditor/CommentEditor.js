import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button, ClickAwayListener } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.common.white,
    borderRadius: 3,
    boxShadow: "0 0 1px 1px rgba( 0, 0, 0, 0.1)"
  },
  input: {},
  actions: {
    marginTop: theme.spacing(2)
  },
  saveButton: {
    marginRight: theme.spacing(1)
  }
}))

const CommentEditor = props => {
  const {
    comment,
    onSave,
    onClose,
    className,
    ...otherProps
  } = props
  const classes = useStyles()
  const [text, setText] = useState(comment.text)
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.selectionStart = text.length
    inputRef.current.selectionEnd = text.length
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = event => {
    const { value } = event.target
    setText(value)
  }

  const disableSave = () => text ? false : true

  const handleSave = () => {
    onSave(text)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div className={clsx(classes.root, className)} {...otherProps}>
        <TextField
          className={classes.input}
          multiline
          fullWidth
          InputProps={{
            disableUnderline: true
          }}
          placeholder="Escreva um comentário aqui..."
          onChange={handleChange}
          value={text}
          inputRef={inputRef}
        />
        <div className={classes.actions}>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={handleSave}
            disabled={disableSave()}
            className={classes.saveButton}
          >
              Salvar
          </Button>
          <Button size="small" onClick={handleClose}>Cancelar</Button>
        </div>
      </div>
    </ClickAwayListener>
  )
}

CommentEditor.propTypes = {
  comment: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.func,
}

export default CommentEditor
