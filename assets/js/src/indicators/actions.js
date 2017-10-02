import api from '../../src/utils/request.js'

export function loadBatteries() {
  return (dispatch) => api.fetch(`/batteries/`)
    .then((response) => {
      console.log(response)
      dispatch({ type: 'LOAD_BATTERIES', playload: response.data });
    });
}
