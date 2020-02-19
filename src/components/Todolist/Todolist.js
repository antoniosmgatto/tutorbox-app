import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { TodoItem } from './components'
import { List, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {},
  todolist: {
    minHeight: 511,
  },
  message: {

  }
}))

const Todolist = props => {
  const {
    todolist,
    className,
    mode,
    onToggleTodo,
    onDeleteTodo,
    onTimeClick,
    ...otherProps
  } = props
  const classes = useStyles()
  const enableCheckbox = mode === 'check'
  const enableDelete = mode === 'edit'

  const handleToggleTodo = todo => checked => {
    onToggleTodo(todo, checked)
  }

  const handleDeleteTodo = todo => () => {
    onDeleteTodo(todo)
  }

  const handleTimeClick = todo => () => {
    if (onTimeClick) onTimeClick(todo)
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <List
        className={classes.todolist}
      >
      { todolist.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          enableCheckbox={enableCheckbox}
          checked={todo.done}
          onToggle={handleToggleTodo(todo)}
          enableDelete={enableDelete}
          onDelete={handleDeleteTodo(todo)}
          onTimeClick={handleTimeClick(todo)}
        />
      ))}
       { todolist.length === 0 && (
         <Alert severity="info">Sem correções para este vídeo</Alert>
       )}
      </List>
    </div>
  )
}

Todolist.propTypes = {
  todolist: PropTypes.array.isRequired,
  className: PropTypes.string,
  mode: PropTypes.oneOf(['edit', 'check']).isRequired,
  onToggleTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onTimeClick: PropTypes.func,
}

export default Todolist
