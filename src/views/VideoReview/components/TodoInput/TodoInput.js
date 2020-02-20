import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'
import { SimpleTextEditor } from 'components'
import { AddCircle as AddCircleIcon } from '@material-ui/icons'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const TodoInput = props => {
  const {
    className,
    onSave,
  } = props
  const classes = useStyles()
  const [todo, setTodo] = useState("")
  const [openTodoForm, setOpenTodoForm] = useState(false)

  const handleOpenForm = () => {
    setOpenTodoForm(true)
  }

  const handleCloseForm = () => {
    setOpenTodoForm(false)
  }

  const handleSave = text => {
    onSave(text)
    handleCloseForm()
    setTodo('')
  }

  return (
    <div className={clsx(classes.root, className)}>

      { openTodoForm ? (
        <div>
          <SimpleTextEditor
            inputText={todo}
            onSave={handleSave}
            onClose={handleCloseForm}
          />
        </div>
      ) : (
        <Button
          variant="text"
          color="inherit"
          onClick={handleOpenForm}
          startIcon={<AddCircleIcon />}
        >
          Adicionar correção
        </Button>
      )}

    </div>
  )
}

TodoInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default TodoInput
