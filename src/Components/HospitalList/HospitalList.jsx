import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
} from '@material-ui/core';

const columns = [
  { label: 'Facility', key: '' },
  { label: 'Request', key: '' },
  { label: 'Amount', key: '' },
  { label: 'Deadline', key: '' },
  { label: 'Contact person', key: '' },
  { label: '', key: '' },
];

const HospitalList = () => {
  const [hasError, setErrors] = useState(false); // @TODO: Handle the errors.
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // @TODO: Use it!

  async function fetchData() {
    const res = await fetch('http://localhost:3001/api/resources');
    res
      .json()
      .then(res => setRequests(res.list))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <Paper elevation={2}>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map(col => (
                <TableCell key={col.label}>{col.label}</TableCell>)
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map(data => (
            <TableRow key={data.id}>
              <TableCell>{data.beneficiary.name}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.quantity}</TableCell>
              <TableCell>{data.deadline}</TableCell>
              <TableCell>
                {data.contactPerson ? data.contactPerson.name : (
                  <Button color="secondary" variant="contained">
                    Assign
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default HospitalList;
