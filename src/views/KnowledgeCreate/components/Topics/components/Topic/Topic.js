import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, Button } from '@material-ui/core'
import { ItemInput } from './component'

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
  }
}))

const Topic = props => {
  const { topic } = props
  const classes = useStyles()
  const [state, setState] = useState(topic)

  const handleRemoveItem = item => {
    const items = [...state.items]
    const index = items.indexOf(item)
    items.splice(index, 1)
    setState({ ...state, items: items })
  }

  const handleRemoveSubitem = (item, subitem) => {
    const items = [...state.items]
    const itemIndex = items.indexOf(item)
    const subitemIndex = item.subitems.indexOf(subitem)
    item.subitems.splice(subitemIndex, 1)
    items[itemIndex] = item
    setState({...state, items: items})
  }

  const handleSaveItem = (value) => {
    const itemsUpdated = [
      ...state.items,
      {
        id: -1,
        text: value,
        subitems: []
      }
    ]
    setState({...state, items: itemsUpdated})
  }

  const handleSaveSubitem = (value) => {
    const itemsUpdated = [
      ...state.items,
      {
        id: -1,
        text: value,
        subitems: []
      }
    ]

    setState({
      ...state,
      items: itemsUpdated
    })
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
                    <Button onClick={() => handleRemoveSubitem(item, subitem)}>Remover</Button>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <ItemInput openFormLabel="Clique aqui para adicionar um item" onSave={handleSaveItem} />
    </>
  )
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired
}

export default Topic
