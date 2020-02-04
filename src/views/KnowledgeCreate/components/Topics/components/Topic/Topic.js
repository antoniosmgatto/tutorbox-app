import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, Button, TextField } from '@material-ui/core'
import { HideElement } from "components"

const useStyles = makeStyles(theme => ({
  root: {},
  items: {
    margin: 0,
    paddingLeft: theme.spacing(2),
  },
  itemRoot: {
    margin: theme.spacing(2, 0)
  },
  itemActions: {},
  subitems: {
    listStyleType: "disc"
  },
  subitemRoot: {
    margin: theme.spacing(2, 0)
  },
  addSubitem: {
    marginLeft: theme.spacing(4),
  },
  addItem: {
    marginLeft: theme.spacing(1)
  },
  itemInputRoot: {
    marginLeft: theme.spacing(1)
  },
  formActions: {
    marginTop: theme.spacing(1)
  },
  saveButton: {
    marginRight: theme.spacing(1)
  }
}))

const Topic = props => {
  const { topic } = props
  const classes = useStyles()
  const [state, setState] = useState(topic)
  const [openItemForm, setOpenItemForm] = useState(false)
  const [newItem, setNewItem] = useState("")
  const newItemRef = useRef()

  useEffect(() => {
    if (openItemForm) {
      newItemRef.current.focus()
    }
  }, [openItemForm, state])

  const handlerAddItem = () => {
    setOpenItemForm(true)
  }

  const handleNewItemChanges = event => {
    setNewItem(event.target.value)
  }

  const handlerSave = () => {
    const itemsUpdated = [
      ...state.items,
      {
        id: -1,
        text: newItem,
        subitems: []
      }
    ]

    setState({...state, items: itemsUpdated })
    setNewItem("")
  }

  const handlerCancel = () => {
    setOpenItemForm(false)
    setNewItem("")
  }

  const handleRemoveItem = item => {
    const items = [...state.items]
    const index = items.indexOf(item)
    items.splice(index, 1)
    setState({ ...state, items: items })
  }

  return (
    <>
      <Typography variant="h6" color="textSecondary">
        {state.title}
      </Typography>

      <ol className={classes.items}>
        {state.items.map((item, index) => (
          <li key={index} className={classes.itemRoot}>
            <Typography variant="body1">{item.text}</Typography>

            <div>
              <Button onClick={() => handleRemoveItem(item)}>Remover</Button>
            </div>

            <ul className={classes.subitems}>
              {item.subitems.map((subitem, index) => (
                <li key={index} className={classes.subitemRoot}>
                  <Typography variant="body1">{subitem.text}</Typography>
                  <div>
                    <Button>Remover</Button>
                  </div>
                </li>
              ))}
            </ul>

            {item.subitems.length > 0 && (
              <Button className={classes.addSubitem} color="primary">
                Adicionar
              </Button>
            )}
          </li>
        ))}
      </ol>

      <div>
        <HideElement hide={openItemForm}>
          <Button
            className={classes.addItem}
            color="primary"
            onClick={handlerAddItem}
          >
            Clique aqui para adicionar um item
          </Button>
        </HideElement>
        <HideElement hide={!openItemForm}>
          <div className={classes.itemInputRoot}>
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
            <div className={classes.formActions}>
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
    </>
  )
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired
}

export default Topic
