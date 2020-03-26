import React, { useState, useEffect } from 'react';
import HospitalList from '../Components/HospitalList/HospitalList';
import fetchHospitalInfo from '../API/Hospitals';

function App() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetchHospitalInfo()
      .then(setHospitals);
  }, []);

  return (
    <div>
      <HospitalList hospitals={hospitals} />
    </div>
  );
}

export default App;
