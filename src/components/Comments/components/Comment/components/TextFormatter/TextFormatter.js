import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.body1,
    padding: theme.spacing(1, 2),
    display: 'inline-block',
    backgroundColor: theme.palette.common.white,
    borderRadius: 5,
    boxShadow: '0 0 1px 1px rgba(0, 0, 0, .1)',
  }
}))

const applyUsernameStyle = text => {
  return text.split(' ').map(part => part.startsWith('@') ? `<strong>${part}</strong>` : part).join(' ')
}

const CommentTextFormatter = props => {
  const {
    comment,
  } = props
  const classes = useStyles()
  const formattedText = applyUsernameStyle(comment.text)

  const renderText = () => {
    return {
      __html: formattedText
    }
  }

  return (
   <div className={classes.root} dangerouslySetInnerHTML={renderText()}></div>
  )
}

CommentTextFormatter.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default CommentTextFormatter
