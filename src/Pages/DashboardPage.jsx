import React from 'react';
import {
  Typography, Table, TableHead, TableRow, TableCell, Paper,
  Input, Box, FormControl, InputLabel, Grid, TableBody, Button, Icon, IconButton,
} from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


const columns = [
  { label: 'Facility', key: '' },
  { label: 'Request', key: '' },
  { label: 'Amount', key: '' },
  { label: 'Deadline', key: '' },
  { label: 'Contact person', key: '' },
  { label: '', key: '' },
];

const data = [
  {
    facility: 'Test', request: 'Request', amount: 500, deadline: '02/05/2020', contact: 'Jane Doe',
  },
  {
    facility: 'Test 2', request: 'Request', amount: 10000, deadline: '02/05/2020', contact: null,
  },
];

const DashboardPage = () => (
  <>
    <Box mb={4} display="flex" justifyContent="space-between">
      <Typography variant="h4">Dashboard</Typography>
      <Button color="primary" variant="contained">
        <Icon>add</Icon>
        {' '}
        Create Request
      </Button>
    </Box>
    <Box mb={2}>
      <Paper elevation={2}>
        <Box p={2}>
          <Typography variant="h5" gutterBottom>Filter</Typography>
          <Grid container spacing={2}>
            <Grid item xs>
              <FormControl>
                <InputLabel>Facility</InputLabel>
                <Input />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl>
                <InputLabel>Region</InputLabel>
                <Input />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker label="Deadline" onChange={() => {}} />
                </MuiPickersUtilsProvider>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
    <Paper elevation={2}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((c) => <TableCell>{c.label}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x) => (
            <TableRow>
              <TableCell>{x.facility}</TableCell>
              <TableCell>{x.request}</TableCell>
              <TableCell>{x.amount}</TableCell>
              <TableCell>{x.deadline}</TableCell>
              <TableCell>
                {x.contact || (
                <Button color="secondary" variant="contained">
                  Assign
                </Button>
                )}
              </TableCell>
              <TableCell align="right">
                <IconButton variant="icon">
                  <Icon>edit</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </>
);
export default DashboardPage;
