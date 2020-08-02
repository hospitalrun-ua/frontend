import React from 'react';
import {useTooltipStyles} from './style';

const Tooltip = ({item}) => {

  const classes = useTooltipStyles({y: item.position.y, x: item.position.x});

  return (
    <div
      className={classes.tooltip}
    >
      <div className={classes.container}>
        {item.properties.name}
      </div>
    </div>
  );
};
export default Tooltip;
