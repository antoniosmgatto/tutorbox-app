import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  hide: {
    display: 'none'
  }
}))

const HideElement = props => {
  const { children, hide } = props
  const classes = useStyles()
  return (
    <div className={clsx(hide && classes.hide)}>
      {children}
    </div>
  )
}

HideElement.propTypes = {
  children: PropTypes.any.isRequired,
  hide: PropTypes.bool.isRequired
}

export default HideElement
