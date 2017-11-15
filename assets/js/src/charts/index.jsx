import React from 'react';
import { render } from 'react-dom';
import RenderChart from './renderChart.jsx';
import Table from './table.jsx';

export default class Charts extends React.Component {
  render(){
    switch(this.props.dataset.type){
      case "Table":
        return(<Table data={this.props.dataset} />)
      default:
        return (<RenderChart data={this.props.dataset} height={this.props.height}/>)
    }
  }
}
