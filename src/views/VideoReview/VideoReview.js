import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Typography, Button, Paper } from '@material-ui/core'
import { dummyVideoPerStatus, removeArrayElement, updateArrayElement } from 'helpers'
import { SectionTabs, Todolist, KnowledgePreview, VideoPlayer } from 'components'
import { useHistory } from 'react-router-dom'
import { TodoInput } from './components'

const useStyles = makeStyles(theme => ({
  root: {},
  primaryActions: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'bottom'
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

const VideoReview = _props => {
  const [state, setState] = useState(dummyVideoPerStatus('revision'))
  const classes = useStyles()
  const history = useHistory()

  const handleSaveTodo = text => {
    const newTodo = { id: state.todolist.length + 1, text: text, done: false }
    const updatedTodolist = [...state.todolist, newTodo]
    setState({...state, todolist: updatedTodolist})
  }

  const handleToggleTodo = (todo, checked) => {
    const updatedTodolist = updateArrayElement(state.todolist, todo, { done: checked })
    setState({ ...state, todolist: updatedTodolist })
  }

  const handleDeleteTodo = todo => {
    const updatedTodolist = removeArrayElement(state.todolist, todo)
    setState({ ...state, todolist: updatedTodolist })
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
        container
        xs={12}
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
              controls={true}
              fluid={true}
              sources={[{ src: state.file, type: 'video/mp4' }]}
            />

            <TodoInput className={classes.addTodoForm} onSave={handleSaveTodo} />

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
              component: <Todolist todolist={state.todolist} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} mode="edit" />
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
