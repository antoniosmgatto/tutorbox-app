import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  ListItem,
  ListItemText
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0
  }
}))

const KnowledgeListItem = props => {
  const { knowledge, ...otherProps } = props
  const classes = useStyles()
  return (
    <ListItem
      {...otherProps}
      className={classes.root}
      divider
    >
      <ListItemText
        primary={knowledge.name}
      />
    </ListItem>
  )
}

KnowledgeListItem.propTypes = {
  knowledge: PropTypes.object.isRequired
}

export default KnowledgeListItem
