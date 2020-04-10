import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import HospitalList from '../../Components/HospitalList/HospitalList';
import fetchHospitalInfo from '../../API/Hospitals';

function HomePage() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetchHospitalInfo()
      .then(setHospitals);
  }, []);

  return (
    <Box>
      <HospitalList hospitals={hospitals} />
    </Box>
  );
}

export default HomePage;
