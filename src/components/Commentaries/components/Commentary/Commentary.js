import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, Button } from '@material-ui/core'
import { formatDate } from 'helpers'
import clsx from 'clsx'
import { CommentaryEditor, CommentaryTextFormatter } from './components'

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

const Commentary = props => {
  const {
    commentary,
    className,
    onReply,
    onSave,
    onDelete,
    ...otherProps
  } = props
  const classes = useStyles()
  const [openEditMode, setOpenEditMode] = useState(false)

  useEffect(() => {
    if (isNewCommentary()) {
      handleOpenEditMode()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    if (isNewCommentary()) {
      handleDelete()
    }
  }

  // TODO implement helper to get current user info
  const isCommentaryOwner = () => commentary.author.id % 2 === 1 ? true : false

  const isNewCommentary = () => commentary.id === -1

  const enableReplyButton = () => isCommentaryOwner() === false

  const enableEditAndDeleteButton = () => isCommentaryOwner()

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <Typography variant="subtitle1">
        <span className={classes.author}>{commentary.author.displayName}</span>
        {formatDate(commentary.updatedAt, 'datetime')}
      </Typography>

      {
        openEditMode ? (

          <CommentaryEditor
            commentary={commentary}
            onSave={handleSave}
            onClose={handleClose}
          />

        ) : (
          <div>

            <CommentaryTextFormatter commentary={commentary} />

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

Commentary.propTypes = {
  commentary: PropTypes.object.isRequired,
  className: PropTypes.string,
  onReply: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Commentary
