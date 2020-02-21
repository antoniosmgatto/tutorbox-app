import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Toast } from 'components'
import { isEmptyObject } from 'helpers'

const useStyles = makeStyles(theme => ({
  confirmPassword: {
    marginTop: theme.spacing(2)
  },
  submit: {
    marginTop: theme.spacing(2)
  }
}))

const validate = formData => {
  const { newPassword, confirmationPassword } = formData
  let errors = {}

  if (newPassword.length < 6) {
    errors['newPassword'] = 'deve ter 6 ou mais caracteres'
  }

  if (newPassword !== confirmationPassword) {
    errors['confirmationPassword'] = 'é diferente da "Nova Senha"'
  }

  return errors
}

const NewPassword = props => {
  const { match: { params : { token }} } = props
  const classes = useStyles()
  const [formData, setFormData] = useState({ newPassword: '', confirmationPassword: '', token: token })
  const [formErrors, setFormErrors] = useState({})
  const [alertState, setAlertState] = useState({})
  const history = useHistory()
  const disabledSubmit = !isEmptyObject(formErrors)

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormData = {...formData, [name]: value}
    setFormData(updatedFormData)
    setFormErrors(validate(updatedFormData))
  }

  const handleSubmit = () => {
    const errors = validate(formData)
    if (isEmptyObject(errors)) {
      setAlert("Sua senha foi atualizada. Redirecionando para o login", "success")
      console.log('TODO handleSave', formData)
    } else {
      setFormErrors(errors)
    }
  }

  const handleSuccessAlertClose = () => {
    history.push('/auth')
  }

  const setAlert = (message, severity) => {
    setAlertState({ message: message, severity: severity})
  }

  return (
    <form>
      <TextField
        className={classes.newPassword}
        label="Nova senha"
        name="newPassword"
        type="password"
        error={Boolean(formErrors['newPassword'])}
        helperText={formErrors['newPassword'] || 'A nova senha deve conter ao menos 6 dígitos'}
        variant="outlined"
        autoComplete="off"
        fullWidth
        onChange={handleChange}
        autoFocus
      />

      <TextField
        className={classes.confirmPassword}
        label="Confirmação de senha"
        name="confirmationPassword"
        type="password"
        error={Boolean(formErrors['confirmationPassword'])}
        helperText={formErrors['confirmationPassword'] || 'Repita a nova senha'}
        variant="outlined"
        autoComplete="off"
        fullWidth
        onChange={handleChange}
      />

      <Button
        className={classes.submit}
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        disabled={disabledSubmit}
      >
        Salvar
      </Button>

      { alertState.message &&
        <Toast
          open={true}
          message={alertState.message}
          severity={alertState.severity}
          onClose={handleSuccessAlertClose}
          autoHideDuration={5000}
        />
      }
    </form>
  )
}

export default NewPassword
