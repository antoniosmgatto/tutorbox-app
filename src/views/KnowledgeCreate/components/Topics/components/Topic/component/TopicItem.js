import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { SimpleTextEditor } from 'components'
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  itemText: {}
}))

const TopicItem = props => {
  const {
    item,
    onUpdate,
    onDelete,
    onAddItem,
    onAddSubitem
  } = props
  const classes = useStyles()
  const isNewRecord = _ => item.id === -1
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    if (isNewRecord()) setEditMode(true)
  }, [item])

  const handleOpenEditMode = () => {
    setEditMode(true)
  }

  const handleCloseEditMode = () => {
    setEditMode(false)
  }

  const handleAddItem = () => {
    onAddItem()
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
            inputText={item.text}
            onSave={handleUpdate}
            onClose={handleCloseEditMode}
          />
        ) : (
          <div>

            <Typography variant="body1" className={classes.itemText}>{item.text}</Typography>

            <div>
              <Button size="small" startIcon={<AddIcon />} onClick={handleAddItem}>item</Button>
              {
                onAddSubitem ? (
                  <Button size="small" startIcon={<AddIcon />} onClick={onAddSubitem}>subitem</Button>
                ) : null
              }
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
  onAddItem: PropTypes.func.isRequired,
  onAddSubitem: PropTypes.func,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default TopicItem
