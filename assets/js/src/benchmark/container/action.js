export function calculeBenchmark(values){
  return(dispatch) =>
    dispatch({type: 'LOAD_VALUES', playload: values})
}
