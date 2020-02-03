import React from 'react';
import { Typography, Hidden, Button } from '@material-ui/core';
import { KnownledgesList, KnownledgesTable } from './components'
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(2, 0),
    textAlign: 'right'
  }
}));

const knowledges = [
  { id: 1, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 2, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 3, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 4, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 5, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 6, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 7, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 8, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 9, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() },
  { id: 10, name: "Landing pages", project: { name: "Lead Lovers App" }, updatedAt: new Date() }
]

const Knowledges = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleNewKnownledge = () => {
    history.push('/conhecimento/novo')
  }

  return (
    <section>
      <header className={classes.header}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleNewKnownledge}
        >
          Novo Conhecimento
        </Button>
      </header>

      <Hidden mdUp>
        <KnownledgesList knowledges={knowledges} />
      </Hidden>

      <Hidden smDown>
        <KnownledgesTable knowledges={knowledges} />
      </Hidden>

    </section>
  )
};

export default Knowledges;
