import api from '../../utils/request.js';

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

export function saveBattery(values){
  return (dispatch) => api.post(`/batteries/`, { battery: values })
    .then((res) => {
      window.location.replace(`/admin/batteries/${res.data.id}`)
    })
}

export function saveDataset(batteryId, values){
  return (dispatch) => api.post(`/batteries/${batteryId}/datasets`, { dataset: values })
    .then((res) => {
      window.location.replace(`/admin/batteries/${batteryId}`)
    })
}

export function loadCategories(){
  return (dispatch) => api.fetch(`/categories/0`)
    .then((res) => {
      dispatch({type: 'LOAD_CATEGORY', playload: res.data})
    })
}
