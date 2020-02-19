import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, Link } from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {},
  checkboxWrapper: {
    paddingRight: theme.spacing(2),
    alignItems: 'flex-start',
  },
  time: {
    cursor: 'pointer'
  }
}))

const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60)
  const diffInSeconds = seconds - (minutes * 60)
  const minutesFormatted = String(minutes).padStart(2, '0')
  const secondsFormatted = String(diffInSeconds).padStart(2, '0')
  return `${minutesFormatted}:${secondsFormatted}`
}

const TodoItem = props => {
  const {
    todo,
    checked,
    enableCheckbox,
    onToggle,
    enableDelete,
    onDelete,
    onTimeClick
  } = props
  const classes = useStyles()
  const formattedTime = todo.time ? formatTime(todo.time) : null

  const handleChange = event => {
    const { checked } = event.target
    onToggle(checked)
  }

  const handleTimeClick = () => {
    onTimeClick()
  }

  const handleDelete = () => {
    onDelete()
  }

  return (
    <ListItem
      className={classes.root}
      divider
    >
      { enableCheckbox && <div className={classes.checkboxWrapper}>
                            <Checkbox
                              color="primary"
                              checked={checked}
                              value="true"
                              onChange={handleChange}
                            />
                          </div>
      }

      <ListItemText
        primary={todo.text}
        secondary={formattedTime  && <Link  className={classes.time} onClick={handleTimeClick}>{formattedTime}</Link>}
      />

      { enableDelete &&
        <ListItemSecondaryAction>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      }
    </ListItem>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  checked: PropTypes.bool,
  enableCheckbox: PropTypes.bool,
  onToggle: PropTypes.func,
  enableDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  onTimeClick: PropTypes.func.isRequired,
}

export default TodoItem
