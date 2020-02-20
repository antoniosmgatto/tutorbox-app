import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Button, Paper, Breadcrumbs, Link } from '@material-ui/core'
import { dummyVideoPerStatus, removeArrayElement, updateArrayElement } from 'helpers'
import { SectionTabs, Todolist, KnowledgePreview, VideoPlayer, Toast, FileInput } from 'components'
import { useHistory } from 'react-router-dom'
import { TodoInput } from './components'
import { CloudUpload as CloudUploadIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
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
  playerActions: {
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

const VideoReview = props => {
  const { match } = props
  const currentStatus = match.path.includes('revisao') ? 'revision' : 're-editing'
  const [state, setState] = useState(dummyVideoPerStatus(currentStatus))
  const isReview = currentStatus === 'revision'
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

  const handleUpload = () => {
    console.log('TODO handleUpload')
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

  const handleFinishFixes = () => {
    console.log('TODO handleFinishFixes')
    history.push('/video/revision')
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
        xs={12}
      >
        <Breadcrumbs>
          <Link
            color="inherit"
            href="/videos"
          >
            Vídeos
          </Link>
          <Link
            color="inherit"
            href={`/video/${state.status}`}
          >
            Detalhes do vídeo
          </Link>
          <Typography>{isReview ? 'Revisão':'Visualizando correções'}</Typography>
        </Breadcrumbs>
      </Grid>
      <Grid
        item
        md={9}
        xs={12}
      >
        <Typography variant="h5" component="h2">{state.title}</Typography>
      </Grid>

      <Grid
        item
        md={3}
        xs={12}
      >
        <div className={classes.primaryActions}>
          { isReview ? (
            <>
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
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleFinishFixes}
            >
              Enviar para revisão
            </Button>
          )}
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

            <div className={classes.playerActions}>
            { isReview ? (
                          <TodoInput
                            className={classes.addTodoForm}
                            onSave={handleSaveTodo}
                          />
                        )
                        : (
                          <FileInput
                            className={classes.button}
                            inputProps={{ accept: 'video/mp4' }}
                            buttonProps={{ variant: 'contained', startIcon: <CloudUploadIcon /> }}
                            onChange={handleUpload}
                          />
                        )}
            </div>
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
                  mode={ isReview ? 'edit' : 'check' }
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
