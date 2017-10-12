import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const initialState = {
  values: [],
  complete: false,
  loading: true
};

function benchmark(state = initialState, action ) {
  switch(action.type) {
  case 'LOADING':
    return Object.assign({}, state, { loading: true });
  case 'LOAD_VALUES':
    return Object.assign({}, state, { values: action.playload, complete: true });
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
