import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper, Typography, TextField, Button, Grid } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    padding: 0,
    width: '100%',
    height: 400,
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    padding: theme.spacing(2),
    width: 320
  },
  header: {
    textAlign: 'center',
    padding: theme.spacing(4, 0)
  },
  username: {},
  password: {
    marginTop: theme.spacing(2)
  },
}))

const Authentication = props => {
  const {} = props
  const classes = useStyles()
  const [state, setState] = useState({})

  const handleChange = event => {
    const { name, value } = event.target
    setState({...state, [name]: value})
  }

  const handleAuthenticationClick = () => {
    console.log('login')
  }

  const handleForgetPasswordClick = () => {
    console.log('forget password')
  }

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        md={8}
        xs={12}
      >
        <Paper className={classes.paper}>

              <section className={classes.section}>
                <header className={classes.header}>
                  <Typography
                    variant="h2"
                    component="h1"
                  >
                    Tutorbox
                  </Typography>
                </header>

                <TextField
                  className={classes.username}
                  label="Endereço de email ou usuário"
                  name="username"
                  variant="outlined"
                  autoComplete="off"
                  fullWidth
                  error={false}
                  helperText=""
                  onChange={handleChange}
                  autoFocus
                />

                <TextField
                  className={classes.password}
                  label="Senha"
                  name="password"
                  type="password"
                  variant="outlined"
                  autoComplete="off"
                  fullWidth
                  error={false}
                  helperText=""
                  onChange={handleChange}
                />

                <div>
                  <Button
                    variant="text"
                    size="small"
                    color=""
                    onClick={handleForgetPasswordClick}
                  >
                    Esqueceu a senha?
                  </Button>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleAuthenticationClick}
                >
                  Entrar
                </Button>
              </section>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Authentication
