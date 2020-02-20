import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  username: {},
  password: {
    marginTop: theme.spacing(2)
  },
}))

const Authentication = _props => {
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
    </form>
  )
}

export default Authentication
