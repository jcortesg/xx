import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const initialState = {
  posts: [],
  categories: [],
  post: false,
  loading: true
};

function posts(state = initialState, action ) {
  switch(action.type) {
  case 'LOADING':
    return Object.assign({}, state, { loading: true });
  case 'LOAD_POSTS':
    return Object.assign({}, state, { posts: action.playload, loading: false });
  case 'LOAD_POST':
    return Object.assign({}, state, { post: action.playload, loading: false });
  case 'LOAD_CATEGORY':
    return Object.assign({}, state, { categories: action.playload, loading: false });
  default:
    return state;
  }
}

const appReducer = combineReducers({
  form,
  posts
});

export default function (state, action) {
  return appReducer(state, action);
}
