import { connect } from 'react-redux';
import React from "react";
import { loadBattery, saveDataset } from '../actions.js';
import { Provider } from 'react-redux';
import renderField from '../../../components/renderField.jsx';
import DatasetForm from './datasets/form.jsx';
import Chart from '../../../charts/index.jsx'
import {
  Link
}from 'react-router-dom';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeForm: false, charts: []}
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(loadBattery(id));
  }

  saveDatasets(values){
    const id = this.props.match.params.id;
    if(values.type == "Table"){
      try{
        values.series[0].data = JSON.parse(values.series[0].data)
      }catch(err){
        console.log(err)
      }
    }
    this.props.dispatch(saveDataset(id, values));
  }

  activeForm(){
   this.setState({activeFrom: true});
  }

  closeForm(){
   this.setState({activeFrom: false});
  }

  render() {
    const {battery} = this.props
    let form = ""


    if(this.state.activeFrom){
      form =(
        <div>
          <button onClick={this.closeForm.bind(this)}>Cancelar</button>
          <DatasetForm sendInfo={this.saveDatasets.bind(this)}/>
        </div>
      )
    }else{
      form = <button onClick={this.activeForm.bind(this)}>Nueva Set de Datos</button>
    }

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
        {form}
        <hr/>
        {battery.datasets.map((item, index) =>
          <Chart key={index} dataset={item}/>
         )
        }
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
