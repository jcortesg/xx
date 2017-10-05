import { connect } from 'react-redux';
import React from "react";
import { loadBattery } from '../actions.js';
import { Provider } from 'react-redux';
import renderField from '../../../components/renderField.jsx';
import DatasetForm from './datasets/form.jsx';
import {
  Link
}from 'react-router-dom';

class Index extends React.Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(loadBattery(id));
  }

  saveDatasets(values){
    console.log(values)
  }

  render() {
    const {battery} = this.props

    return(
      <div className="indicators">
        <div className="controls">
          <h1>INDICADORES</h1>
        </div>
        <header className="text-center">
          <h1>{battery.title}</h1>
          <p>{battery.description}</p>
        </header>
        <strong>Fuente:</strong> <em>{battery.sources}</em>
        <hr/>
        <DatasetForm sendInfo={this.saveDatasets.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    battery: state.indicators.battery,
    loading: state.indicators.loading
  }
}

export default connect(mapStateToProps)(Index);
