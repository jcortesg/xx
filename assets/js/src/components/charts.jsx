import React from "react";
import {
  RadialChart,
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  AreaSeries,
  VerticalBarSeries,
  LineSeries,
  VerticalBarSeriesCanvas
} from 'react-vis';

const Radial = props => {
  console.log(props.data.series[0])
  return(
      <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      data={props.data.series[0].data}
      showLabels
      width={400}
      height={200} />
  )
}

const Lineal = props => {
  let s= ""
  s = props.data.series.map((serie, index) =>{
    if(serie.data !== undefined){
      return(renderSerie(index , serie.data, serie.type, serie.color))
    }
  })

  return(
        <XYPlot
        xType={props.data.x_type}
        width={400}
        height={300}
        xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {s}
        </XYPlot>
  )
}

export const renderSerie = (key, data, type, color) =>{
  let serie = [{x: 3, y: 0}]
  if(data[0].x && data[0].y){
    serie = data
  }

  switch(type){
    case "BarSeries":
      return (<VerticalBarSeries key={key} data={serie} color={color}/>)
    case "LineSeries":
      return(<LineSeries key={key} data={serie} color={color}/>)
    default:
      return(<LineSeries key={key} data={serie} color={color}/>)
  }
}

export default class Chart extends React.Component {
  render(){
    const {dataset} = this.props
    switch(dataset.type){
      case "Radial":
        return (<Radial data={dataset} />)
      default:
        return (<Lineal data={dataset} />)
    }
  }
}
