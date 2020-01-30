import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText, Divider, ListItemAvatar, Avatar } from '@material-ui/core'
import { VideoAvatar } from './component'

const VideosList = props => {
  const {videos} = props

  return (
    <List>
      {
        videos.map(video => (
          <>
            <ListItem key={video.id} button>
              <ListItemAvatar>
                <VideoAvatar videoStatus={video.status} />
              </ListItemAvatar>
              <ListItemText
                primary={video.title}
                secondary={video.project.name}
              />
            </ListItem>
            <Divider />
          </>
        ))
      }
    </List>
  )
}

VideosList.propTypes = {
  videos: PropTypes.array.isRequired
}

export default VideosList
