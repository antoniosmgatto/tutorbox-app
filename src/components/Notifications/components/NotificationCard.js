import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Checkbox,
  Typography,
  Paper,
  Tooltip
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'row',
  },
  datetime: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  leftColumn: {
    margin: 0,
    padding: 0,
  },
  rightColumn: {
    padding: theme.spacing(1, 1),
    flexGrow: 1,
  },
  textWrapper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1, 2)
  }
}))

const NotificationCard = ({ notification, onMarkAsReadEvent }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(notification.read);

  const handleMarkAsRead = e => {
    setChecked(e.target.checked)
    onMarkAsReadEvent(notification)
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftColumn}>
        <Tooltip title={checked ? "Marcar como não lido" : "Marcar como lido"}>
          <Checkbox
            checked={checked}
            onChange={handleMarkAsRead}
            color="primary"
            value="read"
          />
        </Tooltip>
      </div>
      <div className={classes.rightColumn}>
        <Typography variant="body1">
          <strong>{notification.username}</strong>
          <span className={classes.datetime}>
            {moment(notification.datetime).format("DD/MM/YY HH:mm")}
          </span>
        </Typography>

        <Paper className={classes.textWrapper}>
          <Typography variant="body1">{notification.message}</Typography>
        </Paper>
      </div>
    </div>
  );
};

NotificationCard.propTypes = {
  notification: PropTypes.object.isRequired,
  onMarkAsReadEvent: PropTypes.func.isRequired
};

export default NotificationCard
