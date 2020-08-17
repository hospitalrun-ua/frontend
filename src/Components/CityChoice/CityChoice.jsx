import React from 'react';
import { markerIcon } from '../../assets/icons';
import i18n from '../../i18n';
import './CityChoice.css';

const { cityChoice } = i18n.header;

const CityChoice = () => {
  return (
    <div className="cityChoiceWrap">
      {markerIcon}
      <span className="cityChoiceTitle">{cityChoice}</span>
    </div>
  )
};

export default CityChoice;
