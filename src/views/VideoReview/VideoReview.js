import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Button, Paper } from '@material-ui/core'
import { dummyVideoPerStatus, removeArrayElement, updateArrayElement } from 'helpers'
import { SectionTabs, Todolist, KnowledgePreview, VideoPlayer, Toast } from 'components'
import { useHistory } from 'react-router-dom'
import { TodoInput } from './components'

const useStyles = makeStyles(theme => ({
  root: {},
  primaryActions: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'bottom'
    }
  },
  rejectButton: {
    marginRight: theme.spacing(2)
  },
  videoSection: {
    padding: theme.spacing(2)
  },
  addTodoForm: {
    marginTop: theme.spacing(1),
  }
}))

const sortTodolist = (a, b) => {
  if (a.time < b.time) return -1
  if (a.time > b.time) return 1
  return (a, b) => {
    if (a.id < b.id) return -1
    if (a.id > b.id) return 1
    return 0
  }
}

const VideoReview = _props => {
  const [state, setState] = useState(dummyVideoPerStatus('revision'))
  const [videoPlaybackStatus, setVideoPlaybackStatus] = useState({})
  const [toastMessage, setToastMessage] = useState(null)
  const [videoStartTime, setVideoStartTime] = useState(null)
  const classes = useStyles()
  const history = useHistory()
  const sortedTodolist = state.todolist.sort(sortTodolist)

  const handleSaveTodo = text => {
    let currentPlayerTime = null

    if (videoPlaybackStatus.currentTime > 0) {
      currentPlayerTime = Math.floor(videoPlaybackStatus.currentTime)
    }

    const newTodo = {
      id: state.todolist.length + 1,
      text: text,
      time: currentPlayerTime,
      done: false
    }

    setState({
      ...state,
      todolist: [...state.todolist, newTodo]
    })

    setToastMessage('Correção adicionada')
  }

  const handleToggleTodo = (todo, checked) => {
    const updatedTodolist = updateArrayElement(state.todolist, todo, { done: checked })
    setState({ ...state, todolist: updatedTodolist })
  }

  const handleDeleteTodo = todo => {
    const updatedTodolist = removeArrayElement(state.todolist, todo)
    setState({ ...state, todolist: updatedTodolist })
    setToastMessage('Correção Removida')
  }

  const handleVideoPlaybackStart = () => {
    setVideoStartTime(null)
  }

  const handleVideoPlaybackStatus = status => {
    setVideoPlaybackStatus(status)
  }

  const handleVideoPlaybackEnd = () => {
    setVideoPlaybackStatus({})
    setVideoStartTime(null)
  }

  const handleTodoTimeClick = (todo) => {
    setVideoStartTime(todo.time)
  }

  const handleToastClose = () => {
    setToastMessage(null)
  }

  const handleApprove = () => {
    console.log('TODO handleApprove')
    history.push('/video/finished')
  }

  const handleReject = () => {
    console.log('TODO handleReject')
    history.push('/video/re-editing')
  }

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        md={9}
        xs={12}
      >
        <Typography variant="h4" component="h2">{state.title}</Typography>
      </Grid>

      <Grid
        item
        md={3}
        xs={12}
      >
        <div className={classes.primaryActions}>
          <Button
            className={classes.rejectButton}
            variant="contained"
            color="primary"
            onClick={handleReject}
          >
            Enviar ajustes
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleApprove}
          >
            Aprovar
          </Button>
        </div>
      </Grid>

      <Grid
        item
        md={6}
        xs={12}
      >
        <Paper>
          <section className={classes.videoSection}>
            <VideoPlayer
              className={classes.player}
              sources={[{ src: state.file, type: 'video/mp4' }]}
              onPlay={handleVideoPlaybackStart}
              onTimeUpdate={handleVideoPlaybackStatus}
              onEnd={handleVideoPlaybackEnd}
              startTime={videoStartTime}
            />

            <TodoInput
              className={classes.addTodoForm}
              onSave={handleSaveTodo}
            />

            <Toast
              open={toastMessage}
              severity="success"
              message={toastMessage}
              onClose={handleToastClose}
            />
          </section>
        </Paper>

      </Grid>

      <Grid
        item
        md={6}
        xs={12}
      >
        <SectionTabs
          tabs={[
            {
              title: 'Correções',
              component: (
                <Todolist
                  todolist={sortedTodolist}
                  mode="edit"
                  onToggleTodo={handleToggleTodo}
                  onDeleteTodo={handleDeleteTodo}
                  onTimeClick={handleTodoTimeClick}
                />)
            },
            {
              title: 'Conteúdo',
              component: <KnowledgePreview knowledge={state.mainKnowledge} />
            },
          ]}
        />
      </Grid>

    </Grid>
  )
}

export default VideoReview
