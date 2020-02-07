import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, Button } from '@material-ui/core'
import { formatDate } from 'helpers'
import clsx from 'clsx'
import { CommentEditor, TextFormatter } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
  },
  author: {
    marginRight: theme.spacing(2),
    fontWeight: 500,
  },
  actions: {
    paddingLeft: theme.spacing(1)
  }
}))

const Comment = props => {
  const {
    comment,
    className,
    onReply,
    onSave,
    onDelete,
    ...otherProps
  } = props
  const classes = useStyles()
  const [openEditMode, setOpenEditMode] = useState(false)

  useEffect(() => {
    if (isNewComment()) {
      handleOpenEditMode()
    }
  }, [comment])

  const handleReply = () => {
    onReply()
  }

  const handleOpenEditMode = () => {
    setOpenEditMode(true)
  }

  const handleCloseEditMode = () => {
    setOpenEditMode(false)
  }

  const handleSave = text => {
    onSave(text)
    handleCloseEditMode()
  }

  const handleDelete = () => {
    onDelete()
  }

  const handleClose = () => {
    handleCloseEditMode()
    if (isNewComment()) {
      handleDelete()
    }
  }

  // TODO implement helper to get current user info
  const isCommentOwner = () => comment.author.id % 2 === 1 ? true : false

  const isNewComment = () => comment.id === -1

  const enableReplyButton = () => isCommentOwner() === false

  const enableEditAndDeleteButton = () => isCommentOwner()

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <Typography variant="subtitle1">
        <span className={classes.author}>{comment.author.displayName}</span>
        {formatDate(comment.updatedAt, 'datetime')}
      </Typography>

      {
        openEditMode ? (

          <CommentEditor
            comment={comment}
            onSave={handleSave}
            onClose={handleClose}
          />

        ) : (
          <div>

            <TextFormatter comment={comment} />

            <div className={classes.actions}>
              {
                enableReplyButton() ? <Button size="small" onClick={handleReply}>Responder</Button> : null
              }
              {
                enableEditAndDeleteButton() ? <Button size="small" onClick={handleOpenEditMode}>Editar</Button> : null
              }
              {
                enableEditAndDeleteButton() ? <Button size="small" onClick={handleDelete}>Remover</Button> : null
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  className: PropTypes.string,
  onReply: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Comment
