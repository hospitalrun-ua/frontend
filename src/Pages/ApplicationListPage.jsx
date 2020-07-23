import React from 'react';
import {
  Typography, Box, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, IconButton, Icon, Select, MenuItem,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const columns = [
  { label: 'Request ID' },
  { label: 'First name' },
  { label: 'Last name' },
  { label: 'Phone' },
  { label: 'Amount' },
  { label: 'Status' },
  { label: '' },
];
const applications = [
  {
    id: 1,
    requestId: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    phone: '+380 93 123 45 67',
    help: '100',
    approved: false,
    status: '',
  },
  {
    id: 2,
    requestId: 1,
    firstName: 'Joan',
    lastName: 'Doe',
    phone: '+380 93 76 54 321',
    help: '300',
    approved: true,
    status: 'in_progress',
  },
];

const useStyles = makeStyles(() => ({
  on_hold: {
    '&:focus': {
      backgroundColor: '#FFB946',
    },
    backgroundColor: '#FFB946',
  },
  in_progress: {
    '&:focus': {
      backgroundColor: '#0B9785',
    },
    backgroundColor: '#0B9785',
  },
  receieved: {
    '&:focus': {
      backgroundColor: '#F7685B',
    },
    backgroundColor: '#F7685B',
  },
  closed: {
    '&:focus': {
      backgroundColor: '#1540A4',
    },
    backgroundColor: '#1540A4',
  },
}));


const ApplicationPage = () => {
  const classes = useStyles();
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
              {applications.map((x) => (
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
          </Table>
        </Paper>
      </Box>
    </>
  );
};
export default ApplicationPage;
