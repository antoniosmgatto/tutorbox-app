import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {}
}))

const Video = props => {
  const {} = props
  const classes = useStyles()
  return (
    <div>
      Vídeo
    </div>
  )
}

Video.propTypes = {}

export default Video
