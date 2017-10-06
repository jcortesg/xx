import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const initialState = {
  batteries: [],
  battery:{
    datasets: []
  },
  categories: [],
  loading: true
};

function indicators(state = initialState, action ) {
  switch(action.type) {
  case 'LOADING':
    return Object.assign({}, state, { loading: true });
  case 'LOAD_BATTERIES':
    return Object.assign({}, state, { batteries: action.playload, loading: false });
  case 'LOAD_CATEGORY':
    return Object.assign({}, state, { categories: action.playload });
  case 'LOAD_BATTERY':
    return Object.assign({}, state, { battery: action.playload, loading: false });
  default:
    return state;
  }
}

const appReducer = combineReducers({
  form,
  indicators
});

export default function (state, action) {
  return appReducer(state, action);
}
