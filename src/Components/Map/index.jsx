import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';
import Tooltip from './Tooltip';

const width = 1000;
const height = 600;
const padding = 20;

const Map = () => {
  const [json, setJson] = useState();
  const [hovered, handleHover] = useState();

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
    handleHover({...item, position: {x, y}});
  };

  return (
    <svg width={width} height={height}>
      <g>
        {json &&
        json.features.map(item => (
          <path
            d={pathGenerator(item)}
            fill={item.properties.name === hovered?.properties?.name ? '#F8675B' : '#C3CDD9'}
            stroke={'white'}
            onMouseOver={() => onHover(item)}
            onMouseLeave={() => handleHover(null)}
          ></path>
        ))}
      </g>
      {hovered && (
        <foreignObject
          width={600}
          height={400}
          style={{pointerEvents: 'none', overflow: 'visible', position: 'relative'}}
        >
          <Tooltip item={hovered}/>
        </foreignObject>
      )}
    </svg>
  );
};

export default Map;

