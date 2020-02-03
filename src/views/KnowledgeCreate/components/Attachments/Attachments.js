import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Paper, Typography, List } from '@material-ui/core'

import { AttachmentListItem, AttachmentInput } from './components'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  section: {
    minHeight: 320,
    display: 'flex',
    flexDirection: 'column',
  },
  attachments: {
    flexGrow: 1,
  },
}))

const Attachments = props => {
  const { attachments } = props
  const classes = useStyles()

  const handleDeleteAttachment = (attachment) => {
    const index = attachments.indexOf(attachment)
    if (index > -1) {
      attachments.splice(index, 1)
    }
    console.log("TODO ", attachment, "was deleted by index", index)
  }

  return (
    <Paper
      className={classes.root}
    >
      <section className={classes.section}>
        <header>
          <Typography variant="h6" color="textSecondary">Anexos</Typography>
        </header>

        <List className={classes.attachments}>
            {
              attachments.map((attachment, index) => (
                <AttachmentListItem
                  key={index}
                  attachment={attachment}
                  onDelete={() =>handleDeleteAttachment(attachment) }
                />
              ))
            }
        </List>

        <AttachmentInput />

      </section>

    </Paper>
  )
}

Attachments.proptTypes = {
  attachments : PropTypes.array.isRequired
}

export default Attachments
