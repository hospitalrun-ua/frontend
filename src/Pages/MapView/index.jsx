import React, { useState, useRef } from "react";
// import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import "./style.css";

const initialPosition = {
  lat: 50.45372,
  lng: 30.503
};

const markers = [
  {
    id: 1,
    position: initialPosition
  }
];

const zoom = 17;
// const myIcon = L.icon({
//   iconUrl: "",
//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   popupAnchor: [0, -41]
// });

const MapScreen = () => {
  const [position, setPosition] = useState(initialPosition);
  const [hasLocation, setHasLocation] = useState(false);
  const mapRef = useRef();

  const handleMarkerClick = e => {
    const { latlng } = e;

    if (latlng) {
      setPosition(latlng);
    }
  };

  const handleLocationFound = e => {
    const { latlng } = e;
    if (latlng.lat && latlng.lng) {
      setHasLocation(true);
      setPosition(latlng);
    }
  };

  const handleMapClick = () => {
    const map = mapRef.current;
    if (map != null) {
      map.leafletElement.locate();
    }
  };

  return (
    <Map
      ref={mapRef}
      onLocationfound={handleLocationFound}
      animate={true}
      center={[position.lat, position.lng]}
      zoom={zoom}
      onClick={handleMapClick}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        // subdomains="abcd"

        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />

      {markers.length > 0 &&
        markers.map(m => (
          <Marker
            key={m.id}
            position={m.position}
            onClick={handleMarkerClick}
            //  icon={myIcon}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
    </Map>
  );
};

export default MapScreen;
