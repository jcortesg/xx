import React from "react";
import { Provider } from 'react-redux';
import Index from './index.jsx';
import Show from './show.jsx';
import store from './store.js';
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
                  <Link to="/batteries" className="nav-link">
                    Principales indicadores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/cms" className="nav-link">
                    Asociatividad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/cms" className="nav-link">
                    Calidad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/cms" className="nav-link">
                    Gestión Empresarial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/cms" className="nav-link">
                    Infraestructura
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/cms" className="nav-link">
                    Ratios Financieros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/cms" className="nav-link">
                    Investigación, desarrollo e innovación
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/cms" className="nav-link">
                    Talento Humano
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <Route exact path="/batteries/:id" component={Show}/>
              <Route exact path="/batteries/" component={Index}/>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

