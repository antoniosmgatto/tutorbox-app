import React, { useState } from 'react'
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
  AttachFile as AttachFileIcon,
  Delete as DeleteIcon,
  Image as ImageIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { AlertDialog } from 'components'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const icons = {
  image: <ImageIcon />,
  pdf: <AttachFileIcon />,
}

const AttachmentListItem = props => {
  const {
    attachment,
    onDelete,
    ...otherOptions
  } = props
  const classes = useStyles()

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false)

  const handleDelete = () => {
    setOpenDeleteAlert(true)
  }

  let alertDialog
  if (openDeleteAlert) {
    alertDialog =  <AlertDialog
        title="Você realmente deseja remover este anexo?"
        text="Esta operação é irreversível."
        onPositiveClick={ () => onDelete() }
        open={openDeleteAlert}
        onClose={() => setOpenDeleteAlert(false)}
      />
  }
  return (
    <>
      {alertDialog}
      <ListItem
        {...otherOptions}
        className={classes.root}
        divider={true}
        disableGutters
        key={attachment.id}
      >
        <ListItemAvatar>
          <Avatar>
            {icons[attachment.documentType]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText>{attachment.name}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick={() => handleDelete(attachment)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  )
}

AttachmentListItem.propTypes = {
  attachment: PropTypes.object.isRequired,
  onDelete: PropTypes.func
}

export default AttachmentListItem
