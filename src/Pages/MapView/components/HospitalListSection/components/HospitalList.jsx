import React from 'react';
import { Divider } from '@material-ui/core';

import ListItem from './ListItem';

const withScroll = { overflow: 'auto' };

const HospitalList = ({ hospitals }) => {
  const showDeviderIfNotLast = (index) =>
    index !== hospitals.length - 1 ? <Divider /> : null;

  return (
    <div style={withScroll}>
      <div>
        {hospitals &&
          hospitals.length > 0 &&
          hospitals.map((h, index) => (
            <>
              <ListItem hospital={h} />
              {showDeviderIfNotLast(index)}
            </>
          ))}
      </div>
    </div>
  );
};

export default HospitalList;
