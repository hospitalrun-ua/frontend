import React from "react";

import Filters from "./components/Filters";
import HospitalList from "./components/HospitalList";
import "./style.css";

const HospitalListSection = () => {
  return (
    <div className="hospital-list">
      <Filters />
      <HospitalList />
    </div>
  );
};

export default HospitalListSection;
