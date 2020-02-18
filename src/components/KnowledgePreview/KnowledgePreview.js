import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 600,
  },
  topics: {
    listStyle: 'none',
    paddingLeft: 0
  },
  topic: {
    paddingBottom: theme.spacing(2)
  },
  topicTitle: {
    ...theme.typography.subtitle1,
    fontWeight: 500
  },
  items: {
    paddingLeft: theme.spacing(2),
  },
  item: {
    padding: theme.spacing(1, 0)
  },
  subitems: {
    paddingLeft: theme.spacing(2),
    listStyle: 'disc'
  },
  subitem: {
    padding: theme.spacing(1, 0)
  },
}))

const KnownledgePreview = props => {
  const { knowledge } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ul className={classes.topics}>
        {knowledge.topics.map(topic => (
          <li key={topic.id} className={classes.topic}>

            <p className={classes.topicTitle}>{topic.title}</p>

            <ol className={classes.items}>
              {topic.items.map(item => (
                <li key={item.id} className={classes.item}>

                  <Typography variant="body1">{item.text}</Typography>

                  <ul className={classes.subitems}>
                    {item.subitems.map(subitem => (
                      <li key={subitem.id} className={classes.subitem}>
                        <Typography variant="body1">{subitem.text}</Typography>
                      </li>
                    ))}
                  </ul>

                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  )
}

KnownledgePreview.propTypes = {
  knowledge: PropTypes.object.isRequired,
}

export default KnownledgePreview
