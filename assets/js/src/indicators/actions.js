import api from '../../src/utils/request.js'

export function loadBatteries() {
  return (dispatch) => api.fetch(`/batteries/`)
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
