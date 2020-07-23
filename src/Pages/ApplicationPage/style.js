import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  on_hold: {
    '&:focus': {
      backgroundColor: '#FFB946',
    },
    backgroundColor: '#FFB946',
  },
  in_progress: {
    '&:focus': {
      backgroundColor: '#0B9785',
    },
    backgroundColor: '#0B9785',
  },
  receieved: {
    '&:focus': {
      backgroundColor: '#F7685B',
    },
    backgroundColor: '#F7685B',
  },
  closed: {
    '&:focus': {
      backgroundColor: '#1540A4',
    },
    backgroundColor: '#1540A4',
  },
}));

export default useStyles;
