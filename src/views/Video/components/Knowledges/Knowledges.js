import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { SectionPaper } from 'components'
import { Button, List } from '@material-ui/core'
import { KnowledgeListItem } from './components'
import { Alert } from '@material-ui/lab'

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

  const handleClick = () => {

  }

  return (
    <SectionPaper title="Conhecimentos" className={classes.root}>

    { knowledges.length > 0 ? (
        <List>
          { knowledges.map(knowledge => (
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
          onClick={handleClick}
        >
          Gerenciar
        </Button>
      </div>
    </SectionPaper>
  )
}

Knowledges.propTypes = {
  knowledges: PropTypes.array.isRequired
}

export default Knowledges
