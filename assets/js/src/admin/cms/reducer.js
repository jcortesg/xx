const assign = Object.assign;

const initialState = {
  categories: [],
  posts: [],
  post: {
    title: "",
    decription: ""
  },
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
  case 'RESET_POST':
    return Object.assign({}, state, { post: {} });
  case 'LOAD_POST':
    return Object.assign({}, state, { post: action.playload, loading: false });
  default:
    return state;
  }
}
