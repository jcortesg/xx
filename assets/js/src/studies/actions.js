import api from '../utils/request.js';

export function loadPosts(search) {
  return (dispatch) => {
    api.fetch(`/posts`, search)
      .then((response) => {
        dispatch({ type: 'LOAD_POSTS', playload: response.data });
      }).catch((err) => (console.log(err)));
  }
}

export function loadPost(id){
  return(dispatch) =>{
    dispatch({type: 'LOADING'})
    api.fetch(`/posts/`+id)
      .then((res) => {
        dispatch({type: 'LOAD_POST', playload: res.data})
      })
  }
}
