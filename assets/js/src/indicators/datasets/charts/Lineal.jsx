import React from "react";
import { Provider } from 'react-redux';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  AreaSeries
} from 'react-vis';

export default class Lineal extends React.Component {
  render() {
    return(
      <div>
        Lineal
        <XYPlot
          width={300}
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <AreaSeries
            className="area-elevated-series-1"
            color="#79c7e3"
            data={[
              {x: 1, y: 10, y0: 1},
              {x: 2, y: 25, y0: 5},
              {x: 3, y: 15, y0: 3}
            ]}/>
          <AreaSeries
            className="area-elevated-series-2"
            color="#12939a"
            data={[
              {x: 1, y: 5, y0: 6},
              {x: 2, y: 20, y0: 11},
              {x: 3, y: 10, y0: 9}
            ]}/>
          <LineMarkSeries
            className="area-elevated-line-series"
            data={[
              {x: 1, y: 5.5},
              {x: 2, y: 15},
              {x: 3, y: 9}
            ]}
          />
        </XYPlot>
      </div>
    )
  }
}
