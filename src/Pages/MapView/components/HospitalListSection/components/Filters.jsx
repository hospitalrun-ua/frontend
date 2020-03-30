import React from 'react';
import { Divider, Typography, Box } from '@material-ui/core';

const Filters = () => {
  return (
    <>
      <Box px={3} py={2} bgcolor="background.paper">
        <div></div>
        <Typography variant="h5" color="textSecondary">
          Filters
        </Typography>
      </Box>
      <Divider />
    </>
  );
};

export default Filters;
