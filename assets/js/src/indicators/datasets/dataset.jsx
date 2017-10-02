import React from "react";
import { Provider } from 'react-redux';

export default class Dataset extends React.Component {
  render() {
    const data = [{x: 'winter', y: 10}, {x: 'spring', y: 100}, {x: 'summer', y: 10}, {x: 'fall', y: 10}]

    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Certificaciones de calidad de las empresas TI</h2>

            <p className="text-center">
              Número de empresas TI que tienen al menos un modelo de la calidad
              implementado en un periodo de tiempo determinado
            </p>
            <hr/>
            <XYPlot width={400} height={300} xType="ordinal">
              <VerticalBarSeries data={data} />
              <VerticalBarSeries data={data} />
              <XAxis title="eje X"/>
              <YAxis title= "eje Y"/>
            </XYPlot>
          </div>
        </div>
      </div>
    )
  }
}
