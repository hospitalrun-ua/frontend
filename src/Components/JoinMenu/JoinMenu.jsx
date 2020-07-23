import React from 'react';
import './JoinMenu.css';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Icon, Menu, MenuItem } from '@material-ui/core';
import { plusIcon } from '../../assets/icons';

const JoinMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button onClick={handleClick} className="join-button">
        {plusIcon}
        <span className="text">Долучитися</span>
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="join-menu"
        className="join-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className="join-menu-item">
          <Icon style={{ color: '#1540A4' }}>store</Icon>
          <span>Як Організація</span>
        </MenuItem>
        <MenuItem onClick={handleClose} className="join-menu-item">
          <Icon style={{ color: '#1540A4' }}>person</Icon>
          <span>Як Волонтер</span>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default JoinMenu;
