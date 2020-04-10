import React from 'react';
import { Button } from '@material-ui/core';
import i18n from '../../i18n';
import { plusIcon } from '../../assets/icons';
import './JoinDropdown.css';

const { title } = i18n.header.joinDropdown;

const JoinDropdown = () => {
  return (
    <div>
      <Button aria-haspopup="true">
        {plusIcon}
        <span className="joinDropdownTitle">{title}</span>
      </Button>
    </div>
  );
};

export default JoinDropdown;
