import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getModalStyle } from './'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const VolunteerJoin = ({ open, onClose }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    help: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const handleSubmit = event =>
    console.log(formData)

  const { firstName, lastName, phone, help } = formData;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Request for volunteers</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label='First name'
            value={firstName}
            name='firstName'
            onChange={updateFormData}
            fullWidth
          />
          <TextField
            label='Last name'
            value={lastName}
            name='lastName'
            onChange={updateFormData}
            fullWidth
          />
          <TextField
            label='Phone'
            value={phone}
            name='phone'
            onChange={updateFormData}
            fullWidth
          />
          <TextField
            label='How can I help?'
            value={help}
            name='help'
            onChange={updateFormData}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  )
}

export default VolunteerJoin;
