import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Topbar } from './components'
import { Sidebar } from './components'

const useStyles = makeStyles(theme => ({
  root:  {
    height: '100vh'
  },
  content: {
    height: '100vh',
    padding: theme.spacing(4),
  },
}))

const Main = props => {
  const { children } = props
  const classes = useStyles()
  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = () => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  return (
    <div classes={classes.root} >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
      />

      <Sidebar
        open={openSidebar}
        onOpen={handleSidebarOpen}
        onClose={handleSidebarClose}
      />

      <main className={classes.content}>
        <Container>
          { children }
        </Container>
      </main>

    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
