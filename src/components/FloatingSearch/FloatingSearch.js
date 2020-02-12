import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Popover,
  Typography,
  Divider,
  TextField,
  List,
  IconButton,
} from '@material-ui/core'
import {
  Close as CloseIcon
} from '@material-ui/icons'
import ResultItem from './components/ResultItem'
import { useEffect } from 'react'

const useStyles = makeStyles(theme => ({
  root: {},
  section: {
    padding: theme.spacing(2),
    width: 330,
  },
  title: {
    textAlign: 'center',
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: -3,
    right: 0,
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  results: {
    height: 300,
    overflowY: 'auto'
  },
  noResults: {
    marginTop: theme.spacing(3),
    textAlign: 'center'
  }
}))

const FloatingSearch = props => {
  const {
    anchorEl,
    onClose,
    title,
    selected,
    onSearch,
    results,
    onItemClick,
    ...otherProps
  } = props
  const classes = useStyles()
  const inputRef = useRef()
  const open = Boolean(anchorEl)

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }, [open])

  const handleChange = event => {
    const { value } = event.target
    onSearch(value)
  }

  const handleClose = () => {
    onClose()
  }

  const handleItemClick = item => () => {
    onItemClick(item)
  }

  return (
   <Popover
    className={classes.root}
    open={open}
    anchorEl={anchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...otherProps}
  >
    <section className={classes.section}>
      <header>
        <Typography
          className={classes.title}
          variant="subtitle1"
          color="textSecondary"
        >
          {title}

          <IconButton
            className={classes.closeButton}
            size="small"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Typography>
      </header>

      <Divider  className={classes.divider} />

      <TextField
        variant="outlined"
        fullWidth
        placeholder="Procure aqui..."
        onChange={handleChange}
        inputRef={inputRef}
      />

      <div className={classes.results}>
        { results.length > 0 ? (
          <List>
            { results.map(item => (
              <ResultItem
                key={item.id}
                item={item}
                selected={selected.includes(item.id)}
                onClick={handleItemClick(item)}
              />
            ))}
          </List>
        ) : (
          <div className={classes.noResults}>
            <Typography variant="body1" color="textSecondary">Sem resultados</Typography>
          </div>
        )}
      </div>
    </section>
  </Popover>
  )
}

FloatingSearch.propTypes = {
  title: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(Number).isRequired,
  onSearch: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default FloatingSearch
