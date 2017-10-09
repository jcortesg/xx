import api from '../../utils/request.js';

export function loadPosts() {
  return (dispatch) => {
    // Show the loading indicator
    dispatch(sendingRequest(true))
    api.fetch(`/posts/`)
      .then((response) => {
        dispatch({ type: 'LOAD_POSTS', playload: response.data });
      }).catch((err) => (console.log(err)));
  }
}

export function savePost(values) {
  return (dispatch) => {
    // Show the loading indicator
    dispatch(sendingRequest(true))
    api.post(`/posts/`, {post: values})
      .then((response) => {
        dispatch({ type: 'SAVE_POST', playload: response.data });
      }).catch((err) => (console.log(err)));
  }
}

export function sendingRequest(sending) {
  return { type: 'SENDING_REQUEST', sending };
}
