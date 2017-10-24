import React from "react";
import { Provider } from 'react-redux';
import Index from './index.jsx';
import Show from './show.jsx';
import store from './store.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom'

export default class Application extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Route path="/batteries/" component={Index}/>
        </Router>
      </Provider>
    )
  }
}

