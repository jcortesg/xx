import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const initialState = {
  batteries: [],
  loading: true
};

function indicators(state = initialState, action ) {
  switch(action.type) {
  case 'LOAD_BATTERIES':
    return Object.assign({}, state, { batteries: action.playload, loading: false });
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
