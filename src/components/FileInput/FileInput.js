import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import {
  AttachFile as AttachFileIcon
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {},
  uploadButton: {},
  input: {
    display: 'none',
  }
}))

const FileInput = props => {
  const {
    buttonProps,
    className,
    inputProps,
    label,
    onChange,
    ...otherProps
  } = props
  const classes = useStyles()

  const handleChange = e => {
    const file = e.target.files[0]
    onChange(file)
  }

  return (
      <div
        {...otherProps}
        className={clsx(classes.root, className)}
      >
        <input
          {...inputProps}
          id="file-input"
          className={classes.input}
          type="file"
          onChange={handleChange}
        />

        <label
          htmlFor="file-input"
        >
          <Button
            className={classes.uploadButton}
            component="span"
            {...buttonProps}
          >
            { label }
          </Button>
        </label>
      </div>
  )
}

FileInput.propTypes = {
  label: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  inputProps: PropTypes.object,
  onChange: PropTypes.func.isRequired
}

FileInput.defaultProps = {
  label: 'Upload'
}

export default FileInput
