import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import EmailValidation from 'node-email-validation'

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(4)
  },
  email: {},
  submit: {
    marginTop: theme.spacing(2)
  },
  alert: {
    marginBottom: theme.spacing(2)
  }
}))

const validate = email => EmailValidation.is_email_valid(email);

const RecoveryPassword = _props => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const history = useHistory()
  const [message, setMessage] = useState(null)
  const disabledSubmit = !validate(email)

  const handleChange = event => {
    const { value } = event.target
   setEmail(value)
  }

  const handleRecoveryPassword = () => {
    console.log('TODO handleRecoveryPassword')
    setMessage('Enviamos um email para você com as instruções de como criar uma nova senha de acesso ;D')
  }

  const handleAuth = () => {
    history.push('/auth')
 }

  return (
    <>
      <header className={classes.header}>
        <Typography variant="h4">Recuperação de senha</Typography>
      </header>
      <form>

        { message &&
          <Alert
            className={classes.alert}
            severity="success"
          >
            {message}
          </Alert>
        }

        <TextField
          className={classes.email}
          label="Endereço de email"
          name="email"
          type="email"
          variant="outlined"
          autoComplete="off"
          fullWidth
          value={email}
          onChange={handleChange}
          autoFocus
        />

        <div>
          <Button
            variant="text"
            size="small"
            onClick={handleAuth}
          >
            Lembrei minha senha
          </Button>
        </div>

        <Button
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRecoveryPassword}
          disabled={disabledSubmit}
        >
          Recuperar senha
        </Button>
      </form>
    </>
  )
}

export default RecoveryPassword
