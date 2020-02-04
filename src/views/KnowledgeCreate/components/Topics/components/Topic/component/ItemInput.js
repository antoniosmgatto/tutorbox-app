import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  TextField
} from '@material-ui/core'
import {
  HideElement
} from "components"
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {},
  actions: {
    marginTop: theme.spacing(1)
  },
  saveButton: {
    marginRight: theme.spacing(1)
  }
}))

const ItemInput = props => {
  const { className, onSave, openFormLabel, ...otherOptions } = props
  const classes = useStyles()
  const [openItemForm, setOpenItemForm] = useState(false)
  const [newItem, setNewItem] = useState("")
  const newItemRef = useRef()

  useEffect(() => {
    if (openItemForm) {
      newItemRef.current.focus()
    }
  }, [openItemForm])

  const handlerAddItem = () => {
    setOpenItemForm(true)
  }

  const handleNewItemChanges = event => {
    setNewItem(event.target.value)
  }

  const handlerSave = () => {
    onSave(newItem)
    setNewItem("")
  }

  const handlerCancel = () => {
    setOpenItemForm(false)
    setNewItem("")
  }

  return (
    <div className={clsx(classes.root, className)} {...otherOptions}>
      <HideElement hide={openItemForm}>
        <Button
          color="primary"
          onClick={handlerAddItem}
        >
          {openFormLabel}
        </Button>
      </HideElement>
      <HideElement hide={!openItemForm}>
        <div>
          <TextField
            className={classes.itemForm}
            fullWidth
            multiline
            rowsMax={3}
            variant="outlined"
            onChange={handleNewItemChanges}
            placeholder="Digite aqui..."
            name="text"
            value={newItem}
            inputRef={newItemRef}
          />
          <div className={classes.actions}>
            <Button
              className={classes.saveButton}
              variant="outlined"
              color="primary"
              onClick={handlerSave}
            >
              Salvar
            </Button>
            <Button onClick={handlerCancel}>Cancelar</Button>
          </div>
        </div>
      </HideElement>
    </div>
  )
}

ItemInput.propTypes = {
  openFormLabel: PropTypes.string,
  className: PropTypes.string,
  onSave: PropTypes.func.isRequired,
}

ItemInput.defaultProps = {
  openFormLabel: "Adicionar"
}

export default ItemInput
