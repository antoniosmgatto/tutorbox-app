import { colors } from '@material-ui/core'

const colorPerStatus = {
  "draft": colors.grey['500'],
  "pre-production": colors.yellow['700'],
  "production": colors.orange['500'],
  "revision": colors.blue['500'],
  "re-editing": colors.purple['500'],
  "finished": colors.green['500'],
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
