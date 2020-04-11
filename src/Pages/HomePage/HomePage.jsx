import React, { useState } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import HospitalList from '../../Components/HospitalList/HospitalList';
import Header from '../../Components/Header/Header';

const HomePage = () => (
  <div>
    <Header />
    <Container>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>Actual requests</Typography>
        <HospitalList />
      </Box>
    </Container>
  </div>
);

export default HomePage;
