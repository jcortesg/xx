import { connect } from 'react-redux';
import List from './index/index.jsx'
import New from './new/index.jsx';
import ShowPost from './show/index.jsx';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';

export default class Index extends React.Component {
  render() {
    return(
      <div className="indicators">
        <Switch>
          <Route exact path="/admin/cms" component={ List } />
          <Route path="/admin/cms/new" component={ New } />
          <Route path="/admin/cms/:id" component={ ShowPost } />
          <Route path="/admin/cms/:id/edit" component={ ShowPost } />
        </Switch>
      </div>
    )
  }
}
