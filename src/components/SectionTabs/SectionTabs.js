import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Paper, Tabs, Tab } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  tab: {
    padding: theme.spacing(0, 3),
  }
}))

const SectionTabs = props => {
  const { tabs } = props
  const classes = useStyles()
  const [activedTab, setActivedTab] = useState(0)

  const handleTabChange = (_event, tabIndex) => {
    setActivedTab(tabIndex)
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={activedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        variant="fullWidth"
      >

        {tabs.map(tab => (
          <Tab label={tab.title} />
        ))}

      </Tabs>

      {tabs.map((tab, index) => (
        <div
          className={classes.tab}
          hidden={activedTab !== index}
        >
          {tab.component}
        </div>
      ))}

    </Paper>
  )
}

SectionTabs.propTypes = {
  tabs: PropTypes.array.isRequired
}

export default SectionTabs
