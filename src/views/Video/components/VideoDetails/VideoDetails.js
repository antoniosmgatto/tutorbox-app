import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
  Paper,
  List,
  IconButton,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { VideoDetailsListItem } from './components'
import { formatDate } from 'helpers'
import { VideoStatus } from 'components'
import { Note } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}))

const VideoDetails = props => {
  const {
    video: {
      project: {
        name: projectName,
        client: {
          name: clientName
        }
      },
      status,
      scriptUrl,
      createdAt,
      updatedAt,
    }
  } = props
  const classes = useStyles()
  const videoDetails = [
    { label: "Projeto", value: projectName },
    { label: "Cliente", value: clientName },
    { label: "Status", value: <VideoStatus status={status}/> },
    { label: "Roteiro", value: (scriptUrl ? <Link href={scriptUrl} variant="" target="_blank" rel="noopener">Visualizar</Link>: 'N/A') },
    { label: "Data da criação", value: formatDate(createdAt, 'datetime') },
    { label: "Última atualização", value: formatDate(updatedAt, 'datetime') },
  ]
  return (
    <Paper
      className={classes.root}
    >
      <section>
        <header>
          <Typography variant="h6" color="textSecondary">Detalhes</Typography>
        </header>

        <List>
          {
            videoDetails.map((item, index) => (
              <VideoDetailsListItem key={index} {...item} />
            ))
          }
        </List>
      </section>
    </Paper>
  )
}

VideoDetails.propTypes = {
  video: PropTypes.object.isRequired
}

export default VideoDetails
