import React from 'react';
import {
  Typography, Box, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton, Icon, Select, MenuItem, TablePagination, TableFooter,
} from '@material-ui/core';
import useStyles from './style';
import applications from './mock';
import { usePaginateHandlers } from './usePaginateHandlers';


const columns = [
  { label: 'Request ID' },
  { label: 'First name' },
  { label: 'Last name' },
  { label: 'Phone' },
  { label: 'Amount' },
  { label: 'Status' },
  { label: '' },
];

const ApplicationPage = () => {
  const classes = useStyles();
  const [handlePageChange,
    handleChangeRowsPerPage,
    pagination, paginateData] = usePaginateHandlers(applications);
  return (
    <>
      <Box mb={2}>
        <Typography variant="h4">Applications</Typography>
      </Box>
      <Box>
        <Paper elevation={2}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((c) => <TableCell key={c.label}>{c.label}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginateData.map((x) => (
                <TableRow key={x.id}>
                  <TableCell>
                    {x.requestId}
                  </TableCell>
                  <TableCell>{x.firstName}</TableCell>
                  <TableCell>{x.lastName}</TableCell>
                  <TableCell>{x.phone}</TableCell>
                  <TableCell>{x.help}</TableCell>
                  <TableCell>
                    {x.status
                      ? (
                        <Select
                          value={x.status}
                          classes={{ root: classes[x.status], select: classes[x.status] }}
                        >
                          <MenuItem value="on_hold">On hold</MenuItem>
                          <MenuItem value="in_progress">In progress</MenuItem>
                          <MenuItem value="receieved">Received</MenuItem>
                          <MenuItem value="closed">Closed</MenuItem>
                        </Select>
                      ) : 'Pending'}
                  </TableCell>
                  <TableCell align="right">
                    {!x.approved && (
                    <>
                      <IconButton color="primary">
                        <Icon>check</Icon>
                      </IconButton>
                      <IconButton color="secondary">
                        <Icon>clear</Icon>
                      </IconButton>
                    </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={applications.length}
                  onChangePage={handlePageChange}
                  page={pagination.page}
                  rowsPerPage={pagination.limit}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </Box>
    </>
  );
};
export default ApplicationPage;
