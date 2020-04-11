import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import HospitalList from '../../Components/HospitalList/HospitalList';
import Header from '../../Components/Header/Header';

const HomePage = () => (
  <div>
    <Header />
    <Container>
      <HospitalList />
    </Container>
  </div>
);

export default HomePage;
