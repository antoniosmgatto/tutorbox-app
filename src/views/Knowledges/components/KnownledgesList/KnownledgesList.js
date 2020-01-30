import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'

const KnownledgesList = props => {
  const {knowledges} = props

  return (
    <List>
      {
        knowledges.map(knowledge => (
          <>
            <ListItem key={knowledge.id} button>
              <ListItemText
                primary={knowledge.name}
                secondary={knowledge.project.name}
              />
            </ListItem>
            <Divider />
          </>
        ))
      }
    </List>
  )
}

KnownledgesList.propTypes = {
  knowledges: PropTypes.array.isRequired
}

export default KnownledgesList
