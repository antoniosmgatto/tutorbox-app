import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  header: {
    backgroundColor: "rgb(250,250,250)",
  }
})

const VideosTable = ({ videos }) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)

  const handlerPageChanges = () => {
    console.log('page changed')
  }

  return(
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell>Vídeo</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              videos.map(video => (
                <TableRow key={video.id}>
                  <TableCell>{ video.title }</TableCell>
                  <TableCell>{ video.status }</TableCell>
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
    </div>
  )
}

VideosTable.propTypes = {
  videos: PropTypes.array.isRequired
}

export default VideosTable
