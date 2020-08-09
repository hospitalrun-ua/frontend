import React, { useState } from 'react';
import { markerIcon } from '../../assets/icons';
import MapPopup from '../MapPopup';
import i18n from '../../i18n';
import './CityChoice.css';


const { cityChoice } = i18n.header;

const CityChoice = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="cityChoiceWrap">
        {markerIcon}
        <span onClick={handleClick} className="cityChoiceTitle">{cityChoice}</span>
      </div>
      <MapPopup anchorEl={anchorEl} handleClose={handleClose} />
    </>
  )
};

export default CityChoice;
