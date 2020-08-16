import { makeStyles } from '@material-ui/core/styles';

export const useMapPopupStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPopover-paper': {
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)'
    },
  },
  heading: {
    color: '#F7685B',
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.spacing(2),
    lineHeight: '16px',
  },
  divider: {
    margin: theme.spacing(1.75, 0),
    backgroundColor: '#EBEFF2'
  },
  casesListItem: {
    color: '#192A3E',
    padding: 0
  },
  casesListItemText: {
    fontWeight: 600,
    fontSize: theme.spacing(1.25),
    lineHeight: '12px',
  },
  casesListItemTextCount: {
    textAlign: 'right',
    fontSize: theme.spacing(1.25),
    lineHeight: '12px',
  },
  medicineList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: theme.spacing(1.5),
    '& li': {
      padding: 0,
    }
  },
  listItemIcon: {
    flexShrink: 0,
    width: '24px',
    height: '24px',
    marginRight: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: '#109CF1',
  }
}));

export const primaryTypographyStyle = {
  fontSize: '10px',
  color: '#192A3E'
};

export const secondaryTypographyStyle = {
  fontSize: '10px',
  color: '#109CF1'
};