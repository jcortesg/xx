import React from "react";
import { Provider } from 'react-redux';
import store from './store.js';
import Index from './index.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

export default class Admin extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Route path="/admin/" component={Index}/>
        </Router>
      </Provider>
    )
  }
}
