import React from 'react'
import PropTypes from 'prop-types'
import {
  makeStyles
} from '@material-ui/styles'
import {
  Paper,
  Typography
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))

const SectionPaper = props => {
  const {
    title,
    className,
    children,
    ...otherProps
  } = props
  const classes = useStyles()
  return (
    <Paper
      {...otherProps}
      className={clsx(classes.root, className)}
    >
    <section>
    <header>
      <Typography
        variant="h6"
        color="textSecondary"
      >
        {title}
      </Typography>
    </header>

    {children}

    </section>
  </Paper>
  )
}

SectionPaper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default SectionPaper
