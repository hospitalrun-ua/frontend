import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import i18n from '../../i18n';


const { hospitalTableFilter } = i18n;

const styles = {
  formControl: {
    display: 'flex',
    flex: '1 1 auto',
    padding: '0 8px 0'
  },
  grid: {
    padding: '24px 8px 24px'
  },
  gridItem: {
    maxWidth: '20%'
  },
  inputLabel: {
    position: 'static',
    textTransform: 'uppercase',
    transform: 'None'
  },
  select: {
    borderRadius: '4px!important',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    height: '50px',
    padding: '8px 24px 8px 8px'
  },
  dataPicker: {
    borderRadius: '4px!important',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    height: '50px',
    marginBottom: 0,
    padding: '8px 0 8px 8px'
  }
};

class TableFilter extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;

    this.filterIds = [
      'institution',
      'category',
      'cityRegion',
      'status',
      'deadline'
    ];

    let state = {};
    this.filterIds.forEach(filter => {
      state[filter] = hospitalTableFilter.all;
    });
    state['deadline'] = new Date();
    this.state = state;

    // mock data for diplay purposes
    this.filterOptions = {
      'institution': [
        hospitalTableFilter.all,
        'КНП «ЦРЛ Києво-Святошинської районної ради»',
        'ОКСФОРД МЕДІКАЛ, ПРИВАТНА МЕДИЧНА КЛІНІКА',
        'ДЕРМАТО-КОСМЕТОЛОГІЧНИЙ ЦЕНТР',
        'Медик Плюс, ПП',
        'Луцька міська клінічна лікарня'
      ],
      'category': [
        hospitalTableFilter.all,
        'N/A'],
      'cityRegion': [
        hospitalTableFilter.all,
        'Боярка',
        'Львів',
        'Луцьк',
        'Харків'
      ],
      'status': [
        hospitalTableFilter.all,
        'Open',
        'Closed'
      ]
    }
  }

  handleFilterChange = (filterId, event) => {
    let newState = Object.assign({}, this.state);
    newState[filterId] = event.target.value;
    this.setState(newState);
  };

  handleDateChange = (id, date) => {
    let newState = Object.assign({}, this.state);
    newState[id] = date;
    this.setState(newState);
  };

  renderFilter = (id) => {
    let selector;

    if (id !== 'deadline') {
      const menuItems = this.filterOptions[id].map(
        item => {
          return (<MenuItem value={item}>{item}</MenuItem>);
        }
      );

      selector = (
        <Select
          labelId={`${id}-select-label`}
          id={`${id}-select`}
          className={this.classes.select}
          value={this.state[id]}
          onChange={e => this.handleFilterChange(id, e)}
        >
          {menuItems}
        </Select>)
    } else {
      selector = (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id={`${id}-select`}
            value={this.state[id]}
            onChange={date => this.handleDateChange(id, date)}
            className={this.classes.dataPicker}
            KeyboardButtonProps={{
              'aria-label': 'change deadline',
            }}
          />
        </MuiPickersUtilsProvider>
      );
    }

    return (
      <Grid item xs className={this.classes.gridItem}>
        <FormControl className={this.classes.formControl}>
          <InputLabel
            id={`${id}-select-label`}
            className={this.classes.inputLabel}
          >{hospitalTableFilter[id]}</InputLabel>
          {selector}
        </FormControl>
      </Grid>
    );
  };

  render() {
    const filterComponents = this.filterIds.map(
      id => this.renderFilter(id)
    );

    return (
      <Grid
        container
        boxShadow={5}
        direction="row"
        justify="space-between"
        className={this.classes.grid}
      >
        {filterComponents}
      </Grid>
    );
  }
}

export default withStyles(styles)(TableFilter);
