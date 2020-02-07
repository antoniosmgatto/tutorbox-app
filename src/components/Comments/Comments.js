import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { Comment } from './components'
import { removeArrayElement, updateArrayElement } from 'helpers'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2)
  },
  comments: {
    padding: 0,
    margin: 0,
    marginTop: theme.spacing(2),
    listStyle: 'none',
  },
  replies: {
    paddingLeft: theme.spacing(2),
    listStyle: 'none',
  },
  addComment: {
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
    ...theme.typography.body1,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.common.white,
    borderRadius: 3,
    boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.1)'
  }
}))

const Comments = props => {
  const { comments } = props
  const classes = useStyles()
  const [state, setState] = useState(comments)

  const addComment = () => {
    //TODO create comment with current user info
    const newComment = {
      id: -1,
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        id: 1,
        displayName: "Antonio Gatto",
        username: "@antoniomgatto"
      },
      text: '',
      comments: []
    }
    setState([...state, newComment])
  }

  const updateComment = comment => newText => {
    const newValues = { id: state.length, text: newText }
    const updatedComments = updateArrayElement(state, comment, newValues)
    setState(updatedComments)
  }

  const deleteComment = comment => () => {
    const updatedComments = removeArrayElement(state, comment)
    setState(updatedComments)
  }

  const updateReply = (comment, reply) => updatedText => {
    const updatedReplies = updateArrayElement(
                            comment.comments,
                            reply,
                            { id: comment.comments.length, text: updatedText }
                          )
    const updatedComments = updateArrayElement(state, comment, { comments: updatedReplies })
    setState(updatedComments)
  }

  const deleteReply = (comment, reply) => () => {
    const replies = removeArrayElement(comment.comments, reply)
    const updatedComments = updateArrayElement(state, comment, { comments: replies })
    setState(updatedComments)
  }

  const replyComment = comment => () => {
    const newComment = {
      id: -1,
      createdAt: new Date(),
      updatedAt: new Date(),
      author: {
        id: 1,
        displayName: "Antonio Gatto",
        username: "@antoniomgatto"
      },
      text: `${comment.author.username} `,
      comments: []
    }

    const newValues = { comments: [...comment.comments, newComment] }
    const updatedComments = updateArrayElement(state, comment, newValues)
    setState(updatedComments)
  }

  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
      >
      Comentários
      </Typography>

      <ul className={classes.comments}>
        { state.map((comment, index) => (
           <li  key={index}>

              <Comment
                comment={comment}
                onSave={updateComment(comment)}
                onDelete={deleteComment(comment)}
                onReply={replyComment(comment)}
              />

              <ul className={classes.replies}>
                {comment.comments.map((reply, index) => (
                   <li key={index}>

                    <Comment
                      comment={reply}
                      onSave={updateReply(comment, reply)}
                      onDelete={deleteReply(comment, reply)}
                      onReply={replyComment(comment)}
                    />

                   </li>
                ))}
              </ul>
           </li>
          ))
        }
      </ul>

      <div onClick={addComment} className={classes.addComment}>
        Escreva um comentário...
      </div>
    </div>
  )
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
}

export default Comments
