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
                <AttachmentListItem key={index} attachment={attachment} />
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
