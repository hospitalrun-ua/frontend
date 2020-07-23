import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    maxWidth: '100%',
  },
  iconButton: {
    maxWidth: '100%',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  label: {
    fontSize: '14px',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
  },
}));

const LinkWithIcon = ({ label, href, icon: Icon }) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.root}
      target="_top"
      rel="noopener noreferrer"
      href={href}
    >
      <IconButton
        className={classes.iconButton}
        color="primary"
        size="small"
        disableRipple
      >
        <Icon />
        <Typography className={classes.label} noWrap>
          {label}
        </Typography>
      </IconButton>
    </Link>
  );
};

LinkWithIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LinkWithIcon;
