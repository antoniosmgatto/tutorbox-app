import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Typography, Button } from '@material-ui/core'
import TopicItem from './component/TopicItem'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  root: {},
  items: {
    paddingLeft: theme.spacing(2),
  },
  item: {
    position: "relative",
    padding: theme.spacing(1, 0),
  },
  itemContainer: {},
  itemMenuIcon: {
    position: "absolute",
    top: theme.spacing(1),
    right: 0,
  },
  itemText: {},
  subitems: {
    listStyleType: "disc",
    paddingLeft: theme.spacing(3)
  },
  subitem: {
    paddingTop: theme.spacing(2)
  }
}))

const Topic = props => {
  const { topic, className, ...otherProps } = props
  const classes = useStyles()
  const [state, setState] = useState(topic)

  const handleAddItem = itemParentIndex => _event => {
    const items = [ ...state.items ]
    const newItem = {
      id: -1,
      text: "",
      subitems: []
    }
    const itemIndex = itemParentIndex + 1
    items.splice(itemIndex, 0, newItem)
    setState({
      ...state,
      items: items
    })
  }

  //TODO only for dev
  const handleUpdateItem = item => updatedText => {
    const items = [...state.items]
    const itemIndex = items.indexOf(item)
    const updatedItem = {
      ...item,
      id: itemIndex + 1,
      text: updatedText
    }
    items[itemIndex] = updatedItem
    setState({
      ...state,
      items: items
    })
  }

  const handleDeleteItem = item => () => {
    const items = [...state.items]
    const index = items.indexOf(item)
    items.splice(index, 1)
    setState({ ...state, items: items })
  }

  const handleAddSubitem = (itemParentIndex, subitemParentIndex) => _event => {
    const items = [...state.items]
    const item = items[itemParentIndex]
    const subitems = item.subitems
    const newSubitem = {
      id: -1,
      text: "",
    }
    const subitemIndex = subitemParentIndex + 1
    subitems.splice(subitemIndex, 0, newSubitem)
    item.subitems = subitems
    setState({
      ...state,
      items: items
    })
  }

  //TODO only for dev
  const handleUpdateSubitem = (item, subitem) => (updatedText) => {
    const items = [...state.items]
    const itemIndex = items.indexOf(item)
    const subitemIndex = item.subitems.indexOf(subitem)
    const updatedSubitem = {
      ...subitem,
      id: subitemIndex + 1,
      text: updatedText,
    }
    const updatedItem = { ...item }
    updatedItem.subitems[subitemIndex] = updatedSubitem
    items[itemIndex] = updatedItem
    setState({
      ...state,
      items: items
    })
  }

  //TODO only for dev
  const handleDeleteSubitem = (item, subitem) => _event => {
    const items = [...state.items]
    const itemIndex = items.indexOf(item)
    const subitemIndex = item.subitems.indexOf(subitem)
    item.subitems.splice(subitemIndex, 1)
    items[itemIndex] = item
    setState({...state, items: items})
  }

  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <Typography variant="h6" color="textSecondary">
        {state.title}
      </Typography>

      <ol className={classes.items}>
        {state.items.map((item, itemIndex) => (
          <li key={itemIndex} className={classes.item}>
            <TopicItem
              key={itemIndex}
              item={item}
              onAddItem={handleAddItem(itemIndex)}
              onAddSubitem={handleAddSubitem(itemIndex, item.subitems.length)}
              onUpdate={handleUpdateItem(item)}
              onDelete={handleDeleteItem(item)}
            />

            <ul className={classes.subitems}>
              {item.subitems.map((subitem, subitemIndex) => (
                <li className={classes.subitem}>
                  <TopicItem
                    key={subitemIndex}
                    item={subitem}
                    onAddItem={handleAddSubitem(itemIndex, subitemIndex)}
                    onUpdate={handleUpdateSubitem(item, subitem)}
                    onDelete={handleDeleteSubitem(item, subitem)}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <Button color="primary" onClick={handleAddItem(state.items.length)}>Adicionar novo item</Button>

    </div>
  )
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default Topic
