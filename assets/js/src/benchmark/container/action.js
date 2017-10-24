import api from '../../utils/request.js';

export function calculeBenchmark(values){
  return(dispatch) =>
    dispatch({type: 'LOAD_VALUES', playload: values})
}

export function loadRatios() {
  return (dispatch) =>{
    dispatch({type: 'LOADING'})
    api.fetch(`/ratios/`)
      .then((response) => {
        dispatch({ type: 'LOAD_RATIOS', playload: response.data });
      });
  }
}

