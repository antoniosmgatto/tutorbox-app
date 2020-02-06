import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, ClickAwayListener } from '@material-ui/core'
import clsx from 'clsx'
import { SimpleTextEditor } from 'components'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const KnowledgeName = props => {
  const { name, className, onSave, ...otherProps } = props
  const classes = useStyles()
  const [openEditMode, setOpenEditMode] = useState(false)

  const handleOpenEditMode = (e) => {
    setOpenEditMode(true)
  }

  const handleCloseEditMode = () => {
    setOpenEditMode(false)
  }

  const handleSave = (updatedName) => {
    if (updatedName) {
      onSave(updatedName)
    }
    setOpenEditMode(false)
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>

      {
        openEditMode ? (
          <ClickAwayListener onClickAway={handleCloseEditMode}>
            <SimpleTextEditor
              inputText={name}
              onSave={handleSave}
              onClose={handleCloseEditMode}
            />
          </ClickAwayListener>
        ) :
        (
          <div onClick={handleOpenEditMode}>
            <Typography variant="h4" element="h2">{name}</Typography>
          </div>
        )
      }

    </div>
  )
}

KnowledgeName.propTypes = {
  name: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default KnowledgeName
