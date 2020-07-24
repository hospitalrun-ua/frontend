import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core';
import { Email, PhoneIphone, Link as LinkIcon } from '@material-ui/icons';

import PersonAvatar from '../PersonAvatar';

import LinkWithIcon from './LinkWithIcon';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    width: '300px',
  },
  avatar: {
    marginTop: theme.spacing(3),
    border: '2px solid #fff',
  },
  nameWrapper: {
    height: `${90 - theme.spacing(1)}px`,
    background: theme.palette.primary.main,
    boxShadow: `
      -100px -100px 0 100px ${theme.palette.primary.main},
      100px -100px 0 100px ${theme.palette.primary.main};
    `,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    paddingTop: theme.spacing(1),
    lineHeight: '24px',
  },
}));

const PersonCard = ({ person }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <PersonAvatar
            className={classes.avatar}
            src={person.avatarUrl}
            name={person.name}
            size="large"
          />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Grid container className={classes.nameWrapper}>
            <Typography className={classes.name} noWrap>
              {person.name}
            </Typography>
          </Grid>
          <LinkWithIcon
            href={`mailto:${person.email}`}
            label={person.email}
            icon={Email}
          />
          <LinkWithIcon
            href={`tel:${person.email}`}
            label={person.phone}
            icon={PhoneIphone}
          />
          {/* TODO: Prepare website link if they aren't validated on backend (without protocols) */}
          <LinkWithIcon
            href={person.website}
            label={person.website}
            icon={LinkIcon}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

PersonCard.defaultProps = {
  person: {},
};

PersonCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    // TODO: Set proper name, after it defined on backend side;
    avatarUrl: PropTypes.string,
  }),
};

export default PersonCard;
