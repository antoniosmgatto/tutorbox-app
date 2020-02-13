import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  ListItem,
  ListItemText
} from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0,
    color: theme.palette.text.primary
  }
}))

const KnowledgeListItem = props => {
  const { knowledge, ...otherProps } = props
  const classes = useStyles()
  return (
    <ListItem
      {...otherProps}
      className={classes.root}
      button
      divider
      to={`/conhecimento/novo`}
      component={NavLink}
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
