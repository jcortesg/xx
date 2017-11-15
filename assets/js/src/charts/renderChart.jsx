import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

export default class RendeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    id: "" + props.data.id,
		height: this.props.height,
		type: "BarChart",
    options: this.props.options,
    rows: [],
    columns:[]
    }
    this.renderData = this.renderData.bind(this)
    this.dataRadio = this.dataRadio.bind(this)
  }

  componentWillMount(){
    this.renderData(this.props.data.series)
  }

  renderData(series){
    series.map((item, index) =>{
      if(item.type == 'Radio'){
        this.dataRadio(item.data)
      }else{
        this.dataLineal(item)
      }
    })
  } 

  dataLineal(item){
    let serie = []
    item.data.map((item, index) =>{
     serie = serie.concat([[item.x, item.y]])
    })
		
		let options = Object.assign(this.state.options, {
					"title": this.props.data.title,
					"seriesType": (serie.type == "BarSeries") ? "bars" : "line"
    })

    this.setState(
      {
        type: 'ComboChart',
        options: options,
        rows: serie,
        columns: [
          {
           type: 'string',
           label: 'X'
          },
          {
           type: 'number',
           label: item.name
          }
        ]
      }
    )
  }

  dataRadio(data){
    let serie = []
    data.map((item, index) =>{
      serie = serie.concat([[item.label, item.angle]])
    })
		let options = Object.assign(this.state.options, {
						"title": this.props.data.title,
						"pieHole":0.4,
						"is3D":true
		})
   this.setState(
      {
        type: 'PieChart',
        options: options,
        rows: serie,
        columns: [
          {
            type: 'string',
            label: 'X'
          },
         {
           type: 'number',
           label: 'Y'
         }
       ],
      }
    )
  }

  render(){
    return(
      <Chart
        chartType={this.state.type}
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id={this.state.id }
        width={'100%'}
        height={'300px'}
        legend_toggle
      />
    )
  }
}

