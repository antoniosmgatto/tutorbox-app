import React from 'react';
import { Typography, Hidden } from '@material-ui/core';
import { KnownledgesList, KnownledgesTable } from './components'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4)
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

  return (
    <section>
      <header>
        <Typography variant="h4" className={classes.title}>
          Conhecimentos
        </Typography>
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
