import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const initialState = {
  values: {
    company: "Compañia",
    nit: 0,
    acumulated_utilities: 400000000,
    administrative_expenses: 900000000,
    cash_n_investments: 0,
    cost_revenue: 2000000000,
    current_assets: 1600000000,
    current_liabilities: 1000000000,
    net_income: 1000000000,
    nonCurrent_liabilities: 800000000,
    operating_expenses: 100000000,
    previous_income: 4000000000,
    previous_net_income: 700000000,
    research_market: 150000000,
    total_assets: 2500000000,
    total_revenue: 5000000000,
    employeers: 125
  },
  complete: false,
  loading: true,
  ratios: {},
  ratios_services: {},
  ratios_internet: {},
  ratios_software: {},
  ratios_less: {}
};

function benchmark(state = initialState, action ) {
  switch(action.type) {
  case 'LOADING':
    return Object.assign({}, state, { loading: true });
  case 'LOAD_VALUES':
    return Object.assign({}, state, { values: action.playload, complete: true, loading: false });
  case 'LOAD_RATIOS':
    return Object.assign({}, state, {
      ratios: action.playload.ratios,
      ratios_services: action.playload.ratios_services,
      ratios_internet: action.playload.ratios_internet,
      ratios_software: action.playload.ratios_software,
      ratios_less: action.playload.ratios_less,
      complete: true,
      loading: false });
  default:
    return state;
  }
}

const appReducer = combineReducers({
  form,
  benchmark
});

export default function (state, action) {
  return appReducer(state, action);
}
