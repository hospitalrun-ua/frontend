import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Popover, Typography, Box, Divider, List, ListItem, ListItemText, CssBaseline } from '@material-ui/core';
import { useMapPopupStyles } from './styles';
import i18n from '../../i18n';
const { mapPopup } = i18n;

const MapPopup = memo(({ anchorEl, handleClose, elevation, ...popupProps }) => {
  const classes = useMapPopupStyles();

  return (
    <Popover
      className={classes.root}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      getContentAnchorEl={null}
      onClose={handleClose}
      elevation='0'
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...popupProps}
    >
      <Box display='flex' flexDirection='column' p={2}>
        <Box display='flex' justifyContent='space-between' minWidth='200px' >
          <Typography className={classes.heading}>Київ</Typography>
          <Typography className={classes.heading}>13</Typography>
        </Box>
        <Box display='flex' height='34px' width='100%' py={1.75}>
          <Box height='6px' width="calc(13 * (100% - 12px) / (13 + 8 + 1))" mr={0.75} borderRadius={18} bgcolor='#FEAA53' />
          <Box height='6px' width="calc(8 * (100% - 12px) / (13 + 8 + 1))" mr={0.75} borderRadius={18} bgcolor='#2ED47A' />
          <Box height='6px' width="calc(1 * (100% - 12px) / (13 + 8 + 1))" borderRadius={18} bgcolor='#707683' />
        </Box>
        <Box>
          <List disablePadding>
            <ListItem disableGutters className={classes.listItem}>
              <Box height='8px' width='8px' mr={1} borderRadius='50%' bgcolor='#FEAA53' />
              <ListItemText disableTypography className={classes.listItemText}>Захворіло</ListItemText>
              <ListItemText disableTypography className={classes.listItemTextCount}>13</ListItemText>
            </ListItem>
            <ListItem disableGutters className={classes.listItem}>
              <Box height='8px' width='8px' mr={1} borderRadius='50%' bgcolor='#2ED47A' />
              <ListItemText disableTypography className={classes.listItemText}>Одужало</ListItemText>
              <ListItemText disableTypography className={classes.listItemTextCount}>8</ListItemText>
            </ListItem>
            <ListItem disableGutters className={classes.listItem}>
              <Box height='8px' width='8px' mr={1} borderRadius='50%' bgcolor='#707683' />
              <ListItemText disableTypography className={classes.listItemText}>Померло</ListItemText>
              <ListItemText disableTypography className={classes.listItemTextCount}>1</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Divider className={classes.divider} />
        <Box><Typography>Needs</Typography></Box>
      </Box>
    </Popover >
  );
});

MapPopup.propTypes = {
  anchorEl: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  regionInfo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cases: PropTypes.number,
    recovered: PropTypes.number,
    deaths: PropTypes.number
  }),
  needs: PropTypes.arrayOf(PropTypes.object)
};

MapPopup.defaultProps = {
  regionInfo: {
    id: 0,
    title: '',
    cases: null,
    recovered: null,
    deaths: null
  },
  needs: [
    {
      id: 1,
      type: 'Tests',
      count: 0
    },
    {
      id: 2,
      type: 'Medicine',
      count: 0
    }
  ]
};

export default MapPopup;