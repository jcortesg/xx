import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import {loadBattery} from './actions.js';
import Dataset from './datasets/dataset.jsx';

class Show extends React.Component {
  componentWillMount() {
    this.props.dispatch({type: 'LOADING' });
    this.props.dispatch(
      loadBattery(this.props.match.params.id)
    );
  }

  render() {
    const { battery, loading } = this.props
    let datasets = "loading..."

    if(!loading){
      datasets = battery.datasets.map((item, index) =>(
        <Dataset key={index} data={item}/>
      ))
    }

    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-center">
              {battery.title}
            </h4>
            <p>{battery.description}</p>
            <strong>Fuente: </strong>{battery.source}
            <br/>
            <strong>Fecha: </strong>
            <div className="datasets">
              {datasets}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.indicators.loading,
    battery: state.indicators.battery
  }
}

export default connect(mapStateToProps)(Show);
