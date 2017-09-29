import React from "react";
import { Provider } from 'react-redux';

import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  LineMarkSeries

} from 'react-vis';

export default class Application extends React.Component {
  render() {
    const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
      x: prev.slice(-1)[0].x + 1,
      y: prev.slice(-1)[0].y * (0.9 + Math.random() * 0.2) 
    }], [{x: 0, y: 10}]);

    return(
      <div>
        <h2>Indicadores</h2>
        <XYPlot width={400} height={300}><XAxis/><YAxis/>
          <HorizontalGridLines />
          <VerticalGridLines />
          <LineMarkSeries data={data} />
        </XYPlot>
      </div>
    )
  }
}

