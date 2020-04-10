import React, { useState, useEffect, useRef } from 'react';
import {
  Typography, Table, TableHead, TableRow, TableCell, Paper,
  Input, Box, FormControl, InputLabel, TableBody, Button, Icon, IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem,
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

const DashboardPage = () => {
  const [selectedFacilityId, setSelectedFacilityId] = useState('');
  const [selectedContactId, setSelectedContactId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [facilities, setFacilites] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(0);
  const selectedFacility = facilities.find((x) => x.name === selectedFacilityId);
  const selectedContact = contacts.find((x) => x.name === selectedContactId);

  const getData = () => {
    fetch('http://localhost:3001/api/resources')
      .then((x) => x.json())
      .then((x) => {
        setRequests(x.list);
        const facilitiesX = x.list
          .reduce((res, next) => res.set(next.beneficiary.name, next.beneficiary), new Map());
        setFacilites([...facilitiesX.values()]);

        const contactsX = x.list
          .reduce((res, next) => res.set(next.contactPerson.name, next.contactPerson), new Map());
        setContacts([...contactsX.values()]);

        const categoriesX = x.list
          .reduce((res, next) => res.set(next.name, next.name), new Map());
        setCategories([...categoriesX.values()]);
      });
  };
  const init = useRef(false);
  useEffect(() => {
    console.log(init);
    if (!init.current) {
      getData();
      init.current = true;
    }
  }, [init]);

  const submit = () => {
    const req = {
      beneficiary: selectedFacility,
      contactPerson: selectedContact,
      items: [{
        name: selectedCategory,
        quantity: parseInt(amount, 10),
      }],
    };

    fetch('http://localhost:3001/api/resources', {
      method: 'POST',
      body: JSON.stringify(req),
    }).then((() => getData()));
  };

  return (
    <>
      <Box mb={4} display="flex" justifyContent="space-between">
        <Typography variant="h4">Dashboard</Typography>
        <Button color="primary" variant="contained" onClick={() => setModalOpen(true)}>
          <Icon>add</Icon>
          {' '}
          Create Request
        </Button>
      </Box>
      {/* <Box mb={2}>
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
      </Box> */}
      <Paper elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((c) => <TableCell key={c.label}>{c.label}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((x) => (
              <TableRow key={x.key}>
                <TableCell>{x.beneficiary.name}</TableCell>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.quantity}</TableCell>
                <TableCell>{x.deadline}</TableCell>
                <TableCell>
                  {x.contactPerson ? x.contactPerson.name : (
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

      <Dialog open={modalOpen} fullWidth>
        <DialogTitle>New Request</DialogTitle>
        <DialogContent>
          <Box mb={2}>
            <FormControl fullWidth>
              <InputLabel>Facility</InputLabel>
              <Select
                value={selectedFacilityId}
                fullWidth
                onChange={({ target: { value } }) => setSelectedFacilityId(value)}
              >
                {facilities.map((x) => <MenuItem key={x.name} value={x.name}>{x.name}</MenuItem>)}
              </Select>
            </FormControl>
            {
              selectedFacilityId
                ? (
                  <>
                    <Typography color="textSecondary" variant="subtitle1">{selectedFacility.name}</Typography>
                    <Typography color="textSecondary" variant="subtitle2">{selectedFacility.address}</Typography>
                  </>
                ) : null
            }
          </Box>
          <Box mb={2}>
            <FormControl fullWidth>
              <InputLabel>Contact person</InputLabel>
              <Select
                value={selectedContactId}
                fullWidth
                onChange={({ target: { value } }) => setSelectedContactId(value)}
              >
                {contacts.map((x) => <MenuItem key={x.name} value={x.name}>{x.name}</MenuItem>)}
              </Select>
            </FormControl>
            {
              selectedContactId
                ? (
                  <>
                    <Typography color="textSecondary" variant="subtitle1">{selectedContact.name}</Typography>
                    <Typography color="textSecondary" variant="subtitle2">{selectedContact.phone}</Typography>
                  </>
                ) : null
            }
          </Box>
          <Typography variant="h6">Request</Typography>
          <Box mb={2}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                fullWidth
                onChange={({ target: { value } }) => setSelectedCategory(value)}
              >
                {categories.map((x) => <MenuItem key={x} value={x}>{x}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl fullWidth>
              <InputLabel>Amount</InputLabel>
              <Input value={amount} onChange={(({ target: { value } }) => setAmount(value))} />
            </FormControl>
          </Box>
          <Box mb={2}>
            <FormControl fullWidth>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker fullWidth label="Deadline" onChange={() => {}} />
              </MuiPickersUtilsProvider>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              submit();
              setModalOpen(false);
            }}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default DashboardPage;
