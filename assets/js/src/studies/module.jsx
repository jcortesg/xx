import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

export default class Application extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <div className="row">
            <div className="col-md-3">
              <h4>Indicadores</h4>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Industria
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Mercado
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Talento
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    Tendencias
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div className="indicators">
                <ul className="indicators__list">
                  <li className="indicators__list__item">
                    <Link to="#">
                      <h4>ESTUDIO INDUSTRIA HARDWARE</h4>
                    </Link>
                    <p>
                      El estudio de Salarios de la industria TI, analiza los principales aspectos de
                      la contratación de personal TI de la industria TI de Colombia. Este estudio
                      comprende tres partes: Caracterización de las empresas participantes en la muestra
                      representativa, análisis de cargos para la industria de acuerdo al tamaño de las empresas
                    </p>
                  </li>
                  <li className="indicators__list__item">
                    <Link to="#">
                      <h4>Estudio de Prospectiva de la industria TI</h4>
                    </Link>
                    <p>
                      Este estudio se construye como línea base para la generación de una cultura de prospectiva en el país, permitiendo así conocer las principales tendencias de la industria a nivel nacional e internacional, para responder de forma temprana a los retos de una industria intensiva en conocimiento y en cambios tecnológicos.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}
