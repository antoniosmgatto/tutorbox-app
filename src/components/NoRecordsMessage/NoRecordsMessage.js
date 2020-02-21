import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Grid, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  image: {
    width: 300,
  },

}))

const NoRecorsdMessage = props => {
  const {} = props
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Grid
        container
        justify="center"
        alignContent="center"
      >
        <Grid
          className={classes.container}
          item
          md={4}
        >
          <img className={classes.image} src="images/no-result-found.png" alt="Sem resultado" />
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
          >
              Não foram encontrados resultados para esta busca
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default NoRecorsdMessage
