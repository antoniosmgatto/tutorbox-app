import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { SectionPaper } from 'components'
import { List, Button } from '@material-ui/core'
import { Member, MemberSearch } from './components'
import { removeArrayElement } from 'helpers'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  root: {},
  team: {
    padding: 0
  },
  alert: {
    marginTop: theme.spacing(2)
  },
  actionWrapper: {
    paddingTop: theme.spacing(2),
    textAlign: 'center'
  }
}))

const TeamManager = props => {
  const { team, ...otherProps } = props
  const classes = useStyles()
  const [state, setState] = useState(team)
  const [anchorEl, setAnchorEl] = useState(null)

  const buttonRef = useRef()

  const handleManageTeam = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseSearch = () => {
    setAnchorEl(null)
  }

  const handleSelectMember = member => {
    setState([...state, member])
  }

  const handleRemoveMember = member => {
    setState(removeArrayElement(state, member))
  }

  return (
    <SectionPaper
      title="Equipe"
      className={classes.root}
      {...otherProps}
    >

      { state.length > 0 ? (
        <List className={classes.team}>
          {state.map(member => (
            <Member key={member.id} member={member} />
          ))}
        </List>
      ) : (
        <Alert
          className={classes.alert}
          severity="warning"
          variant="outlined"
        >
          Não existem pessoas trabalhando neste projeto.
        </Alert>
      )}

      <div className={classes.actionWrapper}>
        <Button
          ref={buttonRef}
          onClick={handleManageTeam}
          variant="text"
        >
          Gerenciar
        </Button>

        <MemberSearch
          selected={state}
          onSelect={handleSelectMember}
          onRemove={handleRemoveMember}
          anchorEl={anchorEl}
          onClose={handleCloseSearch}
        />
      </div>
    </SectionPaper>
  )
}

TeamManager.propTypes = {
  team: PropTypes.array.isRequired,
}

export default TeamManager
