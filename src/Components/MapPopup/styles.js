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
  listItem: {
    color: '#192A3E',
    padding: 0
  },
  listItemText: {
    fontWeight: 600,
    fontSize: theme.spacing(1.25),
    lineHeight: '12px',
  },
  listItemTextCount: {
    textAlign: 'right',
    fontSize: theme.spacing(1.25),
    lineHeight: '12px',
  },
}));
