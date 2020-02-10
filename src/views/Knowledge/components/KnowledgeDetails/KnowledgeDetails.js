import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
  Paper,
  List,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { KnowledgeDetailsListItem } from './components'
import { formatDate } from 'helpers'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}))

const KnowledgeDetails = props => {
  const { knowledge } = props
  console.log(knowledge)
  const classes = useStyles()
  const knowledgeDetails = [
    { label: "Projeto", value: knowledge.project.name },
    { label: "Cliente", value: knowledge.project.client.name },
    { label: "Data da criação", value: formatDate(knowledge.createdAt, 'datetime') },
    { label: "Última atualização", value: formatDate(knowledge.updatedAt, 'datetime') },
  ]
  return (
    <Paper
      className={classes.root}
    >
      <section>
        <header>
          <Typography variant="h6" color="textSecondary">Detalhes</Typography>
        </header>

        <List>

          {
            knowledgeDetails.map((item, index) => (
              <KnowledgeDetailsListItem key={index} {...item} />
            ))
          }

        </List>
      </section>
    </Paper>
  )
}

KnowledgeDetails.propTypes = {
  knowledge: PropTypes.shape({
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      client: PropTypes.shape({
        name: PropTypes.string.isRequired
      }),
    })
  }),
  createdAt: PropTypes.instanceOf(Date),
  updatedAt: PropTypes.instanceOf(Date),
}

export default KnowledgeDetails
