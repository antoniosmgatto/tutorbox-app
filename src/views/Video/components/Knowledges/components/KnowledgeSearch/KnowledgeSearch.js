import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FloatingSearch } from 'components'

const knowledges = [
  { id: 1, name: "Criar Landing Page" },
  { id: 2, name: "Excluir Landing Page" },
  { id: 3, name: "Criar Funil" },
  { id: 4, name: "Segmentação de emails" },
  { id: 5, name: "Exportar Leads" },
]

const optionsMap = knowledges => {
  return knowledges.map(knowledge => ({
    id: knowledge.id,
    knowledge: knowledge,
    primary: knowledge.name,
  }))
}

const KnowledgeSearch = props => {
  const {
    anchorEl,
    onClose,
    selected,
    onSelect,
    onRemove,
  } = props
  const selectedIds = selected.map(knowledge => knowledge.id)
  const [filteredKnowledges, setFilteredKnowledges] = useState(selected)
  const results = optionsMap(filteredKnowledges)

  const handleClose = () => {
    setFilteredKnowledges(selected)
    onClose()
  }

  const handleItemClick = ({ id }) => {
    const selectedKnowledge = findKnowledgeById(id)
    knowledgeIsTeamMember(selectedKnowledge) ? onRemove(selectedKnowledge) : onSelect(selectedKnowledge)
  }

  const findKnowledgeById = id => knowledges.find(knowledge => knowledge.id === id)

  const knowledgeIsTeamMember = knowledge => selectedIds.includes(knowledge.id)

  const filter = term => {
    const regexp = new RegExp(term, 'i')
    return knowledges.filter(knowledge => regexp.test(knowledge.name))
  }

  const handleSearch = term => {
    setFilteredKnowledges(filter(term))
  }

  return (
    <FloatingSearch
      title="Conhecimentos"
      anchorEl={anchorEl}
      onClose={handleClose}
      selected={selectedIds}
      onSearch={handleSearch}
      onItemClick={handleItemClick}
      results={results}
    />
  )
}

KnowledgeSearch.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(Object).isRequired,
  onSelect: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default KnowledgeSearch
