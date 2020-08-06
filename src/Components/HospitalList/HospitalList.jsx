import React, { useState, useEffect, useRef } from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
} from '@material-ui/core';
import { VolunteerJoin } from '../Modal';
import PersonCell from '../PersonCell';
import TableFilter from '../../Components/TableFilter/TableFilter';

const columns = [
  { label: 'Facility', key: '' },
  { label: 'Request', key: '' },
  { label: 'Amount', key: '' },
  { label: 'Deadline', key: '' },
  { label: 'Contact person', key: '' },
  { label: '', key: '' },
];
const apiUrl =
  'https://hospitalrunstaging.eba-yqyr2bp5.eu-west-1.elasticbeanstalk.com/api';

const HospitalList = () => {
  const [requests, setRequests] = useState([]);

  const getData = () => {
    fetch(`${apiUrl}/resources`)
      .then((x) => x.json())
      .then((x) => x.list.filter((a) => a.name))
      .then((x) => {
        setRequests([...x]);
      });
  };

  const [showAppModal, handleAppModal] = useState(false);
  const [requestId, setRequestId] = useState(null);

  const toggleModal = () => {
    handleAppModal(!showAppModal);
  };

  const init = useRef(false);
  useEffect(() => {
    if (!init.current) {
      getData();
      init.current = true;
    }
  }, [init]);

  return (
    <Paper elevation={2}>
      <TableFilter />
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.label}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.beneficiary.name}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.quantity}</TableCell>
              <TableCell>{data.deadline}</TableCell>
              <TableCell>
                <PersonCell person={data.contactPerson} />
              </TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    setRequestId(data.id);
                    toggleModal(true);
                  }}
                >
                  Apply
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <VolunteerJoin open={showAppModal} id={requestId} onClose={toggleModal} />
    </Paper>
  );
};

export default HospitalList;
