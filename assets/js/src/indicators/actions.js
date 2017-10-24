import api from '../../src/utils/request.js'

export function loadBatteries(search) {
  return (dispatch) => api.fetch(`/batteries/`, search)
    .then((response) => {
      dispatch({ type: 'LOAD_BATTERIES', playload: response.data });
    });
}

export function loadBattery(id){
  return(dispatch) => api.fetch(`/batteries/`+id)
    .then((res) => {
      dispatch({type: 'LOAD_BATTERY', playload: res.data})
    })
}

export function loadCategories(){
  return (dispatch) =>{
    dispatch({type: 'LOADING'})
    api.fetch(`/categories`)
      .then((res) => {
        dispatch({type: 'LOAD_CATEGORY', playload: res.data})
      })
  }
}
