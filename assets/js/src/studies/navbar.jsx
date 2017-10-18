import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';

export default class Application extends React.Component {

  render() {
    return(
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
    )
  }
}
