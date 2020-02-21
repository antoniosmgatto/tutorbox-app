import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(2)
  },
  username: {},
  password: {
    marginTop: theme.spacing(2)
  },
  submit: {
    marginTop: theme.spacing(2)
  }
}))

const Authentication = _props => {
  const classes = useStyles()
  const [state, setState] = useState({})
  const history = useHistory()
  const disabledSubmit = Object.keys(state).some(field => !state[field])

  const handleChange = event => {
    const { name, value } = event.target
    setState({...state, [name]: value})
  }

  const handleAuthentication = () => {
    console.log('TODO login')
    history.push('/')
  }

  const handleForgetPassword = () => {
    history.push('/recuperar-senha')
  }

  return (
    <>
      <header className={classes.header}>
        <Typography
          variant="h2"
          component="h1"
        >
          Tutorbox
        </Typography>
      </header>
      <form>
        <TextField
          className={classes.username}
          label="Endereço de email ou usuário"
          name="username"
          variant="outlined"
          autoComplete="off"
          fullWidth
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
          onChange={handleChange}
        />

        <div>
          <Button
            variant="text"
            size="small"
            onClick={handleForgetPassword}
          >
            Esqueceu a senha?
          </Button>
        </div>

        <Button
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAuthentication}
          disabled={disabledSubmit}
        >
          Entrar
        </Button>
      </form>
    </>
  )
}

export default Authentication
