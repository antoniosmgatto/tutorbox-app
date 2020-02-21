import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'
import { VideoAvatar } from './component'

const VideosList = ({ videos, onVideoClick }) => {

  const handleClick = video => () => {
    onVideoClick(video)
  }

  return (
    <List>
      { videos.map(video => (
        <ListItem
          key={video.id}
          onClick={handleClick(video)}
          divider
          disableGutters
          button
        >
          <ListItemAvatar>
            <VideoAvatar videoStatus={video.status} />
          </ListItemAvatar>
          <ListItemText
            primary={video.title}
            secondary={video.project.name}
          />
        </ListItem>
      ))
      }
    </List>
  )
}

VideosList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoClick: PropTypes.func.isRequired,
}

export default VideosList
