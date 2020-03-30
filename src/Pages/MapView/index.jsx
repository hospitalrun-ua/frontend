import React from 'react';

import Map from './components/Map';
import HospitalListSection from './components/HospitalListSection';
import { hospitals } from './mocks';

// TODO:
// import {useCityByLocation, useLocationByCity} from './hooks'

const MapView = () => {
  // TODO:
  // propose to implement logic via hooks to incapsulate logic
  // const [city, getCityByLocation] = useCityByLocation();
  // const [location, getLocationByCity] = useLocationByCity();

  return (
    <div className="map-wrapper">
      <Map />
      <HospitalListSection hospitals={hospitals} />
    </div>
  );
};

export default MapView;
