import api from '../../utils/request.js';

export function calculeBenchmark(values){
  return(dispatch) =>
    dispatch({type: 'LOAD_VALUES', playload: values})
}

export function loadRatios() {
  return (dispatch) =>{
    dispatch({type: 'LOADING_R'})
    api.fetch(`/ratios/`)
      .then((response) => {
        dispatch({ type: 'LOADED_RATIOS', playload: response.data });
      });
  }
}

