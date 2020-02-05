import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, Button, IconButton } from '@material-ui/core'
import { ItemInput } from './component'
import { MoreVert as MoreVertIcon } from '@material-ui/icons'
import { OptionsMenu } from 'components'

const useStyles = makeStyles(theme => ({
  root: {},
  items: {
    paddingLeft: theme.spacing(2),
  },
  item: {
    position: "relative",
    padding: theme.spacing(2, 0),
  },
  itemContainer: {
  },
  itemMenuIcon: {
    position: "absolute",
    top: theme.spacing(1),
    right: 0,
  },
  itemText: {
    // marginRight: theme.spacing(1),
    // backgroundColor: "red"
  },
  // itemActions: {},
  // subitems: {
  //   listStyleType: "disc",
  //   paddingLeft: theme.spacing(2)
  // },
  // subitemRoot: {
  //   marginTop: theme.spacing(2),
  // },
  // subitemInput: {
  //   marginTop: theme.spacing(2),
  // },
  // text: {
  //   padding: theme.spacing(2, 0)
  // }
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

    setState({
      ...state,
      items: itemsUpdated
    })
  }

  const handleSaveSubitem = (item) => (newText) => {
    const items = [...state.items]
    const itemIndex = items.indexOf(item)
    const subitems = [
      ...item.subitems,
      {
        id: -1,
        text: newText
      }
    ]
    item.subitems = subitems
    items[itemIndex] = item
    setState({
      ...state,
      items: items
    })
  }

  const optionsMenu = [
    {
      label: "Editar",
      onClick: ((e) => console.log('clicou') )
    },
  ]

  return (
    <>
      <Typography variant="h6" color="textSecondary">
        {state.title}
      </Typography>

      <ol className={classes.items}>
        {state.items.map((item, index) => (
          <li key={index} className={classes.item}>
            <Typography variant="body1" className={classes.itemText}>{item.text}</Typography>
            {/* <OptionsMenu options={optionsMenu} /> */}
            {/* <IconButton className={classes.itemMenuIcon}><MoreVertIcon /></IconButton> */}

            {/* <div className={classes.itemContainer}>
              <IconButton edge="end"><MoreVertIcon /></IconButton>
            </div> */}
            {/* <div>
              <Button onClick={() => handleRemoveItem(item)}>Remover</Button>
            </div> */}

            {/* <ul className={classes.subitems}>
              {item.subitems.map((subitem, index) => (
                <li key={index} className={classes.subitemRoot}>
                  <Typography variant="body1">{subitem.text}</Typography>
                  <div>
                    <Button onClick={() => handleRemoveSubitem(item, subitem)}>Remover</Button>
                  </div>
                </li>
              ))}

              <ItemInput
                openFormLabel="Adicionar um subitem"
                onSave={handleSaveSubitem(item)}
                className={classes.subitemInput}
              />

            </ul> */}
          </li>
        ))}
      </ol>

      {/* <ItemInput openFormLabel="Clique aqui para adicionar um item" onSave={handleSaveItem} /> */}
    </>
  )
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired
}

export default Topic
