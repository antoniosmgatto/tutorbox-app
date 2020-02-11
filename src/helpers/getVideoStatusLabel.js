const labelPerStatus = {
  "draft": "Rascunho",
  "finished": "Finalizado",
}

const getVideoStatusLabel = status => {
  try {
    return labelPerStatus[status]
  } catch(err) {
    console.error('color for status not found')
  }
}

export default getVideoStatusLabel
