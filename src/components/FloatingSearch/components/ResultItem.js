import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { ListItemText, ListItem, ListItemSecondaryAction } from '@material-ui/core'
import {
  Check as CheckIcon,
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2)
  }
}))

const ResultItem = props => {
  const {
    item,
    selected,
    onClick
  } = props
  const classes = useStyles()

  const handleClick = () => {
    onClick()
  }

  return (
    <ListItem
      className={classes.root}
      key={item.id}
      button
      divider
      disableGutters
      onClick={handleClick}
    >
      <ListItemText
        primary={item.primary}
        secondary={item.secondary}
        secondaryTypographyProps={{ color: 'textSecondary' }}
      />
      { selected ? (
          <ListItemSecondaryAction><CheckIcon/></ListItemSecondaryAction>
        ) : null
      }
    </ListItem>
  )
}

ResultItem.propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default ResultItem
