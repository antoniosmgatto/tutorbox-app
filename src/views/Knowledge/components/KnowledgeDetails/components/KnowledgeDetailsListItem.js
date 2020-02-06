import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, ListItem } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    display: 'flex',
  },
  listItemValue: {
    marginLeft: 'auto'
  }
}))

const KnowledgeDetailsListItem = props => {
  const {label, value} = props
  const classes = useStyles()
  return (
    <ListItem
      className={classes.root}
      divider={true}
      className={classes.listItem}
      disableGutters
    >

      <Typography
        variant="subtitle1"
        component="span"
        color="textSecondary"
      >
        {label}
      </Typography>

      <Typography
        className={classes.listItemValue}
        variant="body1"
        component="span"
      >
        {value}
      </Typography>

    </ListItem>
  )
}

KnowledgeDetailsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default KnowledgeDetailsListItem
