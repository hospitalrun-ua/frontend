import { makeStyles } from '@material-ui/core/styles';

export const useMapStyles = makeStyles({});

export const useTooltipStyles = makeStyles({
  tooltip: {
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    padding: 15,
    position: 'absolute',
    top: ({ y }) => y,
    left: ({ x }) => x,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#F8675B',
  },
});
