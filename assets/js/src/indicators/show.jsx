import React from "react";
import { Provider } from 'react-redux';

import {
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
  LineMarkSeries,
  VerticalBarSeries,
  HorizontalBarSeries
} from 'react-vis';

export default class Show extends React.Component {
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            Battery
          </div>
        </div>
      </div>
    )
  }
}
