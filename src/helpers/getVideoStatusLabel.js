const labelPerStatus = {
  "draft": "Rascunho",
  "pre-production": "Pré-Produção",
  "production": "Produção",
  "revision": "Revisão",
  "re-editing": "Aplicando Correções",
  "finished": "Aprovado",
}

const getVideoStatusLabel = status => {
  try {
    return labelPerStatus[status]
  } catch(err) {
    console.error('color for status not found')
  }
}

export default getVideoStatusLabel
