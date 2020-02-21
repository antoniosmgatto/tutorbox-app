  import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { formatDate } from 'helpers'
import { VideoStatus } from 'components'

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  table: {
    minWidth: 600,
    overflowX: 'scroll',
  },
  header: {
    backgroundColor: "rgb(250,250,250)",
  },
  smallColumn: {
    width: 200
  }
})

const VideosTable = ({ videos, onVideoClick }) => {
  const classes = useStyles()
  const [page] = useState(0)

  const handlerPageChanges = () => {
    console.log('page changed')
  }

  const handleVideoClick = video => {
    onVideoClick(video)
  }

  return(
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell>Vídeo</TableCell>
            <TableCell className={classes.smallColumn}>Projeto</TableCell>
            <TableCell className={classes.smallColumn}>Status</TableCell>
            <TableCell className={classes.smallColumn}>Última atualização</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            videos.map(video => (
              <TableRow key={video.id} onClick={handleVideoClick}>
                <TableCell>{video.title}</TableCell>
                <TableCell className={classes.smallColumn}>{video.project.name}</TableCell>
                <TableCell className={classes.smallColumn}><VideoStatus status={video.status} /></TableCell>
                <TableCell className={classes.smallColumn}>{formatDate(video.updatedAt, 'datetime')}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              onChangePage={handlerPageChanges}
              count={videos.length}
              page={page}
              rowsPerPage={10}
              rowsPerPageOptions={[]}
              nextIconButtonText="Próximo"
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

VideosTable.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoClick: PropTypes.func.isRequired,
}

export default VideosTable
