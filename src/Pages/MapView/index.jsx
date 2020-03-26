import React from "react";

import Map from "./components/Map";
import HospitalListSection from "./components/HospitalListSection";

const MapView = () => {
  return (
    <div className="map-wrapper">
      <Map />
      <HospitalListSection />
    </div>
  );
};

export default MapView;
