import React from 'react';
import { Button, Typography, Chip, Grid, Box } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';

const chipOpenStyle = {
  backgroundColor: green[400],
};

const chipInProgressStyle = {
  backgroundColor: orange[400],
};

const chipClosedStyle = {
  backgroundColor: grey[400],
};

const text = {
  contacts: 'Контакти',
};

const statuses = {
  open: 'open',
  inprogress: 'inprogress',
  closed: 'closed',
};

const ListItem = ({ hospital }) => {
  const chipStyle = (status) => {
    switch (status) {
      case statuses.open:
        return chipOpenStyle;
      case statuses.inprogress:
        return chipInProgressStyle;
      default:
        return chipClosedStyle;
    }
  };

  return (
    <Box m={3} mt={2} bgcolor="background.paper">
      <Grid container>
        <Grid item xs={8}>
          <Chip
            label={hospital.status}
            style={chipStyle(hospital.status)}
            color="primary"
            size="small"
          />
        </Grid>
        <Grid item xs={4} align="right">
          <Button color="primary" href="#" size="small">
            {text.contacts}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="h2" lineHeight={5}>
            <Box lineHeight={1.25} my={1}>
              {hospital.name}
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body2" component="h2" color="textSecondary">
        {hospital.description}
      </Typography>
    </Box>
  );
};

export default ListItem;
