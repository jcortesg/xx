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
              ..Filtros
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

