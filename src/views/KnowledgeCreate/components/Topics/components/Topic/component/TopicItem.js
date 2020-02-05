import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { SimpleTextEditor } from 'components'
import { MoreVert as MoreVertIcon, Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const TopicItem = props => {
  const { item, onUpdate, onDelete } = props
  const classes = useStyles()
  const [editMode, setEditMode] = useState(false)

  const handleOpenEditMode = () => {
    setEditMode(true)
  }

  const handleCloseEditMode = () => {
    setEditMode(false)
  }

  const handleUpdate = (text) => {
    onUpdate(text)
    setEditMode(false)
  }

  const handleDelete = () => {
    onDelete()
  }

  return (
    <div>
      {
        editMode ? (
          <SimpleTextEditor
            initialText={item.text}
            onSave={handleUpdate}
            onClose={handleCloseEditMode}
          />
        ) : (
          <div>

            <Typography variant="body1" className={classes.itemText}>{item.text}</Typography>

            <div>
              <Button size="small" startIcon={<AddIcon />} onClick={() => console.log("adicionar item")}>item</Button>
              <Button size="small" startIcon={<AddIcon />} onClick={() => console.log("adicionar sub-item")}>subitem</Button>
              <Button size="small" startIcon={<EditIcon />} onClick={handleOpenEditMode}>Editar</Button>
              <Button size="small" startIcon={<DeleteIcon/>} onClick={handleDelete}>Remover</Button>
            </div>
          </div>
        )
      }
    </div>
  )
}

TopicItem.propTypes = {
  item: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default TopicItem
