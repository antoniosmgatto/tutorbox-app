import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FloatingSearch } from 'components'

const users = [
  { id: 1, displayName: "Antonio Gatto", username: "antoniomgatto", role: "Tutor" },
  { id: 2, displayName: "Jean Hansen", username: "jeanhansen", role: "Gerente de conta" },
  { id: 3, displayName: "Kauene Freitas", username: "kaunefreitas", role: "Tutor" },
  { id: 4, displayName: "Fabio Arazaki", username: "fabioarazaki", role: "Tutor" },
  { id: 5, displayName: "Fábio Junioo", username: "fabiojunior", role: "Tutor" },
]

const optionsMap = users => {
  return users.map(user => ({
    id: user.id,
    user: user,
    primary: `${user.displayName} (${user.username})`,
    secondary: user.role,
  }))
}

const MemberSearch = props => {
  const {
    anchorEl,
    onClose,
    selected,
    onSelect,
    onRemove,
  } = props
  const selectedIds = selected.map(member => member.id)
  const [filteredUsers, setFilteredUsers] = useState(selected)
  const results = optionsMap(filteredUsers)

  const handleClose = () => {
    setFilteredUsers(selected)
    onClose()
  }

  const handleItemClick = ({ id }) => {
    const selectedUser = findUserById(id)
    userIsTeamMember(selectedUser) ? onRemove(selectedUser) : onSelect(selectedUser)
  }

  const findUserById = id => users.find(user => user.id === id)

  const userIsTeamMember = user => selectedIds.includes(user.id)

  const filter = term => {
    const regexp = new RegExp(term, 'i')
    return users.filter(user => regexp.test(user.displayName))
  }

  const handleSearch = term => {
    setFilteredUsers(filter(term))
  }

  return (
    <FloatingSearch
      title="Usuários"
      anchorEl={anchorEl}
      onClose={handleClose}
      selected={selectedIds}
      onSearch={handleSearch}
      onItemClick={handleItemClick}
      results={results}
    />
  )
}

MemberSearch.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(Object).isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default MemberSearch
