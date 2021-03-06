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

let hits

const Radial = props => {
  return(
      <div className="row">
      <div className="col-md-8">
      <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      data={props.data.series[0].data}
      showLabels
      width={400}
      height={400} />

</div>
<div className="col-md-4">
  {props.data.series.map((serie, index) =>
    serie.data.map((item, index) =>
      <ul>
        <li>
          <div></div><strong>{item.label}:</strong>{item.angle}
        </li>
      </ul>
    )
   )}
</div>
    </div>
  )
}

const Lineal = props => {
  let s= ""
  s = props.data.series.map((serie, index) =>{
    if(serie.data !== undefined){
      return(renderSerie(index , serie.data, serie.type, serie.color))
    }
  })
  let series_name = props.data.series.map((serie, index) =>
    <p key={index + "name"} className="charts__indicator--body">
      <span className="charts__indicator--icon" style={{ background: serie.color}}></span>
      {serie.name}
    </p>
  )

  return(
    <div>
    <h4 className="text-center">{props.data.title}</h4>
    <div className="row">
      <div className= "col-md-8">
        <XYPlot
          xType={props.data.x_type}
          width={500}
          height={300}
          xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title= ""/>
          <YAxis title= ""/>
          {s}
        </XYPlot>
        {hits ?
         <Hint value={hits}/> :
         null}
        {series_name}
        <p className="charts__source">fuente: {props.data.source}</p>
      </div>
      <div className="col-md-4">
        {props.data.series.map((serie, index) =>
           serie.data.map((item, index) =>
             <ul key={index + "-"}>
               <li>
               <strong>{item.x}:</strong>{item.y}
               </li>
             </ul>
           )
         )}
      </div>
    </div>
    </div>
  )
}
const rememberValue = (val) => {
  console.log(val.type)
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
      return(<LineSeries onSeriesMouseOver={rememberValue(values)} key={key} data={serie} color={color}/>)
    default:
      return(<LineSeries key={key} data={serie} color={color}/>)
  }
}

export const Table = (props) =>{
  let series = props.data.series
  let header = []
  let body = []
  let key = 0
  if(series !== undefined){
    series.map((serie, index) =>{
      if(serie.data !== undefined){
        try {
          body =
            serie.data.map((obj, index) => {
              if(index == 0){
                header =
                  (Object.keys(obj)).map((hd, index) =>{
                    return(<th>{hd}</th>)
                  })
              }
              let keys = Object.keys(obj)
              return(
                <tr>
                  {(Object.keys(obj)).map((hd, index) =>{
                     return(<td>{obj[hd]}</td>)
                   })}
                </tr>
              )
            })
        }catch(err){
          console.log(err)
        }
      }
    })
  }
  return(
    <div>
      <h4 className="text-center">{props.data.title}</h4>
      <table key="x" className="table table-striped">
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    </div>
  )
}

export default class Chart extends React.Component {
  render(){
    const {dataset} = this.props
    switch(dataset.type){
      case "Radial":
        return (<Radial data={dataset} />)
      case "Table":
        return (<Table data={dataset} />)
      default:
        return (<Lineal data={dataset} />)
    }
  }
}
