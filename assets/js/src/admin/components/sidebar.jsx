import React from "react";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

export default class Sidebar extends React.Component {
  render() {
    return(
      <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <Link to="/admin/" className="nav-link">
              Indicadores
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/cms" className="nav-link">
              Estudios
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Salir
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
