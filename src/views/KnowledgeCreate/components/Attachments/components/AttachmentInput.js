import React from 'react'
import { Button } from '@material-ui/core'
import {
  AttachFile as AttachFileIcon
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    textAlign: 'center'
  },
  uploadButton: {},
  attachmentInput: {
    display: 'none',
  }
}))

const AttachmentFileInput = props => {
  const classes = useStyles()
  const handleFileUpload = e => {
    const file = e.target.files[0]
    console.log("TODO", file, " upload the file")
  }

  return (
      <div
        {...props}
        className={classes.root}
      >
        <input
          id="attachment-input"
          className={classes.attachmentInput}
          accept="image/*"
          type="file"
          onChange={handleFileUpload}
        />

        <label
          htmlFor="attachment-input"
        >
          <Button
            className={classes.uploadButton}
            variant="outlined"
            endIcon={<AttachFileIcon/>}
            multiple
            component="span"
          >
            Anexar
          </Button>
        </label>
      </div>
  )
}

export default AttachmentFileInput
