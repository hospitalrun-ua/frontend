import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import HospitalList from '../../Components/HospitalList/HospitalList';
import fetchHospitalInfo from '../../API/Hospitals';
import Header from '../../Components/Header/Header';

const HomePage = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetchHospitalInfo()
      .then(setHospitals);
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <HospitalList hospitals={hospitals} />
      </Container>
    </div>
  );
}

export default HomePage;
