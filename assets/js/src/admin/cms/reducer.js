const assign = Object.assign;

const initialState = {
  categories: [],
  posts: [],
  loading: true
};

export default function cms(state = initialState, action ) {
  switch(action.type) {
  case 'SENDING_REQUEST':
    return assign({}, state,  { loading: true });
  case 'LOAD_POSTS':
    return Object.assign({}, state, { posts: action.playload, loading: false });
  case 'LOAD_CATEGORY':
    return Object.assign({}, state, { categories: action.playload });
  case 'LOAD_BATTERY':
    return Object.assign({}, state, { battery: action.playload, loading: false });
  default:
    return state;
  }
}
