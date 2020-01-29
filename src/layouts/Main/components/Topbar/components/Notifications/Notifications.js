import React, { useState } from 'react'
import { Typography, Slide, Divider, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Close as CloseIcon } from '@material-ui/icons'
import NotificationCard from './components/NotificationCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    zIndex: 1,
    position: 'fixed',
    top: 64,
    right: 0,
    width: '400px',
    height: '90vh',
    borderRadius: '4px',
    boxShadow: '0 2px 5px black',
    margin: 0,
    padding: theme.spacing(2),
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
  }
]

const Notifications = ({
    notificationsHandler,
    open
  }) => {
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
    notificationsHandler(false)
  }

  const notificationReadHandler = (notification) => {
    const index = notifications.indexOf(notification)
    notification.read = !notification.read
    notifications[index] = notification
    console.log(notification);
    console.log(notifications)
    console.log(notificationsFiltered)
    setNotifications([...notifications])
  }

  return (
    <Slide in={open} direction="left" mountOnEnter unmountOnExit>
      <section className={classes.root}>

        <Typography
          variant="subtitle1"
          component="h1"
          className={ classes.title }>
            Notificações  <span onClick={handleClose} className={classes.closeWrapper }>
                            <CloseIcon className={classes.closeIcon }/>
                          </span>
        </Typography>

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
                <NotificationCard key={notification.id} notification={notification} onMarkAsReadEvent={notificationReadHandler} />
              ))
            }
          </div>

        </div>
      </section>
    </Slide>
  )
}

export default Notifications
