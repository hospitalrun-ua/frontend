import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import Tooltip from './Tooltip';
import MapPopup from '../MapPopup'

const width = 1000;
const height = 600;
const padding = 20;

const Map = () => {
  const [json, setJson] = useState();
  const [hovered, handleHover] = useState();
  const [regionName, setRegionName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (item, event) => {
    setRegionName(item.properties.name)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    async function load() {
      const data = await import(`./geo.json`);
      setJson(data);
    }

    load();
  }, []);

  const projection = d3.geoMercator().fitExtent(
    [
      [padding, padding],
      [width - padding, height - padding],
    ],
    json,
  );
  const pathGenerator = d3.geoPath().projection(projection);

  const onHover = item => {
    const coords = item.geometry.coordinates[0][0];
    const [x, y] = projection(coords);
    handleHover({ ...item, position: { x, y } });
  };

  return (
    <>
      <svg width={width} height={height}>
        <g>
          {json &&
            json.features.map(item => (
              <path
                key={item.properties['iso3166-2']}
                d={pathGenerator(item)}
                fill={item.properties.name === hovered?.properties?.name ? '#F8675B' : '#C3CDD9'}
                stroke={'white'}
                onMouseOver={() => onHover(item)}
                onMouseLeave={() => handleHover(null)}
                onClick={(e) => handleClick(item, e)}
              ></path>
            ))}
        </g>
        {hovered && (
          <foreignObject
            width={600}
            height={400}
            style={{ pointerEvents: 'none', overflow: 'visible', position: 'relative' }}
          >
            <Tooltip item={hovered} />
          </foreignObject>
        )}
      </svg>
      <MapPopup anchorEl={anchorEl} regionName={regionName} handleClose={handleClose} />
    </>
  );
};

export default Map;

