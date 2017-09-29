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
        <div class="row">
          <div class="col-md-3">
            <h4>Indicadores</h4>
            ..Filtros
          </div>
          <div class="col-md-9">
            <h2 class="text-center">Certificaciones de calidad de las empresas TI</h2>

            <p class="text-center">
              Número de empresas TI que tienen al menos un modelo de la calidad
              implementado en un periodo de tiempo determinado
            </p>
            <hr/>
            <XYPlot width={400} height={300}><XAxis/><YAxis/>
              <HorizontalGridLines />
              <VerticalGridLines />
              <LineMarkSeries data={data} />
            </XYPlot>
          </div>
        </div>
      </div>
    )
  }
}

