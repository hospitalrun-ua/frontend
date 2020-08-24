import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Popover, Typography, Box, Divider, List, ListItem, ListItemText, SvgIcon } from '@material-ui/core';
import { medicineIcons } from '../../assets/icons';
import { useMapPopupStyles, primaryTypographyStyle, secondaryTypographyStyle } from './styles';
import i18n from '../../i18n';

import mockData from './mockData.json';

const { mapPopup, medicine } = i18n;

const MapPopup = memo(({ anchorEl, regionName, handleClose, elevation, ...popupProps }) => {
  const classes = useMapPopupStyles();
  const { region, needs } = mockData;

  const calculateProgressBarWidth = (mainParameter, ...other) => `${mainParameter} * (100% - 12px) / (${mainParameter} + ${other[0]} + ${other[1]})`

  return (
    <Popover
      className={classes.root}
      anchorEl={anchorEl}
      open={!!anchorEl}
      getContentAnchorEl={null}
      onClose={handleClose}
      elevation={0}
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
          <Typography className={classes.heading}>{regionName || '-'}</Typography>
          <Box ml={2}>
            <Typography className={classes.heading}>{region?.cases || '-'}</Typography>
          </Box>
        </Box>
        <Box display='flex' height='34px' width='100%' py={1.75}>
          <Box height='6px' width={`calc(${calculateProgressBarWidth(region?.cases, region?.recovered, region?.deaths)})`} mr={0.75} borderRadius={18} bgcolor='#FEAA53' />
          <Box height='6px' width={`calc(${calculateProgressBarWidth(region?.recovered, region?.cases, region?.deaths)})`} mr={0.75} borderRadius={18} bgcolor='#2ED47A' />
          <Box height='6px' width={`calc(${calculateProgressBarWidth(region?.deaths, region?.cases, region?.recovered)})`} borderRadius={18} bgcolor='#707683' />
        </Box>
        <Box>
          <List disablePadding>
            <ListItem disableGutters className={classes.casesListItem}>
              <Box height='8px' width='8px' mr={1} borderRadius='50%' bgcolor='#FEAA53' />
              <ListItemText disableTypography className={classes.casesListItemText}>{mapPopup.cases}</ListItemText>
              <ListItemText disableTypography className={classes.casesListItemTextCount}>{region?.cases || '-'}</ListItemText>
            </ListItem>
            <ListItem disableGutters className={classes.casesListItem}>
              <Box height='8px' width='8px' mr={1} borderRadius='50%' bgcolor='#2ED47A' />
              <ListItemText disableTypography className={classes.casesListItemText}>{mapPopup.recovered}</ListItemText>
              <ListItemText disableTypography className={classes.casesListItemTextCount}>{region?.recovered || '-'}</ListItemText>
            </ListItem>
            <ListItem disableGutters className={classes.casesListItem}>
              <Box height='8px' width='8px' mr={1} borderRadius='50%' bgcolor='#707683' />
              <ListItemText disableTypography className={classes.casesListItemText}>{mapPopup.deaths}</ListItemText>
              <ListItemText disableTypography className={classes.casesListItemTextCount}>{region?.deaths || '-'}</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Divider className={classes.divider} />
        <Box>
          <List className={classes.medicineList} disablePadding>
            {needs?.map(item => (
              <ListItem key={item?.id || item?.type + item?.count} disableGutters>
                <SvgIcon viewBox='0 0 36 36' className={classes.listItemIcon}>
                  <path d={medicineIcons[item?.type.toLowerCase()] || medicineIcons.other} fill="white" />
                </SvgIcon>
                <ListItemText
                  primary={medicine[item?.type.toLowerCase()] || item?.type}
                  secondary={item?.count}
                  primaryTypographyProps={{ style: primaryTypographyStyle }}
                  secondaryTypographyProps={{ style: secondaryTypographyStyle }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Popover >
  );
});

MapPopup.propTypes = {
  anchorEl: PropTypes.oneOfType(PropTypes.bool, PropTypes.object),
  regionName: PropTypes.string,
  region: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cases: PropTypes.number,
    recovered: PropTypes.number,
    deaths: PropTypes.number,
  }),
  needs: PropTypes.arrayOf(PropTypes.object)
};

MapPopup.defaultProps = {
  anchorEl: null,
  regionName: '',
  handleClose: () => { },
  regionInfo: {
    id: 0,
    title: '',
    cases: null,
    recovered: null,
    deaths: null
  },
  regionNeeds: []
};

export default MapPopup;