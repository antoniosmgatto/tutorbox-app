import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from 'helpers'

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(4)
  },
  logo: {
    width: 280,
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
  const [formData, setFormData] = useState({ username: '', password: ''})
  const history = useHistory()
  const disabledSubmit = Object.keys(formData).some(field => !formData[field])

  const handleChange = event => {
    const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }

  const handleAuthentication = () => {
    console.log('TODO login')
    auth.login(formData, () => {
      history.push('/')
    })
  }

  const handleForgetPassword = () => {
    history.push('/recuperar-senha')
  }

  return (
    <>
      <header className={classes.header}>
        <img className={classes.logo} src="images/tutorbox.png" alt="Tutorbox Logo" />
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
