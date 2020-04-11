import React from 'react';
import { Box } from '@material-ui/core';
import { markerIcon } from '../../assets/icons';
import i18n from '../../i18n';

const { cityChoice } = i18n.header;

const CityChoice = () => (
  <Box display="flex" alignItems="center">
    {markerIcon}
    <Box ml={2} component="span">{cityChoice}</Box>
  </Box>
);

export default CityChoice;
