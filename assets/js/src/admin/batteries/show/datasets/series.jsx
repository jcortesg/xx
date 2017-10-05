import React from "react";
import {
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LineSeries,
  VerticalBarSeriesCanvas
} from "react-vis"

export const renderSerie = (key, data, type) =>{
  let serie = [{x: 3, y: 0}]
  if(data[0].x && data[0].y){
    serie = data
  }

  switch(type){
    case "BarSeries":
      return (<VerticalBarSeries key={key} data={serie}/>)
    case "LineSeries":
      return(<LineSeries key={key} data={serie}/>)
    default:
      return(<LineSeries key={key} data={serie}/>)
  }
}
