import React from "react";
import Form  from './container/form/index.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import ReactDOM from "react-dom";
import Show from "./container/show/index.jsx"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';

export default class Application extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/benchmark/calcule" component={Show}/>
            <Route exact path="/benchmark/" component={Form}/>
          </Switch>
        </Router>
      </Provider>
    )
  }
}
