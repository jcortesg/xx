import React from "react";
import { Provider } from 'react-redux';
import store from './state.js';
import {loadPosts} from './actions.js';
import Index from './index.jsx';
import Show from './show.jsx';
import Navbar from './navbar.jsx';
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
          <div className="row">
            <Navbar/>
            <div className="col-md-9">
              <Switch>
                <Route exact path="/studies/" component={ Index } />
                <Route exact path="/studies/:id" component={ Show } />
                <Route exact path="/bulletins/" component={ Index } />
                <Route exact path="/bulletins/:id" component={ Show } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}
