import React from "react";
import { Provider } from 'react-redux';
import Navbar from './components/navbar.jsx';
import Sidebar from './components/sidebar.jsx';
import Batteries from './batteries/index.jsx';
import Cms from './cms/index.jsx';

import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom'

export default class Index extends React.Component {
  render() {
    return(
      <div className="dashboard">
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <main  role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              <Switch>
                <Route exact path="/admin/" component={ Batteries } />
                <Route path="/admin/batteries/" component={ Batteries } />
                <Route path="/admin/cms/" component={Cms}/>
              </Switch>
            </main>
          </div>
        </div>
      </div>
    )
  }
}
