import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '@material-ui/core'
import { PlayArrow as PlayArrowIcon } from '@material-ui/icons'
import { getVideoStatusColor } from 'helpers'

const VideoAvatar = props => {
  const {videoStatus} = props
  const color = getVideoStatusColor(videoStatus)
  return (
    <Avatar style={{ backgroundColor: color}}><PlayArrowIcon /></Avatar>
  )
}

VideoAvatar.propTypes = {
  videoStatus: PropTypes.string.isRequired
}

export default VideoAvatar
