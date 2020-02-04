import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Paper} from '@material-ui/core'
import Topic from './components/Topic'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    minHeight: 600
  },
}));

const Topics = props => {
  const { topics } = props
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      {topics.map((topic, index) => (
        <Topic key={index} topic={topic} />
      ))}
    </Paper>
  );
}

Topics.propTypes = {
  topics: PropTypes.array.isRequired
}

export default Topics
