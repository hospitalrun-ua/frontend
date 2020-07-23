import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList
} from '@material-ui/core';

import i18n from '../../i18n';
import { plusIcon } from '../../assets/icons';

const { title, options } = i18n.header.joinDropdown;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function JoinDropdown({ toggleModal }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleCloseAndModal = (event) => {
    handleClose(event);
    toggleModal();
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // Return focus to the button when we transitioned from !open -> open.
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {plusIcon}
          <Box component="span" ml={1}>{title}</Box>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>{options[0]}</MenuItem>
                    <MenuItem onClick={handleCloseAndModal}>{options[1]}</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
  );
}
