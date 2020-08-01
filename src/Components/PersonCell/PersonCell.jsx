import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Grid, makeStyles } from '@material-ui/core';
import PersonAvatar from '../PersonAvatar';
import PersonCard from '../PersonCard';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  popoverContent: {
    pointerEvents: 'auto',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const PersonCell = ({ person }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        spacing={2}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Grid item>
          <PersonAvatar src={person.avatarUrl} name={person.name} />
        </Grid>
        <Grid item xs>
          {person.name}
        </Grid>
      </Grid>
      <Popover
        id="mouse-over-popover"
        open={open}
        classes={{
          paper: classes.popoverContent,
        }}
        className={classes.popover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
          onMouseEnter: handlePopoverOpen,
          onMouseLeave: handlePopoverClose,
        }}
      >
        <PersonCard person={person} />
      </Popover>
    </div>
  );
};

PersonCell.defaultProps = {
  person: {},
};

PersonCell.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    // TODO: Set proper name, after it defined on backend side;
    avatarUrl: PropTypes.string,
  }),
};

export default PersonCell;
