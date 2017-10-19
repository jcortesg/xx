import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';
import {loadPosts} from './actions.js';
import Index from './index.jsx';
import Show from './show.jsx';
import HomeIndex from './home.jsx';
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
            <Route exact path="/" component={ HomeIndex } />
            <Route exact path="/study/" component={ Index } />
            <Route exact path="/study/:id" component={ Show } />
            <Route exact path="/bulletin/" component={ Index } />
            <Route exact path="/bulletin/:id" component={ Show } />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
