import { connect } from 'react-redux';
import React from "react";
import { Provider } from 'react-redux';
import {loadBattery} from './actions.js';
import {loadBatteries, loadCategories} from './actions.js'
import Dataset from './datasets/dataset.jsx';
import Chart from '../charts/index.jsx';
import Sidebar from './sidebar.jsx'

class Show extends React.Component {
  componentWillMount() {
    this.props.dispatch({type: 'LOADING' });
    this.props.dispatch(loadCategories());
    this.props.dispatch(
      loadBattery(this.props.match.params.id)
    );
  }

  render() {
    const { battery, loading, categories } = this.props
    let datasets = "loading..."

    if(!loading){
      datasets = battery.datasets.map((item, index) =>(
        <Chart key={index} dataset={item}/>
      ))
    }

    return(
      <div className="col-md-12">
        <h4 className="text-center">
          {battery.title}
        </h4>
        <p>{battery.description}</p>
        <br/>
        <div className="datasets">
          {datasets}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.indicators.loading,
    battery: state.indicators.battery,
    categories: state.indicators.categories
  }
}

export default connect(mapStateToProps)(Show);
