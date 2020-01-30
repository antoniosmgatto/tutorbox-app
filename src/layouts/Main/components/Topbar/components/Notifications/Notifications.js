import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Typography, Divider, Button, SwipeableDrawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Close as CloseIcon } from '@material-ui/icons'
import NotificationCard from './components/NotificationCard'

const useStyles = makeStyles(theme => ({
  root: {
    width: '320px',
    height: '100vh',
    [theme.breakpoints.up('lg')]: {
      marginTop: '64px',
      height: 'calc(100% - 64px)'
    }
  },
  section: {
    height: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    overflow: 'hidden',
  },
  title: {
    position: 'relative',
    color: theme.palette.text.secondary,
    margin: 0,
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  },
  closeWrapper: {
    float: 'right',
  },
  closeIcon: {
    height: 17,
    width: 17,
    cursor: 'pointer'
  },
  content: {
    padding: 0,
    margin: theme.spacing(2, 0),
    maxHeight: '81vh',
    'overflow-x': 'hidden',
    'overflow-y': 'auto',
  },
  alert: {
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const data = [
  {
    id: 1,
    username: "Antonio Gatto",
    datetime: new Date(),
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    read: false,
  },
  {
    id: 2,
    username: "Antonio Gatto",
    datetime: new Date(),
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been" +
      "the industry 's standard dummy text ever since the 1500s,",
    read: false,
  },
  {
    id: 3,
    username: "Antonio Gatto",
    datetime: new Date(),
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been" +
      "the industry 's standard dummy text ever since the 1500s,",
    read: false,
  },
  {
    id: 4,
    username: "Antonio Gatto",
    datetime: new Date(),
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been" +
      "the industry 's standard dummy text ever since the 1500s,",
    read: false,
  },
  {
    id: 5,
    username: "Antonio Gatto",
    datetime: new Date(),
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been" +
      "the industry 's standard dummy text ever since the 1500s,",
    read: false,
  }, {
    id: 6,
    username: "Antonio Gatto",
    datetime: new Date(),
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been" +
      "the industry 's standard dummy text ever since the 1500s,",
    read: false,
  }
]

const Notifications = props => {
  const { onClose, ...otherOptions } = props
  const classes = useStyles()
  const [onlyNotReadFilter, setFilter] = useState(true)
  const [notifications, setNotifications] = useState(data)
  let notificationsFiltered
  let noNotificationMessage

  if (onlyNotReadFilter) {
    notificationsFiltered = notifications.filter(notification => !notification.read)
    noNotificationMessage = "Todas as notificações foram lidas"
  } else {
    notificationsFiltered = notifications
    noNotificationMessage = "Não foram encontradas notificações"
  }

  const handleFilter = () => {
    setFilter(!onlyNotReadFilter)
  }

  const handleClose = () => {
    onClose()
  }

  const handleNotificationRead = (notification) => {
    const index = notifications.indexOf(notification)
    notification.read = !notification.read
    notifications[index] = notification
    setNotifications([...notifications])
  }

  return (
    <SwipeableDrawer
      {...otherOptions}
      classes={{ paper: classes.root }}
      anchor="right"
      onClose={onClose}
    >
      <section className={classes.section}>

        <header>
          <Typography
            variant="subtitle1"
            component="h2"
            className={ classes.title }>
              Notificações  <span onClick={handleClose} className={classes.closeWrapper }>
                              <CloseIcon className={classes.closeIcon }/>
                            </span>
          </Typography>
        </header>

        <Divider />

        <div className={ classes.content }>
          <Button onClick={handleFilter}>
            { onlyNotReadFilter ? 'Exibir todas as mensagens' : 'Exibir apenas não lidas' }
            </Button>
          <div>
            { notificationsFiltered.length === 0 &&
             <Typography variant="body1" color="textSecondary" className={classes.alert}>{noNotificationMessage}</Typography>
            }
            {
              notificationsFiltered.map(notification => (
                <NotificationCard key={notification.id} notification={notification} onMarkAsReadEvent={handleNotificationRead} />
              ))
            }
          </div>

        </div>
      </section>
    </SwipeableDrawer>
  )
}

Notifications.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Notifications
