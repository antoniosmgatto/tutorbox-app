import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TablePagination } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { formatDate } from 'helpers'

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
    width: 160
  }
})

const KnownledgesTable = ({ knowledges }) => {
  const classes = useStyles()
  const [page] = useState(0)

  const handlerPageChanges = () => {
    console.log('page changed')
  }

  return(
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell>Conhecimento</TableCell>
            <TableCell className={classes.smallColumn}>Projeto</TableCell>
            <TableCell className={classes.smallColumn}>Última atualização</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            knowledges.map(knowledge => (
              <TableRow key={knowledge.id}>
                <TableCell>{knowledge.name}</TableCell>
                <TableCell className={classes.smallColumn}>{knowledge.project.name}</TableCell>
                <TableCell className={classes.smallColumn}>{formatDate(knowledge.updatedAt, 'datetime')}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              onChangePage={handlerPageChanges}
              count={knowledges.length}
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

KnownledgesTable.propTypes = {
  knowledges: PropTypes.array.isRequired
}

export default KnownledgesTable
