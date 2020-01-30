import { colors } from '@material-ui/core'

const colorPerStatus = {
  "finished": colors.green['500']
}

const getVideoStatusColor = status => {
  let color
  try {
    color = colorPerStatus[status]
  } catch(err) {
    console.error('color for status not found')
    color = color.white
  }
  return color
}

export default getVideoStatusColor
