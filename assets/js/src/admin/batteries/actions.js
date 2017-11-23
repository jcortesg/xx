import api from '../../utils/request.js';

export function loadBatteries() {
  return (dispatch) =>
    api.fetch(`/batteries/`)
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

export function deleteBattery(batteryId){
  return (dispatch) => api.delete(`/batteries/${batteryId}`)
    .then((res) => {
      dispatch(loadBatteries())
    })
}

export function deleteDataset(batteryId, id){
  return (dispatch) => api.delete(`/batteries/${batteryId}/datasets/${id}`)
    .then((res) => {
      window.location.replace(`/admin/batteries/${batteryId}`)
    })
}

export function saveDataset(batteryId, values){
  return (dispatch) => api.post(`/batteries/${batteryId}/datasets`, { dataset: values })
    .then((res) => {
      window.location.replace(`/admin/batteries/${batteryId}`)
    })
}

export function loadCategories(params){
  return (dispatch) => api.fetch(`/categories`, params)
    .then((res) => {
      dispatch({type: 'LOAD_CATEGORY', playload: res.data})
    })
}
