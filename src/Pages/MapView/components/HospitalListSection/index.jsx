import React from 'react';
import { Card, CardContent, Box } from '@material-ui/core';

import Filters from './components/Filters';
import HospitalList from './components/HospitalList';
import './style.css';

const HospitalListSection = ({ hospitals }) => {
  return (
    <Card className="hospital-list" elevation={3}>
      <CardContent className="hospital-list-card-content">
        <Box display="flex" flexDirection="column" height="100%">
          <Filters />
          <HospitalList hospitals={hospitals} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HospitalListSection;
