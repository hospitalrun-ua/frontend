import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import HospitalList from '../../Components/HospitalList/HospitalList';
import Header from '../../Components/Header/Header';
import { VolunteerJoin } from '../../Components/Modal';

const HomePage = () => {
  const [showAppModal, handleAppModal] = useState(false);

  const toggleModal = () => {
    handleAppModal(!showAppModal)
  }

  return (
    <div>
      <Header toggleModal={toggleModal} />
      <Container>
        <HospitalList />
      </Container>
      <VolunteerJoin open={showAppModal} onClose={toggleModal} />
    </div>
  );
}

export default HomePage;
