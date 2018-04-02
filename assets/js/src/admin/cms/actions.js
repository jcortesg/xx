import api from '../../utils/request.js';

export function loadPosts() {
  return (dispatch) => {
    dispatch(sendingRequest(true))
    api.fetch(`/posts/`)
      .then((response) => {
        dispatch({ type: 'LOAD_POSTS', playload: response.data });
      }).catch((err) => (console.log(err)));
  }
}

export function loadPost(id){
  return(dispatch) => api.fetch(`/posts/`+id)
    .then((res) => {
      dispatch({type: 'LOAD_POST', playload: res.data})
    })
}

export function dropPost(postId){
  return(dispatch) =>{ 
    dispatch(sendingRequest(true))
    api.delete(`/posts/${postId}`)
    .then((res) => {
      dispatch(loadPosts())
    }).catch((err) => (console.log(err)));
  }
}

export function updatePost(id, values){
  return(dispatch) => api.patch(`/posts/`+id, {study: values})
    .then((res) => {
      dispatch({type: 'LOAD_POST', playload: res.data})
    })
}

export function savePost(values) {
  return (dispatch) => {
    // Show the loading indicator
    dispatch(sendingRequest(true))
    api.post(`/posts/`, {post: values})
      .then((response) => {
        dispatch({ type: 'SAVE_POST', playload: response.data });
        window.location.replace(`/admin/cms/${response.data.id}`)
      }).catch((err) => (console.log(err)));
  }
}

export function sendingRequest(sending) {
  return { type: 'SENDING_REQUEST', sending };
}

export function resetPost() {
  return { type: 'RESET_POST' };
}

export function loadCategories(){
  return (dispatch) =>{
    dispatch(sendingRequest(true))
    api.fetch(`/categories`)
    .then((res) => {
      console.log(res)
      dispatch({type: 'LOAD_CATEGORY', playload: res.data})
    })
  }
}


