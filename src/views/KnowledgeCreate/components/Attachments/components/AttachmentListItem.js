import React from 'react'
import PropTypes from 'prop-types'
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
  Image as ImageIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const AttachmentListItem = props => {
  const {attachment, ...otherOptions} = props
  const classes = useStyles()

  const handleDeleteAttachment = attachment => {
    console.log("TODO ", attachment, "was deleted")
  }

  return (
    <ListItem
      {...otherOptions}
      className={classes.root}
      divider={true}
      disableGutters
      key={attachment.id}
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>{attachment.name}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={() => handleDeleteAttachment(attachment)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

AttachmentListItem.propTypes = {
  attachment: PropTypes.object.isRequired
}

export default AttachmentListItem
