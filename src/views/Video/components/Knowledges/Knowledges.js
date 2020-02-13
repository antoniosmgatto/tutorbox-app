import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { SectionPaper } from 'components'
import { Button, List } from '@material-ui/core'
import { KnowledgeListItem, KnowledgeSearch } from './components'
import { Alert } from '@material-ui/lab'
import Video from 'views/Video/Video'
import { removeArrayElement } from 'helpers'

const useStyles = makeStyles(theme => ({
  root: {},
  alert: {
    marginTop: theme.spacing(2)
  },
  actionWrapper: {
    paddingTop: theme.spacing(2),
    textAlign: 'center'
  }
}))

const Knowledges = props => {
  const { knowledges } = props
  const classes = useStyles()
  const [state, setState] = useState(knowledges)
  const [buttonElement, setButtonElement] = useState(null)

  const handleManagerClick = event => {
    setButtonElement(event.target)
  }

  const handleSearchClose = () => {
    setButtonElement(null)
  }

  const handleKnowledgeSelected = knowledge => {
    setState([...state, knowledge])
  }

  const handleKnowledgeRemoved = knowledge => {
    setState(removeArrayElement(state, knowledge))
  }

  return (
    <SectionPaper title="Conhecimentos" className={classes.root}>

    { state.length > 0 ? (
        <List>
          { state.map(knowledge => (
              <KnowledgeListItem
                key={knowledge.id}
                knowledge={knowledge}
              />
          ))}
        </List>
      ) : (
        <Alert
          className={classes.alert}
          severity="warning"
          variant="outlined"
        >
          Não existem conhecimentos relacionados com este vídeo.
        </Alert>
      )
    }
      <div className={classes.actionWrapper}>
        <Button
          variant="text"
          onClick={handleManagerClick}
        >
          Gerenciar
        </Button>

        <KnowledgeSearch
          anchorEl={buttonElement}
          selected={state}
          onClose={handleSearchClose}
          onSelect={handleKnowledgeSelected}
          onRemove={handleKnowledgeRemoved}
        />

      </div>
    </SectionPaper>
  )
}

Knowledges.propTypes = {
  knowledges: PropTypes.array.isRequired
}

export default Knowledges
