import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { SectionPaper } from 'components'
import { List, Button } from '@material-ui/core'
import { Member } from './components'

const useStyles = makeStyles(theme => ({
  root: {},
  team: {
    padding: 0
  },
  actionWrapper: {
    paddingTop: theme.spacing(2),
    textAlign: 'center'
  }
}))

const TeamManager = props => {
  const { team, ...otherProps } = props
  const classes = useStyles()

  const handleManageTeam = () => {
    console.log('handleManageTeam')
  }
  return (
    <SectionPaper
      title="Equipe"
      className={classes.root}
      {...otherProps}
    >
      <List className={classes.team}>
        {team.map(member => (
          <Member key={member.id} member={member} />
        ))}
      </List>

      <div className={classes.actionWrapper}>
        <Button
          onClick={handleManageTeam}
          variant="text"
        >
          Gerenciar
        </Button>
      </div>

    </SectionPaper>
  )
}

TeamManager.propTypes = {
  team: PropTypes.array.isRequired,
}

export default TeamManager
