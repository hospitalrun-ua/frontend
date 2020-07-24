import React from 'react';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: '14px',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    fontSize: '24px',
  },
}));

const getInitialsFromName = (name) => {
  const [[firstName], [lastName]] = name.split(' ');

  return `${firstName}${lastName}`;
};

const PersonAvatar = ({ name, src, size, className, ...avatarProps }) => {
  const classes = useStyles();
  const avatarClasses = cx(classes.root, classes[size], className);

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Avatar className={avatarClasses} alt={name} src={src} {...avatarProps}>
        {getInitialsFromName(name)}
      </Avatar>
    </div>
  );
};

PersonAvatar.defaultProps = {
  src: '',
  size: 'small',
  name: 'A A',
  className: '',
};

PersonAvatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf('small', 'large'),
};

export default PersonAvatar;
