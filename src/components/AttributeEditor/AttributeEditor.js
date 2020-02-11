import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, ClickAwayListener } from '@material-ui/core'
import clsx from 'clsx'
import { SimpleTextEditor } from 'components'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const AttributeEditor = props => {
  const { value, className, onSave, ...otherProps } = props
  const classes = useStyles()
  const [openEditMode, setOpenEditMode] = useState(false)

  const handleOpenEditMode = (e) => {
    setOpenEditMode(true)
  }

  const handleCloseEditMode = () => {
    setOpenEditMode(false)
  }

  const handleSave = (updatedValue) => {
    onSave(updatedValue)
    setOpenEditMode(false)
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>

      {
        openEditMode ? (
          <ClickAwayListener onClickAway={handleCloseEditMode}>
            <SimpleTextEditor
              inputText={value}
              onSave={handleSave}
              onClose={handleCloseEditMode}
            />
          </ClickAwayListener>
        ) :
        (
          <div onClick={handleOpenEditMode}>
            <Typography variant="h5" element="h2">{value}</Typography>
          </div>
        )
      }

    </div>
  )
}

AttributeEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default AttributeEditor
